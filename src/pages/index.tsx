// src/pages/index.js
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import BlogPostMain from "@/components/blog-post-main";
import AppBarMain from "@/components/Header/app-bar-main";
import MainImagePost from "@/components/MainBlog/main-image-post";
import ArticlesNewBlog from "@/components/MainBlog/articles-new-blog";
import ArticlePostMain from "@/components/MainBlog/article-post-main";
import Sidebar from "@/components/MainBlog/sidebar";


import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const blogPosts = [
  {
    title: "Mi primer post",
    content: "Este es mi primer artículo en el blog...",
  },
  {
    title: "Otro post interesante",
    content: "Hoy quiero hablar sobre otro tema interesante...",
  },
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const posts = [post1, post2, post3];



const HomePage = () => {
  return (
    <Container>
      <AppBarMain />

      <MainImagePost post={mainFeaturedPost} />

      <Grid container spacing={4} mb={4}>
        {featuredPosts.map((post) => (
          <ArticlesNewBlog key={post.title} post={post} />
        ))}
      </Grid>

      <Grid container spacing={5} sx={{ mt: 3 }}>
        <ArticlePostMain title="From the firehose" posts={posts} />
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>

      <Typography variant="h4">
       Encuentra el punto real de curación!!!
      </Typography>
      <Grid container spacing={2}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <BlogPostMain title={post.title} content={post.content} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
