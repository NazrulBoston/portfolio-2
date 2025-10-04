"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 30, suffix: "+", label: "Happy Clients" },
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
  ]

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-primary/50 group">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  <CountUpAnimation end={stat.value} suffix={stat.suffix} isInView={isInView} delay={index * 0.1} />
                  <p className="text-muted-foreground font-medium mt-2">{stat.label}</p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUpAnimation({
  end,
  suffix,
  isInView,
  delay,
}: { end: number; suffix: string; isInView: boolean; delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const timeout = setTimeout(() => {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, end, delay])

  return (
    <h3 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      {count}
      {suffix}
    </h3>
  )
}
