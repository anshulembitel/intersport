import React from 'react';
import { useGLTF } from '@react-three/drei';
import { convertColor } from '@/utils/convertColor';

export function NikeShoe(props) {
  const { nodes, materials } = useGLTF('/models/shoe/scene-transformed.glb');
  if (props.color) {
    materials['Adidas_sense4'].color = convertColor(props.color);
  }

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Adidas_sense4}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/shoe/scene-transformed.glb');
