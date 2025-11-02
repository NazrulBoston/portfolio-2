"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"

export function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", level: 95 },
                { name: "Next.js", level: 88 },
                { name: "TypeScript", level: 56 },
                { name: "Tailwind CSS", level: 92 },
                { name: "HTML/CSS", level: 95 },
            
            ],
            color: "primary",
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 90 },
                { name: "Express.js", level: 92 },
                { name: "MongoDB", level: 88 },
                { name: "PostgreSQL", level: 70 },
                { name: "REST APIs", level: 93 },
               
            ],
            color: "secondary",
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "Git & GitHub", level: 90 },
                { name: "Figma", level: 85 },
                { name: "Agile/Scrum", level: 78 },
            ],
            color: "accent",
        },
    ]

    return (
        <section id="skills" className="py-20 md:py-32 bg-muted/30" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            My Skills
                        </motion.h2>
                        <motion.div
                            className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 dark:from-orange-400 dark:via-pink-400 dark:to-yellow-300 shadow-md"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 96 } : {}}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        />

                        <motion.p
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5 }}
                        >
                            Technologies and tools I work with
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6 + categoryIndex * 0.2 }}
                            >
                                <Card
                                    className="bg-card rounded-lg p-6 border-b-2 border-r-2 border-rose-600 hover:bg-gradient-to-r from-gray-100 to-rose-300 dark:hover:from-gray-800 dark:hover:to-rose-500"
                                >

                                    <h3 className="text-2xl font-bold mb-6 text-foreground">{category.title}</h3>
                                    <div className="space-y-6">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex}>
                                                <div className="flex justify-between mb-2">
                                                    <span className="font-medium text-foreground">{skill.name}</span>
                                                    <span className="text-muted-foreground font-mono text-sm">{skill.level}%</span>
                                                </div>
                                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                    <motion.div
                                                        className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/70 rounded-full`}
                                                        initial={{ width: 0 }}
                                                        animate={isInView ? { width: `${skill.level}%` } : {}}
                                                        transition={{
                                                            delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                                                            duration: 1,
                                                            ease: "easeOut",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
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
