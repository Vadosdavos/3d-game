import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat";
import { RigidBody, useRapier } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { usePersonControls } from "../hooks/usePersonControls";

const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export default function Player() {
  const playerRef = useRef();
  const {
    forward, backward, left, right, jump,
  } = usePersonControls();

  const rapier = useRapier();

  const doJump = () => {
    playerRef.current.setLinvel({ x: 0, y: 8, z: 0 });
  };

  useFrame(() => {
    if (!playerRef.current) return;

    // moving player
    const velocity = playerRef.current.linvel();

    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED);

    playerRef.current.wakeUp();
    playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });

    // jumping
    const { world } = rapier;
    const ray = world.castRay(new RAPIER.Ray(
      playerRef.current.translation(),
      { x: 0, y: -1, z: 0 },
    ));
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1;

    if (jump && grounded) doJump();
  });

  return (
    <RigidBody position={[0, 1, -2]} mass={1} ref={playerRef} lockRotations>
      <mesh>
        <capsuleGeometry args={[0.5, 0.5]} />
      </mesh>
    </RigidBody>
  );
}
