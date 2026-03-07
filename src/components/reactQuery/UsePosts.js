import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const UsePosts = (query) => {
    const fetchPosts=()=>axios.get("https://jsonplaceholder.typicode.com/posts",{
      params:{
        _start:(query.page-1)*query.pageSize,
        _limit:query.pageSize,
        userId: query.userId
      }
})
   .then((res)=>res.data)
    return useQuery({
    queryKey: ["posts", query.page,query.userId],
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000,
    cacheTime: 300_000,
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: true
  

        })
}

export default UsePosts
