'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function SinglePost({params}) {
  const [post, setPost] = useState(null);

  const fetchPost = async (id) => {
    const res = await fetch(`http://localhost:3001/api/posts/${id}`);
    const {post} = await res.json();

    post && setPost(post);
  }

  useEffect(() => {
    fetchPost(params.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div>
      <Link href='/'>Back to home</Link>
      <br/>
      <div>
        <article>
          <h1>{post?.title}</h1>
          {post?.tags.map((tag, index) => <span key={index}>{tag} | </span>)}
          <br/>
          <p>{post?.body}</p>
        </article>
      </div>
    </div>
  )
}