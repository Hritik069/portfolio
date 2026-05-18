import { motion } from 'framer-motion'
import { Briefcase, Trophy, Award, Star } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      icon: Briefcase,
      title: 'Frontend Developer Intern',
      company: 'Tech Company',
      period: 'June 2024 - August 2024',
      description: 'Developed responsive web applications using React and TypeScript. Implemented UI components and improved website performance by 30%.',
    },
    {
      icon: Briefcase,
      title: 'Web Developer Freelancer',
      company: 'Self-employed',
      period: 'January 2023 - Present',
      description: 'Built custom websites for clients using modern technologies. Delivered 10+ projects with satisfied clients and positive feedback.',
    },
    {
      icon: Trophy,
      title: 'Hackathon Winner',
      company: 'Tech Hackathon 2024',
      period: 'March 2024',
      description: 'Won first place in a 48-hour hackathon for building an innovative AI-powered solution for sustainable energy management.',
    },
    {
      icon: Award,
      title: 'Best Project Award',
      company: 'University Tech Fest',
      period: 'February 2024',
      description: 'Received the Best Project Award for developing a comprehensive e-learning platform with interactive features.',
    },
    {
      icon: Star,
      title: 'Open Source Contributor',
      company: 'GitHub',
      period: 'Ongoing',
      description: 'Actively contributing to open-source projects. Fixed bugs, added features, and improved documentation for various repositories.',
    },
    {
      icon: Award,
      title: 'Dean\'s List',
      company: 'University',
      period: '2022 - 2024',
      description: 'Consistently maintained high academic performance and was recognized on the Dean\'s List for multiple semesters.',
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and notable accomplishments
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-6 rounded-2xl"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/20 rounded-xl">
                        <exp.icon className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold gradient-text">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.period}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="w-4 h-4 bg-primary rounded-full glow-effect"
                  />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '10+', label: 'Projects Completed' },
            { value: '5+', label: 'Happy Clients' },
            { value: '2+', label: 'Years Experience' },
            { value: '15+', label: 'Technologies' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
