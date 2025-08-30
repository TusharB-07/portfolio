import { Code, Database, Palette, Users, Award, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'] },
  ];

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications serving 100k+ users. Implemented microservices architecture and improved performance by 40%.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Co.',
      period: '2021 - 2023',
      description: 'Built responsive web applications using React and TypeScript. Collaborated with design teams to create pixel-perfect user interfaces.'
    },
    {
      title: 'Junior Developer',
      company: 'StartupTech',
      period: '2020 - 2021',
      description: 'Developed features for a SaaS platform using modern web technologies. Gained experience in agile development and code review processes.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Passionate developer crafting digital experiences that make a difference
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Hello, I'm a Developer</h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    I'm a passionate full-stack developer with over 4 years of experience creating 
                    modern web applications. My journey in tech started with a curiosity about how 
                    websites work, and it has evolved into a deep passion for crafting exceptional 
                    digital experiences.
                  </p>
                  <p>
                    I specialize in React, TypeScript, and Node.js, with a strong focus on writing 
                    clean, maintainable code and building scalable applications. I believe in the 
                    power of technology to solve real-world problems and improve people's lives.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing 
                    to open-source projects, or sharing knowledge through blog posts and mentoring.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-gradient-surface border-border/50">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Coffee className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">Quick Facts</span>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>📍 Based in San Francisco, CA</p>
                      <p>🎓 Computer Science Graduate</p>
                      <p>☕ Coffee enthusiast</p>
                      <p>🚀 Always learning new tech</p>
                      <p>🌱 Open source contributor</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Skills & Technologies
              </h2>
              <p className="text-lg text-muted-foreground">
                Tools and technologies I work with
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category} className="bg-background/50 border-border/50 hover:shadow-medium transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center mb-2">
                      {skillGroup.category === 'Frontend' && <Code className="h-6 w-6 text-white" />}
                      {skillGroup.category === 'Backend' && <Database className="h-6 w-6 text-white" />}
                      {skillGroup.category === 'Database' && <Database className="h-6 w-6 text-white" />}
                      {skillGroup.category === 'Tools' && <Palette className="h-6 w-6 text-white" />}
                    </div>
                    <CardTitle className="text-lg text-foreground">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Experience
              </h2>
              <p className="text-lg text-muted-foreground">
                My professional journey in tech
              </p>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card key={index} className="bg-gradient-surface border-border/50 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                        {job.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-hero">
        <div className="relative container mx-auto px-4">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-white">4+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-white">100k+</div>
                <div className="text-white/80">Users Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-white">25+</div>
                <div className="text-white/80">Blog Posts</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;