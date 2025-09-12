import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Gamepad2, 
  Play, 
  Trophy, 
  Users, 
  Clock,
  Star,
  Zap,
  Target,
  Brain,
  Shield
} from "lucide-react";

const Games = () => {
  const games = [
    {
      id: 1,
      title: "Fire Escape Challenge",
      description: "Navigate through a building safely during a fire emergency. Test your evacuation knowledge!",
      category: "Fire Safety",
      difficulty: "Beginner",
      players: 1250,
      rating: 4.8,
      duration: "5-10 min",
      points: 100,
      icon: "🔥",
      color: "destructive"
    },
    {
      id: 2,
      title: "Earthquake Response Quiz",
      description: "Quick-thinking quiz game about earthquake safety. Drop, Cover, and Hold On!",
      category: "Earthquake",
      difficulty: "Intermediate",
      players: 980,
      rating: 4.7,
      duration: "3-5 min",
      points: 75,
      icon: "🌍",
      color: "warning"
    },
    {
      id: 3,
      title: "First Aid Hero",
      description: "Save virtual patients by applying the correct first aid techniques in emergency scenarios.",
      category: "First Aid",
      difficulty: "Advanced",
      players: 750,
      rating: 4.9,
      duration: "10-15 min",
      points: 150,
      icon: "🏥",
      color: "secondary"
    },
    {
      id: 4,
      title: "Weather Alert Manager",
      description: "Monitor weather conditions and make critical decisions to keep your community safe.",
      category: "Weather",
      difficulty: "Intermediate",
      players: 650,
      rating: 4.6,
      duration: "8-12 min",
      points: 120,
      icon: "⛈️",
      color: "primary"
    },
    {
      id: 5,
      title: "Emergency Kit Builder",
      description: "Build the perfect emergency kit for different disaster scenarios. Strategy meets preparedness!",
      category: "Preparedness",
      difficulty: "Beginner",
      players: 850,
      rating: 4.5,
      duration: "6-8 min",
      points: 80,
      icon: "🎒",
      color: "secondary"
    },
    {
      id: 6,
      title: "Community Response Simulator",
      description: "Lead a community emergency response team through multiple disaster scenarios.",
      category: "Leadership",
      difficulty: "Advanced",
      players: 320,
      rating: 4.9,
      duration: "15-20 min",
      points: 200,
      icon: "👥",
      color: "achievement"
    }
  ];

  const categories = [
    { name: "All Games", count: 6, active: true },
    { name: "Fire Safety", count: 1, active: false },
    { name: "Earthquake", count: 1, active: false },
    { name: "First Aid", count: 1, active: false },
    { name: "Weather", count: 1, active: false },
    { name: "Preparedness", count: 1, active: false },
    { name: "Leadership", count: 1, active: false },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-secondary text-secondary-foreground";
      case "Intermediate": return "bg-warning text-warning-foreground";
      case "Advanced": return "bg-destructive text-destructive-foreground";
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
          <h1 className="text-4xl font-bold text-foreground">Safety Games</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn emergency preparedness through fun, interactive games and challenges
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Games Available</div>
            </CardContent>
          </Card>
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">450</div>
              <div className="text-sm text-muted-foreground">Games Played</div>
            </CardContent>
          </Card>
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-achievement mb-2">1,250</div>
              <div className="text-sm text-muted-foreground">XP Earned</div>
            </CardContent>
          </Card>
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-warning mb-2">#5</div>
              <div className="text-sm text-muted-foreground">Your Rank</div>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  size="sm"
                  className="transition-smooth"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card key={game.id} className="shadow-card transition-smooth hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl ${getColorClass(game.color)} flex items-center justify-center text-2xl`}>
                    {game.icon}
                  </div>
                  <Badge className={getDifficultyColor(game.difficulty)}>
                    {game.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{game.title}</CardTitle>
                <CardDescription>{game.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Game Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{game.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{game.players}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current text-achievement" />
                    <span>{game.rating}</span>
                  </div>
                </div>

                {/* Points */}
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">
                    <Zap className="w-3 h-3 mr-1" />
                    {game.points} XP
                  </Badge>
                  <Badge variant="outline">{game.category}</Badge>
                </div>

                {/* Play Button */}
                <Button className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Play Game
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular This Week */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-primary" />
              <span>Popular This Week</span>
            </CardTitle>
            <CardDescription>
              Most played games by students this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">🔥</div>
                  <div>
                    <h4 className="font-semibold">Fire Escape Challenge</h4>
                    <p className="text-sm text-muted-foreground">2,450 plays this week</p>
                  </div>
                </div>
                <Badge className="gradient-achievement text-achievement-foreground">
                  #1
                </Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">🏥</div>
                  <div>
                    <h4 className="font-semibold">First Aid Hero</h4>
                    <p className="text-sm text-muted-foreground">1,890 plays this week</p>
                  </div>
                </div>
                <Badge variant="secondary">#2</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">🌍</div>
                  <div>
                    <h4 className="font-semibold">Earthquake Response Quiz</h4>
                    <p className="text-sm text-muted-foreground">1,520 plays this week</p>
                  </div>
                </div>
                <Badge variant="outline">#3</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Challenge of the Day */}
        <Card className="shadow-card gradient-hero text-white">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Daily Challenge</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Take on today's special challenge: Complete the Fire Escape Challenge in under 3 minutes 
              to earn double XP and a special badge!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Play className="w-5 h-5 mr-2" />
                Accept Challenge
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Trophy className="w-5 h-5 mr-2" />
                View Rewards
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Games;