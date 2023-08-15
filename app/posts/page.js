import Link from 'next/link';

export default async function PostsPage() {
  const res = await fetch('http://localhost:3001/api/posts');
  const { posts } = await res.json()

  return (
    <div>
      <h1>All Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
