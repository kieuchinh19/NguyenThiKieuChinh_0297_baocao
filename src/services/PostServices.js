import httpAxios from '../httpAxios'

function getAll(){
    return httpAxios.get('post/index');
}

function getById(id){
    return httpAxios.get('post/show/'+id);

}
function create(post){
    return httpAxios.post('post/store',post);
}
function update(post,id){
    return httpAxios.post('post/update/'+id,post);

}
function remove(id){
    return httpAxios.delete('post/destroy/'+id);

}
function getPostNew(limit,type){
    return httpAxios.get(`post_list/${limit}/${type}`);

}

function getPostAll(limit,page){
    return httpAxios.get(`post_all/${limit}/${page}`);

}
function getPostBySlug(slug){
    return httpAxios.get(`post_detail/${slug}`);
}

function getPostByTopicId(topic_id,limit){
    return httpAxios.get(`post_topic/${topic_id}/${limit}`);

}


const postservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    getPostNew:getPostNew,
    getPostAll:getPostAll,
    getPostBySlug:getPostBySlug,
    getPostByTopicId:getPostByTopicId
}
export default postservice;