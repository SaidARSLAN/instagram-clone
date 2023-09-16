import { faL } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { createContext, useEffect, useState } from "react";


const GlobalContext = createContext();


export function Provider ({children}) {
    const [img, setImg] = useState()
    const [comment, setComment] = useState("")
    const [tags, setTags] = useState("")
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [editControl,setEditControl] = useState(false);
    const [edittedData,setEdittedData] = useState("");
    const [lastEdittedData,setLastEdittedData] = useState("");
    const [tempID,setTempID] = useState("");
    const savePosts = async () => {
        if (img !== ""  && comment !== "" && tags !== "") {
            await axios.post("http://localhost:3000/posts", {
                img,
                comment,
                tags
            })
        }
        
    }

    const getPosts = async () => {
        setLoading(true);
        const request = await axios.get("http://localhost:3000/posts");
        setPosts(request.data);
        setLoading(false)
    }
    useEffect(() => {
        savePosts();
    },[img,comment,tags])
    
    useEffect(() => {
        getPosts();
    },[])

    const sendPostData = (imgPath,comments,hashtags) => {
        setImg(imgPath);
        setComment(comments);
        setTags(hashtags);
    }
    const sendDeletedData = (id) => {
        axios.delete(`http://localhost:3000/posts/${id}`);
        const afterDeletedPosts = posts.filter((post) => {
                return (post.id !==id);
        })
        setPosts(afterDeletedPosts);
    }
    const sendEditedData = (id,comment) => {
        setEditControl(true);
        setTempID(id);
        setEdittedData(comment);
    }
    const sendLastEditData = (LastData) => {
        setLastEdittedData(LastData);
        const afterEditedData = posts.map((post) => {
            if (post.id === tempID) {
                axios.put(`http://localhost:3000/posts/${tempID}`,{
                img : post.img,
                tags : post.tags,
                comment : LastData,
                id : post.id
            })
                return {
                id : post.id,
                img : post.img,
                comment : LastData }
            }
        })
        setPosts(afterEditedData);
        setEditControl(false);
    }

    return (
        <GlobalContext.Provider value={{sendPostData,posts,sendDeletedData,sendEditedData,editControl,edittedData,setEdittedData,sendLastEditData}}>
            {children}
        </GlobalContext.Provider>
    )
}




export default GlobalContext