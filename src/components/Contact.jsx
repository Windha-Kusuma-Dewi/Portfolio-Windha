import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/mgawbzzq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#0d1117]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-14">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Let's build something together
          </h2>
          <p className="text-gray-400">
            Have a project or collaboration idea? Feel free to get in touch with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Info kiri */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-[#12161f] border border-white/10 rounded-xl p-6 flex items-center gap-4"
            >
              <FaEnvelope className="text-indigo-400 text-xl shrink-0" />
              <div className="text-left">
                <p className="text-white text-sm font-medium">Email</p>
                <p className="text-gray-400 text-sm">windhaksm@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#12161f] border border-white/10 rounded-xl p-6 flex items-center gap-4"
            >
              <FaPhone className="text-indigo-400 text-xl shrink-0" />
              <div className="text-left">
                <p className="text-white text-sm font-medium">Phone</p>
                <p className="text-gray-400 text-sm">+62 821-1483-1338</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#12161f] border border-white/10 rounded-xl p-6 flex items-center gap-4"
            >
              <FaMapMarkerAlt className="text-indigo-400 text-xl shrink-0" />
              <div className="text-left">
                <p className="text-white text-sm font-medium">Location</p>
                <p className="text-gray-400 text-sm">Bogor, Jawa Barat</p>
              </div>
            </motion.div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/windhakusumadewi/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#12161f] border border-white/10 text-gray-400 hover:text-indigo-400 hover:border-indigo-400/50 transition text-lg"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/windhakusumadewi"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#12161f] border border-white/10 text-gray-400 hover:text-indigo-400 hover:border-indigo-400/50 transition text-lg"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Form kanan */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="bg-[#12161f] border border-white/10 rounded-xl p-6 space-y-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={5}
              className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition resize-none"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-sm text-center">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact