'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import AnimatedSection from '@/components/AnimatedSection';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20 text-white space-y-16">
        <AnimatedSection reducedMotion={true}>
          <section>
            <h1 className="text-5xl font-bold leading-tight tracking-tight font-space-grotesk mb-6">I build systems that don&apos;t break.</h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed font-serif">I&apos;m Shubham — a Technical Lead working in Investment Banking. For the last 5+ years, I&apos;ve been solving deep data and infra problems: Spark pipelines on Kubernetes, CosmosDB distribution, Spring Boot APIs, platform migrations, production hardening — the unsexy stuff that keeps everything running.</p>
            <p className="mt-4 text-gray-400 font-serif">I&apos;ve led multi-year architecture rewrites, built APIs that saved hundreds of thousands of euros, and trained 30+ engineers on how to write cleaner, scalable, Copilot-augmented code.</p>
            <p className="mt-4 text-gray-400 font-serif">I&apos;m not a founder (yet). But I build like one. And this site is where I write, reflect, and experiment — publicly.</p>
          </section>
        </AnimatedSection>
        <AnimatedSection delay={0.1} reducedMotion={true}>
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold text-white/90 font-space-grotesk">Currently exploring:</h2>
            <ul className="list-disc ml-6 text-gray-300">
              <li>LangChain + GenAI workflow automation</li>
              <li>System design for data reliability</li>
              <li>Slow thinking, fast shipping</li>
            </ul>
          </section>
        </AnimatedSection>
        <AnimatedSection delay={0.2} reducedMotion={true}>
          <section className="pt-10 border-t border-white/10">
            <p className="text-sm text-gray-500 italic">Not trying to go viral. Just trying to stay real, write clean code, and build useful systems.</p>
          </section>
        </AnimatedSection>
      </main>
    </>
  );
} 