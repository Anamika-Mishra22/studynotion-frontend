import { useState } from "react";
import Stepper from "../components/Instructor/Course/Stepper";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCourse,
  addSection,
  updatePricing,
} from "../redux/course/courseSlice";

import StepButtons from "../components/Instructor/Course/StepButtons";
import PreviewCourse from "../components/Instructor/Course/PreviewCourse";

const AddCourse = () => {
  const dispatch = useDispatch();

  const course = useSelector((state) => state.courses.course);
  const pricing = useSelector((state) => state.courses.pricing);
  const step = useSelector((state) => state.courses.step);

  const [sectionTitle, setSectionTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  return (
    <div className="bg-black min-h-screen pb-20 px-4 md:px-0">

      <div className="text-white max-w-4xl mx-auto my-6 md:my-10">

        <h1 className="text-xl md:text-2xl font-bold mb-4">
          Create New Course
        </h1>

        <Stepper />

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-6 mt-6">

            {/* COURSE INFO */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Course Title"
                value={course.title}
                onChange={(e) =>
                  dispatch(updateCourse({ title: e.target.value }))
                }
                className="w-full p-2 rounded bg-gray-800 text-sm md:text-base"
              />

              <select
                value={course.category}
                onChange={(e) =>
                  dispatch(updateCourse({ category: e.target.value }))
                }
                className="w-full p-2 rounded bg-gray-800 text-sm md:text-base"
              >
                <option value="">Select Category</option>
                <option value="web">Web Development</option>
                <option value="ml">Machine Learning</option>
              </select>

              <textarea
                placeholder="Course Overview"
                value={course.overview}
                onChange={(e) =>
                  dispatch(updateCourse({ overview: e.target.value }))
                }
                className="w-full p-2 rounded bg-gray-800 text-sm md:text-base"
              />
            </div>

            {/* THUMBNAIL */}
            <div>
              <h2 className="text-base md:text-lg font-semibold mb-2">
                Course Thumbnail
              </h2>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setThumbnail(file);
                  setThumbnailPreview(URL.createObjectURL(file));
                }}
                className="w-full p-2 rounded bg-gray-800"
              />

              {thumbnailPreview && (
                <img
                  src={thumbnailPreview}
                  alt="preview"
                  className="mt-3 w-full max-h-60 object-cover rounded"
                />
              )}
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-base md:text-lg font-semibold mb-2">
                Course Sections
              </h2>

              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Section title"
                  value={sectionTitle}
                  onChange={(e) => setSectionTitle(e.target.value)}
                  className="flex-1 p-2 rounded bg-gray-800 text-sm md:text-base"
                />

                <button
                  onClick={() => {
                    if (!sectionTitle.trim()) return;
                    dispatch(addSection(sectionTitle));
                    setSectionTitle("");
                  }}
                  className="bg-teal-600 px-4 py-2 rounded text-sm md:text-base"
                >
                  Add Section
                </button>
              </div>
            </div>

            {/* PRICING */}
            <div className="space-y-4 pt-4">

              <input
                type="number"
                placeholder="Course Price"
                value={pricing.price}
                onChange={(e) =>
                  dispatch(updatePricing({ price: e.target.value }))
                }
                className="w-full p-2 rounded bg-gray-800"
              />

              <input
                type="number"
                placeholder="Discount %"
                value={pricing.discount}
                onChange={(e) =>
                  dispatch(updatePricing({ discount: e.target.value }))
                }
                className="w-full p-2 rounded bg-gray-800"
              />

              <div className="bg-gray-900 p-4 rounded">
                <p className="text-sm text-gray-400">Final Price:</p>
                <p className="text-xl font-bold text-teal-400">
                  ₹{pricing.price - (pricing.price * pricing.discount) / 100 || 0}
                </p>
              </div>

            </div>

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="mt-6">
            <PreviewCourse thumbnailPreview={thumbnailPreview} />
          </div>
        )}

        {/* BUTTONS */}
        <StepButtons thumbnail={thumbnail} />

      </div>
    </div>
  );
};

export default AddCourse;