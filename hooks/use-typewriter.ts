"use client";

import { useEffect, useState, useRef } from "react";

interface UseTypewriterOptions {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function useTypewriter({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1000,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (phrases.length === 0) return;

    const currentPhrase = phrases[currentPhraseIndex];

    // Limpa timeouts anteriores
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);

    if (!isDeleting) {
      // Digitando
      if (currentIndex < currentPhrase.length) {
        const speed = typingSpeed;
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
      } else {
        // Terminou de digitar, pausa antes de apagar
        pauseTimeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Apagando
      if (currentIndex > 0) {
        const speed = deletingSpeed;
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, speed);
      } else {
        // Terminou de apagar, vai para próxima frase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setCurrentIndex(0);
        setDisplayText("");
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [
    currentIndex,
    isDeleting,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return displayText;
}

