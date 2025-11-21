"use client";

import { cn } from "@/lib";
import {
    Zap,
    Server,
    Cloud,
    BookOpen,
    TrendingUp,
    Shield,
    Radio,
    Sparkles
} from "lucide-react";
import Container from "../global/container";
import { useLanguage } from "@/contexts/language-context";

const FEATURE_TAGS = [
    { icon: Zap, key: "solutionsIA" },
    { icon: Server, key: "localServer" },
    { icon: Cloud, key: "cloud" },
    { icon: BookOpen, key: "ragAgents" },
    { icon: TrendingUp, key: "dataAnalysis" },
    { icon: Shield, key: "legacyIntegration" },
    { icon: Radio, key: "realtime" },
    { icon: Sparkles, key: "contentGeneration" }
];

const LanguageSupport = () => {
    const { t } = useLanguage();
    return (
        <div className="relative flex flex-col items-center justify-center w-full pt-8 pb-20">
            <Container delay={0.4}>
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 w-full max-w-6xl mx-auto">
                    {FEATURE_TAGS.map((tag, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-full",
                                "bg-background/60 border border-foreground/10",
                                "hover:border-[#8F00FF]/50 hover:bg-background/80",
                                "transition-all duration-300",
                                "text-sm font-medium"
                            )}
                        >
                            <tag.icon className="size-4 text-[#8F00FF]" />
                            <span>{t(`langSupport.${tag.key}`)}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
};

export default LanguageSupport
