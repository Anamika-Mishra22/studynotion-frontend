import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "../../../redux/course/courseSlice";

const CourseInfoForm = () => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses.course);

  return (
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
  );
};

export default CourseInfoForm;
