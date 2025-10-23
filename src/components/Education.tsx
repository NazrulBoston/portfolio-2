"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Education() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    // 🟢 Added 'iconColor' for each item (so icons have real colors)
    const education = [
        {
            icon: GraduationCap,
            degree: "Bachelor of Accounting",
            institution: "National University",
            period: "2006 - 2009",
            description:
                "Developed a strong foundation in financial principles, auditing, and business analysis, emphasizing accuracy and attention to detail.",
            color: "from-blue-400 to-blue-600", // 🟢 updated gradient to match icon
            iconColor: "text-blue-700", // 🟢 icon real color
        },
        {
            icon: GraduationCap,
            degree: "Master's in Accounting",
            institution: "National University",
            period: "2009 - 2011",
            description:
                "Advanced studies in financial management, data analysis, and strategic decision-making, enhancing analytical and problem-solving skills.",
            color: "from-indigo-400 to-indigo-600",
            iconColor: "text-indigo-700",
        },
        {
            icon: Award,
            degree: "Full Stack Web Development Bootcamp",
            institution: "Programming Hero",
            period: "2022",
            description:
                "Intensive program covering MERN stack, DevOps, and modern web practices.",
            color: "from-yellow-400 to-yellow-600",
            iconColor: "text-yellow-700",
        },
        {
            icon: BookOpen,
            degree: "Advanced React & Node.js Certification",
            institution: "Online Learning Platform",
            period: "2023",
            description:
                "Advanced patterns, performance optimization, and scalable architecture.",
            color: "from-green-400 to-green-600",
            iconColor: "text-green-700",
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
                    {/* ===================== Header ===================== */}
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            Education
                        </motion.h2>

                        <motion.div
                            className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 dark:from-orange-400 dark:via-pink-400 dark:to-yellow-300 shadow-md"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 96 } : {}}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        />

                        <motion.p
                            className="text-lg text-gray-800 dark:text-gray-400 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5 }}
                        >
                            My academic journey and professional certifications
                        </motion.p>
                    </div>

                    {/* ===================== Education Cards ===================== */}
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.6 + index * 0.2 }}
                            >
                                <Card className="bg-card rounded-lg p-6 border-b-2 border-r-2 border-rose-600 hover:bg-gradient-to-r from-gray-100 to-rose-300 dark:hover:from-gray-800 dark:hover:to-rose-500 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* 🟢 Updated: icon box now uses item.iconColor for real color */}
                                        <div
                                            className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                                        >
                                            <item.icon className={`h-8 w-8 ${item.iconColor}`} />
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
                                            <p className="text-lg font-semibold text-primary mb-2">
                                                {item.institution}
                                            </p>
                                            <p className="text-gray-800 dark:text-gray-400 leading-relaxed">
                                                {item.description}
                                            </p>
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
