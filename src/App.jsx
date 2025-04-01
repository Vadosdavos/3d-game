import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <>
      {!gameStarted && <MainMenu onStartGame={handleStartGame} />}
      {gameStarted && (
        <Canvas camera={{ fov: 45, position: [0, 5, 0] }} shadows>
          <Game />
        </Canvas>
      )}
    </>
  );
}

export default App;
