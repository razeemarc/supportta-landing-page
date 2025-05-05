import React from 'react'; 
import { Target, Diamond } from "lucide-react"; 
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const MissionVisionSection = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 30
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            boxShadow: "0px 12px 24px 0px rgba(0,0,0,0.12), 0px 0px 8px 0px rgba(0,0,0,0.06)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 200
            }
        },
        hover: {
            rotate: [0, -5, 5, -5, 0],
            transition: {
                duration: 0.5
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.5
            }
        }
    };

    return (
        <motion.div 
            className="container mx-auto px-4 py-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[50px] p-5">
                {/* Mission Card */}
                <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                >
                    <Card className="bg-[#FDF9F3] border-none rounded-[8px] p-0 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.04)]">
                        <CardContent className="p-8 sm:p-10 flex flex-col items-center text-center w-full h-full">
                            <motion.div 
                                className="text-amber-500 mb-4"
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <Target size={48} strokeWidth={1.5} />
                            </motion.div>
                            <motion.h2 
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8"
                                variants={textVariants}
                            >
                                Our Mission
                            </motion.h2>
                            <motion.p 
                                className="text-gray-600 text-base sm:text-lg leading-relaxed"
                                variants={textVariants}
                            >
                                Our Mission Is To Create User-Friendly, Impactful Solutions That Help
                                Businesses Thrive While Building Lasting Trust And Meaningful
                                Experiences.
                            </motion.p>
                        </CardContent>
                    </Card>
                </motion.div>
                
                {/* Vision Card */}
                <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                >
                    <Card className="bg-[#FDF9F3] border-none rounded-[8px] p-0 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.04)]">
                        <CardContent className="p-8 sm:p-10 flex flex-col items-center text-center w-full h-full">
                            <motion.div 
                                className="text-amber-500 mb-4"
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <Diamond size={48} strokeWidth={1.5} />
                            </motion.div>
                            <motion.h2 
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8"
                                variants={textVariants}
                            >
                                Our Vision
                            </motion.h2>
                            <motion.p 
                                className="text-gray-600 text-base sm:text-lg leading-relaxed"
                                variants={textVariants}
                            >
                                To Empower Businesses With Smart, Seamless Digital Solutions That Drive
                                Real Growth And Success. Not To Make You Look Good But Us Too.
                            </motion.p>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default MissionVisionSection;