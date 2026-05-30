import { useState } from "react";
import Navbar from "./components/Navbar";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [resumeData, setResumeData] = useState({
    image: "",
    phone: "",
    email: "",
    location: "",
    linkedin: "",
    name: "",
    role: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
    customSections: [],
  });

  const addCustomSection = () => {
    setResumeData({
      ...resumeData,
      customSections: [
        ...resumeData.customSections,
        {
          title: "",
          content: "",
        },
      ],
    });
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white"
          : "bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100 text-black"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
          <div className="backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-white/20 shadow-2xl rounded-3xl p-6">
            <ResumeForm
              resumeData={resumeData}
              setResumeData={setResumeData}
              darkMode={darkMode}
              addCustomSection={addCustomSection}
            />
          </div>

          <div className="sticky top-10">
            <div className="backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-white/20 shadow-2xl rounded-3xl p-6">
              <ResumePreview resumeData={resumeData} darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
