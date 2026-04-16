import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../../../redux/course/courseSlice";
import { publishCourse } from "../../../redux/course/courseSlice";

const StepButtons = ({thumbnail}) => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.courses.step);

  const handlePublish = () => {
    console.log("Publishing course with thumbnail:", thumbnail);
    dispatch(publishCourse({
      thumbnail: thumbnail, // 👈 OBJECT me bhejo
    }));

    alert("Course Created Successfully!");
  };

  return (
    <div className="flex justify-between mt-8">

      {step > 1 && (
        <button
          onClick={() => dispatch(prevStep())}
          className="px-6 py-2 bg-gray-700 rounded"
        >
          Back
        </button>
      )}

      {step < 2 && (
        <button
          onClick={() => dispatch(nextStep())}
          className="px-6 py-2 bg-teal-500 rounded"
        >
          next
        </button>
      )}

      {step === 2 && (
        <button
          onClick={() => handlePublish()}
          className="px-6 py-2 bg-green-500 rounded"
        >
          Create Course
        </button>
      )}

    </div>
  );
};

export default StepButtons;
