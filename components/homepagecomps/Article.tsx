import React from "react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils"; // Adjust the import path as necessary

const ArticlesAiCard = () => {
    return (
        <div className="w-full h-full dark:bg-[#1e1e1e] rounded-2xl shadow-lg">
            <div>
                <div className="text-center text-md">Articles Ai</div>
            </div>
            <Separator />
            <div className="p-2 pb-6 h-64 overflow-y-auto scrollable-left">
                <div className={cn("space-y-2")}>
                    {[...Array(10)].map((_, index) => (
                        <div
                            key={index}
                            className="h-6 rounded dark:bg-[#303030] bg-[#ffffff] w-full dark:hover:bg-black hover:bg-[#e6e6e6] transition-colors"
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticlesAiCard;
