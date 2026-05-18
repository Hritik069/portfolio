import { Canvas } from '@react-three/fiber'
import { Stars, Float, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { motion } from 'framer-motion'

// Animated particles component - optimized for performance
function Particles() {
  return (
    <group>
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
    </group>
  )
}

// Floating geometric shapes - reduced count for better performance
function FloatingShapes() {
  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-3, 1, -5]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.3}
            wireframe
          />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[3, -1, -5]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            wireframe
          />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[0, 2, -6]}>
          <torusGeometry args={[1.5, 0.3, 16, 50]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.2}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  )
}

// Main background component
export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas dpr={[1, 2]} performance={{ min: 0.5 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Suspense fallback={null}>
          <Particles />
          <FloatingShapes />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#6366f1" />
        </Suspense>
      </Canvas>
      
      {/* Floating Astronaut */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed right-[10%] top-[20%] z-0 pointer-events-none hidden lg:block"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712009.png"
          alt="Astronaut"
          className="w-48 h-48 opacity-20"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(99, 102, 241, 0.5))',
          }}
        />
      </motion.div>
      
      {/* Secondary floating astronaut */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="fixed left-[5%] bottom-[30%] z-0 pointer-events-none hidden lg:block"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712009.png"
          alt="Astronaut"
          className="w-32 h-32 opacity-15"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))',
          }}
        />
      </motion.div>
    </div>
  )
}
