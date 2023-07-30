const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const getDBcontent = async () => {
  const response = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  const content = Object.values(response.properties).reduce((obj, property) => {
    const { id, ...rest } = property;
    return { ...obj, [id]: rest };
  }, {});

  let dbContent = {
    lastUpdated: await response.last_edited_time,
    content: content,
  };

  return dbContent;
};

module.exports = {
  getDBcontent,
};
