import { getDBcontent } from '@/utils/notionApi';

export default async function Home() {
  const dbContent = await getDBcontent();
  console.log(await dbContent);
  return (
    <div>
      <h1>Title</h1>
    </div>
  );
}
