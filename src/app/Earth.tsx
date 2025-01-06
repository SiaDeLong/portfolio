"use client"

import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import { TrackballControls } from '@react-three/drei'
import * as THREE from 'three';

const Earth = () => {
    // // Load the Earth texture (make sure to use a valid texture URL)
    const texture = useLoader(TextureLoader, '/earth.png')

    const earthRef = React.useRef<THREE.Mesh>(null)

    const EarthComponent = () => {

        useFrame(() => {
            if (earthRef.current) {
                earthRef.current.rotation.y += 0.001  // Adjust the speed of rotation here
            }
        })

        return <mesh ref={earthRef}>
            <sphereGeometry args={[5, 32, 32]} />
            <meshStandardMaterial
                map={texture}
                color={"#FFFFFF"}
                transparent={true}
                opacity={0.7}  // Adjust the opacity for transparency
                side={THREE.DoubleSide}  // Ensures both sides are rendered
            />
        </mesh>
    }

    // Rotate the Earth on the X-axis each frame


    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <EarthComponent />
                <TrackballControls />
            </Suspense>
        </Canvas>
    )
}

export default Earth
