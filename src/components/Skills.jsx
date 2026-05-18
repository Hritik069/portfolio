import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

// 3D Icon component for tech stack
function TechIcon({ color, position }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>
    </Float>
  )
}

// 3D Tech Stack Scene
function TechStack3D() {
  const techColors = ['#e34c26', '#264de4', '#f7df1e', '#61dafb', '#007396', '#00599c', '#68a063']
  
  return (
    <Canvas className="w-full h-64">
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {techColors.map((color, i) => (
          <TechIcon
            key={i}
            color={color}
            position={[
              Math.cos((i / techColors.length) * Math.PI * 2) * 2,
              Math.sin((i / techColors.length) * Math.PI * 2) * 2,
              0
            ]}
          />
        ))}
      </Suspense>
    </Canvas>
  )
}

export default function Skills() {
  const skills = [
    { name: 'HTML', level: 95, color: '#e34c26' },
    { name: 'CSS', level: 90, color: '#264de4' },
    { name: 'JavaScript', level: 88, color: '#f7df1e' },
    { name: 'React', level: 85, color: '#61dafb' },
    { name: 'Java', level: 80, color: '#007396' },
    { name: 'C++', level: 75, color: '#00599c' },
    { name: 'Node.js', level: 78, color: '#68a063' },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My proficiency in various technologies and programming languages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Tech Stack Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text text-center">Tech Stack</h3>
            <TechStack3D />
            <p className="text-center text-gray-400 text-sm mt-4">
              Interactive 3D visualization of my tech stack
            </p>
          </motion.div>

          {/* Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Proficiency Level</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    className="h-3 rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${skill.color}, ${skill.color}88)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text text-center">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git', 'GitHub', 'VS Code', 'Figma', 'REST APIs',
              'MongoDB', 'SQL', 'Firebase', 'Vercel', 'Netlify',
              'TypeScript', 'Next.js', 'Express.js', 'Docker', 'AWS'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="glass px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
