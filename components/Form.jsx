import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
    return (
        <section className="w-full max-w-full flex-start flex-col"> 
            <h1 className="head_text text-left">
                <span className="blue_gradient">
                    {type} Post
                </span> 
            </h1>
            <p className="desc text-left max-w-full">
                {type} and share prompts with the world, 
                let your creativity run wild in the world of AI-powered contents. 
            </p>

            <form 
            onSubmit={handleSubmit}
            className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
            >
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Your Prompt here
                    </span>

                    <textarea 
                    value={post.prompt}
                    onChange={(e) => setPost({ ...post, 
                        prompt: e.target.value
                    })}
                    placeholder="write your prompt here..." required
                    className="form_textarea"
                    />
                </label>
                <label>
                    <span className="font-satoshi font-bold text-base text-gray-700">
                        Tag {' '}
                        <span className="font-normal">
                            (#product #webdevelopment #ai #idea)
                        </span>
                    </span>
                    <input 
                    value={post.tag}
                    onChange={(e) => setPost({...post,
                        tag: e.target.value
                    })}
                    placeholder="#tag" required
                    className="form_input"
                    />
                    <div className="flex-end mx-3 mb-5 gap-4">
                        <Link href="/" className="text-gray-500 text-sm">
                        cancel
                        </Link>
                        <button
                        type="submit"
                        disabled={submitting} // if we are submitting, it has to be disabled 
                        className="px-5 py-1.5text-sm bg-primary-orange rounded-full text-white"
                        > 
                        {/* the button itself can check whether we are submitting or not */}
                            {submitting ? `${type}...` : type} {/* if it is edit type, shows edit, if its create than create*/}
                        </button>
                    </div>
                </label>
            </form>

        </section>
    )
}

export default Form;

