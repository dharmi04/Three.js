import React from 'react'
import planeScene from '../assets/3d/plane.glb'

const Plane = () => {
    const {scene, animation} = useGLTF(planeScene);
  return (
    <div>
      <mesh>
        <primitive object={scene} />
      </mesh>
    </div>
  )
}

export default Plane
