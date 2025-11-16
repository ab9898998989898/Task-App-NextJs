"use client";
// Add useState import
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Tag, ArrowRight, Search } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/blogs.json");
      const data = await response.data;
      setBlogPosts(data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const categories = useMemo(() => {
    const categoryCounts = blogPosts.reduce((acc, post) => {
      const category = post.category;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    const dynamicCategoryArray = Object.entries(categoryCounts).map(
      ([name, count]) => {
        return { name: name, count: count };
      }
    );
    // Sort the categories alphabetically by name
    dynamicCategoryArray.sort((a, b) => a.name.localeCompare(b.name));
    const allCategory = { name: "All", count: blogPosts.length };
    return [allCategory, ...dynamicCategoryArray];
  }, [blogPosts]);

  // 1. Define the number of posts to show initially
  const INITIAL_DISPLAY_COUNT = 6;

  // 2. 'allPosts' is just the full array you provided. No state needed.
  const allPosts = blogPosts;

  // 3. 'initialPosts' is just the first 6 items from the full array. No state needed.
  const initialPosts = blogPosts.slice(0, INITIAL_DISPLAY_COUNT);

  // 4. A boolean state to track if we're showing all posts or just the initial ones
  const [isShowingAll, setIsShowingAll] = useState(false);

  // --- DERIVED STATE ---
  // The posts to display are derived from `isShowingAll`.
  // If true, show all. If false, show the initial 6.
  const displayedPosts = isShowingAll ? allPosts : initialPosts;

  // --- MODIFIED FUNCTION ---
  // This function now just toggles the boolean state
  const handleTogglePosts = () => {
    setIsShowingAll((prev) => !prev);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* --- FIX: Restored this section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Blog & Resources
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Discover the latest articles, tutorials, and insights on productivity,
          task management, and more.
        </p>
      </motion.div>

      {/* --- FIX: Restored this section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }} // Small delay
        className="max-w-3xl mx-auto mb-16 relative"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-slate-900/50 backdrop-blur-lg border border-slate-800/50 rounded-xl pl-12 pr-6 py-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
          />
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* --- FIX: Restored this section --- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }} // Small delay
          className="lg:w-1/4"
        >
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-800/50 sticky top-6">
            <h2 className="text-xl font-semibold text-slate-100 mb-6">
              Categories
            </h2>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    category.name === "All"
                      ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold text-slate-100 mb-6">
                Subscribe
              </h2>
              <p className="text-slate-400 text-sm mb-4">
                Get the latest articles and news delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ---MODIFIED--- Iterates over the correct displayedPosts variable */}
            {displayedPosts.map((post) => (
              <motion.article
                key={post.id} // Uses the (now unique) post ID
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-slate-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-800/50 hover:border-cyan-500/30 transition-colors"
              >
                {/* --- FIX: Restored this section --- */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/600x400/0f172a/7f1d1d?text=Error";
                      e.currentTarget.alt = "Error loading image";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:underline">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            {/* --- MODIFIED BUTTON LOGIC ---
                1. Only render the button if the *total* number of posts 
                   is greater than the initial display count (9 > 6 is true).
                2. The onClick handler toggles the view.
                3. The button text changes based on the `isShowingAll` state.
            */}
            {allPosts.length > INITIAL_DISPLAY_COUNT && (
              <button
                onClick={handleTogglePosts}
                className="px-6 py-3 bg-slate-800/50 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-800/70 transition-colors"
              >
                {isShowingAll ? "Show Less" : "Load More Articles"}
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
