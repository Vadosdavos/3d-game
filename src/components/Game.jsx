import { useFrame } from "@react-three/fiber";
import {
  PointerLockControls, Sky, Stars, Text3D,
} from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import * as TWEEN from "@tweenjs/tween.js";
import Ground from "./ground";
import Player from "./player";
import fontUrl from "../assets/Roboto_Regular.json";

const shadowOffset = 50;

function Game() {
  useFrame(() => {
    TWEEN.update();
  });

  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[10, 20, 100]} />
      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow
        intensity={1.5}
        position={[100, 100, 0]}
        shadow-mapSize={4096}
        shadow-camera-top={shadowOffset}
        shadow-camera-bottom={-shadowOffset}
        shadow-camera-left={shadowOffset}
        shadow-camera-right={-shadowOffset}
      />
      <Stars radius={50} depth={50} count={5000} factor={4} saturation={1} fade speed={2} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <RigidBody>
          <mesh castShadow receiveShadow position={[3, 3, -5]}>
            <boxGeometry />
          </mesh>
        </RigidBody>
      </Physics>
      <Text3D font={fontUrl} position={[-5, 5, -10]} size={0.8}>
        Ti pidor!
        Ahaha curva
        <meshNormalMaterial />
      </Text3D>
    </>
  );
}

export default Game;
