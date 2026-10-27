
import {
  ArrowRight,
  ExternalLink,
  Globe,
  ShoppingCart,
  CalendarDays,
  Code2,
  MessageCircle,
  CheckCircle2,
  MessagesSquare,
  ClipboardList,
  Laptop,
  Rocket
} from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { projects } from "./data/projects";
import "./App.css";

// WhatsApp profissional
const WHATSAPP = "5583987700510";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description:
      "Sites modernos, rápidos e responsivos para apresentar seu negócio, transmitir credibilidade e conquistar novos clientes."
  },
  {
    icon: ShoppingCart,
    title: "Lojas Virtuais e Cardápios",
    description:
      "Catálogos digitais, carrinhos de compras e sistemas de pedidos integrados ao WhatsApp."
  },
  {
    icon: CalendarDays,
    title: "Sistemas de Agendamento",
    description:
      "Soluções para organizar consultas, horários, serviços e atendimentos de maneira prática."
  },
  {
    icon: Code2,
    title: "Sistemas Web",
    description:
      "Aplicações personalizadas para automatizar processos e facilitar a gestão do seu negócio."
  }
];

export default function App() {
  return (
    <>
      <Header />

      <main>
        {/* INÍCIO */}
        <section className="hero" id="inicio">
          <div className="container hero-content hero-with-photo">
            <div className="hero-text">
            <span className="eyebrow">
              DESENVOLVIMENTO WEB & SOLUÇÕES DIGITAIS
            </span>

            <h1>
              Transformo ideias em
              <span> soluções digitais.</span>
            </h1>

            <p>
              Desenvolvo sites, lojas virtuais e sistemas
              personalizados para ajudar empresas e
              profissionais a fortalecer sua presença
              digital e conquistar novos clientes.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="#projetos"
              >
                Conhecer meus projetos
                <ArrowRight size={18} />
              </a>

              <a
                className="btn btn-outline"
                href={whatsappLink(
                  "Olá, Rafael! Conheci seu portfólio e gostaria de solicitar um orçamento."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar orçamento
              </a>
            </div>

            <div className="hero-features">
              <span>
                <CheckCircle2 size={17} />
                Design responsivo
              </span>

              <span>
                <CheckCircle2 size={17} />
                Soluções personalizadas
              </span>

              <span>
                <CheckCircle2 size={17} />
                Atendimento direto
              </span>
            </div>
            </div>

            <div className="hero-photo">
              <img
                src="/images/rafael-lima.png"
                alt="Rafael Lima, desenvolvedor web"
                width="440"
                height="440"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="section" id="sobre">
          <div className="container about">
            <div>
              <span className="section-tag">
                SOBRE MIM
              </span>

              <h2>
                Olá, sou Rafael Lima.
              </h2>
            </div>

            <div>
              <p>
                Sou formado em Análise e Desenvolvimento
                de Sistemas e atuo na criação de soluções
                digitais para empresas e profissionais.
              </p>

              <p>
                Desenvolvo desde sites institucionais
                até plataformas de agendamento, cardápios
                digitais e sistemas personalizados.
              </p>

              <p>
                Meu objetivo é transformar necessidades
                reais em soluções modernas, funcionais
                e fáceis de utilizar.
              </p>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section
          className="section section-alt"
          id="servicos"
        >
          <div className="container">
            <span className="section-tag">
              MEUS SERVIÇOS
            </span>

            <h2>
              Soluções para seu negócio
            </h2>

            <p className="section-description">
              Tecnologia e design para transformar
              suas ideias em projetos digitais.
            </p>

            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    className="service-card"
                    key={service.title}
                  >
                    <div className="service-icon">
                      <Icon size={25} />
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJETOS */}

{/* COMO FUNCIONA MEU TRABALHO */}
<section className="section process-section" id="processo">
  <div className="container">
    <div className="process-heading">
      <span className="section-tag">
        MEU PROCESSO
      </span>

      <h2>Como funciona meu trabalho</h2>

      <p className="section-description">
        Um processo simples e transparente para
        transformar sua ideia em uma solução digital.
      </p>
    </div>

    <div className="process-grid">
      <article className="process-card">
        <div className="process-card-top">
          <div className="process-icon">
            <MessagesSquare size={25} />
          </div>
          <span className="process-number">01</span>
        </div>

        <h3>Conversa inicial</h3>
        <p>
          Entendo sua ideia, suas necessidades e
          os objetivos do seu negócio.
        </p>
      </article>

      <article className="process-card">
        <div className="process-card-top">
          <div className="process-icon">
            <ClipboardList size={25} />
          </div>
          <span className="process-number">02</span>
        </div>

        <h3>Planejamento</h3>
        <p>
          Definimos as funcionalidades, estrutura,
          orçamento e prazo de desenvolvimento.
        </p>
      </article>

      <article className="process-card">
        <div className="process-card-top">
          <div className="process-icon">
            <Laptop size={25} />
          </div>
          <span className="process-number">03</span>
        </div>

        <h3>Desenvolvimento</h3>
        <p>
          Desenvolvo o projeto com foco em
          desempenho, organização e facilidade
          de utilização.
        </p>
      </article>

      <article className="process-card">
        <div className="process-card-top">
          <div className="process-icon">
            <Rocket size={25} />
          </div>
          <span className="process-number">04</span>
        </div>

        <h3>Entrega e suporte</h3>
        <p>
          Realizo os testes, publico o projeto
          e ofereço o suporte conforme
          o serviço contratado.
        </p>
      </article>
    </div>

    <div className="process-cta">
      <a
        href={whatsappLink(
          "Olá, Rafael! Conheci seu processo de trabalho e gostaria de solicitar um orçamento."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        <MessageCircle size={18} />
        Vamos conversar sobre seu projeto
      </a>
    </div>
  </div>
</section>

        <section className="section" id="projetos">
          <div className="container">
            <span className="section-tag">
              MEU PORTFÓLIO
            </span>

            <h2>
              Projetos desenvolvidos
            </h2>

            <p className="section-description">
              Conheça alguns dos meus trabalhos
              e descubra o que podemos desenvolver
              para o seu negócio.
            </p>

            <div className="project-grid">
              {projects.map((project) => (
                <article
                  className="project-card"
                  key={project.id}
                >
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={`Projeto ${project.title}`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />

                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>

                    {project.status && (
                      <p className="project-status">
                        {project.status}
                      </p>
                    )}

                    <p>{project.description}</p>

                    <div className="tech-list">
                      {project.technologies.map((tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* BOTÕES DOS PROJETOS */}
                    <div className="project-actions">
                      {project.url &&
                        project.url !== "#" && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            Visitar site
                            <ExternalLink size={16} />
                          </a>
                        )}

                      <a
                        href={whatsappLink(
                          `Olá, Rafael! Vi o projeto ${project.title} no seu portfólio e gostaria de solicitar um orçamento para um site semelhante.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-quote"
                      >
                        <MessageCircle size={17} />
                        Quero um site parecido
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECNOLOGIAS */}
        <section
          className="section section-alt"
          id="tecnologias"
        >
          <div className="container center">
            <span className="section-tag">
              TECNOLOGIAS
            </span>

            <h2>
              Ferramentas que utilizo
            </h2>

            <p className="section-description">
              Tecnologias utilizadas no desenvolvimento
              de soluções modernas e funcionais.
            </p>

            <div className="skills">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Node.js",
                "Supabase",
                "Git",
                "GitHub"
              ].map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section
          className="section contact"
          id="contato"
        >
          <div className="container center">
            <span className="section-tag">
              VAMOS CONVERSAR?
            </span>

            <h2>
              Seu próximo projeto começa aqui.
            </h2>

            <p>
              Precisa de um site profissional,
              loja virtual, sistema de agendamento
              ou uma solução personalizada?
              Vamos conversar sobre sua ideia.
            </p>

            <div className="contact-actions">
              <a
                className="btn btn-primary"
                href={whatsappLink(
                  "Olá, Rafael! Vi seu portfólio e gostaria de conversar sobre um projeto."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={19} />
                Solicitar orçamento
              </a>

              <a
                className="btn btn-outline"
                href="https://github.com/RafaelRlbjp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver meu GitHub
                <ExternalLink size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
