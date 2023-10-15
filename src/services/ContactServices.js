import httpAxios from "../httpAxios";

function getAll(){
    return httpAxios.get('Contact/index');
}

function getById(id){
    return httpAxios.get('Contact/show/'+id);
}

function create(Contact){
    return httpAxios.post('Contact/store',Contact);
}
function addcontact(Contact){
    return httpAxios.post('Contact/addcontact',Contact);
}
function update(Contact,id){
    return httpAxios.post('Contact/update/'+id,Contact);
}

function remove(id){
    return httpAxios.delete('Contact/destroy/'+id)
}

const Contactservices={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    addcontact:addcontact
}
export default Contactservices;