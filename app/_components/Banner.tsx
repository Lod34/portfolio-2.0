'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { IconBrandGithub } from '@tabler/icons-react';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">VISIONARY</span>
                        <br /> <span className="ml-4">ENTREPRENEUR</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m <span className="font-medium text-foreground">Lorenzo</span>.
                        I&apos;m a 17-year-old visionary entrepreneur, passionate about robotics, artificial intelligence, and building innovative projects that make a difference.
                    </p>
                    <div className="flex items-center gap-4 mt-9 banner-button slide-up-and-fade">
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${GENERAL_INFO.email}&su=${GENERAL_INFO.emailSubject}&body=${GENERAL_INFO.emailBody}`}
                            variant="primary"
                            className=""
                        >
                            Contact Me
                        </Button>
                        <a 
                            href="https://github.com/LoackyBit" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 hover:-translate-y-2 hover:text-primary transition-all duration-300 ease-in-out cursor-pointer"
                        >
                            <IconBrandGithub size={40} />
                        </a>
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            3+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            7+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            10K+
                        </h5>
                        <p className="text-muted-foreground">Hours Worked</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
