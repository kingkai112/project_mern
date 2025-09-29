import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'email already exists'],
        required: [true, 'email is required: cannot leave empty']
    },
    username: {
        type: String,
        required: [true, "cannot leave this field empty"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
             "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
        required: [true, "cannot leave this field empty"],
        
    }
})

const User = models.User || model("User", UserSchema);
// first look into the models.user, if its not there, than only create a new model
export default User;

// const User = model("User", UserSchema)
// we would use this for always running backend server 
// export default User;

// ------------------- EXTRA NOTE ----------------------- //

// the "models" object is provided by the mongoose library and stores all the 
// registered models. 

// if a model named "User" already exists in the "models" object, it assigns
// that existing model to the "User" variable

// this prevents redefining the model and ensures that the existing model is reused 

// if a model named "User" does not exists in the "models" object, the "model"
// function from mongoose is called to create a new model. 

// this newly created model is then assigned to the "User" variable. 


