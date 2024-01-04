import Email from "./Email";
const AboutSection = () => {
    return (
        <div className="relative mx-auto py-10">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <div className="py-2 flex flex-col gap-5 text-md md:text-xl md:flex-row md:gap-10">
                <p className="flex-1 leading-8">I am extremely proficient in Front-End Development using HTML5, Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript, React.Js & React Native And apart from Front-End, I have good knowledge in Back-End using Node JS, Express JS & MongoDB</p>
                <div className="flex-1">
                    <h4 className="text-2xl">Any Type Of Query & Discussion</h4>
                    <Email className="py-2" />
                </div>
            </div>

        </div>
    );
};

export default AboutSection;
