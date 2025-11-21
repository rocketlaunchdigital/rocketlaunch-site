"use client";

import Link from "next/link";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import { LanguageToggle } from "../ui/language-toggle";
import { useLanguage } from "@/contexts/language-context";

const Navbar = () => {
    const { t } = useLanguage();
    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.icon className="h-10 md:h-12 w-auto" />
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <ul className="flex items-center gap-8">
                            <li className="text-sm font-medium -1 link">
                                <Link href="#solucoes">
                                    {t("nav.solutions")}
                                </Link>
                            </li>
                            <li className="text-sm font-medium -1 link">
                                <Link href="#sobre-nos">
                                    {t("nav.about")}
                                </Link>
                            </li>
                            <li className="text-sm font-medium -1 link">
                                <Link 
                                    href="https://wa.me/+5511996629140"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t("nav.contact")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <LanguageToggle />
                        <Link 
                            href="https://wa.me/+5511996629140" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hidden lg:block"
                        >
                            <Button variant="blue">
                                {t("nav.talkToUs")}
                            </Button>
                        </Link>
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar
