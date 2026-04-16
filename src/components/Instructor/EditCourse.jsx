import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
  fetchCourseById,
  updateCourseBack,
  publishCourseBack,
  resetCurrentCourse,
} from "../../redux/course/courseSlice";

const EditCourse = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentCourse, loading } = useSelector(
    (state) => state.courses
  );

  // 🔹 local form state (VERY IMPORTANT)
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState("");

  /* ================= FETCH COURSE ================= */
  useEffect(() => {
    dispatch(fetchCourseById(courseId));

    // 🔥 cleanup (RULE 3)
    return () => {
      dispatch(resetCurrentCourse());
    };
  }, [courseId, dispatch]);

  /* ================= SYNC REDUX → LOCAL ================= */
  useEffect(() => {
    if (currentCourse) {
      setTitle(currentCourse.title || "");
      setCategory(currentCourse.category || "");
      setPrice(currentCourse.price || "");
      setPreview(currentCourse.thumbnail || "");
    }
  }, [currentCourse]);

  if (loading || !currentCourse) {
    return <p className="text-white p-4">Loading...</p>;
  }

  /* ================= HANDLERS ================= */
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setThumbnail(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSave = () => {
    dispatch(
      updateCourseBack({
        courseId,
        data: {
          title,
          category,
          price,
        },
        thumbnail: thumbnail,
      })
    );
    alert("Course updated successfully!");
    navigate(-1);
  };

  const handlePublish = () => {
    dispatch(publishCourseBack(courseId));
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-6">
        Edit Course
      </h1>

      {/* ================= THUMBNAIL ================= */}
      <div className="mb-6">
        <p className="mb-2 text-sm text-gray-400">
          Thumbnail
        </p>
        <img
          src={preview}
          alt="thumbnail"
          className="w-80 h-48 object-cover rounded mb-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleThumbnailChange}
        />
      </div>

      {/* ================= FORM ================= */}
      <div className="space-y-4 max-w-xl">
        <input
          className="w-full p-2 rounded bg-gray-800"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full p-2 rounded bg-gray-800"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          className="w-full p-2 rounded bg-gray-800"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 rounded"
        >
          Save Changes
        </button>

        

        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-gray-600 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditCourse;
