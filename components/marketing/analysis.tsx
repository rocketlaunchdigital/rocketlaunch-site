import Container from "../global/container";
import DatabaseWithRestApi from "../ui/database-with-rest-api";
import { CpuArchitecture } from "../ui/cpu-architecture";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                      Inteligência Operacional  <br /><span className="font-subheading italic">em Tempo Real</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                    Nossos Agentes de IA se integram às suas APIs para monitorar, automatizar e otimizar seus processos de negócio, 24/7.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative w-full max-w-6xl mx-auto items-stretch">
                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50 p-4 lg:p-8 w-full h-full min-h-[450px] overflow-hidden flex items-center justify-center">
                        <DatabaseWithRestApi
                            title="Integração via API REST"
                            circleText="API"
                            badgeTexts={{
                                first: "GET",
                                second: "POST",
                                third: "PUT",
                                fourth: "DELETE"
                            }}
                            buttonTexts={{
                                first: "Rocket Launch",
                                second: "v2_updates"
                            }}
                            lightColor="#8F00FF"
                        />
                    </div>
                </Container>

                <Container delay={0.3}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50 p-4 lg:p-8 w-full h-full min-h-[450px] overflow-hidden flex items-center justify-center">
                        <CpuArchitecture
                            text="IA"
                            width="100%"
                            height="100%"
                            showCpuConnections={true}
                            animateText={true}
                            animateLines={true}
                            animateMarkers={true}
                        />
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;
