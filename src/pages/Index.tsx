import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Server,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
  isPrivate?: boolean;
}

const Index = () => {
  const skills = [
    {
      icon: Code2,
      name: "Frontend",
      techs: [
        "React",
        "Next.js",
        "TypeScript",
        "Material UI",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
    },
    {
      icon: Server,
      name: "Backend & Frameworks",
      techs: [
        ".NET Core",
        "ASP.NET Core",
        "Go",
        "EF Core",
        "GORM",
        "PHP/Laravel",
        "Node.js",
      ],
    },
    {
      icon: Database,
      name: "Databases & Caching",
      techs: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis", "MinIO"],
    },
    {
      icon: Cloud,
      name: "DevOps & Integration",
      techs: [
        "Docker",
        "Azure DevOps",
        "GitHub Actions",
        "Swagger/OpenAPI",
        "SignalR",
        "OAuth2/OIDC",
        "JWT + 2FA",
        "OpenTelemetry",
      ],
    },
  ];

  const projects: Project[] = [
    {
      title: "Domitracking",
      description:
        "GPS tracking and fleet-mobility platform for the Dominican Republic, built as a monorepo of independently deployable services. Domain services in NestJS cover CRM & billing, fuel management, fleet maintenance, and multi-tenant routing & distribution, integrated over REST and RabbitMQ. Includes a GraphHopper + jsprit routing/optimization engine and a React Native driver app with offline electronic proof-of-delivery.",
      tech: [
        "Java 21",
        "NestJS 11",
        "Next.js 15",
        "React 19",
        "TypeORM",
        "PostgreSQL 16",
        "RabbitMQ",
        "Redis",
        "Docker",
        "GraphHopper",
        "MapLibre",
        "React Native",
        "Python 3.12",
        "JWT",
        "Row-Level Security",
        "GitLab CI",
      ],
      demo: "https://domitracking.com/",
      isPrivate: true,
    },
    {
      title: "BasketAdmin",
      description:
        "Basketball management application with member management, photo uploads using MinIO, league/team organization, and hot-reloading development environment. Features role-based permissions and real-time data synchronization.",
      tech: [
        "Next.js 15",
        "React 19",
        "Material UI v6",
        "Redux Toolkit",
        "Docker",
        "Go",
        "Rate Limiting",
        "Pagination",
        "JWT",
        "Go",
        "PostgreSQL",
        "Docker",
        "MinIO",
      ],
      demo: "https://basketadmin.com/",
      isPrivate: true,
    },
    {
      title: "Budgentia",
      description:
        "Smart collaborative budget management platform for families and teams. Features JWT authentication, Material-UI components, OpenAPI documentation with Swagger UI, and real-time budget tracking. Featured on Product Hunt.",
      tech: [
        "Next.js 15",
        "React 19",
        "Material UI v6",
        "Redux Toolkit",
        "Docker",
        "Go",
        "Web Sockets",
        "Rate Limiting",
        "Pagination",
        "JWT",
        "Google Auth",
        "MinIO",
        "OpenAPI",
        "PostgreSQL",
      ],
      demo: "https://budgentia.com/",
      isPrivate: true,
    },
    {
      title: "Tpresto",
      description:
        "Peer-to-peer lending platform connecting lenders and borrowers. Features AI-powered risk assessment, digital contract generation with electronic signatures, flexible payment options, dispute resolution system, and comprehensive transaction tracking.",
      tech: [
        "Next.js 15",
        "React 19",
        "Material UI v6",
        "Redux Toolkit",
        ".NET Core 8",
        "PostgreSQL",
        "AI",
        "Docker",
        "Swagger",
        "Specification Pattern",
        "Repository Pattern",
        "Unit of Work Pattern",
        "Rate Limiting",
        "Pagination",
      ],
      demo: "https://tprestoapp.com/",
      isPrivate: true,
    },
    {
      title: "Got5",
      description:
        "Interactive puzzle library platform where users can create, share, and solve puzzles. Features user authentication, puzzle creation tools, rating system, and comprehensive search functionality. Supports multiple puzzle types with community-driven content.",
      tech: ["Laravel", "Next.js", "React", "MySQL", "Tailwind CSS"],
      demo: "https://www.got5.org/",
      isPrivate: true,
    },
    {
      title: "Poche Preventa",
      description:
        "Sales management system (Sistema de Gestión de Preventas) built with Laravel 6. Features role-based permissions using Spatie, PDF generation with DomPDF, dynamic datatables, and comprehensive sales tracking and reporting.",
      tech: ["Laravel", "PHP", "AdminLTE", "Bootstrap", "MySQL"],
      isPrivate: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg z-50 border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Nolascode
            </a>
            <div className="hidden md:flex gap-8">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#skills"
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#projects"
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-all"
              >
                <a
                  href="https://github.com/nolascode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-all"
              >
                <a
                  href="https://www.linkedin.com/in/ramon-nolasco-91109b265/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block">
                  <p className="text-primary font-semibold text-lg tracking-wide">
                    👋 Hi, I'm
                  </p>
                </div>
                <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent leading-tight">
                  Nolasco
                </h1>
                <div className="space-y-2">
                  <p className="text-3xl md:text-4xl font-bold text-foreground">
                    Senior Software Engineer
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm px-3 py-1">
                      Full-Stack
                    </Badge>
                    <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 text-sm px-3 py-1">
                      Cloud Native
                    </Badge>
                    <Badge className="bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 text-sm px-3 py-1">
                      Microservices
                    </Badge>
                  </div>
                </div>
              </div>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Building production web platforms with{" "}
                <span className="text-foreground font-semibold">
                  .NET Core, Go, React/Next.js
                </span>
                , and SQL Server/PostgreSQL/MySQL. Specialized in{" "}
                <span className="text-foreground font-semibold">
                  event-driven microservices
                </span>
                ,{" "}
                <span className="text-foreground font-semibold">
                  real-time WebSocket APIs (SignalR/Melody)
                </span>
                , and{" "}
                <span className="text-foreground font-semibold">
                  CI/CD with Azure DevOps
                </span>
                .
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  asChild
                  className="shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 hover:scale-105"
                >
                  <a
                    href="#contact"
                    className="text-base px-8 inline-flex items-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 text-base px-8"
                >
                  <a href="#projects" className="inline-flex items-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Projects
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in lg:block hidden">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Animated background blobs */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div
                  className="absolute top-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-10 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>

                {/* Main circle */}
                <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10 p-1 backdrop-blur-sm border border-primary/20">
                  <div className="w-full h-full rounded-3xl bg-card/80 backdrop-blur-md flex items-center justify-center shadow-2xl">
                    <div className="text-center space-y-8">
                      <div className="text-9xl font-black bg-gradient-to-br from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                        N
                      </div>
                      <div className="grid grid-cols-3 gap-4 px-8">
                        <div className="text-center space-y-1">
                          <div className="text-2xl font-bold text-primary">
                            6+
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Years
                          </div>
                        </div>
                        <div className="text-center space-y-1">
                          <div className="text-2xl font-bold text-blue-600">
                            10+
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Projects
                          </div>
                        </div>
                        <div className="text-center space-y-1">
                          <div className="text-2xl font-bold text-purple-600">
                            100%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Committed
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-secondary/30 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-10">
                <div className="space-y-6">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Senior Software Engineer at{" "}
                    <span className="text-primary font-bold">
                      Neural Technology Solutions
                    </span>{" "}
                    with 6+ years building production web platforms using{" "}
                    <span className="text-orange-600 font-bold">.NET Core</span>
                    , <span className="text-blue-600 font-bold">Go</span>,{" "}
                    <span className="text-purple-600 font-bold">
                      React/Next.js
                    </span>
                    , and SQL Server/PostgreSQL/MySQL/MongoDB. Architected
                    solutions in Clean Architecture with EF Core and GORM,
                    selecting the optimal stack per use case.
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    I design event-driven, real-time systems with WebSockets
                    (Melody/SignalR), build async pipelines with goroutines and
                    Redis caching (cutting DB load by ~65%), and ship via CI/CD
                    (Azure DevOps, GitHub Actions) with 95% automated test
                    coverage. Proven wins in performance tuning,
                    secure-by-default architectures, and hands-on AI
                    integrations (OpenAI GPT, Stripe, SendGrid, OAuth2/OIDC with
                    JWT + 2FA).
                  </p>

                  {/* Tech Stack Highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/50">
                    <div className="text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                      <Code2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="font-semibold text-sm">Frontend</p>
                      <p className="text-xs text-muted-foreground">
                        React/Next.js
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                      <Server className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <p className="font-semibold text-sm">Backend</p>
                      <p className="text-xs text-muted-foreground">
                        .NET Core/Go
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
                      <Database className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <p className="font-semibold text-sm">Database</p>
                      <p className="text-xs text-muted-foreground">
                        SQL Server/PostgreSQL
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-orange-500/5 hover:bg-orange-500/10 transition-colors">
                      <Cloud className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                      <p className="font-semibold text-sm">DevOps</p>
                      <p className="text-xs text-muted-foreground">
                        Azure DevOps/Docker
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-0"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Production-grade expertise in modern web technologies, cloud
              infrastructure, and scalable system design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-md">
                    <skill.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skill.techs.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 group/item hover:translate-x-1 transition-transform"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-blue-600"></div>
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 bg-secondary/30 relative overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-0"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border"
              >
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      {project.demo && (
                        <Button
                          variant="default"
                          size="sm"
                          asChild
                          className="shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary/90 transition-all duration-300 hover:scale-105 hover:brightness-110 flex-shrink-0"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.github ? (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-md flex-shrink-0"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      ) : project.isPrivate ? (
                        <Badge
                          variant="secondary"
                          className="px-4 py-2 text-sm bg-muted/50 text-muted-foreground border border-border"
                        >
                          🔒 Private Repository
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-12"></div>

          <Card className="max-w-2xl mx-auto border-border shadow-lg">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <p className="text-lg text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  <a
                    href="mailto:ramonnolascoacosta@gmail.com"
                    className="inline-flex items-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send me an email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-border/50 bg-gradient-to-b from-secondary/30 to-secondary/50 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center gap-8">
            {/* Logo & Tagline */}
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nolascode
              </h3>
              <p className="text-muted-foreground max-w-md">
                Building production web platforms with modern technologies
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300 rounded-full border border-border/50 hover:border-primary/50"
              >
                <a
                  href="https://github.com/nolascode"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-blue-500/10 hover:text-blue-600 hover:scale-110 transition-all duration-300 rounded-full border border-border/50 hover:border-blue-500/50"
              >
                <a
                  href="https://www.linkedin.com/in/ramon-nolasco-91109b265/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-purple-500/10 hover:text-purple-600 hover:scale-110 transition-all duration-300 rounded-full border border-border/50 hover:border-purple-500/50"
              >
                <a
                  href="mailto:ramonnolascoacosta@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#home"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Nolascode. All rights reserved. Made
              with ❤️ and 💻
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
