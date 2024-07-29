import React from "react";
import Navbar from "../reusable/Navbar";
import Footer from "../reusable/Footer";
import BlogsHero from "./BlogsHero";
import PopularBlogs from "./PopularBlogs";
import LatestNews from "./LatestNews";

const BlogsPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <BlogsHero />
            <PopularBlogs title="Popular Blogs" />
            <LatestNews title="Latest News" />
            <PopularBlogs title="Featured Blogs" />
            <LatestNews title="Editor's Picks" />
            <LatestNews title="Expert Reviews" />
            <Footer />
        </div>
    )
}

export default BlogsPage