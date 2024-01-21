import { useGLTF } from "@react-three/drei";

export function WeaponModel(props) {
  const { nodes, materials } = useGLTF("3d-game/weapon.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_37.geometry}
              material={materials.MI_Neon_Glow_Assault}
              skeleton={nodes.Object_37.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_38.geometry}
              material={materials.MI_Neon_Assault}
              skeleton={nodes.Object_38.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("3d-game/weapon.glb");
