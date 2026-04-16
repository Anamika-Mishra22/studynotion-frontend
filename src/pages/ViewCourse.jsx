import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchCourseById,
  addSectionBack,
  addLectureBack,
  publishCourseBack,
  deleteSectionBack,
  deleteLectureBack,
  updateSectionBack,
  updateLectureBack,
} from "../redux/course/courseSlice";

const ViewCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { currentCourse, loading } = useSelector(
    (state) => state.courses
  );

  // ------------------ local UI state ------------------
  const [newSectionTitle, setNewSectionTitle] = useState("");
  const [lectureInputs, setLectureInputs] = useState({});
  const [editingSectionId, setEditingSectionId] = useState(null);
  const [editingLectureId, setEditingLectureId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  // 👉 NEW: collapsed state (default = true)
  const [collapsedSections, setCollapsedSections] = useState({});

  // ------------------ fetch course ------------------
  useEffect(() => {
    dispatch(fetchCourseById(id));
  }, [id, dispatch]);

  // 👉 default collapse all sections when course loads
  useEffect(() => {
    if (currentCourse?.sections) {
      const initialState = {};
      currentCourse.sections.forEach((sec) => {
        initialState[sec._id] = true; // collapsed
      });
      setCollapsedSections(initialState);
    }
  }, [currentCourse]);

  if (loading || !currentCourse) {
    return <p className="text-white p-6">Loading...</p>;
  }

  // ------------------ publish logic ------------------
  const hasChanges = () => {
    if (currentCourse.status !== "Published") return true;

    return currentCourse.sections.some(
      (sec) => sec.isNew || sec.lectures.some((l) => l.isNew)
    );
  };

  // ------------------ handlers ------------------
  const handleAddLecture = (sectionId) => {
    const data = lectureInputs[sectionId];
    if (!data?.title) return;

    dispatch(
      addLectureBack({
        sectionId,
        title: data.title,
        videoUrl: data.videoUrl,
        isNew: true,
      })
    );

    setLectureInputs({ ...lectureInputs, [sectionId]: {} });
  };

  const toggleSection = (sectionId) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // ===================================================
  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-8">

      {/* ================= HEADER ================= */}
      <div className="flex gap-6 bg-[#111827] p-6 rounded-xl">
        <img
          src={currentCourse.thumbnail}
          alt="thumb"
          className="w-56 h-36 rounded-lg object-cover"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-semibold">
            {currentCourse.title}
          </h1>
          <p className="text-sm text-gray-400">
            Category: {currentCourse.category}
          </p>

          <span
            className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
              currentCourse.status === "Published"
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {currentCourse.status}
          </span>
        </div>

        <button
          disabled={!hasChanges()}
          onClick={() => dispatch(publishCourseBack(id))}
          className={`h-fit px-6 py-2 rounded ${
            hasChanges()
              ? "bg-green-600 hover:bg-green-500"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          {currentCourse.status === "Published" && !hasChanges()
            ? "Published"
            : "Publish"}
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Course Content</h2>

        {currentCourse.sections.map((section) => (
          <div
            key={section._id}
            className="bg-[#0f172a] p-5 rounded-xl space-y-4"
          >
            {/* ===== SECTION HEADER ===== */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleSection(section._id)}
                  className="text-lg"
                >
                  {collapsedSections[section._id] ? "▶️" : "🔽"}
                </button>

                {editingSectionId === section._id ? (
                  <input
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="bg-black p-2 rounded"
                  />
                ) : (
                  <h3 className="font-semibold text-lg">
                    {section.title}
                  </h3>
                )}
              </div>

              <div className="flex gap-2">
                {editingSectionId === section._id ? (
                  <>
                    <button
                      onClick={() => {
                        dispatch(
                          updateSectionBack({
                            sectionId: section._id,
                            title: editedTitle,
                          })
                        );
                        setEditingSectionId(null);
                      }}
                      className="px-3 py-1 bg-green-600 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingSectionId(null)}
                      className="px-3 py-1 bg-gray-600 rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditingSectionId(section._id);
                        setEditedTitle(section.title);
                      }}
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() =>
                        window.confirm("Delete section?") &&
                        dispatch(deleteSectionBack(section._id))
                      }
                    >
                      🗑️
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* ===== COLLAPSIBLE CONTENT ===== */}
            {!collapsedSections[section._id] && (
              <>
                {/* ===== LECTURES ===== */}
                <ul className="space-y-2">
                  {section.lectures.map((lec) => (
                    <li
                      key={lec._id}
                      className="flex justify-between bg-[#020617] p-3 rounded"
                    >
                      {editingLectureId === lec._id ? (
                        <>
                          <input
                            value={editedTitle}
                            onChange={(e) =>
                              setEditedTitle(e.target.value)
                            }
                            className="bg-black p-1 rounded w-2/3"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                dispatch(
                                  updateLectureBack({
                                    lectureId: lec._id,
                                    title: editedTitle,
                                  })
                                );
                                setEditingLectureId(null);
                              }}
                            >
                              ✔️
                            </button>
                            <button
                              onClick={() =>
                                setEditingLectureId(null)
                              }
                            >
                              ✖️
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <span>▶ {lec.title}</span>
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setEditingLectureId(lec._id);
                                setEditedTitle(lec.title);
                              }}
                            >
                              ✏️
                            </button>
                            <button
                              onClick={() =>
                                window.confirm("Delete lecture?") &&
                                dispatch(deleteLectureBack(lec._id))
                              }
                            >
                              🗑️
                            </button>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                {/* ===== ADD LECTURE ===== */}
                <div className="flex gap-2">
                  <input
                    placeholder="Lecture title"
                    className="bg-black p-2 rounded flex-1"
                    value={lectureInputs[section._id]?.title || ""}
                    onChange={(e) =>
                      setLectureInputs({
                        ...lectureInputs,
                        [section._id]: {
                          ...lectureInputs[section._id],
                          title: e.target.value,
                        },
                      })
                    }
                  />
                  <input
                    placeholder="Video URL"
                    className="bg-black p-2 rounded flex-1"
                    value={lectureInputs[section._id]?.videoUrl || ""}
                    onChange={(e) =>
                      setLectureInputs({
                        ...lectureInputs,
                        [section._id]: {
                          ...lectureInputs[section._id],
                          videoUrl: e.target.value,
                        },
                      })
                    }
                  />
                  <button
                    onClick={() => handleAddLecture(section._id)}
                    className="bg-blue-600 px-4 rounded"
                  >
                    Add
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* ================= ADD SECTION ================= */}
      <div className="bg-[#0f172a] p-5 rounded-xl flex gap-2">
        <input
          value={newSectionTitle}
          onChange={(e) => setNewSectionTitle(e.target.value)}
          placeholder="New section title"
          className="bg-black p-2 rounded flex-1"
        />
        <button
          onClick={() => {
            if (!newSectionTitle.trim()) return;
            dispatch(
              addSectionBack({
                courseId: id,
                title: newSectionTitle,
                isNew: true,
              })
            );
            setNewSectionTitle("");
          }}
          className="bg-green-600 px-4 rounded"
        >
          Add Section
        </button>
      </div>
    </div>
  );
};

export default ViewCourse;
