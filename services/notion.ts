import { Client, LogLevel } from '@notionhq/client';

const notion = new Client({
  auth: 'secret_1BAPdEBEqDMt08PJ8bGy3lilqFiS8HF9BxPHWDAJUbz',
  logLevel: LogLevel.DEBUG,
});
export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: '5fe4b225595942bba15603be1a07bb90',
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  const allPosts = posts.results;
  return allPosts;
};
