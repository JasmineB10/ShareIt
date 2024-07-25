import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";

const Card = ({ blog, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(blog.content);
  const { textColor } = useContext(ThemeContext);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(blog.id, editContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditContent(blog.content);
  };

  return (
    <div className={`p-4 border rounded shadow-sm ${textColor}`}>
      <h2 className="text-2xl font-semibold">{blog.title}</h2>
      <p className="text-sm text-gray-500">By {blog.author} on {blog.date}</p>
      {isEditing ? (
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="w-full p-2 border"
        />
      ) : (
        <p className="mt-2">{blog.content}</p>
      )}
      <div className="mt-4 flex space-x-2">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
            <button onClick={handleCancel} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
            <button onClick={() => onDelete(blog.id)} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
