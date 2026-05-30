import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

const ResumePreview = ({ resumeData, darkMode }) => {
  const skillsArray = (() => {
    if (!resumeData.skills) return [];

    if (Array.isArray(resumeData.skills)) {
      return resumeData.skills;
    }

    return resumeData.skills
      .split(/,|\n/)
      .map((skill) => skill.trim())
      .filter(Boolean);
  })();
  console.log("resumeData.skills:", resumeData.skills);
  console.log("skillsArray:", skillsArray);
  console.log("Preview Skills:", resumeData.skills);

  const hasSummary = resumeData.summary && resumeData.summary.trim().length > 0;

  const hasSkills = skillsArray.length > 0;

  const hasEducation =
    resumeData.education && resumeData.education.trim().length > 0;

  const hasExperience =
    resumeData.experience && resumeData.experience.trim().length > 0;

  const hasProjects =
    resumeData.projects && resumeData.projects.trim().length > 0;

  const downloadPDF = async () => {
    const input = document.getElementById("resume-preview");

    if (!input) return;

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: darkMode ? "#111827" : "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const pdfHeight = 297;

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;

      pdf.addPage();

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

      heightLeft -= pdfHeight;
    }

    pdf.save("resume.pdf");
  };

  return (
    <>
      <div
        id="resume-preview"
        className={`p-10 rounded-3xl shadow-2xl border min-h-screen transition-all duration-500 ${
          darkMode
            ? "bg-gray-900 text-white border-gray-700"
            : "bg-white text-black border-gray-300"
        }`}
      >
        <div className="flex items-center gap-6 mb-10 border-b border-gray-300 pb-6">
          <img
            src={
              resumeData.image ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-black-500 shadow-lg"
          />

          <div className="flex-1">
            <h1 className="text-4xl font-extrabold leading-tight">
              {resumeData.name || "Your Name"}
            </h1>

            <h2 className="text-xl text-black-500 font-semibold mt-1">
              {resumeData.role || "Frontend Developer"}
            </h2>

            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-gray-600">
              <span>{resumeData.phone || "Phone Number"}</span>

              <span>•</span>

              <span>{resumeData.email || "Email Address"}</span>

              <span>•</span>

              <span>{resumeData.location || "Location"}</span>

              <span>•</span>

              <a
                href={resumeData.linkedin || "#"}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {hasSummary && (
          <div className="mt-6">
            <h3 className="text-lg font-bold uppercase text-black mb-2">
              Summary
            </h3>

            <div className="border-b border-gray-300 mb-3"></div>

            <p>{resumeData.summary}</p>
          </div>
        )}

        {hasSkills && (
          <div className="mt-6">
            <h3 className="text-lg font-bold uppercase text-black mb-2">
              Skills
            </h3>

            <div className="border-b border-gray-300 mb-3"></div>

            <div className="flex flex-wrap gap-3">
              {skillsArray.map((skill, i) => (
                <span
                  key={i}
                  className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {hasEducation && (
          <div className="mt-6">
            <h3 className="text-lg font-bold uppercase text-black mb-2">
              Education
            </h3>

            <div className="border-b border-gray-300 mb-3"></div>

            <div className="space-y-2 break-words">
              {(resumeData.education || "").split(",").map((item, index) => (
                <p key={index}>{item.trim()}</p>
              ))}
            </div>
          </div>
        )}

        {hasExperience && (
          <div className="mt-6">
            <h3 className="text-lg font-bold uppercase text-black mb-2">
              Experience
            </h3>

            <div className="border-b border-gray-300 mb-3"></div>

            <ul className="list-disc pl-5 space-y-2 break-words">
              {(resumeData.experience || "").split(",").map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        )}
        {hasProjects && (
          <div className="mt-6">
            <h3 className="text-lg font-bold uppercase text-black mb-2">
              Projects
            </h3>

            <div className="border-b border-gray-300 mb-3"></div>

            <ul className="list-disc pl-5 space-y-2 break-words">
              {(resumeData.projects || "").split(",").map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        )}

        {resumeData.customSections?.map((section, index) => (
          <div key={index} className="mt-6">
            <h3 className="text-lg font-bold uppercase text-black mb-2">
              {section.title}
            </h3>

            <div className="border-b border-gray-300 mb-3"></div>

            <p>{section.content}</p>
          </div>
        ))}
      </div>

      <button
        onClick={downloadPDF}
        className={`mt-6 px-6 py-3 rounded-xl font-semibold transition ${
          darkMode
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        Download PDF
      </button>
    </>
  );
};

export default ResumePreview;
