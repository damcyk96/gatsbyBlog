import React from 'react'
import { Link } from 'gatsby'


const Sidebar = ({ data }) => {
 

    console.log("SideBar : ", data)
    return (
        <>    

      
            {data.allContentfulBlogSite ?
                (
                    <div className="w3-card w3-margin">
                        <div className="w3-container w3-padding">
                            <h4>Recent Posts</h4>
                        </div>
                        <ul className="w3-ul w3-hoverable w3-white">
                            {data.allContentfulBlogSite.edges.map((post, index) =>
                                <li key={index} className="w3-padding-16">
                                    <img src={post.node.image.file.url} alt={post.node.image.title} className="w3-left w3-margin-right" />
                                    <span className="w3-large"><Link to={post.node.slug}>{post.node.title}</Link></span><br />

                                </li>
                            )}

                        </ul>
                    </div>

                ) : null
            }

        </>
    )
}



export default Sidebar