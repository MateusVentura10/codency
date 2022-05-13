import { Browsers } from "phosphor-react";

export function Services(){
  return (
    <section className="w-[70vw] flex flex-wrap justify-between mt-28">

      <div className="w-72 h-68 border border-zinc-200 px-6 py-6 rounded-lg shadow-md shadow-slate-400">
        <Browsers weight="fill" size={42} color="#F2668B" />
        <div>
          <h2 className="text-2xl font-medium mt-4 text-zinc-800">Sites Profissionais</h2>
          <p className="text-gray-600 mt-4">Change grid variables or give decimal column size, grid variables or give decimal.</p>
          <a className="text-sky-600 text-sm font-medium block mt-8" href="">About more</a>
        </div>
      </div>

      <div className="w-72 h-68 border border-zinc-200 px-6 py-6 rounded-lg shadow-md shadow-slate-400">
        <Browsers weight="fill" size={42} color="#45C4B0" />
        <div>
          <h2 className="text-2xl font-medium mt-4 text-zinc-800">Loja Virtual</h2>
          <p className="text-gray-600 mt-4">Change grid variables or give decimal column size, grid variables or give decimal.</p>
          <a className="text-sky-600 text-sm font-medium block mt-8" href="">About more</a>
        </div>
      </div>

      <div className="w-72 h-68 border border-zinc-200 px-6 py-6 rounded-lg shadow-md shadow-slate-400">
        <Browsers weight="fill" size={42} color="#F2CB05" />
        <div>
          <h2 className="text-2xl font-medium mt-4 text-zinc-800">Landing Page</h2>
          <p className="text-gray-600 mt-4">Change grid variables or give decimal column size, grid variables or give decimal.</p>
          <a className="text-sky-600 text-sm font-medium block mt-8" href="">About more</a>
        </div>
      </div>
    </section>
  )
}