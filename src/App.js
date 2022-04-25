import Button from "./gentlemen/button/Button/Button";

function App() {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section className="controls"></section>
      <main className="main">
        <ul className="gentlemen"></ul>
      </main>
      <Button />
    </>
  );
}

export default App;
