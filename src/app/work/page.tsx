import React from 'react';
import Navbar from '../../components/Navbar';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white px-4 py-16">
      <Navbar />
      <section className="max-w-3xl mx-auto mt-16">
        <h1 className="text-4xl font-bold mb-6 font-space-grotesk">Work & Projects</h1>
        <p className="text-lg text-gray-300 mb-8">
          I don&#39;t just build products—I build momentum. Here are some of the projects and systems I&#39;ve shipped, each designed to solve real problems and push boundaries.
        </p>
        <ul className="list-disc ml-6 text-gray-400">
          <li>Neural Runway – Personal OS for builders</li>
          <li>Realtime Data Platform – 10x scale, 99.99% uptime</li>
          <li>Open Source: Starling Murmuration, Sonnet, yoifs</li>
        </ul>
      </section>
    </main>
  );
} 