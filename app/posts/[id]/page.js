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
  }, [])
  
  return (
    <div style={{ paddingTop: '20px', paddingLeft: '20px' }}>
      <Link href='/'>Back to home</Link>
      <div style={{ paddingTop: '50px' }}>
        <article>
          <h1 style={{ paddingBottom: '10px' }}>{post?.title}</h1>
          {post?.tags.map((tag, index) => <span style={{ fontWeight: 'lighter' }} key={index}>{tag} | </span>)}
          <br/>
          <p style={{ paddingTop: '10px' }}>{post?.body}</p>
        </article>
      </div>
    </div>
  )
}