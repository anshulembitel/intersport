import React from 'react';
import { useGLTF } from '@react-three/drei';
import { convertColor } from '@/utils/convertColor';

export function Hoodie(props) {
  const { nodes, materials } = useGLTF('/models/hoodie/scene.gltf');

  if (props.color) {
    materials['Material.001'].color = convertColor(props.color);
  }

  return (
    <group {...props} dispose={null} scale={0.71}>
      <group position={[0, 0, 0]} rotation={[1.595, -0.05, 0.012]} scale={0.055}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.001']} />
      </group>
    </group>
  );
}

useGLTF.preload('/models/hoodie/scene.gltf');
