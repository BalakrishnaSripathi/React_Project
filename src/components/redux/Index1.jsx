import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addbook ,emptyBooks} from './slices/SocialSlice';
import { addBook,pemptyBooks,incrementEnrolledstudents } from './slices/PhysicsSlice';

const Index1 = () => {
  let books=useSelector(state=>state.social.books);
  let pBooks=useSelector(state=>state.Physics.books);
  let StudentCount=useSelector(state=>state.Physics.enrolledStudentsCount);
  function printPhysicsStatus(){
    console.log("Physics status")
    console.log("Total Books:",pBooks.length)
    console.log("Enrolled Students:",StudentCount)
  }
  const dispatch=useDispatch();
    function addBookToSlice(){
      console.log("Add book function")
      dispatch(addbook("Social Book 3"))
    }
    function printCurrentbooks(){
      console.log("current books:",books)
    }
    function emptyAllBooks(){
      dispatch(emptyBooks())
    }
  return (
    <div>
      <button className='btn' onClick={addBookToSlice}>add book</button>
      <button className='btn' onClick={printCurrentbooks}>get books</button>
      <button className='btn' onClick={emptyAllBooks}>Empty All Books</button><br />
      <button className='btn' onClick={printPhysicsStatus}>Physics Book status</button>
    </div>
  )
}

export default Index1
