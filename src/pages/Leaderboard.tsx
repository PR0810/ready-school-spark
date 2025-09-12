import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Medal, 
  Award, 
  TrendingUp, 
  Zap,
  Target,
  Crown,
  Star,
  Users
} from "lucide-react";

const Leaderboard = () => {
  const weeklyLeaders = [
    { 
      rank: 1, 
      name: "Sarah Chen", 
      school: "Riverside High", 
      xp: 3240, 
      change: "+150", 
      avatar: "SC",
      badges: 8,
      streak: 15
    },
    { 
      rank: 2, 
      name: "Mike Johnson", 
      school: "Central Academy", 
      xp: 3180, 
      change: "+120", 
      avatar: "MJ",
      badges: 7,
      streak: 12
    },
    { 
      rank: 3, 
      name: "Alex Smith", 
      school: "Riverside High", 
      xp: 2950, 
      change: "+200", 
      avatar: "AS",
      badges: 6,
      streak: 8,
      isCurrentUser: true
    },
    { 
      rank: 4, 
      name: "Emma Davis", 
      school: "North High", 
      xp: 2890, 
      change: "+80", 
      avatar: "ED",
      badges: 5,
      streak: 10
    },
    { 
      rank: 5, 
      name: "James Wilson", 
      school: "East Side Prep", 
      xp: 2750, 
      change: "+110", 
      avatar: "JW",
      badges: 4,
      streak: 6
    }
  ];

  const monthlyLeaders = [
    { 
      rank: 1, 
      name: "Alex Smith", 
      school: "Riverside High", 
      xp: 12450, 
      change: "+850", 
      avatar: "AS",
      badges: 12,
      streak: 22,
      isCurrentUser: true
    },
    { 
      rank: 2, 
      name: "Sarah Chen", 
      school: "Riverside High", 
      xp: 11980, 
      change: "+720", 
      avatar: "SC",
      badges: 11,
      streak: 18
    },
    { 
      rank: 3, 
      name: "David Park", 
      school: "Tech High", 
      xp: 11650, 
      change: "+650", 
      avatar: "DP",
      badges: 10,
      streak: 15
    }
  ];

  const schools = [
    { rank: 1, name: "Riverside High School", students: 245, avgXP: 2450, totalXP: 600250 },
    { rank: 2, name: "Central Academy", students: 198, avgXP: 2380, totalXP: 471240 },
    { rank: 3, name: "North High School", students: 312, avgXP: 2290, totalXP: 714480 },
    { rank: 4, name: "Tech High School", students: 156, avgXP: 2210, totalXP: 344760 },
    { rank: 5, name: "East Side Prep", students: 189, avgXP: 2180, totalXP: 412020 }
  ];

  const achievements = [
    { name: "Fire Safety Expert", holders: 1250, rarity: "Common", icon: "🔥" },
    { name: "Earthquake Master", holders: 850, rarity: "Uncommon", icon: "🌍" },
    { name: "First Aid Hero", holders: 420, rarity: "Rare", icon: "🏥" },
    { name: "Emergency Leader", holders: 120, rarity: "Epic", icon: "👑" },
    { name: "Safety Legend", holders: 25, rarity: "Legendary", icon: "⭐" }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-achievement" />;
      case 2: return <Medal className="w-5 h-5 text-muted-foreground" />;
      case 3: return <Award className="w-5 h-5 text-warning" />;
      default: return <span className="text-muted-foreground font-bold">#{rank}</span>;
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "text-secondary";
      case "Uncommon": return "text-primary";
      case "Rare": return "text-warning";
      case "Epic": return "text-destructive";
      case "Legendary": return "text-achievement";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Leaderboard</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how you rank against other students and schools in safety preparedness
          </p>
        </div>

        {/* Your Stats */}
        <Card className="shadow-card gradient-hero text-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-1">#3</div>
                <div className="text-white/90 text-sm">Your Rank</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">2,950</div>
                <div className="text-white/90 text-sm">Total XP</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">6</div>
                <div className="text-white/90 text-sm">Badges</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">8</div>
                <div className="text-white/90 text-sm">Day Streak</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="weekly" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="schools">Schools</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-6">
            {/* Top 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {weeklyLeaders.slice(0, 3).map((leader) => (
                <Card 
                  key={leader.rank} 
                  className={`shadow-card text-center transition-smooth hover:scale-105 ${
                    leader.rank === 1 ? 'gradient-achievement text-achievement-foreground' :
                    leader.rank === 2 ? 'bg-muted border-2 border-muted-foreground/20' :
                    'bg-muted border-2 border-warning/20'
                  } ${leader.isCurrentUser ? 'ring-2 ring-primary' : ''}`}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {getRankIcon(leader.rank)}
                    </div>
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                        {leader.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
                    <p className={`text-sm mb-3 ${leader.rank === 1 ? 'text-achievement-foreground/80' : 'text-muted-foreground'}`}>
                      {leader.school}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <Zap className="w-4 h-4" />
                        <span className="font-bold">{leader.xp.toLocaleString()} XP</span>
                        <Badge variant={leader.rank === 1 ? "secondary" : "outline"} className="text-xs">
                          {leader.change}
                        </Badge>
                      </div>
                      <div className="flex justify-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Award className="w-3 h-3" />
                          <span>{leader.badges}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Target className="w-3 h-3" />
                          <span>{leader.streak}d</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Rest of leaderboard */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Full Rankings</CardTitle>
                <CardDescription>Complete weekly leaderboard</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weeklyLeaders.slice(3).map((leader) => (
                    <div 
                      key={leader.rank} 
                      className={`flex items-center justify-between p-4 rounded-lg transition-smooth hover:bg-muted/50 ${
                        leader.isCurrentUser ? 'bg-primary/5 border border-primary/20' : 'bg-muted/20'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {getRankIcon(leader.rank)}
                        </div>
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="text-sm bg-primary/20 text-primary">
                            {leader.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{leader.name}</h4>
                          <p className="text-sm text-muted-foreground">{leader.school}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{leader.xp.toLocaleString()} XP</div>
                        <Badge variant="secondary" className="text-xs">{leader.change}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Monthly Champions</CardTitle>
                <CardDescription>Top performers this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyLeaders.map((leader) => (
                    <div 
                      key={leader.rank} 
                      className={`flex items-center justify-between p-4 rounded-lg ${
                        leader.rank === 1 ? 'gradient-achievement text-achievement-foreground' :
                        leader.isCurrentUser ? 'bg-primary/5 border border-primary/20' : 'bg-muted/20'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {getRankIcon(leader.rank)}
                        </div>
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="text-sm bg-primary text-primary-foreground">
                            {leader.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-lg">{leader.name}</h4>
                          <p className={`text-sm ${leader.rank === 1 ? 'text-achievement-foreground/80' : 'text-muted-foreground'}`}>
                            {leader.school}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">{leader.xp.toLocaleString()} XP</div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Badge variant={leader.rank === 1 ? "secondary" : "outline"}>
                            {leader.change}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schools" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>School Rankings</CardTitle>
                <CardDescription>Top performing schools this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schools.map((school) => (
                    <div 
                      key={school.rank} 
                      className={`flex items-center justify-between p-4 rounded-lg ${
                        school.rank === 1 ? 'gradient-hero text-white' : 'bg-muted/20'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {getRankIcon(school.rank)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{school.name}</h4>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Users className="w-3 h-3" />
                              <span>{school.students} students</span>
                            </div>
                            <div>Avg: {school.avgXP.toLocaleString()} XP</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">{school.totalXP.toLocaleString()} XP</div>
                        <div className="text-sm opacity-90">Total School XP</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Achievements */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-primary" />
              <span>Rare Achievements</span>
            </CardTitle>
            <CardDescription>
              Special badges and their holders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-muted/20 transition-smooth hover:scale-105">
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h4 className="font-semibold mb-1">{achievement.name}</h4>
                  <p className={`text-sm font-medium mb-2 ${getRarityColor(achievement.rarity)}`}>
                    {achievement.rarity}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {achievement.holders} holders
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;