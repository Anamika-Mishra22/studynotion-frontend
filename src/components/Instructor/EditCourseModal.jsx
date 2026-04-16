import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCourseBack } from "../../redux/course/courseSlice";

const EditCourseModal = ({ course, onClose }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(course.title);
  const [category, setCategory] = useState(course.category);
  const [price, setPrice] = useState(course.price);
  const [thumbnail, setThumbnail] = useState(null);

  const handleSave = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("price", price);
    if (thumbnail) formData.append("thumbnail", thumbnail);
    console.log("FormData to be sent:");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    dispatch(updateCourseBack({ courseId: course._id, data: formData }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center text-white">
      <div className="bg-gray-900 p-6 rounded w-[420px] space-y-3">
        <h2 className="text-xl font-bold">Edit Course</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded text-white"
        />

        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded"
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded"
        />

        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          className="text-sm"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={handleSave}
            className="bg-green-600 px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCourseModal;
