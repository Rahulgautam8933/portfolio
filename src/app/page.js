"use client"
import Homeindex from "@/compoments/Home";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const handleMouseMove = (e) => {
      cursor.setAttribute("style", `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`);
    };

    const handleClick = () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <>
      <div class="cursor"></div>
      <Homeindex />
    </>
  );
}
