import httpAxios from '../httpAxios'

function getAll(){
    return httpAxios.get('product/index');
}

function getById(id){
    return httpAxios.get('product/show/'+id);

}
function create(product){
    return httpAxios.post('product/store',product);
}
function update(product,id){
    return httpAxios.post('product/update/'+id,product);

}
function remove(id){
    return httpAxios.delete('product/destroy/'+id);

}
function getProductHome(limit,category_id){
    return httpAxios.get(`product_home/${limit}/${category_id}`);

}
function getProductBySlug(slug){
    return httpAxios.get(`product_detail/${slug}`);

}
function getProductAll(limit,page){
    return httpAxios.get(`product_home/${limit}`,page);

}
function getProductByCategoryId(category_id,limit){
    return httpAxios.get(`product_category/${category_id}/${limit}`);

}
function getProductByBrandId(brand_id,limit){
    return httpAxios.get(`product_brand/${brand_id}/${limit}`);

}
const productservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    getProductHome:getProductHome,
    getProductAll:getProductAll,
    getProductByCategoryId:getProductByCategoryId,
    getProductBySlug:getProductBySlug,
    getProductByBrandId:getProductByBrandId
}
export default productservice;