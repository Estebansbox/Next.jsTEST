import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-blue-100 to-white">
        <div className="md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-blue-800 mb-4"
          >
            Dr. Armando Mantecón
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg mb-6"
          >
            Especialista en cirugía de columna vertebral y técnicas mínimament invasivas en Cancún. Con más de 15 años de experiencia ayudando a pacientes nacionales e internacionales.
          </motion.p>
          <motion.a
            href="#contacto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Agenda tu cita
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <Image
            src="/Mantecon-1-1.webp"
            alt="Dr. Armando Mantecón"
            width={320}
            height={320}
            className="rounded-full shadow-xl"
          />
        </motion.div>
      </section>

      {/* Contenido completo */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Sobre el Dr. Armando Mantecón</h2>
            <p>El Dr. Armando Mantecón es un destacado especialista en cirugía de columna vertebral, conocido por su excelencia en tratamientos mínimamente invasivos. Atiende pacientes locales e internacionales con procedimientos avanzados y un enfoque personalizado.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Tratamientos</h2>
            <ul className="list-disc ml-6">
              <li>Cirugía endoscópica de columna</li>
              <li>Hernia de disco</li>
              <li>Fracturas de columna</li>
              <li>Estenosis espinal</li>
              <li>Escoliosis y deformidades</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Testimonios</h2>
            <p>“El Dr. Mantecón cambió mi vida. La recuperación fue rápida y el cuidado excelente. ¡Muy recomendable!” — Lucía G.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Turismo Médico en Cancún</h2>
            <p>Cancún es uno de los principales destinos mundiales de turismo médico, ofreciendo atención de clase mundial y la posibilidad de recuperación en un entorno paradisíaco.</p>
          </motion.div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-blue-50 py-12 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <p className="mb-6">Para consultas o agendar una cita, contáctanos vía telefónica o WhatsApp:</p>
          <a href="tel:+529981911787" className="inline-block bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition">
            +52 998 191 1787
          </a>
        </div>
      </section>
    </main>
  );
}
