import { FEATURES } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Features = () => {
    return (
        <div id="solucoes" className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                      Mais que uma empresa.<br /> <span className="font-subheading italic">Uma parceria estratégica.</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                     Nossa abordagem une tecnologia de ponta e visão de negócios para criar soluções que realmente funcionam e escalam no seu ambiente B2B e B2C.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative overflow-visible">

                {FEATURES.map((feature, index) => (
                    <Container key={feature.title} delay={0.1 + index * 0.1} className={cn(
                        "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors",
                        index === 3 && "lg:col-span-2",
                        index === 2 && "md:col-span-2 lg:col-span-1",
                    )}>
                        <MagicCard
                            gradientFrom="#B366FF"
                            gradientTo="#8F00FF"
                            className="p-4 lg:p-6 lg:rounded-3xl"
                            gradientColor="rgba(143,0,255,0.1)"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <feature.icon className="size-5 text-primary" />
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {feature.description}
                            </p>

                            <div className="mt-6 w-full bg-card/50 overflow-hidden relative">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                                {feature.files && (
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-card/90 backdrop-blur-sm">
                                        <div className="space-y-2">
                                            {feature.files.map((file, fileIndex) => (
                                                <div key={fileIndex} className="flex items-center gap-2 text-xs text-foreground/80">
                                                    <div className="w-4 h-4 rounded-full bg-[#8F00FF] flex items-center justify-center">
                                                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </div>
                                                    <span className="flex-1 truncate">{file}</span>
                                                    <div className="w-24 h-1 bg-foreground/10 rounded-full overflow-hidden">
                                                        <div className="h-full bg-[#8F00FF] rounded-full" style={{ width: `${75 + fileIndex * 8}%` }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </MagicCard>
                    </Container>
                ))}
            </div>
        </div>
    )
};

export default Features
