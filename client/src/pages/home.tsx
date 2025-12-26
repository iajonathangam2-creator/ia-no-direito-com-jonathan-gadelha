import { ExternalLink, Youtube, BookOpen, Scale, Briefcase, Building2, FileCheck, GraduationCap, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/Gemini_Generated_Image_pn8gc7pn8gc7pn8g_1766101710472.png";
import bioImage from "@assets/image_1765805455929.png";

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
    id: "civil-law",
    title: "Agentes no Direito e Processo Civil",
    description: "Ações Cíveis com Claude Skill e Google AI Studio",
    url: "https://ia-no-direito-jonathangadelha-acoes-civeis.manus.space/",
    icon: <Scale className="w-5 h-5" />,
  },
  {
    id: "penal-law",
    title: "Agentes no Direito Penal e Processo Penal",
    description: "Ações Penais com Claude Skill e Google AI Studio",
    url: "https://ia-no-direito-jonathangadelha-acao-penal.manus.space/",
    icon: <Scale className="w-5 h-5" />,
  },
  {
    id: "accounting",
    title: "Prestação de Contas Eleitorais e Partidárias",
    description: "Suporte para advogados e contadores",
    url: "https://jonathanai-pce-pca-externo.manus.space/",
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
    id: "ia-direito-geral",
    title: "IA Aplicada ao Direito - Claude Skill + Google AI Studio",
    description: "Minutas de Petições e Decisões para qualquer área do direito. Para advogados, assessoria, magistrados, promotores e procuradores.",
    url: "https://jonathan-ia-aplicada-ao-direito-43ew975u.manus.space/",
    icon: <Sparkles className="w-5 h-5" />,
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
                  className="relative w-[200px] md:w-[280px] h-auto object-contain rounded-2xl ring-2 ring-primary/30 shadow-2xl shadow-primary/20"
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
            <section className="mb-8" aria-labelledby="youtube-heading">
              <a
                href="https://www.youtube.com/channel/UC3INLkL60Fvh_lnif6XVerw"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                data-testid="link-youtube-featured"
              >
                <Card className="p-6 bg-gradient-to-r from-red-600/20 via-red-500/10 to-transparent border-red-500/30 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-red-500/20 group-hover:border-red-500/50">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
                      <Youtube className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h2 id="youtube-heading" className="font-bold text-foreground text-lg" data-testid="heading-youtube">
                          Canal no YouTube
                        </h2>
                        <Badge variant="secondary" className="bg-red-600/20 text-red-400 border-red-500/30 text-xs">
                          Destaque
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Conteúdos exclusivos sobre IA no Direito, tutoriais e novidades
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors flex-shrink-0" />
                  </div>
                </Card>
              </a>
            </section>

            <section className="mb-8" aria-labelledby="chatbot-heading">
              <a
                href="https://notebooklm.google.com/notebook/f906d1c8-d104-4732-81ad-dc49b2647724"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                data-testid="link-chatbot-featured"
              >
                <Card className="p-6 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-transparent border-blue-500/30 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-blue-500/20 group-hover:border-blue-500/50">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h2 id="chatbot-heading" className="font-bold text-foreground text-lg" data-testid="heading-chatbot">
                          ChatBot Jhon
                        </h2>
                        <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs">
                          Destaque
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tire suas dúvidas sobre o curso e as Plataformas
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0" />
                  </div>
                </Card>
              </a>
            </section>

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
      </div>

      <section className="relative z-10 w-full bg-background border-t border-border" aria-labelledby="about-heading" data-testid="section-about">
        <div className="flex flex-col lg:flex-row min-h-[500px]">
          <div className="lg:w-2/5 relative">
            <img 
              src={bioImage} 
              alt="Jonathan Gadelha Almeida de Menezes" 
              className="w-full h-64 lg:h-full object-cover object-top"
              data-testid="img-bio"
            />
          </div>
          
          <div className="lg:w-3/5 p-8 lg:p-12 xl:p-16 flex flex-col justify-center bg-background">
            <Badge variant="secondary" className="w-fit mb-4 bg-primary/20 text-primary border-primary/30 text-xs uppercase tracking-wider">
              Criador do Conteúdo
            </Badge>
            
            <h2 id="about-heading" className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-6" data-testid="text-full-name">
              JONATHAN GADELHA<br />ALMEIDA DE MENEZES
            </h2>
            
            <p className="text-sm lg:text-base text-muted-foreground mb-4">
              Servidor do <span className="text-foreground font-semibold">Tribunal Regional Eleitoral de Pernambuco (TRE-PE)</span> e especialista em Direito Público e Direito Eleitoral, com pós-graduações nessas áreas.
            </p>
            
            <p className="text-sm lg:text-base text-muted-foreground mb-4">
              Assim como você, busco incessantemente pela integração entre Direito e outras disciplinas, como <span className="text-primary font-semibold">Tecnologia e Inteligência Artificial</span>, para catalisar avanços na prática jurídica.
            </p>
            
            <p className="text-sm lg:text-base text-muted-foreground mb-6">
              Além disso, como servidor público engajado, tenho a visão de como a inovação pode potencializar o serviço público e aperfeiçoar a prestação jurisdicional.
            </p>
            
            <div className="border-l-2 border-primary/60 pl-4 mb-8">
              <p className="text-sm lg:text-base italic text-muted-foreground">
                "Viso não apenas capacitar, mas também inspirar uma nova geração de profissionais comprometidos com a excelência e a modernização do Direito Eleitoral."
              </p>
            </div>
            
            <a
              href="https://wa.me/5581981252689"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-join-journey"
            >
              <Button variant="outline" size="lg" className="w-fit group">
                Junte-se a mim nessa jornada
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-6 border-t border-border text-center bg-background">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Jonathan Gadelha. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
