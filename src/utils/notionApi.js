import { getBlogCardFields } from './notionFormatter';
import { swapKeyToId } from './notionHelper';

const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const getDBcontent = async () => {
  const response = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  let content = swapKeyToId(response.properties);

  let dbContent = {
    lastUpdated: await response.last_edited_time,
    content: content,
  };

  return dbContent;
};

const getPost = async (id) => {
  const data = await getPage(id);
  return swapKeyToId(data.properties);
};

const getPosts = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },

    sorts: [
      {
        property: 'Created time',
        direction: 'ascending',
      },
    ],
  });
  return getBlogCardFields(response.results); //TODO:
};

const getPage = async (id) => {
  return await notion.pages.retrieve({ page_id: id });
};

const getBlock = async (blockId) => {
  const response = await notion.blocks.retrieve({
    block_id: blockId,
  });
  return response;
};

const getBlocks = async (blockId) => {
  return await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
};

const search = async () => {
  const response = await notion.search({
    query: 'Test',
    filter: {
      value: 'page',
      property: 'object',
    },
    sort: {
      direction: 'ascending',
      timestamp: 'last_edited_time',
    },
  });
  return response;
};

module.exports = {
  getPost,
  getPosts,
};
