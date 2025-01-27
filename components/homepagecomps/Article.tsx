import React from "react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

const ArticlesAiCard = () => {
    const articles = [
        "5 Simple Ways to Practice Self-Care",
        "Understanding Anxiety and How to Manage It",
        "Tips for Better Sleep and Mental Health",
        "How Gratitude Can Improve Your Well-Being",
        "The Role of Exercise in Reducing Stress",
        "Mindfulness Techniques for a Calmer Mind",
        "Breaking the Stigma Around Mental Health",
        "Healthy Eating Habits for Mental Wellness",
        "The Importance of Setting Boundaries",
        "Coping Strategies for Difficult Emotions"
    ];

    return (
        <div className="w-full h-full bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow-lg p-1">
            <div>
                <div className="text-center text-md text-gray-800 dark:text-white">Articles AI</div>
            </div>
            <Separator className="my-2 bg-gray-300 dark:bg-zinc-800" />
            <div className="p-2 mb-1 pb-6 h-[85%] overflow-y-auto scrollable-left">
                <div className={cn("space-y-2")}>
                    {articles.map((title, index) => (
                        <div
                            key={index}
                            className="h-8 hover:cursor-pointer scrollable-right flex items-center justify-start px-4 rounded-lg bg-white dark:bg-zinc-800 text-gray-800 dark:text-white transition-colors hover:bg-gray-200 dark:hover:bg-zinc-700"
                        >
                            <span className="text-sm">{title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticlesAiCard;
