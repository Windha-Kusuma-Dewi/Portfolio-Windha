import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full mb-6">
            Available for work
          </span>

          <h1 className="font-heading text-4xl md:text-6xl font-bold bg-linear-to-r from-white to-purple-400 bg-clip-text text-transparent leading-[1.05] tracking-tight mb-4">
            Windha Kusuma Dewi
          </h1>
          <p className="font-heading text-xl md:text-2xl font-medium text-gray-300 leading-snug mb-6">
            Frontend Developer <span className="text-indigo-400">&amp;</span>{" "}
            UI/UX Design Enthusiast
          </p>

          <p className="text-gray-400 font-body mb-8 max-w-md">
            I'm a <span className="text-indigo-400">Frontend Developer</span> with a strong interest in{" "}
            <span className="text-indigo-400">UI/UX Design</span>. I enjoy building
            interfaces that are not only functional, but also thoughtfully designed
            and pleasant to use.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#10141d]/95 font-mono text-sm shadow-2xl shadow-indigo-950/20"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-white/3 px-5 py-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>
            </div>
          </div>
          <pre className="overflow-x-auto px-5 py-6 text-[13px] leading-7 text-gray-300">
            <code>{`{
  `}<span className="text-purple-300">"name"</span>{`: `}<span className="text-emerald-300">"Windha Kusuma Dewi"</span>{`,
  `}<span className="text-purple-300">"role"</span>{`: `}<span className="text-emerald-300">"Frontend Developer & UI/UX Design Enthusiast"</span>{`,
  `}<span className="text-purple-300">"status"</span>{`: `}<span className="text-amber-300">"open_to_work"</span>{`
}`}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero