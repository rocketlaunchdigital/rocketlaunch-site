"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { OrbitingCircles } from "../ui/orbiting-circles";
import { useLanguage } from "@/contexts/language-context";
import { useTypewriter } from "@/hooks/use-typewriter";

const Hero = () => {
    const { t } = useLanguage();
    
    const typewriterText = useTypewriter({
        phrases: [
            "no faturamento",
            "na automação",
            "na inovação",
            "no posicionamento",
            "na Inteligência Artificial"
        ],
        typingSpeed: 100,
        deletingSpeed: 50,
        pauseTime: 1000,
    });
    const companies = [
        { name: "OpenAI", logo: "/images/companies/openai.avif" },
        { name: "Anthropic", logo: "/images/companies/anthropic.avif" },
        { name: "Google AI", logo: "/images/companies/googleai.avif" },
        { name: "DeepSeek", logo: "/images/companies/deepseek.avif" },
        { name: "LangChain", logo: "/images/companies/LangChain.avif" },
        { name: "LLaMA", logo: "/images/companies/LLaMA.avif" },
        { name: "n8n", logo: "/images/companies/n8n.avif" },
        { name: "HeyGen", logo: "/images/companies/heygen.avif" },
        { name: "WhatsApp", logo: "/images/companies/whatsapp.avif" },
    ];

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-10">

            <div className="absolute flex lg:hidden size-40 rounded-full bg-[#8F00FF] blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>

            <div className="flex flex-col items-center justify-center gap-y-8 relative">
                <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
                    <OrbitingCircles
                        speed={0.5}
                        radius={300}
                    >
                        <Icons.circle1 className="size-4 text-foreground/70" />
                        <Icons.circle2 className="size-1 text-foreground/80" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.25}
                        radius={400}
                    >
                        <Icons.circle2 className="size-1 text-foreground/50" />
                        <Icons.circle1 className="size-4 text-foreground/60" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.1}
                        radius={500}
                    >
                        <Icons.circle2 className="size-1 text-foreground/50" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                        <Icons.circle1 className="size-4 text-foreground/60" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                    </OrbitingCircles>
                </Container>

                <div className="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0">
                    <Container className="relative hidden lg:block overflow-hidden">
                        <button className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-neutral-800" />
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
                                <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-[#B366FF] to-[#8F00FF] text-[9px] font-medium mr-2 text-white">
                                    IA
                                </span>
                                Automatize, Escale e Domine
                            </span>
                        </button>
                    </Container>
                    <Container delay={0.15}>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-center !leading-tight max-w-4xl mx-auto">
                            Somos o foguete que levará sua empresa a lua <br /> {" "}
                            <span id="typewriter" className="inline-block min-w-[1ch]">
                                {typewriterText}
                                <span>|</span>
                            </span>
                        </h1>
                    </Container>
                    <Container delay={0.2}>
                        <p className="max-w-xl mx-auto mt-2 text-base lg:text-lg text-center text-muted-foreground">
                            {t("hero.subheadline")}
                        </p>
                    </Container>
                    <Container delay={0.25} className="z-20">
                        <div className="flex items-center justify-center mt-6 gap-x-4">
                            <Link 
                                href="https://wa.me/+5511996629140" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 group"
                            >
                                <Button size="lg">
                                    {t("hero.cta")}
                                    <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-all duration-300" />
                                </Button>
                            </Link>
                        </div>
                    </Container>


                </div>
            </div>
        </div>
    )
};

export default Hero
