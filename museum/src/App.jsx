import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Earth from '../public/Earth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Canvas>
      <ambientLight  />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
       
        <Earth />

      </Suspense>
      <Environment preset='sunset'/>
     </Canvas>
     <div className='container'>
      <h1>
        Earth
      </h1>
      <p >
      Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within Earth's land hemisphere. Most of Earth's land is somewhat humid and covered by vegetation, while large sheets of ice at Earth's polar deserts retain more water than Earth's groundwater, lakes, rivers and atmospheric water combined. Earth's crust consists of slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth has a liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar winds and cosmic radiation.
      </p>
     </div>
    </>
  )
}

export default App
