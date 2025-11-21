import {
    ChartColumnBigIcon,
    DatabaseIcon,
    TrendingUpIcon,
    WandSparklesIcon,
    ZapIcon
} from "lucide-react";

export const FEATURES = [
    {
        title: "Agentes de IA Autônomos",
        description: "Criamos agentes de IA que se integram ao seu CRM, ERP e sistemas de atendimento. Eles não apenas respondem, mas *executam* tarefas complexas como um especialista humano.",
        icon: WandSparklesIcon,
        image: "/images/feature-two.svg",
    },
    {
        title: "Consultoria e Diagnóstico de IA",
        description: "Analisamos seus processos operacionais, financeiros e de vendas para identificar gargalos e criar um plano de ação claro para implementação de IA com foco em ROI.",
        icon: ChartColumnBigIcon,
        image: "/images/feature-one.svg",
    },
    {
        title: "Processamento Inteligente de Documentos",
        description: "Nossa IA lê, interpreta, classifica e extrai dados de contratos, notas fiscais e relatórios. Automatize seu financeiro, jurídico e compliance com precisão.",
        icon: DatabaseIcon,
        image: "/images/feature-three.svg",
        files: [
            "Contrato_Cliente_Q4.pdf",
            "Relatorio_Financeiro_Out.pdf",
            "Notas_Fiscais_Lote_12.zip"
        ]
    },
    {
        title: "Dashboards de Performance Operacional",
        description: "Conectamos suas fontes de dados em um dashboard único que mostra o ROI das automações, horas economizadas e a performance dos processos em tempo real.",
        icon: TrendingUpIcon,
        image: "/images/feature-four.svg",
    },
    {
        title: "Automação Avançada de Workflows",
        description: "Usamos ferramentas como n8n e Make para construir automações robustas que conectam seus sistemas. Do lead ao pós-venda, seu negócio opera 24/7.",
        icon: ZapIcon,
        image: "/images/feature-five.svg",
    }
]