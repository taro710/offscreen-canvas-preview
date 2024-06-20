import { Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Scene from "./Scene";
import Footer from "../components/Footer";

export default function App() {
  return (
    <>
      <Canvas
        style={{ height: "100vh" }}
        camera={{ position: [0, 0, 0], fov: 45 }}
      >
        <Scene />
      </Canvas>
      <Stats />
      <Footer />
    </>
  );
}
