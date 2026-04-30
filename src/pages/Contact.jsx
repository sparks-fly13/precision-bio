import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  User,
  Building,
  FileText,
} from "lucide-react";
import { LinkedinIcon, TwitterIcon, FacebookIcon, InstagramIcon } from "../components/SocialIcons";
import AnimatedSection from "../components/AnimatedSection";
import { companyInfo } from "../data/products";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: null, message: "" });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "Not provided",
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
          to_email: companyInfo.contactEmail,
          reply_to: formData.email,
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully! We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email us directly at " +
          companyInfo.contactEmail,
      });
    } finally {
      setSending(false);
      setTimeout(() => setStatus({ type: null, message: "" }), 7000);
    }
  };

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: companyInfo.phone,
      href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: companyInfo.contactEmail,
      href: `mailto:${companyInfo.contactEmail}`,
      color: "from-primary to-primary-dark",
    },
    {
      icon: MapPin,
      label: "Address",
      value: `${companyInfo.address.line1}, ${companyInfo.address.line2}, ${companyInfo.address.city} - ${companyInfo.address.pin}`,
      href: `https://www.google.com/maps/search/?api=1&query=Pitampura+Delhi+110034`,
      color: "from-secondary to-secondary-dark",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM IST",
      color: "from-accent to-accent-dark",
    },
  ];

  const socialLinks = [
    { icon: LinkedinIcon, label: "LinkedIn", href: companyInfo.social.linkedin },
    { icon: TwitterIcon, label: "Twitter", href: companyInfo.social.twitter },
    { icon: FacebookIcon, label: "Facebook", href: companyInfo.social.facebook },
    { icon: InstagramIcon, label: "Instagram", href: companyInfo.social.instagram },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-linear-to-br from-gray-900 via-gray-800 to-primary-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium border border-primary/30 mb-6">
              <MessageSquare size={14} />
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions about our products? Need a custom quote? We'd love to
              hear from you. Reach out and our team will respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactDetails.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1} direction="scale">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div
                    className={`inline-flex p-3 bg-linear-to-br ${item.color} rounded-xl mb-4`}
                  >
                    <item.icon size={20} className="text-white" />
                  </div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.label === "Address" ? "_blank" : undefined}
                      rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-gray-800 hover:text-primary transition-colors wrap-break-word"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-800">
                      {item.value}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3" direction="left">
              <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                {status.type === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-xl flex items-start gap-3"
                  >
                    <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-accent font-medium">{status.message}</p>
                  </motion.div>
                )}

                {status.type === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                  >
                    <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700 font-medium">{status.message}</p>
                  </motion.div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company / Institution
                      </label>
                      <div className="relative">
                        <Building
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your organization"
                          className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 9876543210"
                          className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <FileText
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Product inquiry, quote request, etc."
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, the materials or equipment you need, quantities, and any specifications..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection className="lg:col-span-2" direction="right">
              <div className="space-y-6">
                {/* Map */}
                <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                  <iframe
                    title="Precision Bioelectronics Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.904!2d77.1385!3d28.6965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQxJzQ3LjQiTiA3N8KwMDgnMTguNiJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      Visit Our Office
                    </h3>
                    <p className="text-xs text-gray-500">
                      {companyInfo.address.line1}, {companyInfo.address.line2},{" "}
                      {companyInfo.address.city} - {companyInfo.address.pin}
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-50 rounded-xl text-gray-500 hover:text-primary hover:bg-primary/5 transition-all"
                        aria-label={s.label}
                      >
                        <s.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-linear-to-br from-primary to-primary-dark rounded-3xl p-6 text-white">
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <Phone size={18} />
                      <span className="text-sm">{companyInfo.phone}</span>
                    </a>
                    <a
                      href={`mailto:${companyInfo.contactEmail}`}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <Mail size={18} />
                      <span className="text-sm">{companyInfo.contactEmail}</span>
                    </a>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="shrink-0 mt-0.5" />
                      <span className="text-sm">Mon - Sat: 9:00 AM - 6:00 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
