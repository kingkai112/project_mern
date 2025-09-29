import Feed from 'components/Feed'

const Home = () => {
    return(
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover and Share
                <br className="md-max:hidden"/>
                <span className="orange_gradient text-center"> 
                    AI prompts 
                </span>
            </h1>
            <p className="desc text-center">
                Prompts Labs is a creative hub discovering and sharing AI prompts,
                unleash better ideas with community inspiration and smart tools.
            </p>
            <Feed />
        </section>
    )
}
export default Home
