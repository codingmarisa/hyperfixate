import { getPosts } from '@/utils/notionApi';
import BlogCard from './components/BlogCard';

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post, i) => (
        <BlogCard post={post} key={`blogcard${i}`} />
      ))}
    </div>
  );
}
