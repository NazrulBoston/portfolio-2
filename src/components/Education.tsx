"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      icon: GraduationCap,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2018 - 2022",
      description: "Focused on software engineering, data structures, and web technologies",
      color: "from-primary to-primary/70",
    },
    {
      icon: Award,
      degree: "Full Stack Web Development Bootcamp",
      institution: "Tech Academy",
      period: "2022",
      description: "Intensive program covering MERN stack, DevOps, and modern web practices",
      color: "from-secondary to-secondary/70",
    },
    {
      icon: BookOpen,
      degree: "Advanced React & Node.js Certification",
      institution: "Online Learning Platform",
      period: "2023",
      description: "Advanced patterns, performance optimization, and scalable architecture",
      color: "from-accent to-accent/70",
    },
  ]

  return (
    <section id="education" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Education
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              My academic journey and professional certifications
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.degree}
                        </h3>
                        <span className="text-sm font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-lg font-semibold text-primary mb-2">{item.institution}</p>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
