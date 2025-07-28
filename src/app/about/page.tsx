import React from 'react';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white px-4 py-16">
      <Navbar />
      <section className="max-w-3xl mx-auto mt-16">
        <h1 className="text-4xl font-bold mb-6 font-space-grotesk">Polished. Quietly Powerful.</h1>
        <p className="text-lg text-gray-300 mb-8">
          I don&#39;t chase trends—I build systems that last. My approach is simple: design with intent, execute with precision, and always leave room for curiosity. From IIT Delhi to leading teams in tech, I&#39;ve learned that the best solutions are timeless, not trendy.
        </p>
        <ul className="list-disc ml-6 text-gray-400">
          <li>5+ years building scalable systems</li>
          <li>Obsessed with clean code and elegant UX</li>
          <li>Believer in public learning and transparent process</li>
        </ul>
      </section>
    </main>
  );
} 