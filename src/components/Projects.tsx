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

    // ✅ Inside your Projects component, replace your entire `projects` array with this:

    const projects = [
        {
            
            title: "Bistro Restaurant",
            description:
                "A modern restaurant web app with online menu, table booking, and food delivery integration for a seamless dining experience.",
            image: "https://i.ibb.co/kgWp2J8V/Screenshot-2025-10-12-at-8-24-15-PM.png",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/NazrulBoston/Bistro-Boss-Client.git",
            live: "https://eloquent-faloodeh-7cc932.netlify.app/",
        },
        {
            title: "Electrical Products Store",
            description:
                "An e-commerce platform specializing in electrical appliances and gadgets with secure payment and real-time stock updates.",
            image: "https://i.ibb.co/KjFS78bt/Screenshot-2025-10-12-at-8-29-42-PM.png",
            tags: ["React", "Firebase", "Tailwind", "MongoDB"],
            github: "https://github.com/NazrulBoston/assignment-ten-client.git",
            live: "https://darling-smakager-da748c.netlify.app/",
        },
        {
            title: "Event Management System",
            description:
                "An event planning and booking platform with vendor coordination, ticketing, and scheduling features for seamless event organization.",
            image: "https://i.ibb.co/tTyLWZzP/Screenshot-2025-10-12-at-8-27-45-PM.png",
           tags: ["React", "Firebase", "Tailwind", "MongoDB"],
            github: "https://github.com/NazrulBoston/assignment-nine-social-events.git",
            live: "https://illustrious-melomakarona-347ac2.netlify.app/",
        },
        {
            title: "Donation & Charity Platform",
            description:
                "A platform for donors and organizations to connect, manage fundraising campaigns, and track contributions transparently.",
            image: "https://i.ibb.co/ym7jhvCj/Screenshot-2025-10-12-at-8-23-07-PM.png",
            tags: ["React", "Firebase", "Tailwind"],
            github: "https://github.com/NazrulBoston/assignment-eight-donation.git",
            live: "https://singular-buttercream-21f974.netlify.app/",
        },
        {
            title: "Fruit Burst",
            description:
                "Fruit Burst is all about freshness, flavor, and pure fruit goodness. We bring you delicious, natural drinks made from handpicked fruits.",
            image: "https://i.ibb.co/9jY31k7/Screenshot-2025-10-18-at-8-16-10-PM.png",
          tags: ["React", "Firebase", "Tailwind"],
            github: "https://github.com/NazrulBoston/fruit-brust.git",
            live: "https://lambent-fox-bc231e.netlify.app/",
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
                            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            Featured Projects
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
                                <Card
                                    className="bg-card rounded-lg p-6 border-b-2 border-r-2 border-rose-600 hover:bg-gradient-to-r from-gray-100 to-rose-300 dark:hover:from-gray-800 dark:hover:to-rose-500"
                                >
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
