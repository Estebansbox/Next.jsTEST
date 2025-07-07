import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative h-screen flex flex-col items-center justify-center text-center p-8 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          Dr. Armando Mantecón
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl text-white mt-4 max-w-xl"
        >
          Especialista en columna vertebral y cirugía mínimamente invasiva en Cancún
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8"
        >
          <button className="text-lg px-6 py-3 rounded-2xl shadow-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Agenda tu cita
          </button>
        </motion.div>
      </section>

      <section className="py-20 px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Tratamientos Destacados
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Hernia de disco", "Fractura de columna", "Cirugía endoscópica"].map((treatment, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow p-6 text-center bg-white">
                <h3 className="text-xl font-semibold mb-2">{treatment}</h3>
                <p className="text-gray-600 text-sm">
                  Soluciones modernas y mínimamente invasivas para mejorar tu calidad de vida.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold mb-6"
          >
            Testimonios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            “Gracias al Dr. Mantecón, hoy puedo caminar sin dolor. Su profesionalismo y atención son de otro nivel.” — Ana G.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
