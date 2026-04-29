import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Package, Box } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { productCategories } from "../data/products";

const ProductCategory = () => {
  const { categoryId } = useParams();

  let category = null;
  let parentCategory = null;

  for (const cat of productCategories) {
    const found = cat.subcategories.find((s) => s.id === categoryId);
    if (found) {
      category = found;
      parentCategory = cat;
      break;
    }
  }

  if (!category) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Category Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The product category you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Get sibling categories for sidebar navigation
  const siblings = parentCategory.subcategories.filter(
    (s) => s.id !== categoryId
  );

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link
                to="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
              <ChevronRight size={14} />
              <span className="text-primary-light">{parentCategory.name}</span>
              <ChevronRight size={14} />
              <span className="text-white">{category.name}</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              {category.name}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              {category.description}
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm">
              <Package size={14} />
              {category.products.length} products available
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                    {parentCategory.name}
                  </h3>
                  <nav className="space-y-1">
                    <Link
                      to={`/products/${category.id}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/5 text-primary text-sm font-medium"
                    >
                      <ChevronRight size={14} />
                      {category.name}
                    </Link>
                    {siblings.map((sib) => (
                      <Link
                        key={sib.id}
                        to={`/products/${sib.id}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-primary text-sm transition-colors"
                      >
                        <ChevronRight size={14} className="text-gray-300" />
                        {sib.name}
                      </Link>
                    ))}
                  </nav>
                </div>

                <Link
                  to="/contact"
                  className="block bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-5 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold mb-1">Need a Quote?</h4>
                  <p className="text-sm text-white/80 mb-3">
                    Contact us for pricing and availability.
                  </p>
                  <span className="text-sm font-semibold inline-flex items-center gap-1">
                    Get in touch <ChevronRight size={14} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.products.map((product, i) => (
                  <AnimatedSection key={i} delay={i * 0.05} direction="scale">
                    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
                      {/* Image placeholder */}
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative overflow-hidden">
                        <div className="text-center p-4">
                          <Box
                            size={40}
                            className="text-gray-300 mx-auto mb-2 group-hover:text-primary/40 transition-colors"
                          />
                          <p className="text-xs text-gray-400 font-medium">
                            {product.alt}
                          </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="p-5">
                        <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug mb-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">
                            {category.name}
                          </span>
                          <Link
                            to="/contact"
                            className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                          >
                            Enquire →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;
