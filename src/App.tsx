function App() {
  return (
    <div className="min-h-svh bg-forest text-cream flex flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="uppercase tracking-[0.3em] text-amber text-xs font-body">
        The Reggs Ltd
      </p>
      <h1 className="font-display text-4xl md:text-5xl">
        CineMatch
      </h1>
      <p className="font-body text-cream/70 max-w-md">
        A movie recommendation app being built in phases. Data fetching,
        auth, search, and pagination land in the phases ahead.
      </p>
    </div>
  );
}

export default App;
