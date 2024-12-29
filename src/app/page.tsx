import { Navbar } from "@/components/Navbar/navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#1e1f3a] to-[#17182c] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-8">
        <section>
          <h1 className="text-4xl font-bold mb-4">Explore Events</h1>
          {/* Aquí puedes agregar las tarjetas de eventos */}
        </section>
      </main>
    </div>
  );
}
