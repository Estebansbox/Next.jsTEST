import Image from 'next/image'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left p-8 bg-gradient-to-r from-blue-100 via-white to-blue-50">
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
          <Image
            src="/Mantecon-1-1.webp"
            alt="Dr. Armando Mantecón"
            width={260}
            height={260}
            className="rounded-full shadow-2xl border-4 border-blue-200"
            priority
          />
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-blue-900 drop-shadow-lg"
          >
            Dr. Armando Mantecón
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-gray-700 mt-4 max-w-xl mx-auto md:mx-0"
          >
            Especialista en columna vertebral y cirugía mínimamente invasiva en Cancún
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8"
          >
            <a href="#citas">
              <button className="text-lg px-8 py-3 rounded-full shadow-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all">
                Agenda tu cita
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tratamientos */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center text-blue-800"
        >
          Tratamientos Destacados
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Hernia de disco", img: "🦴" },
            { title: "Fractura de columna", img: "💥" },
            { title: "Cirugía endoscópica", img: "🔬" }
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow p-8 bg-white text-center">
                <div className="text-4xl mb-4">{t.img}</div>
                <h3 className="text-xl font-semibold mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm">
                  Soluciones modernas y mínimamente invasivas para mejorar tu calidad de vida.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-blue-50 py-16 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold mb-6 text-blue-800"
          >
            Testimonios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-800 max-w-2xl mx-auto text-lg"
          >
            “Gracias al Dr. Mantecón, hoy puedo caminar sin dolor. Su profesionalismo y atención son de otro nivel.” — Ana G.
          </motion.p>
        </div>
      </section>
    </main>
  )
}
