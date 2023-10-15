import { useEffect, useState } from "react";
import postservice from "../../../services/PostServices";
import { useParams } from "react-router-dom";
import topicservices from "../../../services/TopicServices";
import NewsItem from "../../../compoment/frontend/NewsItem";
import ListTopic from "../../../layout/LayoutSite/ListTopic";

function PostTopic() {
    const { slug } = useParams();
    const [limit, setLimit] = useState(1);
    const [title, setTitle] = useState("");

    const [posts, setPosts] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const topicslug = await topicservices.getBySlug(slug);
                const topicid = topicslug.data.topic.id;
                setTitle(topicslug.data.topic.name);
                const response2 = await postservice.getPostByTopicId(topicid, limit);
                setPosts(response2.data.posts);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit, slug]);

    if (posts.length !== 0) {
        return (
            <section className="maincontent ">
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-3">
                            <ListTopic />
                        </div>
                        <div className="col-md-9">
                            <h3 className="text-center text-danger">{title}</h3>
                            <div className="row">
                                {posts.map(function (post, index) {
                                    return <NewsItem post={post} key={index} />
                                })

                                }
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <button className="btn btn-success" onClick={() => setLimit(limit + 4)} >Xem thêm</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section >
        );
    }
}
export default PostTopic;