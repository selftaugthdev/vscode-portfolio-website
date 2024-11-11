import React from 'react';
import { NextPage } from 'next';

const BlogsPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="mb-8 text-3xl font-bold text-white">Blog Posts</h1>
      {/* Your blog content here */}
    </div>
  );
};

export default BlogsPage;
