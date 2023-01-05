import { getAllPublished } from '../../services/notion';
export default async function Page() {
  const posts = await getAllPublished();
  const results: any = posts.results;
  console.log(results[0].properties, posts);
  return (
    <div className="min-h-screen">
      <h1>Hello, this are my recent posts!</h1>
    </div>
  );
}
