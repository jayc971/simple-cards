import { useState } from 'react'
import './App.css';
import PostsList from './components/posts-list/Posts-list.jsx';
import NewPost from "./components/new-post/new-post.jsx";
import MainHeader from "./components/main-header/MainHeader.jsx";
import Modal from "./components/modal/Modal.jsx";

function App() {
  const [modalBool, setModalBool] = useState(false);
  function toggleModal(){
    setModalBool(false);
  }
  function showModal(){
    setModalBool(true);
  }
  return <>
    <MainHeader onCreatePost={showModal} onStopPosting={toggleModal}/>
    <main>
      <PostsList isPosting={modalBool} onStopPosting={toggleModal}/>
    </main>
  </>;
}
export default App;