import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Play, 
  CheckCircle2, 
  Lock, 
  Clock,
  Users,
  Star,
  Award
} from "lucide-react";

const Learning = () => {
  const modules = [
    {
      id: 1,
      title: "Fire Safety Fundamentals",
      description: "Learn essential fire safety protocols, evacuation procedures, and prevention methods.",
      progress: 100,
      duration: "45 min",
      difficulty: "Beginner",
      students: 1250,
      rating: 4.8,
      completed: true,
      locked: false,
      badge: "Fire Safety Expert"
    },
    {
      id: 2,
      title: "Earthquake Preparedness",
      description: "Understand earthquake safety measures, drop-cover-hold techniques, and preparation steps.",
      progress: 85,
      duration: "60 min",
      difficulty: "Beginner",
      students: 980,
      rating: 4.9,
      completed: false,
      locked: false,
      badge: null
    },
    {
      id: 3,
      title: "First Aid Basics",
      description: "Master essential first aid techniques, CPR basics, and emergency medical response.",
      progress: 60,
      duration: "90 min",
      difficulty: "Intermediate",
      students: 750,
      rating: 4.7,
      completed: false,
      locked: false,
      badge: null
    },
    {
      id: 4,
      title: "Flood Safety & Response",
      description: "Learn flood preparation, safety during floods, and post-flood recovery procedures.",
      progress: 30,
      duration: "50 min",
      difficulty: "Beginner",
      students: 650,
      rating: 4.6,
      completed: false,
      locked: false,
      badge: null
    },
    {
      id: 5,
      title: "Severe Weather Preparedness",
      description: "Understand tornado, hurricane, and storm safety protocols and preparation methods.",
      progress: 0,
      duration: "70 min",
      difficulty: "Intermediate",
      students: 420,
      rating: 4.5,
      completed: false,
      locked: false,
      badge: null
    },
    {
      id: 6,
      title: "Advanced Emergency Response",
      description: "Advanced techniques for emergency coordination and community response leadership.",
      progress: 0,
      duration: "120 min",
      difficulty: "Advanced",
      students: 180,
      rating: 4.9,
      completed: false,
      locked: true,
      badge: "Emergency Leader"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-secondary text-secondary-foreground";
      case "Intermediate": return "bg-warning text-warning-foreground";
      case "Advanced": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Learning Modules</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master disaster preparedness through interactive lessons and expert-designed curricula
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Total Modules</div>
            </CardContent>
          </Card>
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">1</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-warning mb-2">55%</div>
              <div className="text-sm text-muted-foreground">Overall Progress</div>
            </CardContent>
          </Card>
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-achievement mb-2">2</div>
              <div className="text-sm text-muted-foreground">Badges Earned</div>
            </CardContent>
          </Card>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Card 
              key={module.id} 
              className={`shadow-card transition-smooth hover:scale-105 ${
                module.locked ? 'opacity-60' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    {module.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                    ) : module.locked ? (
                      <Lock className="w-6 h-6 text-muted-foreground" />
                    ) : (
                      <BookOpen className="w-6 h-6 text-primary" />
                    )}
                    <Badge className={getDifficultyColor(module.difficulty)}>
                      {module.difficulty}
                    </Badge>
                  </div>
                  {module.badge && (
                    <Badge variant="outline" className="text-xs">
                      <Award className="w-3 h-3 mr-1" />
                      {module.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-muted-foreground">{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>

                {/* Module Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{module.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current text-achievement" />
                    <span>{module.rating}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full" 
                  disabled={module.locked}
                  variant={module.completed ? "secondary" : "default"}
                >
                  {module.locked ? (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Locked
                    </>
                  ) : module.completed ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Review
                    </>
                  ) : module.progress > 0 ? (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Continue
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Start Module
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="shadow-card gradient-hero text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to become a safety expert?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Complete all modules to unlock advanced emergency response techniques and earn your 
              Emergency Preparedness Certification.
            </p>
            <Button size="lg" variant="secondary">
              <Award className="w-5 h-5 mr-2" />
              View Certification Path
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Learning;