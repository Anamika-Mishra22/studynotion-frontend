import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyCourses } from "../../redux/course/courseSlice";
import { useNavigate } from "react-router-dom";
// import EditCourse from "./EditCourse";
// import EditCourseModal from "./EditCourseModal";
import {useState} from "react"

const ViewCourses = () => {
  // const [openEdit, setOpenEdit] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { myCourses = [], loading, error } = useSelector(
    (state) => state.courses
  );
  const handleEdit = (courseId) => {
  navigate(`/instructor/courses/edit/${courseId}`);
};


  useEffect(() => {
    dispatch(fetchMyCourses());
  }, [dispatch]);

  if (loading) {
    return <p className="text-white p-6">Loading courses...</p>;
  }

  if (error) {
    return <p className="text-red-400 p-6">{error.message || "Error"}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">
        My Created Courses
      </h1>

      {myCourses.length === 0 ? (
        <p className="text-gray-400">No courses created yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {myCourses.map((course) => (
            <div
              key={course._id}
              className="bg-gray-900 rounded-lg shadow hover:shadow-lg transition"
            >
              {/* THUMBNAIL */}
              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-40 w-full object-cover rounded-t-lg"
              />

              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-white">
                  {course.title}
                </h2>

                <p className="text-sm text-gray-400">
                  Category: {course.category}
                </p>

                <p className="text-sm text-gray-400">
                  Price: ₹{course.price || 0}
                </p>

                <button
                  onClick={() =>
                    navigate(`/instructor/courses/view/${course._id}`)
                  }
                  className="mt-3 w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded"
                >
                  Manage Course
                </button>

                <div className="flex ">
                <button  className="mt-2 w-full bg-yellow-700 hover:bg-yellow-800 text-white py-2 rounded"  onClick={() => {
                  handleEdit(course._id);
                }}>
                  Edit
                </button>
                
                <button className="mt-2 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded" >
                  {course.status === "Published" ? "Published" : "Draft"}
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewCourses;
