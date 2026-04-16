import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSection, addLecture } from "../../../redux/course/courseSlice";

const CourseContentForm = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.courses.sections);

  const [sectionTitle, setSectionTitle] = useState("");
  const [lectureTitle, setLectureTitle] = useState("");

  return (
    <div className="space-y-6">

      {/* ➕ Add Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Course Sections</h2>

        <div className="flex gap-2">
          <input
          name="Course_Section"
            type="text"
            placeholder="Section title"
            value={sectionTitle}
            onChange={(e) => setSectionTitle(e.target.value)}
            className="flex-1 p-2 rounded bg-gray-800"
          />
          <button
            onClick={() => {
              if (!sectionTitle) return;
              dispatch(addSection(sectionTitle));
              setSectionTitle("");
            }}
            className="px-4 bg-teal-500 rounded"
          >
            Add Section
          </button>
        </div>
      </div>

      {/* 📦 Section List */}
      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded space-y-3"
        >
          <h3 className="font-semibold">
            Section {index + 1}: {section.title}
          </h3>

          {/* ➕ Add Lecture */}
          <div className="flex gap-2">
            <input
            name="Course_Section"
              type="text"
              placeholder="Lecture title"
              value={lectureTitle}
              onChange={(e) => setLectureTitle(e.target.value)}
              className="flex-1 p-2 rounded bg-gray-700"
            />
            <button
              onClick={() => {
                if (!lectureTitle) return;
                dispatch(
                  addLecture({
                    sectionIndex: index,
                    lecture: { title: lectureTitle, video: null },
                  })
                );
                setLectureTitle("");
              }}
              className="px-4 bg-blue-500 rounded"
            >
              Add Lecture
            </button>
          </div>

          {/* 🎬 Lecture list */}
          <ul className="text-sm text-gray-300">
            {section.lectures.map((lec, i) => (
              <li key={i}>▶ {lec.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseContentForm;
