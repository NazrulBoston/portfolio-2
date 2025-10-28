"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Facebook, Github, Linkedin, Mail, Youtube } from "lucide-react";
import { ReactTyped } from "react-typed";

export function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20
                 bg-gradient-to-b from-gray-50 via-white to-gray-100
                 dark:from-gray-900 dark:via-gray-950 dark:to-black
                 transition-colors duration-500"
        >
            {/* Subtle Animated Background Glows */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 dark:bg-orange-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/25 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Intro Line */}
                        <p className="text-orange-500 dark:text-orange-400 font-semibold text-lg mb-4">
                            Hi, I’m
                        </p>

                        {/* Name */}
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                            Nazrul Islam
                        </h1>

                        {/* Title and Typing Effect */}
                         
                    <h2 className="my-2 text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-white ">
                        <ReactTyped
                            strings={[
                                "MERN Stack Developer",
                                "Frontend Web Developer",
                                "UI/UX Enthusiast",
                                "Creative Problem Solver",
                                "Tech Enthusiast",
                            ]}
                            typeSpeed={80}
                            backSpeed={40}
                            loop
                        />
                    </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-800 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                            I craft seamless and scalable web applications using MongoDB,
                            Express.js, React, and Node.js — transforming ideas into
                            interactive digital experiences.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center mb-12">
                            <Button
                                size="lg"
                                className="bg-orange-500 hover:bg-orange-600 text-white border-none"
                                asChild
                            >
                                <a href="#projects">View My Work</a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                                asChild
                            >
                                <a href="#contact">Get In Touch</a>
                            </Button>

                            {/*Download Resume Button */}
                            <Button
                                size="lg"
                                variant='outline'
                                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                                asChild
                            >
                                {/* Link to your PDF resume in the public folder */}
                                <a
                                    href="/Nazrul_Islam_Resume.pdf"
                                    download="Nazrul_Islam_Resume.pdf"
                                >
                                    Download Resume
                                </a>
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 justify-center">
                            {[
                                { icon: Github, href: "https://github.com/NazrulBoston" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/nazrul-islam-4a7912394/", color: "#0A66C2" },
                                { icon: Youtube, href: "https://youtube.com/@triplesisters123", color: "#FF0000" },
                                { icon: Facebook, href: "https://www.facebook.com/nazrul.dobon.islam/", color: "#1877F2" },
                                { icon: Mail, href: "#contact", color: "#EA4335" },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {social.icon === Github ? (
                                        // GitHub icon (changes color based on dark/light mode)
                                        <social.icon
                                            className="h-6 w-6 text-[#181717] dark:text-white transition-colors"
                                        />
                                    ) : (
                                        // All other icons (fixed brand colors)
                                        <social.icon
                                            className="h-6 w-6 transition-transform"
                                            style={{ color: social.color }}
                                        />
                                    )}
                                </motion.a>
                            ))}
                        </div>

                    </motion.div>
                </div>

                {/* Down Arrow Animation */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ArrowDown className="h-6 w-6 text-red-400 dark:text-red-500" />
                </motion.div>
            </div>
        </section>
    );
}
