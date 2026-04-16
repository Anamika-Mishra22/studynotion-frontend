import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile, updateMyProfile } from "../redux/auth/authSlice";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { instructor } = useSelector((state) => state.auth);

  const [edit, setEdit] = useState(false);

  const [formData, setFormData] = useState({
    bio: "",
    qualification: "",
    experience: 0,
    expertise: "",
  });

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  useEffect(() => {
    if (instructor) {
      setFormData({
        bio: instructor.bio || "",
        qualification: instructor.qualification || "",
        experience: instructor.experience || 0,
        expertise: instructor.expertise.join(", "),
      });
    }
  }, [instructor]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(
      updateMyProfile({
        ...formData,
        expertise: formData.expertise.split(",").map(i => i.trim()),
      })
    );
    setEdit(false);
  };

  if (!instructor) return <p className="text-center">Loading profile...</p>;

  return (
    <div className="pt-0 flex  justify-center items-center p-6 bg-black">
      <div className="bg-white flex flex-col rounded-xl shadow-lg w-full max-w-4xl  overflow-hidden">

        {/* PROFILE HEADER */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white p-6 rounded-xl flex justify-between items-center">
         <div className="flex items-center gap-6 ">
          <img
            src={instructor.avatar}
            className="w-28 h-28 rounded-full border-4 border-white object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold">{instructor.name}</h2>
            <p className="text-sm opacity-90">{instructor.email}</p>
            <p className="text-sm opacity-90">{instructor.mobile}</p>

           
          </div>
          </div>
          <div>
             <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-white/20">
              {instructor.isApproved ? "Approved Instructor" : "Approval Pending"}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between">
            <h3 className="font-semibold text-lg">About Instructor</h3>
            <button onClick={() => setEdit(!edit)} className="text-indigo-600">
              {edit ? "Cancel" : "Edit"}
            </button>
          </div>

          <div className="mt-4 space-y-3">
            <div>
              <label className="text-sm text-gray-500">Bio</label>
              {edit ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              ) : (
                <p>{instructor.bio || "—"}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-500">Qualification</label>
              {edit ? (
                <input
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              ) : (
                <p>{instructor.qualification}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-500">Experience</label>
              {edit ? (
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              ) : (
                <p>{instructor.experience} years</p>
              )}
            </div>
          </div>

          {edit && (
            <button
              onClick={handleSave}
              className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded"
            >
              Save Changes
            </button>
          )}
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg mb-2">Expertise</h3>

          {edit ? (
            <input
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="React, Node, MongoDB"
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {instructor.expertise.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg">Security</h3>

          <p className="text-sm text-gray-500 mt-1">
            Password is hidden for security reasons
          </p>

          <button className="mt-3 text-indigo-600 font-medium">
            Change Password
          </button>
        </div>

        {/* RIGHT DETAILS */}

      </div>
    </div>
  );
};

export default MyProfile;
