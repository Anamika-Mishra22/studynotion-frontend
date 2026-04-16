import { useSelector } from "react-redux";
import React from "react";

const PreviewCourse = ({ thumbnailPreview }) => {
  const { course, sections, pricing } = useSelector(
    (state) => state.courses
  );

  const finalPrice =
    pricing.price -
    (pricing.price * pricing.discount) / 100 || 0;

  return (
    <div className="space-y-6 bg-gray-900 p-6 rounded flex  justify-between items-center">
      <div className="">
        {/* COURSE BASIC INFO */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Title: {course.title || "Course Title"}
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Category: {course.category || "Not selected"}
          </p>
        </div>

        {/* THUMBNAIL */}


        {/* OVERVIEW */}
        <div>
          <h3 className="font-semibold text-white">Overview</h3>
          <p className="text-gray-400">
            {course.overview || "No overview provided"}
          </p>
        </div>

        {/* COURSE CONTENT */}
        <div>
          <h3 className="font-semibold text-white mb-2">
            Course Content
          </h3>

          {sections.length === 0 ? (
            <p className="text-gray-500">No sections added yet</p>
          ) : (
            <ul className="space-y-2">
              {sections.map((section, index) => (
                <li
                  key={index}
                  className="bg-gray-800 p-2 rounded"
                >
                  <span className="font-medium text-white">
                    {index + 1}. {section.title}
                  </span>
                </li>
              ))}
            </ul>
          )}


        </div>

        {/* PRICING */}
        <div className="border-t border-gray-700 pt-4">
          <p>Price: ₹{pricing.price || 0}</p>
          <p>Discount: {pricing.discount || 0}%</p>

          <p className="text-lg font-bold text-teal-400">
            Final Price: ₹{finalPrice}
          </p>
        </div>
      </div>
      <div>
        {thumbnailPreview && (
          <img
            src={thumbnailPreview}
            alt="Course Thumbnail"
            className="w-full h-48 object-cover rounded mt-4"
          />
        )}
      </div>
    </div>
  );
};

export default PreviewCourse;
