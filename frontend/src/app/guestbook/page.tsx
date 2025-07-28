"use client";
import * as React from "react";
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from "framer-motion";

const EMOJIS = ["🔥", "🤯", "🫡"];

export default function Guestbook() {
  const [entries, setEntries] = React.useState([
    { name: "Shubham", message: "Welcome to the guestbook!", emoji: "🔥", time: new Date().toISOString() },
  ]);
  const [form, setForm] = React.useState({ name: "", message: "", emoji: EMOJIS[0] });
  const [error, setError] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEmoji = (emoji: string) => {
    setForm((f) => ({ ...f, emoji }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.message.trim()) {
      setError("Name and message required.");
      return;
    }
    if (form.message.length > 200) {
      setError("Message too long (max 200 chars).");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setEntries([{ ...form, time: new Date().toISOString() }, ...entries]);
      setForm({ name: "", message: "", emoji: EMOJIS[0] });
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-16 text-white">
        <h1 className="text-3xl font-bold mb-6 font-space-grotesk">Guestbook</h1>
        <form onSubmit={handleSubmit} className="mb-8 bg-white/10 rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-lg">
          <div className="flex gap-4 mb-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="flex-1 px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              maxLength={32}
              required
            />
            <div className="flex gap-1 items-center">
              {EMOJIS.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => handleEmoji(emoji)}
                  className={`text-2xl px-2 py-1 rounded transition-all ${form.emoji === emoji ? "bg-purple-500/30" : "hover:bg-white/10"}`}
                  aria-label={`React with ${emoji}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Leave a note..."
            className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
            rows={3}
            maxLength={200}
            required
          />
          {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50 transition-all font-medium mt-2"
          >
            {submitting ? "Adding..." : "Add Note"}
          </button>
        </form>
        <div className="space-y-4 max-h-[400px] overflow-y-auto pb-4">
          <AnimatePresence>
            {entries.map((entry, i) => (
              <motion.div
                key={entry.time + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-start gap-3 shadow-sm"
              >
                <span className="text-2xl select-none mt-1">{entry.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white/90">{entry.name}</span>
                    <span className="text-xs text-gray-400">{new Date(entry.time).toLocaleString()}</span>
                  </div>
                  <p className="text-gray-200 whitespace-pre-line">{entry.message}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
} 