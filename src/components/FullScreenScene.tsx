import { ReactNode } from "react";

interface FullScreenSceneProps {
  background: string;
  children?: ReactNode;
}

export default function FullScreenScene({ background, children }: FullScreenSceneProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Фон */}
      <img
        src={background}
        alt="Сцена"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ maxHeight: "100vh" }}
      />

      {/* UI поверх */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
