import Link from 'next/link';
import BlogTagList from './BlogTagList';

export default function BlogCard({ post }) {
  return (
    <>
      <div>
        <div>
          <Link href={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
            <h3>Tags</h3>
          </Link>
        </div>
        <BlogTagList slug={post.slug} tags={post.tags} />
      </div>
    </>
  );
}
