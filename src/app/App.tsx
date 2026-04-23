import { motion } from "motion/react";
import { Smartphone, Users, Calendar, BarChart, MapPin, Clock, CheckCircle, Play } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import zulopeImage from "../imports/Zulope.png";

export default function App() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const screenshots = [
    zulopeImage,
    zulopeImage,
    zulopeImage,
    zulopeImage,
  ];

  const partnerFeatures = [
    { icon: Users, title: "Manage Stylists", desc: "Add and manage your salon team" },
    { icon: Calendar, title: "Manual Booking", desc: "Book appointments for your clients" },
    { icon: BarChart, title: "Analytics", desc: "Track your business performance" },
    { icon: CheckCircle, title: "Services", desc: "Add and manage your services" },
  ];

  const userFeatures = [
    { icon: MapPin, title: "Find Salons", desc: "Discover nearest salons" },
    { icon: Calendar, title: "Book Online", desc: "Book appointments instantly" },
    { icon: Clock, title: "Real-time", desc: "See available time slots" },
    { icon: Smartphone, title: "Easy to Use", desc: "Simple and intuitive interface" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl mb-6"
          >
            Zulope
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
            Complete Salon Management & Booking Solution
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a href="#partner" className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition">
              For Salon Owners
            </a>
            <a href="#users" className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition">
              For Customers
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Animated Screenshots Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-12 text-gray-800"
          >
            See It In Action
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="rounded-2xl shadow-xl overflow-hidden"
              >
                <ImageWithFallback
                  src={screenshot}
                  alt={`Zulope Screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zulope Partner Section */}
      <section id="partner" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-purple-600">Zulope Partner</h2>
            <p className="text-xl text-gray-600">Powerful tools for salon owners</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnerFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner Screenshots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-3xl text-center mb-8 text-purple-600">App Screenshots</h3>
            <div className="flex gap-6 overflow-x-auto pb-4 px-4 scrollbar-hide">
              {[1, 2, 3, 4, 5].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="flex-shrink-0 w-64 rounded-3xl shadow-2xl overflow-hidden bg-white p-2"
                >
                  <div className="rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src={zulopeImage}
                      alt={`Zulope Partner Screenshot ${index}`}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zulope User App Section */}
      <section id="users" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-pink-600">Zulope</h2>
            <p className="text-xl text-gray-600">Find and book your perfect salon</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {userFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl shadow-lg"
              >
                <feature.icon className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* User App Screenshots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-3xl text-center mb-8 text-pink-600">App Screenshots</h3>
            <div className="flex gap-6 overflow-x-auto pb-4 px-4 scrollbar-hide">
              {[1, 2, 3, 4, 5].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="flex-shrink-0 w-64 rounded-3xl shadow-2xl overflow-hidden bg-white p-2"
                >
                  <div className="rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src={zulopeImage}
                      alt={`Zulope Screenshot ${index}`}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-12 text-gray-800"
          >
            Watch Demo
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Zulope Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center mt-4 text-gray-600">
              Replace the YouTube video ID in the embed URL above with your actual demo video
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl mb-8 text-gray-800"
          >
            Follow Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/zulope"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition"
            >
              <span className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow on Instagram
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-4">Developed by</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://thegksoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
            >
              GK Soft
            </motion.a>
            <p className="mt-6 text-gray-400">
              © 2026 Zulope. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
