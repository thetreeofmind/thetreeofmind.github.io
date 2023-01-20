import React from "react";
import BlogPostList from "../components/blogs/BlogPostList";
import BlogNav from "../components/blogs/BlogNav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { graphql } from 'gatsby';

import "../scss/index.scss";


const Blog = ({ data }) => {
  const posts = data.allButterPost.edges;

  return (
    <>
      <Helmet>
        <title>The Tree of Life blog</title>
        <meta name="description" content="Check out blog posts from the tree of life." />
        <link rel="icon" href="/images/favicon-tab.png" />
      </Helmet>

      <BlogNav />

      <div className="blog">
        <BlogPostList posts={posts} />
      </div>

      <Footer />
    </>
  );
}

export default Blog;


export const query = graphql`
  query {
    allButterPost(filter: {
      categories: {
        elemMatch: {
          slug: { in: "casual-blog" }
        }
	    }},
      sort: { order: DESC, fields: [published] }
    ) {
      edges {
        node {
          id
          slug
          title
          featured_image
          summary
        }
      }
    }
  }
`;