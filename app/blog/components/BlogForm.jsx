import Link from "next/link"

const BlogForm = ({type, post, setPost, submitting, handleSubmit}) =>{
    return (
        <section className="">
            <h1 className="">
                <span className="">{type} Blog Post</span>
            </h1>
            <p className="">{type}
            </p>

            <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Your Blog Title 
                    </span>

                    <input
                        value={post.title}
                        onChange={(e) => setPost({ ...post, title: e.target.value })}
                        placeholder='Write your blog title here'
                        required
                        className='form_input'
                    />

                    <input
                        value={post.subTitle}
                        onChange={(e) => setPost({ ...post, subTitle: e.target.value })}
                        placeholder='Write your blog subtitle here'
                        className='form_input'
                    />
                </label>

                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Your Blog Content here
                    </span>

                    <textarea
                        value={post.content1}
                        onChange={(e) => setPost({ ...post, content1: e.target.value })}
                        placeholder='Write the first part of your content here'
                        required
                        className='form_textarea '
                    />

                    <textarea
                        value={post.content2}
                        onChange={(e) => setPost({ ...post, content2: e.target.value })}
                        placeholder='Write the middle part of your content here'
                        className='form_textarea '
                    />

                    <textarea
                        value={post.content3}
                        onChange={(e) => setPost({ ...post, content3: e.target.value })}
                        placeholder='Write the last part of your content here'
                        className='form_textarea '
                    />
                </label>

                 <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Upload your media files here
                    </span>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

                    <input
                        value={post.image1Url}
                        type='file'
                        onChange={(e) => setPost({ ...post, image1Url: e.target.files[0] })}
                        placeholder='Write the first part of your content here'
                        className='form_input '
                    />

                    <input
                        value={post.image2Url}
                        type='file'
                        onChange={(e) => setPost({ ...post, image2Url: e.target.files[0] })}
                        placeholder='Write the middle part of your content here'
                        className='form_input '
                    />

                    <input
                        value={post.image3Url}
                        type='file'
                        onChange={(e) => setPost({ ...post, image3Url: e.target.files[0] })}
                        placeholder='Write the last part of your content here'
                        className='form_input '
                    />
                </label>

                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Field of Blog Post{" "}
                        <span className='font-normal'>
                        (#product, #webdevelopment, #idea, etc.)
                        </span>
                    </span>
                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        type='text'
                        placeholder='#Tag'
                        required
                        className='form_input'
                    />
                </label>

                <div className='flex-end mx-3 mb-5 gap-4'>
                    <Link href='/' className='text-gray-500 text-sm'>
                        Cancel
                    </Link>

                    <button
                        type='submit'
                        disabled={submitting}
                        className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-green'
                    >
                    {submitting ? `${type}ing...` : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default BlogForm