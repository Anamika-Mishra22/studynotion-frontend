import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublishedCourses } from "../../redux/course/courseSlice";

const DashbordLayout = () => {
  const dispatch = useDispatch();

  const { publishedCourses = [], loading } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    dispatch(fetchPublishedCourses());
  }, [dispatch]);

  if (loading)
    return (
      <p className="text-white p-6 text-center">Loading...</p>
    );

  return (
    <div className="p-4 md:p-6 bg-black min-h-screen text-white">

      <h1 className="text-xl md:text-2xl font-bold mb-6">
        Explore Courses
      </h1>

      {/* EMPTY STATE */}
      {publishedCourses.length === 0 ? (
        <p className="text-gray-400 text-center">
          No courses available
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {publishedCourses.map((course) => (
            <div
              key={course._id}
              className="bg-[#0f172a] rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >

              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-4 space-y-2">

                <h2 className="font-semibold text-base md:text-lg">
                  {course.title}
                </h2>

                <p className="text-sm text-gray-400">
                  {course.category}
                </p>

                <p className="text-sm">
                  👨‍🏫 {course.instructor?.name || "Instructor"}
                </p>

                <button className="mt-3 w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition">
                  View Course
                </button>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default DashbordLayout;