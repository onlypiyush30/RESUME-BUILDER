const ResumeForm = ({
  resumeData,
  setResumeData,
  darkMode,
  addCustomSection,
}) => {
  return (
    <div
      className={`p-8 rounded-3xl shadow-lg border ${
        darkMode
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-black"
      }`}
    >
      {" "}
      <h2 className="text-2xl font-bold mb-5">Resume Details</h2>
      <input
        type="file"
        accept="image/*"
        className={`w-full border p-3 rounded-lg mb-4 ${
          darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black"
        }`}
        onChange={(e) => {
          const file = e.target.files[0];

          if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
              setResumeData({
                ...resumeData,
                image: reader.result,
              });
            };

            reader.readAsDataURL(file);
          }
        }}
      />
      <input
        type="text"
        placeholder="Phone Number"
        className={`w-full border p-3 rounded-lg mb-4 ${
          darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black"
        }`}
        value={resumeData.phone}
        onChange={(e) =>
          setResumeData({ ...resumeData, phone: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        className={`w-full border p-3 rounded-lg mb-4 ${
          darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black"
        }`}
        value={resumeData.email}
        onChange={(e) =>
          setResumeData({ ...resumeData, email: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Location"
        className={`w-full border p-3 rounded-lg mb-4 ${
          darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black"
        }`}
        value={resumeData.location}
        onChange={(e) =>
          setResumeData({ ...resumeData, location: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="LinkedIn URL"
        className={`w-full border p-3 rounded-lg mb-4 ${
          darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black"
        }`}
        value={resumeData.linkedin}
        onChange={(e) =>
          setResumeData({ ...resumeData, linkedin: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Full Name"
        className={`w-full border p-3 rounded-lg mb-4 ${
          darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black"
        }`}
        value={resumeData.name}
        onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Role"
        className={`w-full border p-3 rounded-lg mb-4 ${
          darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black"
        }`}
        value={resumeData.role}
        onChange={(e) => setResumeData({ ...resumeData, role: e.target.value })}
      />
      <textarea
        placeholder="Professional Summary"
        className={`w-full border p-3 rounded-lg mb-4 placeholder:text-gray-400 ${
          darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black"
        }`}
        rows="4"
        value={resumeData.summary}
        onChange={(e) =>
          setResumeData({ ...resumeData, summary: e.target.value })
        }
      />
      <textarea
        placeholder="Skills (React, JavaScript, Tailwind)"
        value={resumeData.skills}
        onChange={(e) => {
          console.log("Skills Input:", e.target.value);

          setResumeData({
            ...resumeData,
            skills: e.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="Education"
        className={`w-full border p-3 rounded-lg mb-4 ${
          darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black"
        }`}
        value={resumeData.education}
        onChange={(e) =>
          setResumeData({ ...resumeData, education: e.target.value })
        }
      />
      <textarea
        placeholder="Experience"
        className={`w-full border p-3 rounded-lg mb-4 placeholder:text-gray-400 ${
          darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black"
        }`}
        rows="4"
        value={resumeData.experience}
        onChange={(e) =>
          setResumeData({ ...resumeData, experience: e.target.value })
        }
      />
      <textarea
        placeholder="Projects"
        className={`w-full border p-3 rounded-lg mb-4 placeholder:text-gray-400 ${
          darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black"
        }`}
        rows="5"
        value={resumeData.projects}
        onChange={(e) =>
          setResumeData({ ...resumeData, projects: e.target.value })
        }
      />
      <button
        type="button"
        onClick={addCustomSection}
        className="w-full bg-blue-600 text-white p-3 rounded-xl mb-4 hover:bg-blue-700 transition"
      >
        Add Custom Section
      </button>
      {resumeData.customSections.map((section, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="Section Title"
            className={`w-full border p-3 rounded-lg mb-2 ${
              darkMode
                ? "bg-black text-white border-gray-700"
                : "bg-white text-black"
            }`}
            value={section.title}
            onChange={(e) => {
              const updated = [...resumeData.customSections];
              updated[index].title = e.target.value;

              setResumeData({
                ...resumeData,
                customSections: updated,
              });
            }}
          />

          <textarea
            placeholder="Section Content"
            rows="4"
            className={`w-full border p-3 rounded-lg ${
              darkMode
                ? "bg-black text-white border-gray-700"
                : "bg-white text-black"
            }`}
            value={section.content}
            onChange={(e) => {
              const updated = [...resumeData.customSections];
              updated[index].content = e.target.value;

              setResumeData({
                ...resumeData,
                customSections: updated,
              });
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ResumeForm;
