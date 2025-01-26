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
        <div className="w-full h-full dark:bg-[#1e1e1e] rounded-2xl shadow-lg p-1">
            <div>
                <div className="text-center text-md text-black dark:text-white">Articles AI</div>
            </div>
            <Separator />
            <div className="p-2 mb-1 pb-6 h-64 overflow-y-auto scrollable-left">
                <div className={cn("space-y-2")}>
                    {articles.map((title, index) => (
                        <div
                            key={index}
                            className="h-8 hover:cursor-pointer scrollable-right flex items-center justify-start px-4 rounded-lg dark:bg-[#303030] bg-[#ffffff] w-full dark:hover:bg-black hover:bg-[#b6b6b6] transition-colors"
                        >
                            <span className="text-sm dark:text-white text-black">{title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticlesAiCard;
