import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Wave from "./Wave";
import Astronaut from "./Astronaut";

const HeroBanner = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { duration: 1, ease: "power3.out", opacity: 0 },
        });
        tl.from("h1", {
            x: -100,
        }).from("h2", {
            y: 150,
        });
        const tlHead = gsap.timeline({
            defaults: { duration: 1.5, ease: "ease" },
            repeat: -1,
            yoyo: true,
        });
        tlHead.to("#head", {
            y: 8,
        });

        const tlFlagWave = gsap.timeline({
            defaults: { duration: 1.2, ease: "ease", delay: 0.2 },
            repeat: -1,
            delay: 0.5,
            yoyo: true,
        });
        tlFlagWave
            .to("#right-arm-flag", {
                rotate: 5,
            })
            .to("#right-arm-flag", {
                rotate: -3,
            });
    });
    return (
        <>
            <div className="flex flex-col min-h-[calc(100vh-var(--header-height))] px-8 pt-4 bg-primary-color text-secondary-color relative grow">
                <div className="max-w-[1440px] mx-auto flex flex-col justify-between grow">
                    <div className="mt-10 md:mt-20">
                        <h1 className="font-bold text-2xl md:text-5xl w-3/4 mb-10 uppercase">
                            Know your countries
                        </h1>
                        <h2 className="md:text-2xl md:w-2/3 mb-6">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Praesentium atque at harum soluta sequi animi
                            consequatur placeat corporis natus culpa dolorem
                            quas dolore sed quo expedit
                        </h2>
                    </div>
                    <div className="w-full max-w-[80%] md:max-w-[300px] lg:max-w-[400px] lg:pb-20">
                        <Astronaut />
                    </div>
                </div>
                <Wave />
            </div>
        </>
    );
};

export default HeroBanner;
