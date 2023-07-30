const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const getDB = async () => {
  const response = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  console.log(JSON.stringify(response));
};

module.exports = {
  getDB,
};
