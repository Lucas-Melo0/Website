import { getAllPublished } from '../../services/notion';
import { DateFormatter } from '../../aux/date';
import Link from 'next/link';
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';

export default async function Page() {
  const posts = await getAllPublished();
  const results: any = posts.results;
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <div className="w-5/12 mx-auto gap-y-3 flex flex-col items-start">
        <div className="mt-16 gap-y-3 flex flex-col">
          {results.map((post: any) => {
            return (
              <Link href={`blog/post/${post.properties.Slug.rich_text[0].plain_text}`}>
                <div className="  cursor-pointer ">
                  <div>
                    <h1 className="text-2xl hover:text-orange-400 dark:text-white dark:hover:text-orange-400 font-bold">
                      {post.properties.Name.title[0].plain_text}{' '}
                    </h1>
                  </div>
                  <div className="text-gray-800 dark:text-gray-400">
                    {post.properties.Description.rich_text[0].plain_text}
                  </div>
                  <div className="flex gap-x-4 flex-row">
                    <div className="flex items-center gap-x-2">
                      <AiOutlineCalendar color="gray" />
                      <p className="text-gray-800 dark:text-gray-400">
                        {DateFormatter(post.properties.Date.date.start)}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <AiOutlineUser color="gray" />
                      <p className="text-gray-800 dark:text-gray-400">Lucas Melo</p>
                    </div>
                  </div>
                  <span className="w-full border-gray-600 border-b"></span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
