"use client"

import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Text, TrackballControls } from '@react-three/drei'
import type { ThreeEvent } from '@react-three/fiber'

interface WordProps {
    children: string
    [key: string]: unknown
}

const LanguageCloud = () => {

    const radius = 18
    const languages = ["Python", "Java", "JavaScript", "TypeScript", "C#", "Kotlin", "SQL", "Git", "Angular.Js", "React.Js", "Next.Js", "Vue.Js", "R", "C++"];
    const groupRef = useRef<THREE.Group | null>(null);

    const Word = ({ children, ...props }: WordProps) => {
        const color = new THREE.Color()
        const fontProps = { font: '/Inter-Bold.woff', fontSize: 2, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
        const ref = useRef<THREE.Mesh | null>(null)
        const [hovered, setHovered] = useState(false)

        const over = (e: ThreeEvent<PointerEvent>) => (e.stopPropagation(), setHovered(true))
        const out = () => setHovered(false)

        useEffect(() => {
            if (hovered) {
                document.body.style.cursor = 'pointer';
            } else {
                document.body.style.cursor = 'auto';
            }

            return () => {
                document.body.style.cursor = 'auto';
            };
        }, [hovered]);


        useFrame(() => {
            if (ref.current) {
                const material = ref.current.material as THREE.MeshStandardMaterial;
                if (material) {
                    material.color.lerp(color.set(hovered ? '#FFFFFF' : '#c4c4c4'), 0.1)
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

    const Cloud = () => {
        const words = useMemo(() => {
            const temp: [THREE.Vector3, string][] = []

            languages.map((language) => {

                const x = (Math.random() - 0.5) * 1.5 * radius;
                const y = (Math.random() - 0.5) * 1.5 * radius;
                const z = (Math.random() - 0.5) * 1.5 * radius;

                temp.push([new THREE.Vector3(x, y, z), language]);
            })

            return temp;
        }, []);


        useFrame(() => {
            if (groupRef.current) {
                groupRef.current.rotation.y += 0.003;
                groupRef.current.rotation.z += 0.001;
            }
        });

        return words.map(([pos, word], index) => <Word key={index} position={pos}>{word}</Word>);
    }

    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 20], fov: 90 }}>
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
