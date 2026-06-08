import { motion } from "motion/react";
import {
  Smartphone,
  Users,
  Calendar,
  BarChart,
  MapPin,
  Clock,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Monitor,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import zulopeImage from "../imports/Zulope.png";
import zulopeIcon from "../imports/icon1.png";
import partnerScreen1 from "../imports/1-login-screen.jpg";
import partnerScreen2 from "../imports/2-salon-onboarding-screen.jpg";
import partnerScreen3 from "../imports/3-otp_screen.jpg";
import partnerScreen4 from "../imports/4-store-timing.jpg";
import partnerScreen5 from "../imports/5-location-selection.jpg";
import partnerScreen6 from "../imports/6-first-login-home-screen.jpg";
import partnerScreen7 from "../imports/7-adding-stylist.jpg";
import partnerScreen8 from "../imports/8-adding-stylist-filled.jpg";
import partnerScreen9 from "../imports/9-stylist-listing.jpg";
import partnerScreen10 from "../imports/10-account-settings.jpg";
import partnerScreen11 from "../imports/11-offfer-page.jpg";
import partnerScreen12 from "../imports/12-homepage-with-all-details.jpg";
import partnerScreen13 from "../imports/13-deleteing-account.jpg";
import partnerScreen14 from "../imports/14-manual-booking.jpg";
import partnerScreen15 from "../imports/15-manual-booking-1.jpg";
import partnerScreen16 from "../imports/16-manual-bboking-3.jpg";
import partnerScreen17 from "../imports/17-manual-booking-4.jpg";
import partnerScreen18 from "../imports/18-manual-booking-8.jpg";
import partnerScreen19 from "../imports/19-booking-show.jpg";
import partnerScreen20 from "../imports/20-stlyist-booking-list.jpg";
import partnerScreen21 from "../imports/21-analytics.jpg";
import partnerScreen22 from "../imports/22-analytics-2.jpg";
import userScreen1 from "../imports/1-login.jpg";
import userScreen2 from "../imports/2-verify-otp.jpg";
import userScreen3 from "../imports/3-onboarding.jpg";
import userScreen4 from "../imports/4-listingpage.jpg";
import userScreen5 from "../imports/6-booking-salon-selection.jpg";
import userScreen6 from "../imports/7-booking-stylist-selection.jpg";
import userScreen7 from "../imports/8-booking-timing-selection.jpg";
import userScreen8 from "../imports/9-booking-summary.jpg";
import userScreen9 from "../imports/10-booking-confirmation.jpg";
import userScreen10 from "../imports/11-booking-listing.jpg";
import userScreen11 from "../imports/12-fav-salon-listing.jpg";
import userScreen12 from "../imports/13-accounts-2-page.jpg";
import userScreen13 from "../imports/13-accounts-page.jpg";
import userScreen14 from "../imports/14-notificaitons-page.jpg";
import userScreen15 from "../imports/15-legal.jpg";
import userScreen16 from "../imports/16-legal-2.jpg";

type SeoConfig = {
  title: string;
  description: string;
  canonicalPath: string;
};

type LandingConfig = {
  path: string;
  badge: string;
  heading: string;
  summary: string;
  bullets: string[];
  seo: SeoConfig;
};

const HOME_SEO: SeoConfig = {
  title: "Zulope | Salon Booking App & Salon Management Software",
  description:
    "Zulope is a free salon booking app and salon management software. Book hair, beauty and spa appointments online.",
  canonicalPath: "/",
};

const LANDING_PAGES: LandingConfig[] = [
  {
    path: "/salon-booking-app",
    badge: "Keyword Page",
    heading: "Salon Booking App for Fast Online Appointments",
    summary:
      "Zulope helps customers discover nearby salons, compare available slots, and book appointments in a few taps.",
    bullets: [
      "Live time-slot availability and instant confirmation",
      "Find nearby salons, services, and preferred stylists",
      "Simple booking flow from discovery to confirmation",
      "Built for hair salons, beauty studios, and spa centers",
    ],
    seo: {
      title: "Salon Booking App | Zulope",
      description:
        "Need a salon booking app? Zulope lets customers find salons, choose services, and book appointments online with real-time slot availability.",
      canonicalPath: "/salon-booking-app",
    },
  },
  {
    path: "/salon-management-software",
    badge: "Keyword Page",
    heading: "Salon Management Software for Owners and Teams",
    summary:
      "Zulope gives salon owners one place to manage staff, appointments, services, and business performance.",
    bullets: [
      "Manage stylists, schedules, and walk-in bookings",
      "Track bookings, revenue trends, and team performance",
      "Run daily operations from mobile and web",
      "Designed for single-branch and growing salons",
    ],
    seo: {
      title: "Salon Management Software | Zulope",
      description:
        "Zulope is salon management software for scheduling, stylist management, appointment tracking, and analytics for modern salons.",
      canonicalPath: "/salon-management-software",
    },
  },
  {
    path: "/online-salon-appointment-booking",
    badge: "Keyword Page",
    heading: "Online Salon Appointment Booking Made Simple",
    summary:
      "Customers can book salon appointments online while salon owners receive organized bookings and schedule visibility.",
    bullets: [
      "Online booking with clear service and time selection",
      "Reduced no-show risk with digital booking records",
      "Faster front-desk workflow with manual and online booking",
      "Works for grooming, beauty, and spa appointment needs",
    ],
    seo: {
      title: "Online Salon Appointment Booking | Zulope",
      description:
        "Enable online salon appointment booking with Zulope. Let clients book services by time and stylist while your team manages schedules easily.",
      canonicalPath: "/online-salon-appointment-booking",
    },
  },
];

function setSeoMeta(config: SeoConfig) {
  document.title = config.title;

  const upsertMeta = (
    selector: string,
    attribute: string,
    value: string,
    content: string,
  ) => {
    let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attribute, value);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  upsertMeta(
    'meta[name="description"]',
    "name",
    "description",
    config.description,
  );
  upsertMeta('meta[property="og:title"]', "property", "og:title", config.title);
  upsertMeta(
    'meta[property="og:description"]',
    "property",
    "og:description",
    config.description,
  );
  upsertMeta(
    'meta[name="twitter:title"]',
    "name",
    "twitter:title",
    config.title,
  );
  upsertMeta(
    'meta[name="twitter:description"]',
    "name",
    "twitter:description",
    config.description,
  );

  let canonical = document.head.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", `https://zulope.com${config.canonicalPath}`);

  const ogUrl = document.head.querySelector(
    'meta[property="og:url"]',
  ) as HTMLMetaElement | null;
  if (ogUrl) {
    ogUrl.setAttribute("content", `https://zulope.com${config.canonicalPath}`);
  }
}

function KeywordLandingPage({ config }: { config: LandingConfig }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white px-4 py-16">
      <section className="max-w-4xl mx-auto">
        <p className="inline-block rounded-full bg-purple-100 text-purple-700 px-4 py-1 text-sm mb-4">
          {config.badge}
        </p>
        <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
          {config.heading}
        </h1>
        <p className="text-lg text-gray-700 mb-8">{config.summary}</p>

        <div className="bg-white rounded-2xl shadow-sm p-8 border border-purple-100">
          <h2 className="text-2xl text-purple-700 mb-4">
            Why salons choose Zulope
          </h2>
          <ul className="space-y-3 text-gray-700">
            {config.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/"
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
          >
            Explore Full Product
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.thegksoft.zulope.customer&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-300 text-purple-700 px-6 py-3 rounded-full hover:bg-purple-50 transition"
          >
            Get Customer App
          </a>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [partnerStartIndex, setPartnerStartIndex] = useState(0);
  const [userStartIndex, setUserStartIndex] = useState(0);
  const screenshotsPerView = 5;

  const normalizedPath =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/\/+$/, "") || "/"
      : "/";

  const landingPage = LANDING_PAGES.find(
    (page) => page.path === normalizedPath,
  );

  useEffect(() => {
    setSeoMeta(landingPage?.seo ?? HOME_SEO);
  }, [landingPage]);

  if (landingPage) {
    return <KeywordLandingPage config={landingPage} />;
  }

  const partnerScreenshots = [
    partnerScreen1,
    partnerScreen2,
    partnerScreen3,
    partnerScreen4,
    partnerScreen5,
    partnerScreen6,
    partnerScreen7,
    partnerScreen8,
    partnerScreen9,
    partnerScreen10,
    partnerScreen11,
    partnerScreen12,
    partnerScreen13,
    partnerScreen14,
    partnerScreen15,
    partnerScreen16,
    partnerScreen17,
    partnerScreen18,
    partnerScreen19,
    partnerScreen20,
    partnerScreen21,
    partnerScreen22,
  ];

  const userScreenshots = [
    userScreen1,
    userScreen2,
    userScreen3,
    userScreen4,
    userScreen5,
    userScreen6,
    userScreen7,
    userScreen8,
    userScreen9,
    userScreen10,
    userScreen11,
    userScreen12,
    userScreen13,
    userScreen14,
    userScreen15,
    userScreen16,
  ];

  const partnerFeatures = [
    {
      icon: Users,
      title: "Manage Stylists",
      desc: "Add and manage your salon team",
    },
    {
      icon: Calendar,
      title: "Manual Booking",
      desc: "Book appointments for your clients",
    },
    {
      icon: BarChart,
      title: "Analytics",
      desc: "Track your business performance",
    },
    {
      icon: CheckCircle,
      title: "Services",
      desc: "Add and manage your services",
    },
  ];

  const userFeatures = [
    { icon: MapPin, title: "Find Salons", desc: "Discover nearest salons" },
    {
      icon: Calendar,
      title: "Book Online",
      desc: "Book appointments instantly",
    },
    { icon: Clock, title: "Real-time", desc: "See available time slots" },
    {
      icon: Smartphone,
      title: "Easy to Use",
      desc: "Simple and intuitive interface",
    },
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
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <ImageWithFallback
              src={zulopeIcon}
              alt="Zulope Logo"
              className="h-20 w-auto md:h-28"
            />
            <h1 className="text-5xl md:text-7xl">Zulope</h1>
          </motion.div>
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
            <a
              href="#partner"
              className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition"
            >
              For Salon Owners
            </a>
            <a
              href="#users"
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition"
            >
              For Customers
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Zulope Partner Section */}
      <section
        id="partner"
        className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-purple-600">
              Zulope Partner
            </h2>
            <p className="text-xl text-gray-600">
              Powerful tools for salon owners
            </p>
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
            <h3 className="text-3xl text-center mb-8 text-purple-600">
              App Screenshots
            </h3>

            <div className="relative">
              <div className="flex gap-6 justify-center px-4">
                {partnerScreenshots
                  .slice(
                    partnerStartIndex,
                    partnerStartIndex + screenshotsPerView,
                  )
                  .map((screenshot, index) => (
                    <motion.div
                      key={partnerStartIndex + index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="flex-shrink-0 w-64 rounded-3xl shadow-2xl overflow-hidden bg-white p-2"
                    >
                      <div className="rounded-2xl overflow-hidden">
                        <ImageWithFallback
                          src={screenshot}
                          alt={`Zulope Partner Screenshot ${partnerStartIndex + index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() =>
                  setPartnerStartIndex(
                    Math.max(0, partnerStartIndex - screenshotsPerView),
                  )
                }
                disabled={partnerStartIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6 text-purple-600" />
              </button>

              <button
                onClick={() =>
                  setPartnerStartIndex(
                    Math.min(
                      partnerScreenshots.length - screenshotsPerView,
                      partnerStartIndex + screenshotsPerView,
                    ),
                  )
                }
                disabled={
                  partnerStartIndex + screenshotsPerView >=
                  partnerScreenshots.length
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 text-purple-600" />
              </button>
            </div>

            {/* Counter */}
            <p className="text-center mt-6 text-gray-600">
              Showing {partnerStartIndex + 1}-
              {Math.min(
                partnerStartIndex + screenshotsPerView,
                partnerScreenshots.length,
              )}{" "}
              of {partnerScreenshots.length}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Web App Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block bg-white/20 p-4 rounded-full mb-6"
            >
              <Monitor className="w-16 h-16" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl mb-6">Premium Web Access</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Web app for premium salons who need access to everything from the
              web
            </p>

            <div className="flex flex-wrap gap-6 justify-center items-center">
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full">
                <Star className="w-6 h-6 text-yellow-300" />
                <span className="text-lg">Premium Feature</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full">
                <Monitor className="w-6 h-6" />
                <span className="text-lg">Full Web Dashboard</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full">
                <BarChart className="w-6 h-6" />
                <span className="text-lg">Advanced Analytics</span>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-lg text-purple-100"
            >
              Manage your entire salon business from any computer with our
              comprehensive web platform
            </motion.p>
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
            <p className="text-xl text-gray-600">
              Find and book your perfect salon
            </p>
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
            <h3 className="text-3xl text-center mb-8 text-pink-600">
              App Screenshots
            </h3>

            <div className="relative">
              <div className="flex gap-6 justify-center px-4">
                {userScreenshots
                  .slice(userStartIndex, userStartIndex + screenshotsPerView)
                  .map((screenshot, index) => (
                    <motion.div
                      key={userStartIndex + index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="flex-shrink-0 w-64 rounded-3xl shadow-2xl overflow-hidden bg-white p-2"
                    >
                      <div className="rounded-2xl overflow-hidden">
                        <ImageWithFallback
                          src={screenshot}
                          alt={`Zulope Screenshot ${userStartIndex + index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() =>
                  setUserStartIndex(
                    Math.max(0, userStartIndex - screenshotsPerView),
                  )
                }
                disabled={userStartIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6 text-pink-600" />
              </button>

              <button
                onClick={() =>
                  setUserStartIndex(
                    Math.min(
                      userScreenshots.length - screenshotsPerView,
                      userStartIndex + screenshotsPerView,
                    ),
                  )
                }
                disabled={
                  userStartIndex + screenshotsPerView >= userScreenshots.length
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 text-pink-600" />
              </button>
            </div>

            {/* Counter */}
            <p className="text-center mt-6 text-gray-600">
              Showing {userStartIndex + 1}-
              {Math.min(
                userStartIndex + screenshotsPerView,
                userScreenshots.length,
              )}{" "}
              of {userScreenshots.length}
            </p>
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
                src="https://www.youtube.com/embed/VrJto2wAdNw"
                title="Zulope Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
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
            className="flex gap-6 justify-center flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/zulope_coms/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow on Instagram
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.youtube.com/@zulope"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Follow on YouTube
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-12 text-gray-800"
          >
            Contact Us
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl mb-6 text-purple-600">Get in Touch</h3>
            </motion.div>

            {/* Download Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl mb-6 text-pink-600">Download Apps</h3>

              <div className="space-y-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://play.google.com/store/apps/details?id=com.thegksoft.zulope.customer&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:shadow-md transition"
                >
                  <div className="bg-white p-3 rounded-lg">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z"
                        fill="#00D663"
                      />
                      <path
                        d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z"
                        fill="#FFCE00"
                      />
                      <path
                        d="M20.16 10.81C20.5 11.08 20.75 11.53 20.75 12C20.75 12.47 20.53 12.92 20.16 13.19L17.89 14.5L15.43 12L17.89 9.5L20.16 10.81Z"
                        fill="#FF3E00"
                      />
                      <path
                        d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"
                        fill="#00A6FF"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Customer App</p>
                    <p className="text-gray-800">Get it on Google Play</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://play.google.com/store/apps/details?id=com.thegksoft.zulope.store&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition"
                >
                  <div className="bg-white p-3 rounded-lg">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z"
                        fill="#00D663"
                      />
                      <path
                        d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z"
                        fill="#FFCE00"
                      />
                      <path
                        d="M20.16 10.81C20.5 11.08 20.75 11.53 20.75 12C20.75 12.47 20.53 12.92 20.16 13.19L17.89 14.5L15.43 12L17.89 9.5L20.16 10.81Z"
                        fill="#FF3E00"
                      />
                      <path
                        d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"
                        fill="#00A6FF"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Partner App</p>
                    <p className="text-gray-800">Get it on Google Play</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
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
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://thegksoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-purple-300 hover:text-purple-200 transition"
            >
              thegksoft.com
            </motion.a>
            <nav
              aria-label="Legal"
              className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-400"
            >
              <a href="/privacy-policy/" className="hover:text-white transition">
                Privacy Policy
              </a>
              <span aria-hidden="true" className="text-gray-600">·</span>
              <a href="/delete-account/" className="hover:text-white transition">
                Delete Account
              </a>
              <span aria-hidden="true" className="text-gray-600">·</span>
              <a
                href="/partner/privacy-policy/"
                className="hover:text-white transition"
              >
                Partner Privacy Policy
              </a>
              <span aria-hidden="true" className="text-gray-600">·</span>
              <a
                href="/partner/delete-account/"
                className="hover:text-white transition"
              >
                Partner Delete Account
              </a>
            </nav>
            <p className="mt-6 text-gray-400">
              © 2026 Zulope. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
