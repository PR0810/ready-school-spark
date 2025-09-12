import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  LayoutDashboard, 
  BookOpen, 
  Gamepad2, 
  Trophy, 
  AlertTriangle, 
  Wrench, 
  User,
  Menu,
  X
} from "lucide-react";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Learn", href: "/learn", icon: BookOpen },
    { name: "Drills", href: "/drills", icon: AlertTriangle },
    { name: "Games", href: "/games", icon: Gamepad2 },
    { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
    { name: "Tools", href: "/tools", icon: Wrench },
    { name: "Profile", href: "/profile", icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">SafeLearn</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* User Badge */}
          <div className="hidden md:flex items-center space-x-4">
            <Badge variant="secondary" className="animate-badge-pulse">
              500 XP
            </Badge>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Student Portal
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="pt-4 border-t">
              <div className="px-4 py-2">
                <Badge variant="secondary" className="mb-3">
                  500 XP
                </Badge>
                <Button variant="outline" size="sm" className="w-full">
                  <User className="w-4 h-4 mr-2" />
                  Student Portal
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};