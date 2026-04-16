import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublishedCourses } from "../../redux/course/courseSlice";

const DashbordLayout = () => {
  const dispatch = useDispatch();
  const { publishedCourses, loading } = useSelector(
    (state) => state.courses
  );
  console.log("Published Courses in Dashboard:", publishedCourses);

  useEffect(() => {
    dispatch(fetchPublishedCourses());
  }, [dispatch]);

  if (loading) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">
        Explore Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
        {publishedCourses.map((course) => (
          <div
            key={course._id}
            className="bg-[#0f172a] rounded-xl overflow-hidden"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-4 space-y-2">
              <h2 className="font-semibold text-lg">
                {course.title}
              </h2>

              <p className="text-sm text-gray-400">
                {course.category}
              </p>

              <p className="text-sm">
                👨‍🏫 {course.instructor?.name}
              </p>

              <button className="mt-3 w-full bg-blue-600 py-2 rounded">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashbordLayout ;
