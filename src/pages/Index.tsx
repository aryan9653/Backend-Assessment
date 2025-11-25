import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Database, Lock, Zap, CheckCircle2, Code } from 'lucide-react';
import { getCurrentUser } from '@/lib/auth';

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        navigate('/dashboard');
      } else {
        setIsLoading(false);
      }
    });
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const features = [
    {
      icon: Lock,
      title: 'Secure Authentication',
      description: 'JWT-based auth with password hashing and secure token handling',
    },
    {
      icon: Shield,
      title: 'Role-Based Access',
      description: 'Admin and user roles with granular permission control',
    },
    {
      icon: Database,
      title: 'RESTful APIs',
      description: 'Full CRUD operations with proper validation and error handling',
    },
    {
      icon: Zap,
      title: 'Scalable Architecture',
      description: 'Modular design ready for microservices and caching',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Backend Developer Assignment</h1>
              <p className="text-xs text-muted-foreground">Scalable REST API Demo</p>
            </div>
          </div>
          <Button onClick={() => navigate('/auth')}>Get Started</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Secure, Scalable Backend System
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Full-stack application showcasing authentication, role-based access control,
              and RESTful API design with best security practices
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/auth')}>
                View Demo
              </Button>
              <Button size="lg" variant="outline">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View Documentation
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {features.map((feature) => (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Technical Implementation</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">User Authentication APIs</p>
                    <p className="text-sm text-muted-foreground">
                      Registration & login with bcrypt password hashing and JWT tokens
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Task Management CRUD</p>
                    <p className="text-sm text-muted-foreground">
                      Complete create, read, update, delete operations with validation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Role-Based Access Control</p>
                    <p className="text-sm text-muted-foreground">
                      Admin panel with user management and permission system
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Security Best Practices</p>
                    <p className="text-sm text-muted-foreground">
                      Input sanitization, SQL injection prevention, secure token handling
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Scalable Architecture</p>
                    <p className="text-sm text-muted-foreground">
                      Modular design with PostgreSQL database and RESTful API structure
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
