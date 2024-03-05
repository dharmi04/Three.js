import {Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../Components/HomeInfo'


const Home = () => {
  const [isRotating, setIsRotating] = useState(false)

  const[currentStage, setCurrentStage]= useState(1);
    const adjustIslandForScreenSize= () =>{
        let ScreenScale=null;
        let ScreenPosition=[0,-6.5,-43];
        let rotation= [0.1,4.7,0];

        if(window.innerWidth <768){
            ScreenScale= [0.9,0.9,0.9];
        } else{
            ScreenScale= [1,1,1];
        }
        return [ScreenScale, ScreenPosition, rotation]
    }

    const [islandScale, islandPosition, islandRotation]= adjustIslandForScreenSize();

    const adjustBiplaneForScreenSize = () => {
      let screenScale, screenPosition;
  
      // If screen width is less than 768px, adjust the scale and position
      if (window.innerWidth < 768) {
        screenScale = [1.5, 1.5, 1.5];
        screenPosition = [0, -1.5, 0];
      } else {
        screenScale = [3, 3, 3];
        screenPosition = [0, -4, -4];
      }
  
      return [screenScale, screenPosition];
    };
    const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
    const adjustPlaneForScreenSize= () =>{
      let ScreenScale, ScreenPosition

      if(window.innerWidth <768){
          ScreenScale= [1.5,1.5,1.5];
          ScreenPosition=[0,-1.5,0]
      } else{
          ScreenScale= [3,3,3];
          ScreenPosition=[0,-4,-4]
      }
      return [ScreenScale, ScreenPosition]
  }

  const [planeScale, planePosition]= adjustPlaneForScreenSize();

  return (
    <div>
      <section className='w-full h-screen relative '>

        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing': 'cursor:grab'}`}
        camera={{near: 0.1, far:1000}}>
            <Suspense fallback={<Loader />}>
                <directionalLight position={[1,1,1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />


                <Bird />
                <Sky
                isRotating={isRotating} />
                <Island
                position={islandPosition}
                scale={islandScale}
                rotation={islandRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
                />
              <Plane 
              isRotating={isRotating}
              position={planePosition}
              scale={planeScale}
              rotation={[0,20,0]} />
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