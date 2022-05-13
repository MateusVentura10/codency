export function Slide(){
  return (
    <section className="max-w-6xl m-auto">
      <h1 className="max-w-2xl m-auto text-5xl font-medium text-zinc-700 text-center">
        Creative way to Showcase your <span className="text-sky-500">App</span>
      </h1>

      <p className="max-w-4xl m-auto text-lg text-center text-gray-600 mt-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus commodi, voluptate quaerat 
        iure quidem expedita eos a blanditiis sint modi est error veniam facere eum at doloribus amet, nobis ut.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>

      <div className="flex justify-center gap-6 mt-12">
        <button className="px-6 py-2 bg-sky-500 text-white rounded-md" type="button">Get Startet</button>
        <button className="px-6 py-2 border border-slate-300 rounded-md text-slate-600" type="button">About More</button>
      </div>
    </section>
  )
}