import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { AlertBanner } from "@/components/AlertBanner";
import { 
  BookOpen, 
  AlertTriangle, 
  Gamepad2, 
  Trophy, 
  Users, 
  Shield,
  Play,
  ArrowRight,
  CheckCircle2,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Comprehensive modules covering fire safety, earthquakes, first aid, and more",
      color: "text-primary"
    },
    {
      icon: AlertTriangle,
      title: "Virtual Drills",
      description: "Practice emergency scenarios in a safe, controlled environment",
      color: "text-destructive"
    },
    {
      icon: Gamepad2,
      title: "Safety Games",
      description: "Learn through fun, engaging games that reinforce safety concepts",
      color: "text-secondary"
    },
    {
      icon: Trophy,
      title: "Leaderboards",
      description: "Compete with classmates and earn badges for your achievements",
      color: "text-achievement"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Trained" },
    { number: "50+", label: "Schools Participating" },
    { number: "95%", label: "Completion Rate" },
    { number: "20+", label: "Emergency Scenarios" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AlertBanner />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="animate-badge-pulse">
              🚨 Emergency Preparedness Education
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Learn Safety.<br />
              <span className="text-white/90">Save Lives.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Master disaster preparedness through interactive learning, virtual drills, 
              and gamified experiences designed for students like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <Link to="/dashboard">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-primary">
                <Shield className="w-5 h-5 mr-2" />
                View Modules
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose SafeLearn?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform combines education, practice, and gamification 
              to make emergency preparedness engaging and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-card transition-smooth hover:scale-105 hover:shadow-glow">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-${feature.color.split('-')[1]}/20 to-${feature.color.split('-')[1]}/10 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Learning Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Progress through our carefully designed curriculum at your own pace
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <CardTitle>Learn Fundamentals</CardTitle>
                <CardDescription>
                  Master the basics of emergency preparedness through interactive modules
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary mr-2" />
                    Fire Safety Protocols
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary mr-2" />
                    Earthquake Preparedness
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary mr-2" />
                    First Aid Basics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="w-10 h-10 bg-destructive/20 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <CardTitle>Practice Scenarios</CardTitle>
                <CardDescription>
                  Apply your knowledge in realistic emergency simulations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary mr-2" />
                    Virtual Emergency Drills
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary mr-2" />
                    Decision-Making Scenarios
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary mr-2" />
                    Team Coordination
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="w-10 h-10 bg-achievement/20 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-5 h-5 text-achievement" />
                </div>
                <CardTitle>Earn Recognition</CardTitle>
                <CardDescription>
                  Get certified and earn badges for your emergency preparedness skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary mr-2" />
                    Safety Expert Badge
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary mr-2" />
                    Emergency Leader Cert
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary mr-2" />
                    Community Recognition
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-card gradient-hero text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Become a Safety Expert?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already mastering emergency preparedness. 
                Start your journey today and make a difference in your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                  <Link to="/dashboard">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-primary">
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">SafeLearn</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Empowering students with life-saving emergency preparedness skills.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 SafeLearn. Making safety education accessible and engaging.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
