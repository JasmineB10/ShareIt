import React, { useContext, useState } from "react";
import { blogData as initialBlogData } from "./blogData";
import Card from "./Card";
import ThemeContext from "./ThemeContext";

const CardsTab = () => {
    const { textColor } = useContext(ThemeContext);
  const [blogs, setBlogs] = useState(initialBlogData);

  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleSave = (id, newContent) => {
    setBlogs(blogs.map(blog => blog.id === id ? { ...blog, content: newContent } : blog));
  };

  return (
    <div className="p-4">
      <h1 className={`text-3xl font-bold mb-4 ${textColor}`}>Blogs</h1>
      <div className="grid gap-4">
        {blogs.map(blog => (
          <Card key={blog.id} blog={blog} onDelete={handleDelete} onSave={handleSave} />
        ))}
      </div>
    </div>
  );
};

export default CardsTab;
