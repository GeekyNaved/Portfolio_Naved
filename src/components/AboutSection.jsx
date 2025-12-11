import Email from "./Email";
const AboutSection = () => {
    return (
        <div className="relative mx-auto py-10">
            <h2 className="text-3xl font-semibold underline decoration-teal-400 underline-offset-8">About Me</h2>
            <div className="py-2 flex flex-col gap-5 text-md md:text-xl md:flex-row md:gap-10">
                <p className="flex-1 leading-8 text-gray-200">
                    I partner with founders and teams to launch web and mobile apps without the drama. I work in React/Next.js, React Native, and Node/Express/MongoDB to keep things fast, stable, and easy to ship.
                </p>
                <div className="flex-1 space-y-2">
                    <h4 className="text-2xl font-semibold">Any Type Of Query & Discussion</h4>
                    <p className="text-gray-300">Tell me your users, goals, and timeline—I’ll map a lean plan.</p>
                    <Email className="py-2" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
