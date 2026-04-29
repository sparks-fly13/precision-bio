import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Battery,
  FlaskConical,
  ShieldCheck,
  CreditCard,
  Truck,
  Zap,
  Atom,
  Target,
  Eye,
  Rocket,
  Heart,
  ChevronRight,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { productCategories, companyInfo } from "../data/products";

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark">
    {/* Animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium border border-primary/30 mb-6">
              <Zap size={14} />
              Certified MSME Enterprise
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            One-Stop Provider
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">
              For Energy Research
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg"
          >
            Battery Consumable Solutions — your trusted supplier. High-performance
            materials and equipment for cutting-edge battery research and development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            >
              Explore Products
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex items-center gap-8 text-gray-400"
          >
            {[
              { label: "Products", value: "100+" },
              { label: "Categories", value: "14" },
              { label: "Institutions", value: "50+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right side - abstract visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Glowing orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 blur-2xl animate-pulse" />
            </div>
            {/* Floating cards */}
            {[
              { icon: Battery, label: "Battery Materials", x: "10%", y: "15%", delay: 0.4 },
              { icon: FlaskConical, label: "Lab Equipment", x: "55%", y: "5%", delay: 0.6 },
              { icon: Atom, label: "Nano Materials", x: "65%", y: "55%", delay: 0.8 },
              { icon: Target, label: "Quality Assured", x: "5%", y: "60%", delay: 1 },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl"
                style={{ left: item.x, top: item.y }}
              >
                <item.icon size={28} className="text-primary-light mb-2" />
                <p className="text-white text-xs font-medium whitespace-nowrap">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" fill="none" className="w-full">
        <path
          d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="white"
        />
      </svg>
    </div>
  </section>
);

const CategoryShowcase = () => {
  const iconMap = { Battery, FlaskConical };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Comprehensive Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Energy Research
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            From raw materials to advanced testing equipment, we provide everything
            you need for battery research and development.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {productCategories.map((cat, catIdx) => {
            const Icon = iconMap[cat.icon] || Battery;
            return (
              <AnimatedSection
                key={cat.id}
                delay={catIdx * 0.15}
                direction={catIdx % 2 === 0 ? "left" : "right"}
              >
                <div className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />

                  <div className="relative">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                        <Icon size={28} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {cat.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {cat.subcategories.slice(0, 6).map((sub) => (
                        <Link
                          key={sub.id}
                          to={`/products/${sub.id}`}
                          className="group/item flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-colors"
                        >
                          <ChevronRight
                            size={14}
                            className="text-gray-300 group-hover/item:text-primary shrink-0 transition-colors"
                          />
                          <span className="text-sm text-gray-600 group-hover/item:text-primary transition-colors truncate">
                            {sub.name}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {cat.subcategories.length > 6 && (
                      <p className="text-xs text-gray-400 mt-2 pl-3">
                        +{cat.subcategories.length - 6} more categories
                      </p>
                    )}

                    <Link
                      to="/products"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group/link"
                    >
                      View all {cat.name.toLowerCase()}
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const iconMap = { ShieldCheck, CreditCard, Truck };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Trusted by Leading Institutions
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            We deliver excellence through reliability, flexibility, and
            unmatched service quality.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {companyInfo.whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="relative group text-center p-8 rounded-3xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                  <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const VisionMissionValues = () => {
  const items = [
    {
      icon: Eye,
      title: "Our Vision",
      text: companyInfo.vision,
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Rocket,
      title: "Our Mission",
      text: companyInfo.mission,
      gradient: "from-secondary to-secondary-dark",
    },
    {
      icon: Heart,
      title: "Our Values",
      text: companyInfo.values,
      gradient: "from-accent to-accent-dark",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Who We Are
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Driven by Purpose
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15} direction="scale">
              <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white group hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full" />
                <div
                  className={`inline-flex p-3 bg-gradient-to-br ${item.gradient} rounded-xl mb-5`}
                >
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-24 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
    </div>

    <AnimatedSection className="relative max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
        Ready to Power Your Research?
      </h2>
      <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
        Get in touch with our team to discuss your requirements. We offer
        flexible solutions tailored to your research needs.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all shadow-lg"
        >
          Get in Touch
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20"
        >
          Browse Catalog
        </Link>
      </div>
    </AnimatedSection>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <CategoryShowcase />
    <WhyChooseUs />
    <VisionMissionValues />
    <CTASection />
  </>
);

export default Home;
