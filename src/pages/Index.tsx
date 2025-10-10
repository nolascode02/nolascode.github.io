import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = [
    { icon: Code2, name: "Frontend", techs: ["React/Next.js", "TypeScript", "React Native", "Material-UI"] },
    { icon: Server, name: "Backend", techs: ["Go", ".NET Core", "Node.js", "PHP/Laravel"] },
    { icon: Database, name: "Databases", techs: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server"] },
    { icon: Cloud, name: "DevOps", techs: ["Docker", "Kubernetes", "CI/CD", "Microservices"] },
  ];

  const projects = [
    {
      title: "BasketAdmin",
      description: "Basketball management application with member management, photo uploads using MinIO, league/team organization, and hot-reloading development environment. Features role-based permissions and real-time data synchronization.",
      tech: ["Next.js", "Go", "PostgreSQL", "Docker"],
      demo: "https://basketadmin.com/",
      github: "https://github.com/nolascode/BasketAdmin"
    },
    {
      title: "Budgentia",
      description: "Smart collaborative budget management platform for families and teams. Features JWT authentication, Material-UI components, OpenAPI documentation with Swagger UI, and real-time budget tracking. Featured on Product Hunt.",
      tech: ["Go", "Next.js 15", "React 19", "PostgreSQL"],
      demo: "https://budgentia.com/",
      github: "https://github.com/nolascode/Budgentia"
    },
    {
      title: "Tpresto",
      description: "Peer-to-peer lending platform connecting lenders and borrowers. Features AI-powered risk assessment, digital contract generation with electronic signatures, flexible payment options, dispute resolution system, and comprehensive transaction tracking.",
      tech: ["React", "Node.js", "PostgreSQL", "AI"],
      github: "https://github.com/nolascode/Tpresto"
    },
    {
      title: "Poche Preventa",
      description: "Sales management system (Sistema de Gestión de Preventas) built with Laravel 6. Features role-based permissions using Spatie, PDF generation with DomPDF, dynamic datatables, and comprehensive sales tracking and reporting.",
      tech: ["Laravel", "PHP", "AdminLTE", "Bootstrap"],
      github: "https://github.com/nolascode/PochePreventa"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Nolascode
            </a>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/nolascode" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/ramon-nolasco-91109b265/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <p className="text-muted-foreground text-lg">Hi, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  Nolasco
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground">Senior Software Engineer</p>
              </div>
              <p className="text-lg text-muted-foreground max-w-xl">
                Building production web platforms with modern technologies. Specialized in scalable microservices, real-time APIs, and cloud infrastructure.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative aspect-square rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <div className="text-9xl font-bold text-primary/30">N</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Senior Software Engineer building production web platforms with <span className="text-primary font-semibold">.NET Core</span>, <span className="text-primary font-semibold">Go</span>, <span className="text-primary font-semibold">React/Next.js</span>, and various database technologies including SQL Server, PostgreSQL, MySQL, and MongoDB.
                  <br /><br />
                  I design microservices and real-time APIs, ship via CI/CD and containers, and add observability to cut incident time. Proven wins in event-driven systems, performance tuning, and secure-by-default architectures—with hands-on AI integrations where they drive clear business value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Production-grade expertise in modern web technologies, cloud infrastructure, and scalable system design
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skill.techs.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm text-muted-foreground">{tech}</span>
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
      <section id="projects" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border">
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
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.demo && (
                        <Button variant="default" size="sm" asChild className="shadow-md">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
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
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                  <a href="mailto:ramonnolascoacosta@gmail.com">
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
      <footer className="py-8 px-4 border-t border-border bg-secondary/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Nolascode
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/nolascode" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/ramon-nolasco-91109b265/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:ramonnolascoacosta@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nolascode. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
