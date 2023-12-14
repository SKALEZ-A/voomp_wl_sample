"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicWhitelist = dynamic(() => import("../../components/Whitelist"), {
  ssr: false,
});

const DynamicStarsCanvas = dynamic(
  () => import("../../components/canvas/Stars"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="relative z-0 ">
      <div className="relative z-0 mb-10 pb-10">
        <DynamicWhitelist />
        <DynamicStarsCanvas />
      </div>
    </main>
  );
}
