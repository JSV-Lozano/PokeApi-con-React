import "./App.css";
import { Layout } from "../components/Layaout";
import { Pokedex } from "../components/Pokedex";
import { PokeProvider } from "../components/context/context";

function App() {
  return (
    <PokeProvider>
      <Layout>
        <Pokedex />
      </Layout>
    </PokeProvider>
  );
}

export default App;
