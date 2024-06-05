import BlogPageComponents from "@/components/blog/BlogPageComponents";
import SheardHeader from "@/components/Sheard/SheardHeader";
import SheardNewsletterSupport from "@/components/Sheard/SheardNewsletterSupport";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <SheardHeader title="Blog" subTitle="blog" />
      <div className="max-w-7xl mx-auto my-20 small-device-sheard">
        <BlogPageComponents />
      </div>
      <SheardNewsletterSupport />
    </div>
  );
};

export default BlogPage;
