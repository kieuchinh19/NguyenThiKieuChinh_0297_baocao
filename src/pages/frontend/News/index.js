import { useEffect, useState } from "react";
import postservice from "../../../services/PostServices";
import NewsItem from "../../../compoment/frontend/NewsItem";

function News() {
    const [limit, setLimit] = useState(3);

    const [posts, setPosts] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getPostAll(limit, 1).then(function (res) {
                setPosts(res.data.posts);
            })
        })();
    }, [limit]);

    return (
        <section>
            <div className="container mb-3">
                <div className="title mt-4 mb-4 text-center">
                    <h2 className="text-danger"><i>TẤT CẢ BÀI VIẾT</i></h2>
                </div>
                <div className="row">
                    {posts.map(function (po, index) {
                        return <NewsItem post={po} key={index} />;
                    })}
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <button className="btn btn-success" onClick={() => setLimit(limit + 3)}>Xem thêm</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;