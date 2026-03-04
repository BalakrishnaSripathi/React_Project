import apiClient from "./api-client";


class HttpService{
    endpoint;
    constructor(endpoint){
        this.endpoint=endpoint;
    }

    getAll(){
        const controller=new AbortController();
        const request=apiClient.get(this.endpoint,
            {signal:controller.signal});  
        return {request,cancel:()=>controller.abort()}     
    }
    deleteUser(id){
        return apiClient.delete(this.endpoint+"/"+id)
    }
    createUser(entity){
        return apiClient.post(this.endpoint,entity)

    }
    updateUser(entity){
       return apiClient.patch(this.endpoint+"/"+entity.id,entity)
    }


}
export default new UserService();