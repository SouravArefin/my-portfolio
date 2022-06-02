import React from "react";
import Particles from "react-particles-js"
import particlesConfig from "./Config/Particle-config";


export default function ParticleBackground() {
    return (
        <Particles params={particlesConfig}></Particles>
    );
}