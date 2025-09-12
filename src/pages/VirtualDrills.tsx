import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  AlertTriangle, 
  Play, 
  Clock, 
  Users, 
  Target,
  CheckCircle2,
  Zap,
  Award,
  Timer,
  TrendingUp
} from "lucide-react";

const VirtualDrills = () => {
  const drills = [
    {
      id: 1,
      title: "School Fire Evacuation",
      description: "Navigate through your school during a fire emergency. Practice proper evacuation routes and safety procedures.",
      type: "Fire Safety",
      duration: "8-12 min",
      difficulty: "Beginner",
      participants: 1450,
      completed: true,
      score: 95,
      attempts: 3,
      bestTime: "4:32",
      icon: "🔥",
      color: "destructive"
    },
    {
      id: 2,
      title: "Earthquake Drop Cover Hold",
      description: "Practice the Drop, Cover, and Hold On technique during a simulated earthquake in various scenarios.",
      type: "Earthquake",
      duration: "5-8 min",
      difficulty: "Beginner",
      participants: 1250,
      completed: true,
      score: 88,
      attempts: 2,
      bestTime: "3:45",
      icon: "🌍",
      color: "warning"
    },
    {
      id: 3,
      title: "Medical Emergency Response",
      description: "Respond to various medical emergencies using proper first aid techniques and emergency protocols.",
      type: "First Aid",
      duration: "10-15 min",
      difficulty: "Intermediate",
      participants: 890,
      completed: false,
      score: null,
      attempts: 0,
      bestTime: null,
      icon: "🏥",
      color: "secondary"
    },
    {
      id: 4,
      title: "Severe Weather Shelter",
      description: "Find appropriate shelter during tornado warnings and severe weather conditions.",
      type: "Weather",
      duration: "6-10 min",
      difficulty: "Intermediate",
      participants: 650,
      completed: false,
      score: null,
      attempts: 0,
      bestTime: null,
      icon: "⛈️",
      color: "primary"
    },
    {
      id: 5,
      title: "Lockdown Procedures",
      description: "Practice proper lockdown procedures and safe room protocols during security emergencies.",
      type: "Security",
      duration: "12-18 min",
      difficulty: "Advanced",
      participants: 420,
      completed: false,
      score: null,
      attempts: 0,
      bestTime: null,
      icon: "🔒",
      color: "destructive"
    },
    {
      id: 6,
      title: "Multi-Hazard Scenario",
      description: "Handle multiple emergency situations occurring simultaneously. Ultimate preparedness test.",
      type: "Advanced",
      duration: "20-30 min",
      difficulty: "Expert",
      participants: 180,
      completed: false,
      score: null,
      attempts: 0,
      bestTime: null,
      icon: "⚡",
      color: "achievement",
      locked: true
    }
  ];

  const recentScores = [
    { drill: "School Fire Evacuation", score: 95, time: "4:32", date: "Today" },
    { drill: "Earthquake Drop Cover Hold", score: 88, time: "3:45", date: "Yesterday" },
    { drill: "School Fire Evacuation", score: 82, time: "5:12", date: "2 days ago" },
    { drill: "Earthquake Drop Cover Hold", score: 75, time: "4:28", date: "3 days ago" },
  ];

  const upcomingDrills = [
    { title: "School-wide Fire Drill", date: "Today, 2:00 PM", type: "Live Practice" },
    { title: "Earthquake Safety Workshop", date: "Friday, 10:00 AM", type: "Group Session" },
    { title: "First Aid Training", date: "Next Week", type: "Hands-on Training" },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-secondary text-secondary-foreground";
      case "Intermediate": return "bg-warning text-warning-foreground";
      case "Advanced": return "bg-destructive text-destructive-foreground";
      case "Expert": return "bg-achievement text-achievement-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      primary: "bg-primary/20 text-primary",
      secondary: "bg-secondary/20 text-secondary",
      destructive: "bg-destructive/20 text-destructive",
      warning: "bg-warning/20 text-warning",
      achievement: "bg-achievement/20 text-achievement"
    };
    return colorMap[color] || "bg-primary/20 text-primary";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Virtual Emergency Drills</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice emergency response in realistic simulations. Build confidence through repetition.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Drills Available</div>
            </CardContent>
          </Card>
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-warning mb-2">91.5</div>
              <div className="text-sm text-muted-foreground">Avg Score</div>
            </CardContent>
          </Card>
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-achievement mb-2">4:09</div>
              <div className="text-sm text-muted-foreground">Best Time</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Drills List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {drills.map((drill) => (
                <Card 
                  key={drill.id} 
                  className={`shadow-card transition-smooth hover:scale-105 ${
                    drill.locked ? 'opacity-60' : ''
                  } ${drill.completed ? 'ring-2 ring-secondary/20' : ''}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl ${getColorClass(drill.color)} flex items-center justify-center text-2xl`}>
                        {drill.icon}
                      </div>
                      <Badge className={getDifficultyColor(drill.difficulty)}>
                        {drill.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{drill.title}</CardTitle>
                    <CardDescription>{drill.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Drill Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{drill.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{drill.participants}</span>
                      </div>
                    </div>

                    {/* Performance */}
                    {drill.completed && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Best Score</span>
                          <span className="font-semibold">{drill.score}%</span>
                        </div>
                        <Progress value={drill.score} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Attempts: {drill.attempts}</span>
                          <span>Best Time: {drill.bestTime}</span>
                        </div>
                      </div>
                    )}

                    {/* Type Badge */}
                    <Badge variant="outline" className="w-fit">
                      {drill.type}
                    </Badge>

                    {/* Action Button */}
                    <Button 
                      className="w-full" 
                      disabled={drill.locked}
                      variant={drill.completed ? "secondary" : "default"}
                    >
                      {drill.locked ? (
                        <>
                          <Target className="w-4 h-4 mr-2" />
                          Locked
                        </>
                      ) : drill.completed ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Retry Drill
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Start Drill
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Scores */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Recent Scores</span>
                </CardTitle>
                <CardDescription>
                  Your latest drill performances
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentScores.map((score, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium text-sm">{score.drill}</p>
                        <p className="text-xs text-muted-foreground">{score.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm">{score.score}%</div>
                        <div className="text-xs text-muted-foreground">{score.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Live Drills */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Timer className="w-5 h-5 text-primary" />
                  <span>Live Drills</span>
                </CardTitle>
                <CardDescription>
                  Scheduled real-world practice sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDrills.map((drill, index) => (
                    <div key={index} className="p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-destructive animate-badge-pulse" />
                        <h4 className="font-medium text-sm">{drill.title}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{drill.date}</p>
                      <Badge variant="outline" className="text-xs">{drill.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievement Progress */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Progress</span>
                </CardTitle>
                <CardDescription>
                  Your drill mastery journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">33%</div>
                  <div className="text-sm text-muted-foreground">Drills Completed</div>
                  <Progress value={33} className="mt-2" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Fire Safety Master</span>
                    <span className="text-secondary">Earned</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Earthquake Expert</span>
                    <span className="text-secondary">Earned</span>
                  </div>
                  <div className="flex justify-between">
                    <span>First Aid Hero</span>
                    <span className="text-muted-foreground">Locked</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Leader</span>
                    <span className="text-muted-foreground">Locked</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="shadow-card gradient-emergency text-white">
          <CardContent className="p-8 text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Practice Makes Perfect</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              The more you practice emergency scenarios, the better prepared you'll be when real situations arise. 
              Every drill completed makes you a safer, more confident responder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Play className="w-5 h-5 mr-2" />
                Start Next Drill
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Target className="w-5 h-5 mr-2" />
                View Progress
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VirtualDrills;