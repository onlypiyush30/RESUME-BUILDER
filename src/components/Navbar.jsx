const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="w-full px-10 py-5 bg-white border-b shadow-sm flex items-center justify-between">
      <h1 className="text-3xl font-bold text-black">
        ResumeAI
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-black text-white px-5 py-2 rounded-xl"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default Navbar