import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const UseTodos = () => {
  const fechTodos=()=>
    axios.get("https://jsonplaceholder.typicode.com/todos")
           .then(res => res.data)
    return useQuery({
        queryKey:['todos'],
        queryFn:fechTodos

    });
    
}

export default UseTodos
