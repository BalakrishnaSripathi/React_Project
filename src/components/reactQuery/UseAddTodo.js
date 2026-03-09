import { useMutation, useQueryClient } from '@tanstack/react-query'
import APIClient from './services/apiClient'
import { CACHE_KEY_TODOS } from './constants'

const apiClient = new APIClient('/todos')

const UseAddTodo = () => {

const queryClient = useQueryClient()

return useMutation({

mutationFn: apiClient.post,

onMutate:(newTodo)=>{

const previousTodos = queryClient.getQueryData(CACHE_KEY_TODOS)

queryClient.setQueryData(CACHE_KEY_TODOS,(todos=[])=>[newTodo,...todos])

return { previousTodos }

},

onSuccess:(savedTodo,newTodo)=>{

queryClient.setQueryData(CACHE_KEY_TODOS,todos =>
todos?.map(todo => todo===newTodo ? savedTodo : todo)
)

},

onError:(error,newTodo,context)=>{

if(!context) return

queryClient.setQueryData(CACHE_KEY_TODOS,context.previousTodos)

}

})

}

export default UseAddTodo