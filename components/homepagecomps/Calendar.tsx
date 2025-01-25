"use client";

import React, { useState } from "react";
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar"; // Import Shadcn Calendar component

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date()); // Track selected date

    return (
        <div className="w-full h-full dark:bg-[#1e1e1e] bg-[#ebebeb]">
            <div className="flex h-[100%]">
                <ShadcnCalendar
                    selected={selectedDate}
                    onSelect={(date: Date | undefined) => setSelectedDate(date)} // Type-safe onSelect
                    className="bg-transparent text-black dark:text-white border-none rounded-lg"
                />
                <div className="text-center h-[10%] text-md dark:text-white text-black mb-1">Journal</div>
                
            </div>
        </div>
    );
};

export default Calendar;
