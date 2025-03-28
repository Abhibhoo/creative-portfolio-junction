
import { 
  Code, 
  Image, 
  BookOpen, 
  LineChart, 
  Lightbulb, 
  Users,
  PenTool,
  BarChart,
  BrainCircuit,
  FileCode
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillGroups = [
    {
      title: "Technical & Creative Proficiencies",
      skills: [
        { 
          title: "Programming & Development", 
          description: "Proficient in [Programming Languages], with experience in both frontend and backend development.",
          icon: Code
        },
        { 
          title: "Web Design & UI/UX", 
          description: "Skilled in creating intuitive, user-centered designs that provide seamless experiences.",
          icon: PenTool
        },
        { 
          title: "Data Analysis", 
          description: "Experienced in leveraging data to drive decisions and optimize performance.",
          icon: BarChart
        },
        { 
          title: "Project Management", 
          description: "Adept at managing multiple projects simultaneously, ensuring timely delivery.",
          icon: LineChart
        }
      ]
    },
    {
      title: "Core Competencies",
      skills: [
        { 
          title: "Problem-Solving", 
          description: "Finding efficient, creative solutions to complex problems.",
          icon: BrainCircuit
        },
        { 
          title: "Attention to Detail", 
          description: "Ensuring precision and high standards of quality in every project.",
          icon: Image
        },
        { 
          title: "Continuous Learning", 
          description: "Quickly adapting to new technologies and methodologies.",
          icon: BookOpen
        },
        { 
          title: "Team Collaboration", 
          description: "Working effectively in team environments and leading with clarity.",
          icon: Users
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          A comprehensive overview of my professional capabilities and core strengths.
        </p>
        
        <div className="space-y-12">
          {skillGroups.map((group, index) => (
            <div key={index} className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-center mb-8">{group.title}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.skills.map((skill, skillIndex) => (
                  <Card key={skillIndex} className="hover-scale">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <skill.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">{skill.title}</h4>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
