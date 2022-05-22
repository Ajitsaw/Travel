import BlogPost from "./BlogPost"

// data

import data from "../data/blog"

const blogs = data.map(item => {
    return (
        <BlogPost
            key={item.id}
            {...item}
        />
    )
})

const Blog = () => {
    return (
        <div className="app--blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="content">
                            <h5>Explore the World!</h5>
                            <h2 className="">
                                Lifestyle
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block">
                {blogs}
            </div>
        </div>
    )
}
export default Blog;