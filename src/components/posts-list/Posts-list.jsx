import Post from '../post';
import styles from './Posts-list.module.css';
import NewPost from "../new-post/new-post";
import {useEffect, useState} from "react";
import Modal from "../modal/Modal";
import MainHeader from "../main-header/MainHeader.jsx";

function PostsList({isPosting, onStopPosting}){

    const [posts,setPosts] = useState([]);
    const [fetching, setFetching] = useState(false);

    useEffect(()=>{
        async function fetchPosts(){
            setFetching(true)
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setFetching(false);
        }
        fetchPosts();
    },[])

    function addPost(postData){
        fetch('http://localhost:8080/posts',{
            method: "POST",
            body: JSON.stringify(postData),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts)=>[postData, ...existingPosts]);
    }

    return<>
        {isPosting &&
            <><Modal onClose={onStopPosting}>
                <NewPost onIgnore={onStopPosting} onAddPost={addPost}/>
            </Modal></>}

        {posts.length > 0 && (
            <><ul className={styles.postsList}>
                {posts.map((post)=> <Post key={Math.random()} author={post.author} body={post.body}/>)}

            </ul></>
        )}
        {fetching && <div style={{textAlign:'center', color:"white"}}><p>Loading...</p></div>}
        {!fetching &&  posts.length === 0 && <><div style={{textAlign:"center", color:"white"}}>
            <h2>There are no posts yet</h2>
            <p>Start adding some!</p>
        </div></>

}</>}

export default PostsList;