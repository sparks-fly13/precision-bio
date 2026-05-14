import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Battery,
  FlaskConical,
  ArrowRight,
  Package,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { productCategories } from "../data/products";

const iconMap = { Battery, FlaskConical };

const Products = () => {
  const totalProducts = productCategories.reduce(
    (acc, cat) =>
      acc + cat.subcategories.reduce((a, s) => a + s.products.length, 0),
    0
  );

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-linear-to-br from-gray-900 via-gray-800 to-primary-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium border border-primary/30 mb-6">
              <Package size={14} />
              {totalProducts}+ Products Available
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Our Products
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive range of battery materials and experimental equipment
              for cutting-edge energy research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {productCategories.map((cat, catIdx) => {
        const Icon = iconMap[cat.icon] || Battery;
        return (
          <section
            key={cat.id}
            className={`py-20 ${catIdx % 2 === 0 ? "bg-white" : "bg-gray-500"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Icon size={28} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {cat.name}
                  </h2>
                  <p className="text-gray-500 mt-1">{cat.description}</p>
                </div>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cat.subcategories.map((sub, subIdx) => (
                  <AnimatedSection
                    key={sub.id}
                    delay={subIdx * 0.08}
                    direction="scale"
                  >
                    <Link
                      to={`/products/${sub.id}`}
                      className="group block h-full bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2.5 bg-linear-to-br from-primary/10 to-secondary/10 rounded-xl group-hover:scale-110 transition-transform">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                          {sub.products.length} items
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                        {sub.name}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                        {sub.description}
                      </p>

                      <div className="flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        View products
                        <ArrowRight size={14} />
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-linear-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-white/80 mb-8">
            Contact us for custom requirements. We source materials globally to
            meet your specific research needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all shadow-lg"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Products;
