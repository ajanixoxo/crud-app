function App() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] px-5 py-8 text-slate-900 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#e0644d]">
              Daily rhythm
            </p>
            <h1 className="font-serif text-5xl leading-none tracking-tight text-slate-950 sm:text-6xl">
              Make room for what matters.
            </h1>
          </div>
          <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-500 shadow-sm sm:block">
            0 tasks
          </span>
        </header>

        <section className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-300/50">
          <div className="border-b border-white/10 px-6 py-7 sm:px-10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Your list</h2>
                <p className="mt-1 text-sm text-slate-400">Small steps add up.</p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e0644d] text-lg font-bold text-white">
                0
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="todo-input">New task</label>
              <input
                id="todo-input"
                type="text"
                placeholder="What needs your attention?"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#e0644d] focus:ring-2 focus:ring-[#e0644d]/30"
              />
              <button
                type="button"
                className="rounded-xl bg-[#e0644d] px-6 py-3.5 font-semibold text-white transition hover:bg-[#ee765e] focus:outline-none focus:ring-2 focus:ring-[#f7b1a3] focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Add task
              </button>
            </div>
          </div>

          <div className="bg-white px-6 py-3 sm:px-10">
            <div className="py-16 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#fbe3de] text-2xl text-[#e0644d]">
                +
              </div>
              <p className="font-medium text-slate-700">Your list is clear.</p>
              <p className="mt-1 text-sm text-slate-400">Add one task to get started.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
