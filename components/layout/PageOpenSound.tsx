"use client";

import { useEffect } from "react";
import { config } from "@/lib/config";

export function PageOpenSound() {
  useEffect(() => {
    if (!config.sound.enabled) {
      return;
    }

    const audio = new Audio(config.sound.src);
    let hasPlayed = false;

    audio.volume = config.sound.volume;
    audio.preload = "auto";

    const playSound = async () => {
      if (hasPlayed) {
        return;
      }

      try {
        await audio.play();
        hasPlayed = true;
      } catch {}
    };

    const playAfterInteraction = () => {
      void playSound();
      window.removeEventListener("pointerdown", playAfterInteraction);
      window.removeEventListener("keydown", playAfterInteraction);
    };

    void playSound();

    if (!hasPlayed) {
      window.addEventListener("pointerdown", playAfterInteraction, { once: true });
      window.addEventListener("keydown", playAfterInteraction, { once: true });
    }

    return () => {
      window.removeEventListener("pointerdown", playAfterInteraction);
      window.removeEventListener("keydown", playAfterInteraction);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null;
}