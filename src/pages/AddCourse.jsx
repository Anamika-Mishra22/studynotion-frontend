
import { useState } from 'react'
import Stepper from "../components/Instructor/Course/Stepper";
import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "../redux/course/courseSlice";
import { addSection, addLecture } from "../redux/course/courseSlice";
import { updatePricing } from "../redux/course/courseSlice";
// import CourseInfoForm from "../components/Instructor/Course/CourseInfoForm";
import StepButtons from "../components/Instructor/Course/StepButtons";
// import PricingForm from "../components/Instructor/Course/PricingForm";
// import CourseContentForm from "../components/Instructor/Course/CourseContentForm";
import PreviewCourse from "../components/Instructor/Course/PreviewCourse";
const AddCourse = () => {

  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses.course);
  const sections = useSelector((state) => state.courses.sections);

  const pricing = useSelector((state) => state.courses.pricing);

  const [sectionTitle, setSectionTitle] = useState("");

  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);


  console.log("AddCourse Component Rendered");
  const fullState = useSelector((state) => state);
  console.log("Redux State:", fullState);
  const step = useSelector((state) => state.courses.step);

  console.log("Current Sections:", sections);
  //   console.log("Current Step:", step);

  return (
    <div className="bg-black pb-20">
      <div className="text-white max-w-4xl   rounded mx-auto my-8">

        <h1 className="text-2xl font-bold mb-4">
          Create New Course
        </h1>

        <Stepper />


        {step === 1 && (<>
          <div className="space-y-4">

            <input
              type="text"
              placeholder="Course Title"
              value={course.title}
              name="Course_Title"
              onChange={(e) =>
                dispatch(updateCourse({ title: e.target.value }))
              }
              className="w-full p-2 rounded bg-gray-800"
            />

            <select name="Select_Category"
              value={course.category}
              onChange={(e) =>
                dispatch(updateCourse({ category: e.target.value }))
              }
              className="w-full p-2 rounded bg-gray-800"
            >
              <option value="">Select Category</option>
              <option value="web">Web Development</option>
              <option value="ml">Machine Learning</option>
            </select>

            <textarea name="Course_Overview"
              placeholder="Course Overview"
              value={course.overview}
              onChange={(e) =>
                dispatch(updateCourse({ overview: e.target.value }))
              }
              className="w-full p-2 rounded bg-gray-800"
            />

          </div>

          <div className="space-y-6">

            {/* ➕ Add Section */}
            <div>

              <h2 className="text-lg font-semibold mb-2">Course Thumbnail</h2>

              <div className="flex gap-2">
                <input
                  name="Course_Thumbnail"
                  type="file"

                  accept='image/*'
                  onChange={(e) => {
                    const file = e.target.files[0];
                    console.log("Selected file:", file);
                    setThumbnail(file);
                    setThumbnailPreview(URL.createObjectURL(file));
                  }}
                  className="flex-1 p-2 rounded bg-gray-800"
                />

              </div>

              <h2 className="text-lg font-semibold mb-2">Course Sections</h2>

              <div className="flex gap-2">
                <input
                  name="Course_Section"
                  type="text"
                  placeholder="Section title"
                  value={sectionTitle}
                  onChange={(e) => {
                    setSectionTitle(e.target.value);
                    console.log("Section Title", e.target.value);
                  }}
                  
                  className="flex-1 p-2 rounded bg-gray-800"
                />
                <button
                  onClick={() => {
                    if (sectionTitle.trim() === "") return;
                    dispatch(addSection(sectionTitle));
                    setSectionTitle("");
                  }}
                  className="bg-teal-600 px-4 py-2 rounded"
                >
                  Add Section
                </button>
              </div>
            </div>


          </div>


          <div className="space-y-4">

            <div>
              <label className="block mb-1">Course Price (₹)</label>
              <input
                name="Course_Price"
                type="number"
                value={pricing.price}
                onChange={(e) =>
                  dispatch(updatePricing({ price: e.target.value }))
                }
                className="w-full p-2 rounded bg-gray-800"
              />
            </div>

            <div>
              <label className="block mb-1">Discount (%)</label>
              <input
                type="number"
                value={pricing.discount}
                onChange={(e) =>
                  dispatch(updatePricing({ discount: e.target.value }))
                }
                className="w-full p-2 rounded bg-gray-800"
              />
            </div>

            <div className="bg-gray-900 p-4 rounded">
              <p className="text-sm text-gray-400">Final Price:</p>
              <p className="text-xl font-bold text-teal-400">
                ₹
                {pricing.price -
                  (pricing.price * pricing.discount) / 100 || 0}
              </p>
            </div>

          </div>
        </>
        )}



        {step === 2 && <PreviewCourse thumbnailPreview={thumbnailPreview} />}

        <StepButtons thumbnail={thumbnail} />
      </div>
    </div>
  );
};

export default AddCourse;
