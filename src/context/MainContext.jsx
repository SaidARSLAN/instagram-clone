import axios from "axios";
import { createContext, useEffect, useState } from "react";


const GlobalContext = createContext();


export function Provider ({children}) {
    const [img, setImg] = useState()
    const [comment, setComment] = useState("")
    const [tags, setTags] = useState("")
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
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
    const sendEditedData = (id,explain) => {
        
        const afterEditedPosts = posts.map((post) => {
            if (post.id === id) {
                axios.put(`http://localhost:3000/posts/${id}`,{
            img : post.img,
            comment : explain,
            tags : post.tags,
            id : post.id
        })
            return ({
                img : post.img,
                comment : explain,
                tags : post.tags,
                id : post.id
            })
        }
        else {
            axios.put(`http://localhost:3000/posts/${id}`,{
            img : post.img,
            comment : post.comment,
            tags : post.tags,
            id : post.id
        })
            return (
                {
                    img : post.img,
                    comment : post.comment,
                    tags : post.tags,
                    id : post.id
                }
            )
            
        }
        })
        setPosts(afterEditedPosts);
    }
    return (
        <GlobalContext.Provider value={{sendPostData,posts,sendDeletedData,sendEditedData}}>
            {children}
        </GlobalContext.Provider>
    )
}




export default GlobalContext