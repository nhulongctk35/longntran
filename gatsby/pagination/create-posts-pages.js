'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  // const result = await graphql(`
  //   {
  //     allMarkdownRemark(
  //       filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
  //     ) { totalCount }
  //   }
  // `);

  const { postsPerPage } = siteConfig;
  // const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / postsPerPage);

  createPage({
    path: '/',
    component: path.resolve('./src/templates/index-template.js'),
    context: {
      currentPage: 0,
      postsLimit: postsPerPage,
      postsOffset: 0
    }
  });
};
