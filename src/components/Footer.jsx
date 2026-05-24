import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { LinkedinIcon, TwitterIcon, FacebookIcon, InstagramIcon } from "./SocialIcons";
import { productCategories, companyInfo } from "../data/products";
import Logo from "../assets/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: LinkedinIcon, label: "LinkedIn", href: companyInfo.social.linkedin },
    { icon: TwitterIcon, label: "Twitter", href: companyInfo.social.twitter },
    { icon: FacebookIcon, label: "Facebook", href: companyInfo.social.facebook },
    { icon: InstagramIcon, label: "Instagram", href: companyInfo.social.instagram },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src={Logo}
                alt="Precision Bioelectronics"
                className="h-12 w-auto rounded-lg bg-white p-1"
              />
              <div>
                <h3 className="text-base font-bold leading-tight">
                  Precision
                </h3>
                <p className="text-xs text-gray-400 -mt-0.5">Bioelectronics</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {companyInfo.tagline}. Delivering high-performance battery materials
              and laboratory equipment for energy research institutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <nav className="space-y-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <ChevronRight
                    size={12}
                    className="text-gray-600 group-hover:text-primary transition-colors"
                  />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">
              Products
            </h4>
            <nav className="space-y-2.5">
              {productCategories.flatMap((cat) =>
                cat.subcategories.slice(0, 3).map((sub) => (
                  <Link
                    key={sub.id}
                    to={`/products/${sub.id}`}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-gray-600 group-hover:text-primary transition-colors"
                    />
                    {sub.name}
                  </Link>
                ))
              ).slice(0, 7)}
              <Link
                to="/products"
                className="flex items-center gap-1 text-sm text-primary hover:text-primary-light transition-colors font-medium mt-2"
              >
                View all
                <ArrowRight size={12} />
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.contactEmail}`}
                className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
                {companyInfo.contactEmail}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  {companyInfo.address.line1}, {companyInfo.address.line2},{" "}
                  {companyInfo.address.city} - {companyInfo.address.pin}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500">
                MSME Certified: {companyInfo.udyamNumber}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} Precision Bioelectronics. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-600 hover:text-gray-400 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-xs text-gray-600 hover:text-gray-400 transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
