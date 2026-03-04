import apiClient from "./api-client";

class UserService{
    getAllUsers(){
        const controller=new AbortController();
        const request=apiClient.get('/users',
            {signal:controller.signal});  
        return {request,cancel:()=>controller.abort()}     
    }
    deleteUser(id){
        return apiClient.delete('/users/'+id)
    }
    createUser(user){
        return apiClient.post('/users',user)

    }
    updateUser(user){
       return apiClient.patch('/users/'+user.id,user)
    }


}
export default new UserService();