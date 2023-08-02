import React from 'react';
import Link from 'next/link';

export default function BlogTagList({ slug, tags }) {
  return (
    <div>
      {tags.map((tag, j) => (
        <Link href={`/tag?=${tag}`} key={`blogpost${slug}tag${j}`}>
          {tag}
        </Link>
      ))}
    </div>
  );
}
