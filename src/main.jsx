import { useState } from "react";
import ReactDOM from "react-dom";
import { VerticalChoice } from "./VerticalChoice";
import { BooleanChoice } from "./BooleanChoice";
import { Price } from "./Price";

import macbook from "./macbook.jpeg";

import "./index.css";

// Les données que l'on va utiliser
const options = {
  processor: [
    {
      name: "Processeur Intel Core i7 hexacœur de 9e génération à 2,6 GHz (Turbo Boost jusqu’à 4,5 GHz)",
      price: 0,
    },
    {
      name: "Processeur Intel Core i9 8 cœurs de 9e génération à 2,4 GHz (Turbo Boost jusqu’à 5 GHz)",
      price: 360,
    },
  ],
  memory: [
    { name: "16 Go de mémoire DDR4 à 2 400 MHz", price: 0 },
    { name: "32 Go de mémoire DDR4 à 2 400 MHz", price: 480 },
  ],
  gpu: [
    { name: "Radeon Pro 555X avec 4 Go de mémoire GDDR5", price: 0 },
    { name: "Radeon Pro 560X avec 4 Go de mémoire GDDR5", price: 120 },
  ],
  storage: [
    { name: "SSD de 256 Go", price: 0 },
    { name: "SSD de 512 Go", price: 240 },
    { name: "SSD de 1 To", price: 480 },
    { name: "SSD de 2 To", price: 960 },
    { name: "SSD de 4 To", price: 1920 },
  ],
  finalCut: {
    name: "Final Cut Pro X",
    price: 329.99,
  },
  logicPro: {
    name: "Logic Pro X",
    price: 229.99,
  },
};

function App() {
  // State
  const [processor, setProcessor] = useState(0);
  const [memory, setMemory] = useState(0);
  const [gpu, setGpu] = useState(0);
  const [storage, setStorage] = useState(0);
  const [finalCut, setFinalCut] = useState(false);
  const [logicPro, setLogicPro] = useState(false);

  const finalCutPrice = finalCut ? options.finalCut.price : 0;
  const logicProPrice = logicPro ? options.logicPro.price : 0;

  const total =
    2699 +
    options.processor[processor].price +
    options.memory[memory].price +
    options.gpu[gpu].price +
    options.storage[storage].price +
    finalCutPrice +
    logicProPrice;

  return (
    <div>
      <div>
        <header />
        <div className="produc-name">
          <h1>MacBook Pro</h1>
        </div>
        <div className="columns">
          <div className="macbook">
            <img src={macbook} alt="macbook" />
          </div>
          <div className="column">
            <h2>Personnalisez votre MacBook Pro 15 pouces - Gris sidéral</h2>
            <p className="recap">{options.processor[processor].name}</p>
            <p className="recap">Écran Retina avec affichage True Tone</p>
            <p className="recap">Touch Bar et Touch ID</p>
            <p className="recap">{options.memory[memory].name}</p>
            <p className="recap">{options.gpu[gpu].name}</p>
            <p className="recap">{options.storage[storage].name}</p>
            <p className="recap">Quatre ports Thunderbolt 3</p>
            <div className="options">
              <VerticalChoice
                name="Processeur"
                options={options.processor}
                selected={processor}
                onSelect={(clikedIndex) => setProcessor(clikedIndex)}
              />
              <VerticalChoice
                name="Mémoire"
                options={options.memory}
                selected={memory}
                onSelect={(clikedIndex) => setMemory(clikedIndex)}
              />
              <VerticalChoice
                name="Graphismes"
                options={options.gpu}
                selected={gpu}
                onSelect={(clikedIndex) => setGpu(clikedIndex)}
              />
              <VerticalChoice
                name="Stockage"
                options={options.storage}
                selected={storage}
                onSelect={(clikedIndex) => setStorage(clikedIndex)}
              />
              <h3>Logiciels préinstallés</h3>
              <BooleanChoice
                name={options.finalCut.name}
                selected={finalCut}
                price={options.finalCut.price}
                onChange={(value) => setFinalCut(value)}
              />
              <BooleanChoice
                name={options.logicPro.name}
                selected={logicPro}
                price={options.logicPro.price}
                onChange={(value) => setLogicPro(value)}
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <Price value={total} noSign={true} />
          <button>Ajouter au Panier</button>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
