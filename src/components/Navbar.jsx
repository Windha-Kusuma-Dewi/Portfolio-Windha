function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0e17]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-heading font-semibold text-lg text-white">
          Windha<span className="text-indigo-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-body text-sm text-gray-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <a
          href="#contact"
          className="text-sm font-medium bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
        >
          Contact Me
        </a>
      </div>
    </nav>
  )
}

export default Navbar