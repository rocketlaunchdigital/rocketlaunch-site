"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

const MobileMenu = () => {
    const { t } = useLanguage();
    return (
        <Sheet>
            <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] pt-12">
                <SheetHeader className="mb-8">
                    <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                    <Link
                        href="#solucoes"
                        className="text-base font-medium transition-colors hover:text-primary"
                    >
                        {t("nav.solutions")}
                    </Link>
                    <Link
                        href="#sobre-nos"
                        className="text-base font-medium transition-colors hover:text-primary"
                    >
                        {t("nav.about")}
                    </Link>
                    <Link
                        href="https://wa.me/+5511996629140"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium transition-colors hover:text-primary"
                    >
                        {t("nav.contact")}
                    </Link>
                    <div className="pt-4 mt-4 border-t border-border">
                        <Link 
                            href="https://wa.me/+5511996629140" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <Button className="w-full" variant="blue">
                                {t("nav.talkToUs")}
                            </Button>
                        </Link>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
};

export default MobileMenu
