"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Smile, Meh, Frown, Angry } from "lucide-react";

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const moods = [
    { id: 1, icon: Smile, label: "Happy" },
    { id: 2, icon: Meh, label: "Bored" },
    { id: 3, icon: Frown, label: "Sad" },
    { id: 4, icon: Angry, label: "Angry" },
  ];

  const currentMood = moods.find((mood) => mood.id === selectedMood);

  const handleMoodChange = (id: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedMood(id);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <TooltipProvider>
      <div className="h-full w-full bg-gray-100 dark:bg-zinc-900 p-8 shadow-lg transition-colors duration-300">
        <div className="grid grid-cols-[1fr,auto,auto] items-center gap-6 ">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl text-gray-800 dark:text-white">CURRENT MOOD</h2>
          </div>

          <Separator orientation="vertical" className="h-full w-px bg-gray-300 dark:bg-zinc-800" />

          <div className="flex justify-end">
            <div
              className={`h-20 w-20 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 shadow-inner transition-all duration-300 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100"
              }`}
              aria-label="Current mood display"
            >
              {currentMood ? (
                <currentMood.icon className={`h-20 w-20 text-gray-800 dark:text-white transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`} />
              ) : (
                <div className="text-gray-400 text-sm dark:text-gray-600 text-center">Select a mood</div>
              )}
            </div>
            {isTransitioning && (
              <div className="absolute h-20 w-20 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 transition-all duration-300 translate-y-[-100%] opacity-0">
                {currentMood && <currentMood.icon className="h-20 w-20 text-gray-800 dark:text-white" />}
              </div>
            )}
          </div>
        </div>

        <Separator className="my-8 bg-gray-300 dark:bg-zinc-800" />

        <div className="flex justify-between gap-4">
          {moods.map((mood) => (
            <Tooltip key={mood.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => handleMoodChange(mood.id)}
                  className="relative flex rounded-full transition-all"
                  aria-label={mood.label}
                >
                  <mood.icon className="h-16 w-16 text-black dark:text-white" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                <p className="text-sm">{mood.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
