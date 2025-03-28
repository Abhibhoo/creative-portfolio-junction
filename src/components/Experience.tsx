
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  const experiences = [
    {
      role: "Current/Most Recent Role",
      company: "Company Name",
      period: "Jan 2022 - Present",
      description: "At [Company/Organization], I lead initiatives that [brief description of responsibilities and achievements]. Here, I have spearheaded projects that enhanced [specific outcomes, e.g., user engagement, process efficiency, etc.].",
      achievements: [
        "Led a team of X people to deliver Y project on time and under budget",
        "Implemented new processes that improved efficiency by Z%",
        "Recognized for outstanding performance with [award/recognition]"
      ]
    },
    {
      role: "Previous Role",
      company: "Previous Company",
      period: "Mar 2019 - Dec 2021",
      description: "Contributed to [company], developing skills in [relevant skills or projects]. These experiences have allowed me to master both the technical and creative aspects of my work.",
      achievements: [
        "Successfully completed X project that resulted in Y improvement",
        "Collaborated with cross-functional teams to implement Z feature",
        "Mentored junior team members and led knowledge-sharing sessions"
      ]
    },
    {
      role: "Earlier Role",
      company: "Earlier Company",
      period: "Jun 2016 - Feb 2019",
      description: "Began my professional journey at [company], where I [brief description]. This foundation provided crucial experience in [specific areas].",
      achievements: [
        "Quickly advanced from junior to senior position within X months",
        "Contributed to Y major projects that delivered significant results",
        "Developed expertise in Z technology through hands-on project work"
      ]
    }
  ];
  
  const education = [
    {
      degree: "Master's Degree",
      institution: "University Name",
      period: "2014 - 2016",
      description: "Focused on [specialization] with emphasis on [specific areas]. Graduated with honors and completed thesis on [topic]."
    },
    {
      degree: "Bachelor's Degree",
      institution: "University Name",
      period: "2010 - 2014",
      description: "Studied [field] with minors in [related fields]. Participated in [relevant extracurricular activities]."
    },
    {
      degree: "Professional Certifications",
      institution: "Various Institutions",
      period: "Ongoing",
      description: "Continuously upgrading skills through certifications such as [Certification Names]. Regularly attend workshops and conferences."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">Professional Journey</h2>
        <p className="section-subtitle">
          My career path, significant roles, and educational background that have shaped my expertise.
        </p>
        
        <Tabs defaultValue="experience" className="w-full max-w-4xl mx-auto animate-fade-in">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="experience">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <CardTitle>{exp.role}</CardTitle>
                      <CardDescription>{exp.company} | {exp.period}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution} | {edu.period}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
