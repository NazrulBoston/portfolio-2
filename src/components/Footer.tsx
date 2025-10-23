"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Youtube, Facebook, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Social links with colors
  const socialLinks = [
    { icon: Github, href: "https://github.com/NazrulBoston", color: "#181717" },
    { icon: Linkedin, href: "https://linkedin.com/", color: "#0A66C2" },
    { icon: Youtube, href: "https://youtube.com/@triplesisters123", color: "#FF0000" },
    { icon: Facebook, href: "https://www.facebook.com/nazrul.dobon.islam/", color: "#1877F2" },
    { icon: Mail, href: "#contact", color: "#EA4335" },
  ]

  // Footer nav items (same as navbar)
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    // 🟢 Removed background color — transparent footer
    <footer className="border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-8">

          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            nazrul.dev
          </motion.a>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon.name}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon
                  className="h-6 w-6 transition-transform"
                  style={{ color: social.color }}
                />
              </motion.a>
            ))}
          </div>

          {/* 🟢 Footer navigation with same hover effect as navbar */}
          <div className="flex flex-wrap justify-center gap-8 text-base font-medium">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-transparent bg-clip-text 
                           bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 
                           transition-all duration-300 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center gap-2 justify-center">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Nazrul Islam
            </p>
            <p className="mt-2">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
