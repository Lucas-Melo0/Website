import { getAllPublished } from '../../services/notion';
import { DateFormatter } from '../../aux/date';
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';

export default async function Page() {
  const posts = await getAllPublished();
  const results: any = posts.results;
  console.log(results[0].properties.Date.date);
  return (
    <div className="min-h-screen bg-gray-900 ">
      <div className="w-7/12 mx-auto gap-y-3  text-white mt-20 flex flex-col items-start">
        {results.map((post: any) => {
          return (
            <div key={post.id}>
              <div>
                <h1 className="text-2xl font-bold">
                  How to standardize JavaScript projects with Husky + ESLint + Prettier
                </h1>
              </div>
              <div className="text-gray-600">
                A powerful combination of tools to ensure that all your projects have standardized code, handle
                potential bugs, and that all checks are performed regardless of which IDE your team uses.
              </div>
              <div className="flex gap-x-4 flex-row">
                <div className="flex items-center gap-x-2">
                  <AiOutlineCalendar color="gray" />
                  <p className="text-gray-600">{DateFormatter(post.properties.Date.date.start)}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <AiOutlineUser color="gray" />
                  <h5 className="text-gray-600">Lucas Melo</h5>
                </div>
              </div>

              <span className="w-full border-gray-600 border-b"></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
