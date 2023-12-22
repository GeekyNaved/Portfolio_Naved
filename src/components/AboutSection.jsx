import { MdEmail } from "react-icons/md"
const AboutSection = () => {
    return (
        <div className="relative mx-auto  py-10">
            <h2 className="text-3xl">About Me</h2>
            <div className="flex flex-col gap-3 md:flex-row">
                <p>I am extremely proficient in Front-End Development using HTML5, Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript, React.Js & React Native And apart from Front-End, I have good knowledge in Back-End using Node JS, Express JS & MongoDB</p>
                <div>
                    <h4 className="text-2xl">Any Type Of Query & Discussion</h4>
                    <a
                        href="mailto:navedahmed040@gmail.com"
                        className="flex items-center gap-2 text-white"
                    >
                        <MdEmail />
                        <p className="py-1">
                            navedahmed040@gmail.com
                        </p>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default AboutSection;
