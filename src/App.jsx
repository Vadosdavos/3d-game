import {
  Sky, Stars, PointerLockControls, Text3D,
} from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import Ground from "./components/ground";
import Player from "./components/player";
import fontUrl from "./assets/Roboto_Regular.json";

function App() {
  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[10, 20, 100]} />
      <ambientLight intensity={1.5} />
      <Stars radius={50} depth={50} count={5000} factor={4} saturation={1} fade speed={2} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <RigidBody>
          <mesh position={[0, 3, -5]}>
            <boxGeometry />
          </mesh>
        </RigidBody>
        <Text3D font={fontUrl} position={[-5, 5, -10]} size={0.8}>
          Ti pidor!
          Ahaha curva
          <meshNormalMaterial />
        </Text3D>
      </Physics>
    </>
  );
}

export default App;
