import Container from "../global/container";
import Image from "next/image";

const Companies = () => {
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
        <div className="relative flex flex-col items-center justify-center w-full py-20 companies overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-xl text-2xl font-medium">
                      Algumas das <span className="font-subheading italic">tecnologias</span> que utilizamos
                    </h3>
                </div>
            </Container>
            

            <Container delay={0.1}>
                <div className="flex flex-row flex-wrap items-center justify-center gap-8 max-w-4xl mx-auto pt-16">
                    {companies.map((company) => (
                        <div
                            key={company.name}
                            className="relative h-7 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                        >
                            <Image
                                src={company.logo}
                                alt={company.name}
                                width={120}
                                height={28}
                                className="h-7 w-auto object-contain"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
};

export default Companies
