import Link from "next/link"
function PostList({posts}){
return(
    <>
    <h1>List of posts</h1>
    {posts.map((post)=>{
        return(
            <div key={post.id}>
                <Link href={`posts/${post.id}`} passHref> 
                <h1>{post.id}. {post.title}</h1>
                </Link>
                <hr/>
            </div>
            
        )
    })}
    </>
)
}
export default PostList

export async function getStaticProps(){
    const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return{
        props:{
            posts:data
        }
    }
}

//.........................fetching without button (React)

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function DataFetching(){
//     const [post, setPost] = useState({})
//     const [id, setId] = useState(1)

//     useEffect(()=>{
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(res=>{
//             setPost(res.data)
//         })
//         .catch(err =>{
//             console.log(err);
//         },[id])
//     })
    
//     return(
//         <div>
//             <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
//             <div>{post.title}</div>
//         </div>
//     )
// }

//......................with button

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function DataFetching(){
//     const [post, setPost] = useState({})
//     const [id, setId] = useState(1)
//     const [click, setClick] = useState(1)

//     const handleClick =()=>{
//         setClick(id)
//     }

//     useEffect(()=>{
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${click}`)
//         .then(res=>{
//             setPost(res.data)
//         })
//         .catch(err =>{
//             console.log(err);
//         },[click])
//     })
    
//     return(
//         <div>
//             <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
//             <button type="button" onClick={handleClick}>Fetch Post</button>
//             <div>{post.title}</div><hr/>
//             <div>{post.body}</div>
//         </div>
//     )
// }