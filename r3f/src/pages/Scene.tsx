import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useControls } from "leva";

import style from "/src/components/Footer.module.scss";

export default function Scene() {
  const { camera } = useThree();
  const { boxCount } = useControls({
    boxCount: {
      value: 2000,
      min: 1,
      max: 10000,
      step: 1,
    },
  });

  useFrame((state) => {
    const theta = state.clock.getElapsedTime();

    camera.position.x = 12 * Math.cos(theta * 0.5);
    camera.position.z = 12 * Math.sin(theta * 0.5);
    camera.position.y = 12 * Math.sin(theta * 0.5);
    camera.lookAt(0, 0, 0);
  });

  useEffect(() => {
    const btn = document.getElementById("btn");
    let clicked = false;
    if (!btn) throw new Error("Button not found");

    const click = () => {
      if (clicked) {
        btn.classList.remove(style["clicked"]);
      } else {
        btn.classList.add(style["clicked"]);
      }
      clicked = !clicked;
    };

    btn.addEventListener("click", click);
    return () => {
      btn.removeEventListener("click", click);
    };
  }, []);

  const Mesh = () => {
    const list = [];
    for (let i = 0; i < boxCount; i++) {
      const color = [0xfe4365, 0x556270, 0x3fb8af, 0xffd8d8, 0x556270][
        Math.floor(Math.random() * 5)
      ];

      list.push(
        <mesh
          key={i}
          position={[
            5 * (Math.random() - 0.5),
            5 * (Math.random() - 0.5),
            5 * (Math.random() - 0.5),
          ]}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
          ]}
        >
          <boxGeometry attach="geometry" args={[0.08, 0.08, 0.08]} />
          <meshStandardMaterial attach="material" color={color} />
        </mesh>
      );
    }
    return list;
  };

  return (
    <>
      <color attach="background" args={["#000"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 1, 0]} intensity={2} />
      <directionalLight position={[0, -1, 0]} intensity={2} />
      <Mesh />
    </>
  );
}
