const getBlogCardFields = (data) => {
  return data.map((post) => {
    return {
      slug: post.properties.Slug.rich_text[0].plain_text,
      title: post.properties.Title.title[0].text.content,
      tags: post.properties.Tags.multi_select.map((tag) => tag.name),
    };
  });
};

module.exports = {
  getBlogCardFields,
};
