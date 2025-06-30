import { useEffect, useState } from "react";
import db from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./BlogPage.css";

function BlogPage() {
document.title = "BlogPage";

  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });
  const [editId, setEditId] = useState(null);

  const blogsRef = collection(db, "blogs");

  // Fetch blogs from Firestore
  const fetchBlogs = async () => {
    const snapshot = await getDocs(blogsRef);
    const blogList = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setBlogs(blogList);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      const blogDoc = doc(db, "blogs", editId);
      await updateDoc(blogDoc, newBlog);
      setEditId(null);
    } else {
      await addDoc(blogsRef, newBlog);
    }
    setNewBlog({ title: "", content: "" });
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setNewBlog({ title: blog.title, content: blog.content });
    setEditId(blog.id);
  };

  const handleDelete = async (id) => {
    const blogDoc = doc(db, "blogs", id);
    await deleteDoc(blogDoc);
    fetchBlogs();
  };

  return (
    <div className="blog-container">
      <h2 className="blog-title">Blog Posts</h2>

      <form className="blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Blog Title ..."
          value={newBlog.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Blog Content ..."
          value={newBlog.content}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">
          {editId ? "Update Blog" : "Add Blog"}
        </button>
      </form>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <div className="blog-actions">
              <button onClick={() => handleEdit(blog)} className="edit-btn">
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
