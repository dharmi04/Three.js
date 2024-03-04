import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import { Plane } from '@react-three/drei'


const Home = () => {
    const adjustIslandForScreenSize= () =>{
        let ScreenScale=null;
        let ScreenPosition=[0,-6.5,-43];
        let rotation= [0.1,4.7,0];

        if(window.innerWidth <768){
            ScreenScale= [0.9,0.9,0.9];
        } else{
            ScreenScale= [1,1,1,];
        }
        return [ScreenScale, ScreenPosition, rotation]
    }

    const [islandScale, islandPosition, islandRotation]= adjustIslandForScreenSize();
  return (
    <div>
      <section className='w-full h-screen relative '>
        <Canvas
        className='w-full h-screen bg-transparent'
        camera={{near: 0.1, far:1000}}>
            <Suspense fallback={<Loader />}>
                <directionalLight position={[1,1,1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />


                <Bird />
                <Sky />
                <Island
                
                position={islandPosition}
                scale={islandScale}
                rotation={islandRotation}
                />
                <Plane />
            </Suspense>

        </Canvas>

      </section>
    </div>
  )
}

export default Home


{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            POPUP
        </div> */}