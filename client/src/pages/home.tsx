import { ExternalLink, Youtube, BookOpen, Scale, Briefcase, Building2, FileCheck, GraduationCap, Sparkles } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@assets/Gemini_Generated_Image_yy44wryy44wryy44_1765649369611.png";

interface LinkItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  icon: React.ReactNode;
}

const platformLinks: LinkItem[] = [
  {
    id: "electoral-law",
    title: "Agentes no Direito Eleitoral",
    description: "Plataforma de IA para direito eleitoral",
    url: "https://lexmindai-ia-no-direito-com-jonathan.manus.space/",
    icon: <Scale className="w-5 h-5" />,
  },
  {
    id: "labor-law",
    title: "Agentes no Direito do Trabalho",
    description: "Plataforma de IA para direito trabalhista",
    url: "https://ia-no-direito-jonathangadelha-ai-xdwbqmqj.manus.space/",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: "accounting",
    title: "Prestação de Contas Eleitorais e Partidárias",
    description: "Suporte para advogados e contadores",
    url: "https://ia-no-direito-jonathangadelha-ai-xdwbqmqj.manus.space/",
    icon: <FileCheck className="w-5 h-5" />,
  },
  {
    id: "public-attorney",
    title: "Fazenda Pública em Juízo",
    description: "Procuradoria do Estado",
    url: "https://lexmindia-jycwsp63.manus.space/",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    id: "youtube",
    title: "Canal no YouTube",
    description: "Conteúdos sobre IA no Direito",
    url: "https://www.youtube.com/channel/UC3INLkL60Fvh_lnif6XVerw",
    icon: <Youtube className="w-5 h-5" />,
  },
];

const courseLinks: LinkItem[] = [
  {
    id: "course-1",
    title: "IA Aplicada ao Direito Eleitoral - Minutas de Sentenças",
    description: "Análise de PCE e PCA em todas as classes processuais",
    url: "https://go.hotmart.com/X96637418N",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "course-2",
    title: "Agentes de IA - Mandado de Segurança e Habeas Corpus",
    description: "Revolução digital para Justiça Eleitoral - 2º Grau",
    url: "https://go.hotmart.com/W99910455S",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "course-3",
    title: "Análise de Processo em Lote no Google Colab",
    description: "Minutas de Sentenças automatizadas",
    url: "https://go.hotmart.com/Q99611878M",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "course-4",
    title: "Ferramentas de IA para Advogados Eleitorais",
    description: "Inteligência artificial aplicada ao direito eleitoral",
    url: "https://go.hotmart.com/B99303018K",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "course-5",
    title: "Integração MCP - Claude + Obsidian + PC",
    description: "Configure sua estação de trabalho com IA",
    url: "https://go.hotmart.com/E99551228R",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "course-6",
    title: "Agentes de Suporte a Prestação de Contas",
    description: "SPCE e SPCA para Contadores e Advogados",
    url: "https://go.hotmart.com/Y99889614W",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "course-7",
    title: "Academo Pro Assistente",
    description: "Aliado estratégico na escrita acadêmica de alto impacto",
    url: "https://go.hotmart.com/I99745310M",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "course-8",
    title: "NEXUS Licitações",
    description: "Agente de Inteligência para Contratações Públicas",
    url: "https://go.hotmart.com/T100173631E",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "course-9",
    title: "Inteligência Artificial Aplicada ao Direito",
    description: "Curso completo sobre IA no universo jurídico",
    url: "https://go.hotmart.com/O100579907D",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "course-10",
    title: "Criador de Skill no Claude",
    description: "Minutando Sentenças com Google AI Studio e Claude",
    url: "https://hotmart.com/pt-br/marketplace/produtos/criador-de-skill-claude-no-google-claude-skill-minutando-sentenca-com-habilidades-do-claude/T102862600K",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

function LinkCard({ item, variant = "platform" }: { item: LinkItem; variant?: "platform" | "course" }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full group"
      data-testid={`link-${item.id}`}
    >
      <Card className="p-4 bg-card border-card-border transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:border-primary/40">
        <div className="flex items-center gap-4">
          <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
            variant === "platform" 
              ? "bg-primary/20 text-primary" 
              : "bg-muted text-muted-foreground"
          }`}>
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 
              className="font-medium text-foreground text-sm md:text-base leading-tight truncate"
              data-testid={`text-title-${item.id}`}
            >
              {item.title}
            </h3>
            {item.description && (
              <p 
                className="text-xs md:text-sm text-muted-foreground mt-0.5 truncate"
                data-testid={`text-description-${item.id}`}
              >
                {item.description}
              </p>
            )}
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
        </div>
      </Card>
    </a>
  );
}

export default function Home() {
  const whatsappNumber = "5581981252689";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <aside className="lg:w-[320px] lg:sticky lg:top-8 lg:self-start">
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-2xl blur-xl opacity-50" />
                <img 
                  src={profileImage} 
                  alt="Jonathan Gadelha" 
                  className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] object-cover rounded-2xl ring-2 ring-primary/30 shadow-2xl shadow-primary/20"
                  data-testid="img-profile"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2" data-testid="text-name">
                Jonathan Gadelha
              </h1>
              
              <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30" data-testid="badge-title">
                <BookOpen className="w-3 h-3 mr-1" />
                Especialista em IA Aplicada ao Direito
              </Badge>
              
              <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto lg:mx-0 mb-6">
                Transformando a prática jurídica através da inteligência artificial. 
                Plataformas, cursos e conteúdos exclusivos para profissionais do direito.
              </p>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl font-medium text-sm transition-all duration-200 hover:bg-[#20BA5C] hover:scale-105 shadow-lg shadow-[#25D366]/30"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
                <span>Fale Comigo</span>
                <span className="text-white/80 text-xs">81 98125-2689</span>
              </a>

              <div className="mt-8 p-4 bg-card/50 rounded-xl border border-card-border hidden lg:block">
                <p className="text-xs text-muted-foreground text-center">
                  Vamos construir o futuro?<br />
                  <span className="text-foreground font-medium">Entre em contato para parcerias e consultorias.</span>
                </p>
              </div>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <section className="mb-8" aria-labelledby="platforms-heading">
              <h2 id="platforms-heading" className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2" data-testid="heading-platforms">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Scale className="w-4 h-4 text-primary" />
                </div>
                Plataformas de IA Jurídica
              </h2>
              <div className="space-y-3">
                {platformLinks.map((link) => (
                  <LinkCard key={link.id} item={link} variant="platform" />
                ))}
              </div>
            </section>

            <section aria-labelledby="courses-heading">
              <h2 id="courses-heading" className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2" data-testid="heading-courses">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </div>
                Cursos Disponíveis
              </h2>
              <div className="space-y-3">
                {courseLinks.map((link) => (
                  <LinkCard key={link.id} item={link} variant="course" />
                ))}
              </div>
            </section>
          </main>
        </div>

        <footer className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Jonathan Gadelha. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}
