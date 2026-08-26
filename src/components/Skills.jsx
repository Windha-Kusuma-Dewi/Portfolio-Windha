import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaLaravel,
  FaFigma,
  FaGithub,
  FaPhp,
} from "react-icons/fa"
import { SiTailwindcss, SiFlutter, SiDart, SiMysql } from "react-icons/si"

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
    { name: "React JS", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "Laravel", icon: <FaLaravel />, color: "text-red-500" },
    { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
    { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
    // { name: "Flutter", icon: <SiFlutter />, color: "text-sky-300" },
    // { name: "Dart", icon: <SiDart />, color: "text-blue-300" },
    { name: "Figma", icon: <FaFigma />, color: "text-pink-400" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-300" },
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
            My Skills
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3 mb-14">
            Technologies I Use
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#12161f] border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-indigo-400/50 transition"
            >
              <span className={`text-4xl ${skill.color}`}>{skill.icon}</span>
              <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills