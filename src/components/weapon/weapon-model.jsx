/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import { useGLTF } from "@react-three/drei";
import weapon from "/weapon.glb?url";

export function WeaponModel(props) {
  const { nodes, materials } = useGLTF(weapon);
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

useGLTF.preload(weapon);
