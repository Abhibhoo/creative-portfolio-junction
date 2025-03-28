
import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Project A",
      description: "A brief overview of Project A and its key features.",
      fullDescription: "An in-depth description of Project A, including the problem it solves, the technologies used, and the impact it had. This project showcases my skills in [specific skills] and my approach to problem-solving in [specific context].",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      achievements: [
        "Implemented feature X that improved Y by Z%",
        "Designed a responsive interface that increased mobile usage by X%",
        "Optimized database queries, reducing load time by Y seconds"
      ]
    },
    {
      id: 2,
      title: "Project B",
      description: "A brief overview of Project B and its key features.",
      fullDescription: "An in-depth description of Project B, highlighting the challenges faced and how they were overcome. This project demonstrates my ability to [specific skills] and deliver results in [specific context].",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      tags: ["TypeScript", "Next.js", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      achievements: [
        "Created a scalable architecture that supported X users simultaneously",
        "Implemented Y feature that received positive feedback from Z% of users",
        "Collaborated with a team of X people to deliver the project under budget"
      ]
    },
    {
      id: 3,
      title: "Project C",
      description: "A brief overview of Project C and its key features.",
      fullDescription: "A comprehensive overview of Project C, from conception to deployment. This project showcases my expertise in [specific areas] and my commitment to delivering high-quality solutions.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "Django", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#",
      achievements: [
        "Developed a custom algorithm that improved efficiency by X%",
        "Implemented security features that protected sensitive user data",
        "Received recognition for innovation in [specific area]"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Projects & Portfolio</h2>
        <p className="section-subtitle">
          Explore some of my notable projects that demonstrate my skills and expertise.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-scale">
              <div className="aspect-video relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full gap-2">
                      View Details <ArrowRight size={16} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl">{project.title}</DialogTitle>
                      <DialogDescription>
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="mr-2">{tag}</Badge>
                        ))}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="mt-4">
                      <div className="aspect-video mb-6 overflow-hidden rounded-md">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <p className="mb-4">{project.fullDescription}</p>
                      
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-1 mb-6">
                        {project.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild className="gap-2">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            Live Demo <ExternalLink size={16} />
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="gap-2">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            Source Code <Github size={16} />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
