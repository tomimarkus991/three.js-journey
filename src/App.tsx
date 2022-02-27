import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Box } from "./components";

const App = () => {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  return (
    <Canvas
      camera={{
        isPerspectiveCamera: true,
        fov: 75,
        aspect: sizes.width / sizes.height,
        position: [0, 0, 4],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls autoRotate />
      </Suspense>
      <Box color={0xff0000} />
      <ambientLight intensity={0.3} />
      <pointLight intensity={1} position={[-10, -15, -10]} color={0xff0000} />
      <spotLight intensity={0.5} angle={Math.PI / 8} position={[25, 25, 15]} castShadow />
    </Canvas>
  );
};

export default App;
