import About from "@components/About";
import Header from "@components/Header";

function App() {
  return (
    <div className="mx-auto px-6 py-12 flex flex-col md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex-row max-w-screen-xl">
      <div className="lg:flex lg:justify-between gap-4">
        <Header />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <About />
        </main>
      </div>
    </div>
  );
}

export default App;
