"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management",
            image: "/modern-ecommerce-website.png",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "#",
            live: "#",
        },
        {
            title: "Social Media Dashboard",
            description:
                "Analytics dashboard for social media management with real-time data visualization and scheduling features",
            image: "/analytics-dashboard-dark-theme.png",
            tags: ["Next.js", "Express", "PostgreSQL", "Chart.js"],
            github: "#",
            live: "#",
        },
        {
            title: "Task Management App",
            description:
                "Collaborative task management tool with drag-and-drop interface, team collaboration, and progress tracking",
            image: "/task-management-kanban.png",
            tags: ["React", "Firebase", "Tailwind", "DnD Kit"],
            github: "#",
            live: "#",
        },
        {
            title: "Real Estate Platform",
            description: "Property listing platform with advanced search filters, virtual tours, and agent management system",
            image: "/modern-real-estate-website.png",
            tags: ["MERN", "Mapbox", "AWS S3", "Socket.io"],
            github: "#",
            live: "#",
        },
        {
            title: "Blog CMS",
            description: "Content management system with markdown support, SEO optimization, and multi-author capabilities",
            image: "/blog-cms-interface.jpg",
            tags: ["Next.js", "MongoDB", "MDX", "Vercel"],
            github: "#",
            live: "#",
        },
        {
            title: "Fitness Tracker",
            description: "Personal fitness tracking app with workout plans, nutrition tracking, and progress analytics",
            image: "/fitness-app-dashboard.png",
            tags: ["React Native", "Node.js", "MongoDB", "Redux"],
            github: "#",
            live: "#",
        },
    ]

    return (
        <section id="projects" className="py-20 md:py-32 bg-muted/30" ref={ref}>
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
                            Featured Projects
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
                            A showcase of my recent work and personal projects
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group">
                                    <div className="relative overflow-hidden">
                                        <Image
                                            width={500}
                                            height={500}

                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3">
                                            <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="h-4 w-4 mr-2" />
                                                    Code
                                                </a>
                                            </Button>
                                            <Button size="sm" className="flex-1" asChild>
                                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    Live
                                                </a>
                                            </Button>
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
