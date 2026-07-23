"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { useRef } from "react";

export default function InteractiveOrbitalStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 18 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || !stageRef.current) return;
    const bounds = stageRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  return (
    <motion.div ref={stageRef} className="orbital-stage" style={{ rotateX, rotateY }} onPointerMove={handlePointerMove} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
      <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="orbit orbit-four" />
      <motion.div className="core" animate={{ scale: [1, 1.035, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <BrainCircuit size={72} strokeWidth={1.1} /><span>INTELLIGENCE<br />IN MOTION</span>
      </motion.div>
      <div className="orbit-label label-one">VISION<br /><b>98.4%</b></div><div className="orbit-label label-two">LATENCY<br /><b>12ms</b></div><div className="orbit-label label-three">BUILD<br /><b>ACTIVE</b></div>
    </motion.div>
  );
}
