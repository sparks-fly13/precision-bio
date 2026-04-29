import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Eye,
  Rocket,
  Heart,
  ShieldCheck,
  CreditCard,
  Truck,
  Award,
  FileText,
  Download,
  Building,
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { companyInfo } from "../data/products";

const About = () => {
  const iconMap = { ShieldCheck, CreditCard, Truck };

  const milestones = [
    { icon: Calendar, label: "Incorporated", value: "February 2026" },
    { icon: Building, label: "Enterprise Type", value: "Micro (MSME)" },
    { icon: MapPin, label: "Headquarters", value: "Delhi, India" },
    { icon: Users, label: "Activity", value: "Wholesale – Scientific Equipment" },
  ];

  const pillars = [
    {
      title: "Pilot Cell Validation",
      desc: "End-to-end validation services for prototype battery cells, ensuring performance meets research specifications.",
    },
    {
      title: "Equipment R&D",
      desc: "Continuous research and development of cutting-edge laboratory equipment for advanced energy research.",
    },
    {
      title: "Materials Sourcing",
      desc: "Global sourcing network delivering premium quality materials at competitive prices for all battery chemistries.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium border border-primary/30 mb-6">
              <Building size={14} />
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Precision Bioelectronics
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {companyInfo.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 mb-6">
                A Fresh Perspective on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Global Energy
                </span>
              </h2>
              {companyInfo.about.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              <div className="mt-6 space-y-3">
                {companyInfo.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <p className="text-sm text-gray-700 font-medium">{h}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((m, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
                  >
                    <m.icon size={22} className="text-primary mb-3" />
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                      {m.label}
                    </p>
                    <p className="text-sm font-bold text-gray-900 mt-1">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Focus
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
              Three Pillars of Excellence
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.15}>
                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold mb-5">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15} direction="scale">
                <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white h-full">
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
              Trusted by Leading Institutions
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {companyInfo.whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
              return (
                <AnimatedSection key={item.title} delay={i * 0.15}>
                  <div className="text-center p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                    <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-6">
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

      {/* Certification */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                    <Award size={14} />
                    Certified Enterprise
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                    MSME Certified – Udyam Registration
                  </h2>
                  <p className="text-gray-600 mb-2">
                    Precision Bioelectronics is a registered Micro, Small and
                    Medium Enterprise (MSME) under the Government of India's Udyam
                    Registration program.
                  </p>
                  <div className="space-y-2 mt-4 mb-6">
                    <div className="flex items-center gap-3">
                      <FileText size={16} className="text-primary shrink-0" />
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Udyam Number:</span>{" "}
                        {companyInfo.udyamNumber}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-primary shrink-0" />
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Registration Date:</span>{" "}
                        09/03/2026
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building size={16} className="text-primary shrink-0" />
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Classification:</span>{" "}
                        Micro Enterprise (2025-26)
                      </p>
                    </div>
                  </div>
                  <a
                    href="/Company Registration Certificate for proof.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                  >
                    <Download size={18} />
                    View Certificate (PDF)
                  </a>
                </div>

                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
                    <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-lg text-center">
                      <Award size={64} className="text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        UDYAM Certified
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        Ministry of MSME, Government of India
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                        <CheckCircle size={16} />
                        Verified Enterprise
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-white/80 mb-8">
            Join leading institutions who trust Precision Bioelectronics for their
            energy research needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all shadow-lg"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
