import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Award, 
  Target, 
  Calendar,
  Clock,
  TrendingUp,
  BookOpen,
  AlertTriangle,
  Gamepad2,
  Trophy,
  Edit
} from "lucide-react";

const Profile = () => {
  const achievements = [
    { id: 1, name: "First Steps", description: "Completed your first module", icon: "🎯", earned: true },
    { id: 2, name: "Fire Safety Expert", description: "Mastered fire safety fundamentals", icon: "🔥", earned: true },
    { id: 3, name: "Quiz Master", description: "Scored 100% on 5 quizzes", icon: "🧠", earned: true },
    { id: 4, name: "Drill Sergeant", description: "Participated in 10 emergency drills", icon: "⚡", earned: false },
    { id: 5, name: "Team Player", description: "Helped teammates in group activities", icon: "🤝", earned: true },
    { id: 6, name: "Speed Runner", description: "Completed a module in under 30 minutes", icon: "⚡", earned: false },
    { id: 7, name: "Safety Champion", description: "Completed all basic modules", icon: "🏆", earned: false },
    { id: 8, name: "Emergency Leader", description: "Earned advanced certification", icon: "👑", earned: false },
  ];

  const skillProgress = [
    { skill: "Fire Safety", level: 95, color: "bg-destructive" },
    { skill: "Earthquake Preparedness", level: 80, color: "bg-warning" },
    { skill: "First Aid", level: 65, color: "bg-secondary" },
    { skill: "Flood Safety", level: 40, color: "bg-primary" },
    { skill: "Severe Weather", level: 20, color: "bg-muted-foreground" },
  ];

  const recentActivity = [
    { date: "2024-01-15", activity: "Completed Earthquake Safety Quiz", points: 50 },
    { date: "2024-01-14", activity: "Participated in Fire Drill", points: 75 },
    { date: "2024-01-13", activity: "Started First Aid Module", points: 25 },
    { date: "2024-01-12", activity: "Earned Fire Safety Badge", points: 100 },
    { date: "2024-01-11", activity: "Completed Safety Game Challenge", points: 60 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Profile Header */}
        <Card className="shadow-card">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">AS</AvatarFallback>
                </Avatar>
                <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2">
                  <Edit className="w-3 h-3" />
                </Button>
              </div>
              
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Alex Smith</h1>
                  <p className="text-muted-foreground">Grade 10 | Riverside High School</p>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <Badge variant="secondary" className="animate-badge-pulse">
                    Level 5
                  </Badge>
                  <Badge className="gradient-achievement text-achievement-foreground">
                    <Award className="w-3 h-3 mr-1" />
                    Safety Expert
                  </Badge>
                  <Badge variant="outline">
                    <Trophy className="w-3 h-3 mr-1" />
                    Rank #3
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2,450</div>
                    <div className="text-sm text-muted-foreground">Total XP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">12</div>
                    <div className="text-sm text-muted-foreground">Modules Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-warning">8</div>
                    <div className="text-sm text-muted-foreground">Drills Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-achievement">4</div>
                    <div className="text-sm text-muted-foreground">Badges Earned</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Skills Progress */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-primary" />
                <span>Skill Progress</span>
              </CardTitle>
              <CardDescription>
                Your mastery level in different safety areas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillProgress.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.skill}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>
                Your latest learning achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium text-sm">{item.activity}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(item.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant="secondary">+{item.points} XP</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <span>Achievements</span>
            </CardTitle>
            <CardDescription>
              Unlock badges by completing various challenges and milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 text-center transition-smooth hover:scale-105 ${
                    achievement.earned
                      ? "border-primary bg-primary/5 shadow-glow"
                      : "border-muted bg-muted/20"
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h4 className={`font-semibold mb-1 ${
                    achievement.earned ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {achievement.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {achievement.description}
                  </p>
                  {achievement.earned && (
                    <Badge variant="secondary" className="mt-2 text-xs">
                      Earned
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-card gradient-hero text-white">
            <CardContent className="p-6 text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">67%</div>
              <div className="text-white/90 text-sm">Learning Progress</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card gradient-success text-white">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">8</div>
              <div className="text-white/90 text-sm">Emergency Drills</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card gradient-achievement text-achievement-foreground">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">#3</div>
              <div className="text-achievement-foreground/90 text-sm">Class Ranking</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;