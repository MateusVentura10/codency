import { Slide } from "../slide";
import { Services } from "../slide/service";

export function Header(){
  return (
    <>
      <header className="max-w-7xl m-auto">

        <section className="flex align-center justify-between mt-14">
          <h2 className="text-3xl font-bold">Codency</h2>

          <nav>
            <ul className="flex align-center gap-3">
              <li><a className="font-xs text-sky-500 font-medium"  href="">Início</a></li>
              <li><a className="font-xs text-gray-500 font-medium" href="">A Codency</a></li>
              <li><a className="font-xs text-gray-500 font-medium" href="">Serviços</a></li>
              <li><a className="font-xs text-gray-500 font-medium"href="">Portfólio</a></li>
              <li><a className="font-xs text-gray-500 font-medium"href="">Blog</a></li>
              <li><a className="font-xs text-gray-500 font-medium" href="">Contato</a></li>
            </ul>
          </nav>
        </section>

        <section className="mt-20 flex flex-wrap align-center justify-center">
          <Slide />
          <Services />
        </section>
      </header>
    </>
  )
}