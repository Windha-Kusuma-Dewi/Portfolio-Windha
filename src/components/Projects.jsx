import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

function Projects() {
  const [selected, setSelected] = useState(null)
  const [activeImage, setActiveImage] = useState(0)

  function openProject(project) {
    setSelected(project)
    setActiveImage(0)
  }

  function closeProject() {
    setSelected(null)
  }

  function nextImage() {
    setActiveImage((prev) => (prev + 1) % selected.images.length)
  }

  function prevImage() {
    setActiveImage((prev) => (prev - 1 + selected.images.length) % selected.images.length)
  }

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
            Featured Projects
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">
            Some of My Recent Work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openProject(project)}
              className="text-left bg-[#12161f] border border-white/10 rounded-xl p-6 hover:border-indigo-400/50 transition flex flex-col cursor-pointer"
            >
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-indigo-400 text-sm font-medium">
                View Details
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-100 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={closeProject}
        >
          <div
            className="bg-[#12161f] border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 p-6 pb-0">
              <button
                onClick={closeProject}
                className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition"
              >
                ✕
              </button>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                {selected.title}
              </h3>
              {selected.status && (
                <span className="text-xs font-mono text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-2 py-1 rounded">
                  {selected.status}
                </span>
              )}
            </div>

            <div className="p-6">
              <div className="relative bg-black/20 border border-white/10 rounded-xl overflow-hidden flex items-center justify-center max-h-[55vh]">
                <img
                  src={selected.images[activeImage]}
                  alt={`${selected.title} screenshot ${activeImage + 1}`}
                  className="max-w-full max-h-[55vh] object-contain"
                />

                {selected.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                    >
                      ›
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {selected.images.map((_, i) => (
                        <span
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full transition ${i === activeImage ? "bg-indigo-400" : "bg-white/30"
                            }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="p-8">
              {selected.status && (
                <span className="inline-block text-xs font-mono text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-2 py-1 rounded mb-3">
                  {selected.status}
                </span>
              )}

              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                {selected.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">{selected.detail}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition"
                >
                  View Live Project
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects