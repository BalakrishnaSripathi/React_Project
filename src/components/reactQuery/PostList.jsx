import { useState } from 'react'
import UsePosts from './UsePosts';

const PostList = () => {
    const pageSize=10;
    const[page,setPage]=useState(1);
    const[userId,setUserId]=useState();
   const{data,isLoading,isError}= UsePosts({page,pageSize,userId})
 
    if (isError) return <p className='text-red-500'>page not found</p>
    if (isLoading) return<p>Loading</p>
  return (
    <div>
        <select onChange={(event)=>{setUserId(event.target.value), setPage(1) }} value={userId} className="form-select mb-3">
            <option value=''></option>
            <option value="1">User 1</option>
            <option value="2">User 2</option>
            <option value="3">User 3</option>
        </select>

      {
        data?.map((post)=>
            <div key={post.id}> 
            <h3>{post.id}.{post.title}</h3>
            <p>{post.body}</p>
            <hr />
            </div>
        )
      }
      <button disabled={page===1} className='btn btn-primary my-3 m-1 active:scale-95' onClick={()=>setPage(page-1)}>Previous</button>
      <button  className='btn btn-primary my-3 m-1 active:scale-95' onClick={()=>setPage(page+1)}>Next</button>

    </div>
  )
}

export default PostList
