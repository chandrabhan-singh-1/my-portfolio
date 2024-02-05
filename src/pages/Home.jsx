import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import { Experience } from "../components";
import { UI } from "../components";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }} style={{height: "100vh"}}>
        <color attach="background" args={["#171720"]} />
        <fog attach="fog" args={["#171720", 10, 30]} />
        <Suspense>
          <Experience />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={0.5} />
        </EffectComposer>
      </Canvas>
      <UI />
    </>
  );
}

export default App;
