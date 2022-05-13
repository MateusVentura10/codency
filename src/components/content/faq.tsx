import { CaretDown } from "phosphor-react";

export function FAQ(){
  return (
    <section className="max-w-6xl m-auto mt-24">
      <div>
        <h3>Perguntas Frequentes</h3>
      </div>

      <div className="">
        <ul>
          <li className="text-lg text-zinc-900 flex justify-between align-center border-b border-zinc-200 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            <CaretDown size={18} />
          </li>
          <li className="flex justify-between align-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            <CaretDown size={18} />
          </li>
          <li className="flex justify-between align-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            <CaretDown size={18} />
          </li>
          <li className="flex justify-between align-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            <CaretDown size={18} />
          </li>
          <li className="flex justify-between align-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            <CaretDown size={18} />
          </li>
          <li className="flex justify-between align-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            <CaretDown size={18} />
          </li>
        </ul>
      </div>
    </section>
  )
}