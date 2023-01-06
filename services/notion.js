import { Client } from '@notionhq/client';

const notion = new Client({
  auth: 'secret_1BAPdEBEqDMt08PJ8bGy3lilqFiS8HF9BxPHWDAJUbz',
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

  return posts;
};
const getPageMetaData = post => {
  const getTags = tags => {
    const allTags = tags.map(tag => {
      return tag.name;
    });

    return allTags;
  };

  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    description: post.properties.Description.rich_text[0].plain_text,
    date: getToday(post.properties.Date.last_edited_time),
    slug: post.properties.Slug.rich_text[0].plain_text,
  };
};
function getToday(datestring) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let date = new Date();

  if (datestring) {
    date = new Date(datestring);
  }

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;

  return today;
}