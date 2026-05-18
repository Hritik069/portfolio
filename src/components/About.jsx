import { motion } from 'framer-motion'
import { GraduationCap, Code2, Database, Globe, Zap, Users } from 'lucide-react'

export default function About() {
  const skills = [
    { icon: Code2, name: 'Frontend Development', level: 90 },
    { icon: Database, name: 'Backend Development', level: 75 },
    { icon: Globe, name: 'Web Technologies', level: 85 },
    { icon: Zap, name: 'Problem Solving', level: 88 },
    { icon: Users, name: 'Team Collaboration', level: 80 },
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Birla Institute of technology,Mesra',
      year: '2023 - 2027',
      description: 'Specializing in Software Engineering and Web Development',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Holy Mission High School',
      year: '2020 - 2022',
      description: 'Science stream with Computer Science',
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, skills, and educational journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a passionate Computer Science student and developer with a keen interest in 
              building modern web applications. I love turning complex problems into simple, 
              beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a deep passion 
              for creating impactful digital experiences. I'm constantly learning and exploring 
              new technologies to stay at the forefront of innovation.
            </p>
          </motion.div>

          {/* Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Core Skills</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass p-4 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <skill.icon className="text-primary" size={24} />
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text text-center">Education</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row gap-4 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1">
                    <div className="glass p-6 rounded-2xl">
                      <div className="flex items-start gap-3 mb-3">
                        <GraduationCap className="text-primary flex-shrink-0" size={24} />
                        <div>
                          <h4 className="text-xl font-bold">{edu.degree}</h4>
                          <p className="text-primary font-semibold">{edu.institution}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full glow-effect" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
