import { Briefcase } from "lucide-react";
import Title from "../../components/common/title";

const jobs = [
    {
        title: "Senior Software Developer",
        department: "ENGINEERING",
        location: "REMOTE",
        type: "FULL-TIME",
        description: "We're looking for an experienced software developer to join our team...",
    },
    {
        title: "Senior Software Developer",
        department: "ENGINEERING",
        location: "REMOTE",
        type: "FULL-TIME",
        description: "We're looking for an experienced software developer to join our team...",
    },
    {
        title: "Senior Software Developer",
        department: "ENGINEERING",
        location: "REMOTE",
        type: "FULL-TIME",
        description: "We're looking for an experienced software developer to join our team...",
    },
];

export default function CareersPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="text-center py-16 bg-white mt-20 px-4">
                <h1 className="text-4xl font-bold text-black">Careers</h1>
                <p className="font-semibold text-gray-800 mt-2 text-lg">
                    Let's Build Something Amazing Together!
                </p>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    We're always looking for talented individuals to join <br /> our team and help us build amazing digital solutions.
                </p>
            </section>

            {/* Join Section */}
            <section className="bg-[#f9f5f0] py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <Title text="JOIN" />
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Be a part of our team,
                        </h2>
                    </div>

                    {/* Job Cards */}
                    <div className="space-y-10">
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[10px] p-6 md:p-[30px] flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-[1200px] mx-auto space-y-6 md:space-y-0"
                            >
                                {/* Left section */}
                                <div className="flex flex-col items-start space-y-4 md:space-y-6 max-w-full md:max-w-[70%]">
                                    <div className="bg-orange-50 rounded-full w-fit p-4">
                                        <Briefcase className="text-[#E08F34] w-8 h-8" />
                                    </div>
                                    <div className="space-y-2 md:space-y-3">
                                        <h3 className="text-2xl md:text-[28px] font-raleway text-[#131122E5] leading-[100%]">
                                            {job.title}
                                        </h3>
                                        <p className="text-base md:text-[22px] uppercase text-[#13112299] font-raleway">
                                            {job.department} &nbsp;|&nbsp; {job.location} &nbsp;|&nbsp; {job.type}
                                        </p>
                                        <p className="text-base md:text-[22px] font-medium font-raleway text-[#131122E5] line-clamp-2 md:line-clamp-1">
                                            {job.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Right section */}
                                <div className="w-full md:w-auto">
                                    <button
                                        className="w-full md:w-[240px] h-[54px] px-[30px] py-[15px] rounded-lg text-white font-semibold border-2 border-[#C18830]"
                                        style={{
                                            background: 'linear-gradient(180deg, #CC9642 0%, #976220 100%)',
                                        }}
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
