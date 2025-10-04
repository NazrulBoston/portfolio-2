"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Rocket, Users, Zap } from "lucide-react"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimized applications for lightning-fast user experiences",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Designing with the end-user in mind for intuitive interfaces",
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Adapting to new technologies and frameworks rapidly",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
                <Image
                width={500}
                height={500}
                  src="/professional-developer-portrait.png"
                  alt="Nazrul Islam"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-foreground">Full Stack Developer & Problem Solver</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate MERN stack developer with a keen eye for creating elegant solutions to complex
                problems. With expertise in MongoDB, Express.js, React, and Node.js, I build full-stack applications
                that are both powerful and user-friendly.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in web development started with a curiosity about how things work on the web, and it has
                evolved into a career where I get to create amazing digital experiences every day. I am constantly
                learning and staying up-to-date with the latest technologies and best practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I am not coding, you can find me contributing to open-source projects, writing technical articles,
                or exploring new frameworks and tools to enhance my skill set.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50 group">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
