// StarsCanvas.jsx
"use client";
import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const { clock } = useThree();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame(() => {
    ref.current.rotation.x += 0.01 * clock.getDelta();
    ref.current.rotation.y += 0.01 * clock.getDelta();
  });

  return (
    <Points ref={ref} positions={sphere} {...props}>
      <PointMaterial
        transparent
        color="#f272c8"
        size={0.002}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
