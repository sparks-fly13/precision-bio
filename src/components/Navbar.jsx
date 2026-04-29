import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Menu, ChevronDown, ChevronRight } from "lucide-react";
import { productCategories } from "../data/products";
import SearchOverlay from "./SearchOverlay";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const productsRef = useRef(null);
  const productsTimeout = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location]);

  const handleProductsEnter = () => {
    clearTimeout(productsTimeout.current);
    setProductsOpen(true);
  };

  const handleProductsLeave = () => {
    productsTimeout.current = setTimeout(() => setProductsOpen(false), 200);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products", hasMega: true },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-white/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img src={Logo} alt="Precision Bioelectronics" className="h-12 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-primary leading-tight">
                  Precision
                </h1>
                <p className="text-xs font-medium text-secondary -mt-0.5">
                  Bioelectronics
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div
                    key={link.name}
                    ref={productsRef}
                    className="relative"
                    onMouseEnter={handleProductsEnter}
                    onMouseLeave={handleProductsLeave}
                  >
                    <Link
                      to={link.path}
                      className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                        isActive(link.path)
                          ? "text-primary bg-primary/5"
                          : "text-gray-700 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          productsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Mega Menu */}
                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-6">
                              {productCategories.map((cat) => (
                                <div key={cat.id}>
                                  <Link
                                    to={`/products`}
                                    className="text-sm font-bold text-primary uppercase tracking-wider mb-3 block hover:text-primary-dark transition-colors"
                                  >
                                    {cat.name}
                                  </Link>
                                  <div className="space-y-1">
                                    {cat.subcategories.map((sub) => (
                                      <Link
                                        key={sub.id}
                                        to={`/products/${sub.id}`}
                                        className="group flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                      >
                                        <ChevronRight
                                          size={14}
                                          className="mt-0.5 text-gray-400 group-hover:text-primary shrink-0 transition-colors"
                                        />
                                        <div className="min-w-0">
                                          <p className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
                                            {sub.name}
                                          </p>
                                          <p className="text-xs text-gray-500 line-clamp-1">
                                            {sub.description}
                                          </p>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <Link
                                to="/products"
                                className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                              >
                                View all products
                                <ChevronRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive(link.path)
                        ? "text-primary bg-primary/5"
                        : "text-gray-700 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-xl text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link) =>
                  link.hasMega ? (
                    <div key={link.name}>
                      <button
                        onClick={() =>
                          setMobileProductsOpen(!mobileProductsOpen)
                        }
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                          isActive(link.path)
                            ? "text-primary bg-primary/5"
                            : "text-gray-700"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            mobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 space-y-1">
                              {productCategories.map((cat) => (
                                <div key={cat.id} className="mb-3">
                                  <p className="text-xs font-bold text-primary uppercase tracking-wider px-4 py-1">
                                    {cat.name}
                                  </p>
                                  {cat.subcategories.map((sub) => (
                                    <Link
                                      key={sub.id}
                                      to={`/products/${sub.id}`}
                                      className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                              <Link
                                to="/products"
                                className="block px-4 py-2 text-sm font-semibold text-primary"
                              >
                                View all products →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                        isActive(link.path)
                          ? "text-primary bg-primary/5"
                          : "text-gray-700"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Navbar spacer */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
