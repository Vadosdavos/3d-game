import * as THREE from "three";
import {
  Sky, Stars, Clouds, Cloud, PointerLockControls,
} from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import Ground from "./components/ground";
import Player from "./components/player";

function App() {
  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[10, 20, 100]} />
      <ambientLight intensity={1.5} />
      <Stars radius={50} depth={50} count={5000} factor={4} saturation={1} fade speed={2} />
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud segments={2} scale={0.4} bounds={[3, 1, 5]} volume={1} color="white" position={[0, 1, 0]} />
        <Cloud seed={100} scale={0.2} volume={1} color="blue" fade={50} position={[1, 1, 0]} />
      </Clouds>
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <RigidBody>
          <mesh position={[0, 3, -5]}>
            <boxGeometry />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
}

export default App;
