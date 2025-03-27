"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { articles } from "./articledata";

interface ArticleProps {
  mood: number | null;
}

const moodNames = ["happy", "bored", "sad", "angry"];

export default function ArticleList({ mood }: ArticleProps) {
  const [filteredArticles, setFilteredArticles] = useState<
    { id: number; title: string; content: string }[]
  >([]);

  useEffect(() => {
    if (mood !== null) {
      const moodKey = moodNames[mood - 1] as keyof typeof articles;
      setFilteredArticles(articles[moodKey] || []);
    } else {
      setFilteredArticles([]);
    }
  }, [mood]);

  return (
    <div className="dark:bg-zinc-900 p-4 rounded-xl bg-gray-100 shadow-md">
      <h2 className="text-xl md:text-2xl text-gray-800 dark:text-white mb-4">
        Recommended Articles
      </h2>

      {mood === null ? (
        <p className="text-gray-600 dark:text-gray-400 text-center py-4">
          Select your mood to see related articles.
        </p>
      ) : (
        <motion.div
          key={mood} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="cust-scroll max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800"
        >
          <AnimatePresence mode="sync">
            <div className="space-y-3">
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="p-4 bg-white dark:bg-[#0e0e0e] shadow-md rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {article.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
