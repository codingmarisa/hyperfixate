import { getDB } from '@/utils/notion/notionApi';

export default async function Home() {
  const db = await getDB();

  return (
    <div>
      <h1>Title</h1>
    </div>
  );
}
