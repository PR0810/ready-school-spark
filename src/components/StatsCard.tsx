import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  variant?: "default" | "success" | "warning" | "achievement";
  className?: string;
}

export const StatsCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  variant = "default",
  className = ""
}: StatsCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "gradient-success text-white";
      case "warning":
        return "gradient-emergency text-white";
      case "achievement":
        return "gradient-achievement text-achievement-foreground";
      default:
        return "bg-card text-card-foreground shadow-card";
    }
  };

  return (
    <Card className={`transition-smooth hover:scale-105 ${getVariantStyles()} ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-y-0 pb-2">
          <h3 className="text-sm font-medium opacity-90">{title}</h3>
          <Icon className="h-4 w-4 opacity-75" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">{value}</div>
          {trend && (
            <Badge 
              variant={variant === "default" ? "secondary" : "outline"} 
              className={variant !== "default" ? "bg-white/20 text-current border-current/30" : ""}
            >
              {trend}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};