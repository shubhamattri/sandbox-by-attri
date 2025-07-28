import Navbar from '@/components/Navbar';

export default function Uses() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-20 text-white">
        <h1 className="text-4xl font-bold mb-6 font-space-grotesk">What I Use</h1>
        <p className="text-gray-400 mb-10">My daily driver stack: from tools to hardware, everything I rely on to build.</p>

        <section className="mb-8 bg-white/10 rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">💻 Hardware</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>MacBook Pro M2 14”</li>
            <li>Logitech MX Keys + MX Master 3S</li>
            <li>LG 4K 27” Monitor</li>
          </ul>
        </section>

        <section className="mb-8 bg-white/10 rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🛠️ Daily Tools</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Cursor IDE + GitHub Copilot</li>
            <li>Warp Terminal + Fig</li>
            <li>Notion for docs, JIRA for chaos</li>
          </ul>
        </section>

        <section className="bg-white/10 rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🧠 Stack</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Next.js + Tailwind + TypeScript</li>
            <li>Java + Spring Boot + Spark 3.3.3</li>
            <li>MongoDB, CosmosDB, Azure, Kubernetes</li>
          </ul>
        </section>
      </main>
    </>
  );
} 