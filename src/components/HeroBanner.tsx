import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Wave from "./Wave";
import Astronaut from "./Astronaut";

const HeroBanner = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { duration: 0.75, ease: "power3.out", opacity: 0 },
        });
        tl.from("h1", {
            x: -100,
        }).from(".description", {
            y: 150,
        });
        gsap.to("#head", {
            y: 8,
            duration: 1.5,
            ease: "ease",
            repeat: -1,
            yoyo: true,
        });
        gsap.to("#body,#right-arm", {
            y: 8,
            duration: 1.5,
            ease: "ease",
            repeat: -1,
            yoyo: true,
            delay: 0.2,
        });

        const tlFlagWave = gsap.timeline({
            defaults: { duration: 1.2, ease: "ease", delay: 0.2 },
            repeat: -1,
            delay: 0.5,
            yoyo: true,
        });
        tlFlagWave
            .to("#right-arm-flag", {
                rotate: 4,
            })
            .to("#right-arm-flag", {
                rotate: -2,
            });
        gsap.to("#flag-main", {
            scaleX: 1.1,
            scaleY: 0.95,
            ease: "Power1.easeInOut",
            repeat: -1,
            yoyo: true,
            duration: 0.8,
        });
    });
    return (
        <>
            <div className="flex flex-col min-h-[calc(100vh-var(--header-height))] px-8 md:px-16 pt-4 bg-primary-color text-secondary-color relative grow">
                <div className="max-w-[1440px] mx-auto flex flex-col justify-between grow">
                    <div className="mt-10 md:mt-20">
                        <h1 className="font-bold text-2xl md:text-5xl w-3/4 mb-10 uppercase">
                            Know your flags
                        </h1>
                        <p className="description md:text-2xl md:w-2/3 mb-6">
                            Embark on a global adventure from the comfort of
                            your screen with our flag guessing quiz website.
                            Unleash your inner explorer and see how many flags
                            you can correctly identify—will you emerge as a flag
                            master? 🏆🌏
                        </p>
                    </div>
                    <div className="w-full max-w-[80%] md:max-w-[300px] lg:max-w-[400px] md:pb-20">
                        <Astronaut />
                    </div>
                </div>
                <Wave />
            </div>
        </>
    );
};

export default HeroBanner;
