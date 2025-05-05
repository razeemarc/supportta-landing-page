import React from 'react';
import { Target, Diamond } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const MissionVisionSection = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[50px] p-5">
                {/* Mission Card */}
                <Card className="bg-[#FDF9F3] border-none rounded-[8px] p-0 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.04)]">
                    <CardContent className="p-8 sm:p-10 flex flex-col items-center text-center w-full h-full">
                        <div className="text-amber-500 mb-4">
                            <Target size={48} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            Our Mission Is To Create User-Friendly, Impactful Solutions That Help
                            Businesses Thrive While Building Lasting Trust And Meaningful
                            Experiences.
                        </p>
                    </CardContent>
                </Card>

                {/* Vision Card */}
                <Card className="bg-[#FDF9F3] border-none rounded-[8px] p-0 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.04)]">
                    <CardContent className="p-8 sm:p-10 flex flex-col items-center text-center w-full h-full">
                        <div className="text-amber-500 mb-4">
                            <Diamond size={48} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
                            Our Vision
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            To Empower Businesses With Smart, Seamless Digital Solutions That Drive
                            Real Growth And Success. Not To Make You Look Good But Us Too.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default MissionVisionSection;
