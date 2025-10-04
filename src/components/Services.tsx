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
      color: "from-primary to-primary/70",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Creating robust APIs with Node.js, Express, and MongoDB",
      color: "from-secondary to-secondary/70",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Crafting beautiful, responsive designs for all devices",
      color: "from-accent to-accent/70",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries",
      color: "from-chart-4 to-chart-4/70",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with modern design principles",
      color: "from-chart-5 to-chart-5/70",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Building complete e-commerce platforms with payment integration",
      color: "from-primary to-secondary",
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
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Services
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
              Comprehensive web development services to bring your ideas to life
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />
                  <div className="relative">
                    <div className={`mb-6 inline-block p-4 bg-gradient-to-br ${service.color} rounded-xl shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
