"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ThreeCube({ objToRender = "dna" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = objToRender === "dino" ? 25 : 1.2;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Lights
    const topLight = new THREE.DirectionalLight(0xffffff, 2);
    topLight.position.set(50, 50, 50);
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5 : 0.8);
    scene.add(ambientLight);

    // OrbitControls for 'dino' only
    let controls;
    if (objToRender === "dino") {
      controls = new OrbitControls(camera, renderer.domElement);
    }

    // Load GLTF
    let object = null;
    const loader = new GLTFLoader();
    loader.load(
      `/models/${objToRender}/scene.gltf`,
      (gltf) => {
        object = gltf.scene;
        object.scale.set(0.1, 0.1, 0.1); // adjust scale if needed
        scene.add(object);
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
      (error) => console.error("Error loading GLTF:", error)
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (object) {
        // Automatic rotation animation
        object.rotation.y += 0.01; // rotate around Y axis
        object.rotation.x += 0.005; // slight X axis rotation
      }

      if (controls) controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [objToRender]);

  return <div ref={mountRef} style={{ width: "w-[100%]", height: "50vh" }} />;
}
