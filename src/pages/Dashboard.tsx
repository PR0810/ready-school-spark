import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { StatsCard } from "@/components/StatsCard";
import { AlertBanner } from "@/components/AlertBanner";
import { 
  BookOpen, 
  Trophy, 
  Zap, 
  Target, 
  Play, 
  AlertTriangle,
  Gamepad2,
  Award,
  Clock,
  CheckCircle2
} from "lucide-react";

const Dashboard = () => {
  const recentActivities = [
    { id: 1, title: "Completed Earthquake Safety Module", type: "lesson", time: "2 hours ago", points: 50 },
    { id: 2, title: "Participated in Fire Drill", type: "drill", time: "1 day ago", points: 75 },
    { id: 3, title: "Won Safety Quiz Challenge", type: "game", time: "2 days ago", points: 100 },
    { id: 4, title: "Earned First Aid Badge", type: "achievement", time: "3 days ago", points: 150 },
  ];

  const upcomingEvents = [
    { id: 1, title: "Tornado Safety Drill", date: "Today, 2:00 PM", type: "drill" },
    { id: 2, title: "Flood Preparedness Quiz", date: "Tomorrow, 10:00 AM", type: "quiz" },
    { id: 3, title: "Emergency Kit Building Workshop", date: "Friday, 3:00 PM", type: "workshop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <AlertBanner />
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Alex! Ready to learn about safety?</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="animate-badge-pulse">
              Level 5
            </Badge>
            <Badge className="gradient-achievement text-achievement-foreground">
              <Award className="w-3 h-3 mr-1" />
              Safety Expert
            </Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total XP"
            value="2,450"
            icon={Zap}
            trend="+150"
            variant="achievement"
          />
          <StatsCard
            title="Modules Completed"
            value="12/18"
            icon={BookOpen}
            trend="67%"
            variant="success"
          />
          <StatsCard
            title="Drills Participated"
            value="8"
            icon={Target}
            trend="+2"
          />
          <StatsCard
            title="Leaderboard Rank"
            value="#3"
            icon={Trophy}
            trend="↑1"
            variant="warning"
          />
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span>Learning Progress</span>
              </CardTitle>
              <CardDescription>
                Your journey through disaster preparedness education
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Fire Safety</span>
                  <span className="text-muted-foreground">100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Earthquake Preparedness</span>
                  <span className="text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>First Aid Basics</span>
                  <span className="text-muted-foreground">60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Flood Safety</span>
                  <span className="text-muted-foreground">30%</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Upcoming Events</span>
              </CardTitle>
              <CardDescription>
                Don't miss these important activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        event.type === 'drill' ? 'bg-destructive' : 
                        event.type === 'quiz' ? 'bg-primary' : 'bg-secondary'
                      } animate-badge-pulse`} />
                      <div>
                        <p className="font-medium text-sm">{event.title}</p>
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-card cursor-pointer transition-smooth hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Continue Learning</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Pick up where you left off in First Aid Basics
              </p>
              <Button className="w-full">Continue Module</Button>
            </CardContent>
          </Card>

          <Card className="shadow-card cursor-pointer transition-smooth hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 gradient-emergency rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Practice Drill</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Test your knowledge with virtual emergency scenarios
              </p>
              <Button variant="destructive" className="w-full">Start Drill</Button>
            </CardContent>
          </Card>

          <Card className="shadow-card cursor-pointer transition-smooth hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Play Games</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn through fun and interactive safety games
              </p>
              <Button variant="secondary" className="w-full">Play Now</Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>
              Your latest achievements and progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'lesson' ? 'bg-primary/20 text-primary' :
                      activity.type === 'drill' ? 'bg-destructive/20 text-destructive' :
                      activity.type === 'game' ? 'bg-secondary/20 text-secondary' :
                      'bg-achievement/20 text-achievement'
                    }`}>
                      {activity.type === 'lesson' && <BookOpen className="w-4 h-4" />}
                      {activity.type === 'drill' && <AlertTriangle className="w-4 h-4" />}
                      {activity.type === 'game' && <Gamepad2 className="w-4 h-4" />}
                      {activity.type === 'achievement' && <Award className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">+{activity.points} XP</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;