import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const App = () => {
  return (
    <Canvas className="min-h-full" camera={{ position: [0, 0, 15] }}>
      <Suspense fallback={null}>
        <OrbitControls autoRotate />
      </Suspense>
      <ambientLight intensity={0.5} />
      <pointLight intensity={1} position={[-10, -15, -10]} color={0xff0000} />
      <spotLight intensity={0.5} angle={Math.PI / 8} position={[25, 25, 15]} castShadow />
    </Canvas>
  );
};

export default App;
