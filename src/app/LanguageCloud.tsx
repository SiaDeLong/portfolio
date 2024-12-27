"use client"

import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Text, TrackballControls } from '@react-three/drei'
import type { ThreeEvent } from '@react-three/fiber'

// TypeScript types for props and state
interface WordProps {
    children: string
    [key: string]: unknown
}

const LanguageCloud = () => {

    const radius = 20
    const languages = ["Python", "Java", "JavaScript", "TypeScript", "C#", "Ruby", "Go", "Rust", "Swift", "Kotlin"];
    const groupRef = useRef<THREE.Group | null>(null);

    // Word component with TypeScript types
    const Word = ({ children, ...props }: WordProps) => {
        const color = new THREE.Color()
        const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
        const ref = useRef<THREE.Mesh | null>(null)
        const [hovered, setHovered] = useState(false)

        const over = (e: ThreeEvent<PointerEvent>) => (e.stopPropagation(), setHovered(true))
        const out = () => setHovered(false)

        // Change the mouse cursor on hover
        useEffect(() => {
            if (hovered) {
                document.body.style.cursor = 'pointer';
            } else {
                document.body.style.cursor = 'auto';
            }

            // Cleanup function to reset the cursor when the component unmounts or hover state changes
            return () => {
                document.body.style.cursor = 'auto';
            };
        }, [hovered]);

        // Tie component to the render-loop
        useFrame(() => {
            if (ref.current) {
                const material = ref.current.material as THREE.MeshStandardMaterial;
                if (material) {
                    material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
                }
            }
        })

        return (
            <Billboard {...props}>
                <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...fontProps}>
                    {children}
                </Text>
            </Billboard>
        )
    }

    // Cloud component with TypeScript types

    const Cloud = () => {
        // Array of programming languages


        // Create unique random words without repeating and not forming a complete spherical shape
        const words = useMemo(() => {
            const temp: [THREE.Vector3, string][] = []

            languages.map((language) =>{

                const x = (Math.random() - 0.5) * 1.5 * radius;
                const y = (Math.random() - 0.5) * 1.5 * radius;
                const z = (Math.random() - 0.5) * 1.5 * radius;

                temp.push([new THREE.Vector3(x, y, z), language]);
            })

            return temp;
        }, []);

        // Auto-orbiting effect (rotate the whole group of words)
        useFrame(() => {
            if (groupRef.current) {
                groupRef.current.rotation.y += 0.008; // Adjust the speed of rotation here
                groupRef.current.rotation.z += 0.005; // Adjust the speed of rotation here
            }
        });

        return words.map(([pos, word], index) => <Word key={index} position={pos}>{word}</Word>);
    }

    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
            <fog attach="fog" args={['#202025', 0, 80]} />
            <Suspense fallback={null}>
                <group ref={groupRef} rotation={[10, 10.5, 10]}>
                    <Cloud />
                </group>
            </Suspense>
            <TrackballControls />
        </Canvas>
    )
}

export default LanguageCloud
