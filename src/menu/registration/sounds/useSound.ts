import { useEffect, useRef } from "react";

export function useSound(src: string, volume: number = 1) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.volume = volume;
    audioRef.current = audio;
  }, [src, volume]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play()
        .then(() => console.log("✅ Звук проигрался:", src))
        .catch((e) => console.log("❌ Не удалось воспроизвести звук:", src, e));
    }
  };

  return play;
}
