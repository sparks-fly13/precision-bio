import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { productCategories } from "../data/products";

const SearchOverlay = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const matches = [];

    for (const cat of productCategories) {
      for (const sub of cat.subcategories) {
        if (sub.name.toLowerCase().includes(q) || sub.description.toLowerCase().includes(q)) {
          matches.push({
            type: "category",
            name: sub.name,
            description: sub.description,
            path: `/products/${sub.id}`,
            parent: cat.name,
          });
        }
        for (const prod of sub.products) {
          if (prod.name.toLowerCase().includes(q)) {
            matches.push({
              type: "product",
              name: prod.name,
              description: sub.name,
              path: `/products/${sub.id}`,
              parent: cat.name,
            });
          }
        }
      }
    }

    const pages = [
      { name: "Home", path: "/", description: "Landing page" },
      { name: "About Us", path: "/about", description: "Company information and certifications" },
      { name: "Contact", path: "/contact", description: "Get in touch with us" },
      { name: "Products", path: "/products", description: "Browse all products" },
    ];

    for (const page of pages) {
      if (page.name.toLowerCase().includes(q) || page.description.toLowerCase().includes(q)) {
        matches.push({ type: "page", ...page });
      }
    }

    return matches.slice(0, 12);
  }, [query]);

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[15vh]"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
              <Search size={20} className="text-gray-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, categories, pages..."
                className="flex-1 text-lg outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
              />
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Results */}
            {query.trim() && (
              <div className="max-h-[400px] overflow-y-auto p-2">
                {results.length > 0 ? (
                  <div className="space-y-0.5">
                    {results.map((result, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelect(result.path)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-left group"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
                            {result.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {result.parent && (
                              <span className="text-primary/70">{result.parent} · </span>
                            )}
                            {result.description}
                          </p>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md shrink-0">
                          {result.type}
                        </span>
                        <ArrowRight
                          size={14}
                          className="text-gray-300 group-hover:text-primary shrink-0 transition-colors"
                        />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-gray-500 text-sm">
                      No results found for "{query}"
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Try searching for a product name or category
                    </p>
                  </div>
                )}
              </div>
            )}

            {!query.trim() && (
              <div className="px-6 py-8 text-center">
                <p className="text-gray-400 text-sm">
                  Start typing to search across all products and pages
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
