// every next js route is a serverless route in next js which means that it is a lambda function
// lambda function opens up only when it gets called 
// this route handles all authentication process 


import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    callbacks: {
        async session({ session }) {
        const sessionUser = await User.findOne({
            email: session.user.email // getting that new session
        })
        session.user.id = sessionUser._id.toString()
        return session;
        // making sure that we know which user is currently logged in or online
    },

    // to get session, we must sign in first 

        async signIn({ profile }) {
            try {
                await connectToDB();

                // check if the user already exists 
                const userExists = await User.findOne({
                    email: profile.email
                })
                // else create the user and add it to the database 
                if(!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    }) // now we have a sign in function that automatically creates users for us
                }


                return true;
            }
            catch (error) {
                console.log(error)
                return false;
            }
        }
        }
    
})
export {handler as GET, handler as POST};

