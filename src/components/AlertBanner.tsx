import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle, X, Bell } from "lucide-react";

export const AlertBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert className="gradient-emergency text-white border-none shadow-emergency animate-fade-in">
      <AlertTriangle className="h-4 w-4 text-white" />
      <AlertDescription className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <Bell className="w-4 h-4 animate-badge-pulse" />
          <span className="font-medium">
            Emergency Drill scheduled for Today at 2:00 PM - Fire Safety Practice
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-white/20 h-auto p-1"
        >
          <X className="w-4 h-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};