"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Database, Globe, Smartphone, Server, Palette, ShoppingCart } from "lucide-react"

export function Services() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const services = [
        {
            icon: Globe,
            title: "Web Development",
            description: "Building responsive, modern websites with React and Next.js",
            color: "#007acc", //  color (blue)
        },
        {
            icon: Server,
            title: "Backend Development",
            description: "Creating robust APIs with Node.js, Express, and MongoDB",
            color: "#10b981", // Green
        },
        {
            icon: Smartphone,
            title: "Mobile-First Design",
            description: "Crafting beautiful, responsive designs for all devices",
            color: "#f97316", //  Orange
        },
        {
            icon: Database,
            title: "Database Design",
            description: "Designing efficient database schemas and optimizing queries",
            color: "#8b5cf6", //  Purple
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Creating intuitive user interfaces with modern design principles",
            color: "#ec4899", // Pink
        },
        {
            icon: ShoppingCart,
            title: "E-Commerce Solutions",
            description: "Building complete e-commerce platforms with payment integration",
            color: "#facc15", //  Yellow
        },
    ]

    return (
        <section id="services" className="py-20 md:py-32 bg-muted/30" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* 🟢 Header Section */}
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            Services
                        </motion.h2>

                        <motion.div
                            className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 dark:from-orange-400 dark:via-pink-400 dark:to-yellow-300 shadow-md"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 96 } : {}}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        />

                        <motion.p
                            className="text-lg text-foreground max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5 }}
                        >
                            Comprehensive web development services to bring your ideas to life
                        </motion.p>
                    </div>

                    {/* 🟢 Services Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
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
                                    {/* 🟢 Added text-center to align all content in the center */}

                                    {/* 🟢 Centered colorful icon */}
                                    <div className="flex items-center justify-center mb-6">
                                        <div
                                            className="p-4 rounded-xl shadow-lg"
                                            style={{
                                                backgroundColor: `${service.color}20`, // 🟢 Added faint background color
                                            }}
                                        >
                                            <service.icon
                                                className="h-8 w-8"
                                                style={{ color: service.color }} // 🟢 Real icon color applied
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-800 dark:text-gray-400 leading-relaxed">
                                            {service.description}
                                        </p>
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
