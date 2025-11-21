"use client";

import Container from "../global/container";
import { cn } from "@/lib";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const Founders = () => {
    return (
        <div id="sobre-nos" className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Liderança com Autoridade <br className="hidden lg:block" /> <span className="font-subheading italic">e Performance</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6 max-w-3xl">
                        A Rocket Launch Digital é liderada por especialistas com décadas de experiência prática, professores nas maiores escolas de tecnologia do país e membros da Associação Brasileira de Inteligência Artificial.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
                {/* Paolo Almeida */}
                <Container delay={0.2}>
                    <div className={cn(
                        "flex flex-col relative rounded-2xl lg:rounded-3xl transition-all",
                        "bg-background/60 backdrop-blur-sm border border-foreground/10",
                        "overflow-hidden h-full shadow-lg",
                        "hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
                    )}>
                        <div className="p-6 md:p-8 flex flex-col items-center">
                            {/* Imagem */}
                            <div className="relative w-52 h-52 md:w-60 md:h-60 rounded-[10px] overflow-hidden mb-6 border-2 border-foreground/10 shadow-md">
                                <Image
                                    src="/images/founders/paolo-almeida.jpg"
                                    alt="Paolo Almeida"
                                    width={240}
                                    height={240}
                                    className="object-cover w-full h-full"
                                    style={{ objectPosition: 'center top' }}
                                    unoptimized
                                />
                            </div>

                            {/* Nome e Cargo */}
                            <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-2 text-center">
                                Paolo Almeida
                            </h3>
                            <p className="text-base md:text-lg text-muted-foreground mb-6 text-center">
                                CEO & Founder
                            </p>

                            {/* Bio */}
                            <p className="text-sm md:text-base text-accent-foreground/90 leading-relaxed mb-6 text-left">
                                Paolo Almeida é especialista em Tecnologia e Produtos Digitais, com mais de 19 anos de experiência desenvolvendo soluções para agências, startups e grandes fintechs, impactando mais de 120 milhões de usuários. Empreendedor, autor do livro e metodologia "Human Skills First" e organizador do AngularSP, também é professor de tecnologia com foco em Inteligência Artificial na FIAP / Alura para Empresas. Como CEO e Founder da Rocket Launch Digital, lidera a visão estratégica da empresa, impulsionando soluções de Inteligência Artificial, na construção de AI Agents e Automação de Alto Impacto para negócios B2B. É membro do comitê Futuro do Trabalho e Educação da ABRIA - Associação Brasileira de Inteligência Artificial.
                            </p>

                            {/* Link do LinkedIn */}
                            <div className="flex items-center justify-center mt-auto pt-6 border-t border-foreground/10 w-full">
                                <Link
                                    href="https://www.linkedin.com/in/paoloalmeida/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors group"
                                >
                                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium">Conectar no LinkedIn</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Guilherme Pereira */}
                <Container delay={0.3}>
                    <div className={cn(
                        "flex flex-col relative rounded-2xl lg:rounded-3xl transition-all",
                        "bg-background/60 backdrop-blur-sm border border-foreground/10",
                        "overflow-hidden h-full shadow-lg",
                        "hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
                    )}>
                        <div className="p-6 md:p-8 flex flex-col items-center">
                            {/* Imagem */}
                            <div className="relative w-52 h-52 md:w-60 md:h-60 rounded-[10px] overflow-hidden mb-6 border-2 border-foreground/10 shadow-md">
                                <Image
                                    src="/images/founders/guilherme-pereira.jpg"
                                    alt="Guilherme Pereira"
                                    width={240}
                                    height={240}
                                    className="object-cover w-full h-full"
                                    style={{ objectPosition: 'center top' }}
                                    unoptimized
                                />
                            </div>

                            {/* Nome e Cargo */}
                            <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-2 text-center">
                                Guilherme Pereira
                            </h3>
                            <p className="text-base md:text-lg text-muted-foreground mb-6 text-center">
                                COO & Co-Founder
                            </p>

                            {/* Bio */}
                            <p className="text-sm md:text-base text-accent-foreground/90 leading-relaxed mb-6 text-left">
                                Guilherme Pereira soma mais de 9 anos de atuação estratégica em tecnologia, operações e segurança eletrônica patrimonial. COO e Co-Founder da Rocket Launch Digital, lidera o desenvolvimento de automações inteligentes e agentes de IA voltados para eficiência operacional e aumento de faturamento em empresas B2B. Também é professor de tecnologia com foco em Inteligência Artificial FIAP / Alura para Empresas. Com perfil empreendedor e foco extremo em resultados, aplica nos negócios a disciplina adquirida como triatleta e ultramaratonista. É membro ativo da ABRIA - Associação Brasileira de Inteligência Artificial.
                            </p>

                            {/* Link do LinkedIn */}
                            <div className="flex items-center justify-center mt-auto pt-6 border-t border-foreground/10 w-full">
                                <Link
                                    href="https://www.linkedin.com/in/guilhermepereiratech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors group"
                                >
                                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium">Conectar no LinkedIn</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Founders;

