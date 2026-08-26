import { motion } from 'framer-motion'
import profilePhoto from '../assets/profile.jpeg'

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
            About Me
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
            Hi, I'm Windha
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            I am a Frontend Developer and UI/UX Design Enthusiast with a strong
            interest in design and technology. I focus on building modern,
            responsive, and user-friendly web interfaces using HTML, CSS,
            JavaScript, and various modern frameworks.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I strive to create user experiences that are both visually appealing
            and functional. I am also experienced in using collaboration tools
            such as Trello, Google Drive, GitHub, Excel, Word, and Canva to
            support productivity and maintain the quality of my work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-indigo-500/20 rounded-2xl blur-xl"></div>
            <img
              src={profilePhoto}
              alt="Windha Kusuma Dewi"
              className="relative w-full max-w-xs aspect-4/5 object-cover rounded-2xl border border-white/10"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mt-16"
      >
        <h3 className="font-heading text-xl font-semibold text-white mb-6">
          Experience
        </h3>
        <div className="bg-[#12161f] border border-white/10 rounded-xl p-6">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
            <div>
              <p className="text-white font-medium">Frontend Developer</p>
              <p className="text-indigo-400 text-sm">PT Evolusi Teknologi Solusi</p>
            </div>
            <span className="text-xs font-mono text-gray-500">Jan - Jun 2025</span>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            Developing the interface display, from layout and page structure to visual details, using HTML, CSS, and React. Ensuring the display meets UI/UX requirements and standards.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mt-10"
      >
        <h3 className="font-heading text-xl font-semibold text-white mb-6">
          Education
        </h3>
        <div className="bg-[#12161f] border border-white/10 rounded-xl p-6">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
            <div>
              <p className="text-white font-medium">
                Software and Game Development
              </p>
              <p className="text-indigo-400 text-sm">SMK Wikrama Bogor</p>
            </div>
            <span className="text-xs font-mono text-gray-500">2023 - 2026</span>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            Studying software development, covering programming fundamentals, web development, and application design.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mt-10 text-center"
      >
        <a
          href="https://drive.google.com/drive/folders/1DU1eGeg6w4uZRpgWLzYJ3SC9gJ8XqPYe?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-white/20 hover:border-indigo-400/50 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          View My Certificates
        </a>
      </motion.div>
    </section>
  )
}

export default About