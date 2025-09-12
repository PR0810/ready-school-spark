import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin, 
  AlertTriangle, 
  Heart, 
  Flashlight,
  Radio,
  Shield,
  Navigation,
  Clock,
  Users,
  Thermometer,
  Wind,
  Eye,
  Activity
} from "lucide-react";

const EmergencyTools = () => {
  const emergencyContacts = [
    { name: "Emergency Services", number: "911", type: "emergency", color: "destructive" },
    { name: "School Safety Office", number: "(555) 123-4567", type: "school", color: "primary" },
    { name: "Poison Control", number: "1-800-222-1222", type: "medical", color: "secondary" },
    { name: "Campus Security", number: "(555) 987-6543", type: "security", color: "warning" }
  ];

  const quickTools = [
    {
      id: 1,
      title: "Emergency Contacts",
      description: "Quick access to all emergency numbers",
      icon: Phone,
      color: "destructive",
      active: true
    },
    {
      id: 2,
      title: "Safety Checklist",
      description: "Pre-emergency preparation checklist",
      icon: Shield,
      color: "secondary",
      active: true
    },
    {
      id: 3,
      title: "Evacuation Routes",
      description: "View building evacuation maps",
      icon: Navigation,
      color: "primary",
      active: true
    },
    {
      id: 4,
      title: "First Aid Guide",
      description: "Step-by-step medical assistance",
      icon: Heart,
      color: "secondary",
      active: true
    },
    {
      id: 5,
      title: "Weather Alerts",
      description: "Real-time weather warnings",
      icon: Wind,
      color: "warning",
      active: true
    },
    {
      id: 6,
      title: "Emergency Flashlight",
      description: "Use phone's flashlight feature",
      icon: Flashlight,
      color: "primary",
      active: false
    }
  ];

  const safetyChecklist = [
    { item: "Emergency kit prepared", checked: true },
    { item: "Family communication plan", checked: true },
    { item: "Important documents secured", checked: false },
    { item: "Emergency supplies restocked", checked: false },
    { item: "Evacuation routes memorized", checked: true },
    { item: "Emergency contacts updated", checked: true }
  ];

  const weatherData = {
    condition: "Clear",
    temperature: "72°F",
    humidity: "45%",
    windSpeed: "8 mph",
    alerts: []
  };

  const firstAidSteps = [
    { step: 1, title: "Check for Consciousness", description: "Gently tap and shout 'Are you okay?'" },
    { step: 2, title: "Call for Help", description: "Dial 911 immediately" },
    { step: 3, title: "Check Breathing", description: "Look, listen, and feel for normal breathing" },
    { step: 4, title: "Check Pulse", description: "Feel for pulse at wrist or neck" }
  ];

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      warning: "bg-warning text-warning-foreground",
      achievement: "bg-achievement text-achievement-foreground"
    };
    return colorMap[color] || "bg-primary text-primary-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Emergency Tools</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential tools and resources for emergency preparedness and response
          </p>
        </div>

        {/* Emergency Alert Banner */}
        <Card className="shadow-card gradient-emergency text-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <AlertTriangle className="w-8 h-8 animate-badge-pulse" />
              <div>
                <h3 className="text-lg font-bold">Emergency Status: All Clear</h3>
                <p className="text-white/90">No active emergencies in your area. Stay prepared!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Tools */}
          <div className="lg:col-span-2">
            <Card className="shadow-card mb-6">
              <CardHeader>
                <CardTitle>Quick Access Tools</CardTitle>
                <CardDescription>Essential emergency tools at your fingertips</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <Card 
                        key={tool.id} 
                        className={`cursor-pointer transition-smooth hover:scale-105 ${
                          tool.active ? 'shadow-card' : 'opacity-60'
                        }`}
                      >
                        <CardContent className="p-4 text-center">
                          <div className={`w-12 h-12 mx-auto mb-3 rounded-xl ${getColorClass(tool.color)} flex items-center justify-center`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <h4 className="font-semibold mb-1">{tool.title}</h4>
                          <p className="text-sm text-muted-foreground">{tool.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Emergency Contacts</span>
                </CardTitle>
                <CardDescription>Important numbers for different emergency situations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div>
                        <h4 className="font-semibold">{contact.name}</h4>
                        <p className="text-sm text-muted-foreground capitalize">{contact.type}</p>
                      </div>
                      <div className="text-right">
                        <Button className={getColorClass(contact.color)} size="sm">
                          <Phone className="w-4 h-4 mr-2" />
                          {contact.number}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Safety Checklist */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Safety Checklist</span>
                </CardTitle>
                <CardDescription>Your emergency preparedness status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {safetyChecklist.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                        item.checked ? 'bg-secondary border-secondary' : 'border-muted-foreground'
                      }`}>
                        {item.checked && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <span className={`text-sm ${item.checked ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {item.item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-lg font-bold text-secondary">4/6</div>
                    <div className="text-sm text-muted-foreground">Items Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weather Status */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wind className="w-5 h-5 text-primary" />
                  <span>Weather Status</span>
                </CardTitle>
                <CardDescription>Current conditions and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <Thermometer className="w-6 h-6 mx-auto mb-1 text-warning" />
                      <div className="font-bold">{weatherData.temperature}</div>
                      <div className="text-xs text-muted-foreground">Temperature</div>
                    </div>
                    <div>
                      <Wind className="w-6 h-6 mx-auto mb-1 text-primary" />
                      <div className="font-bold">{weatherData.windSpeed}</div>
                      <div className="text-xs text-muted-foreground">Wind Speed</div>
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary/10">
                    <div className="font-semibold text-secondary">All Clear</div>
                    <div className="text-sm text-muted-foreground">No weather alerts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick First Aid */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>First Aid Quick Guide</span>
                </CardTitle>
                <CardDescription>Basic emergency response steps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {firstAidSteps.map((step) => (
                    <div key={step.step} className="flex space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm">{step.title}</h5>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Services */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Location & Navigation</span>
            </CardTitle>
            <CardDescription>Find your location and evacuation routes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h4 className="font-semibold mb-1">Current Location</h4>
                <p className="text-sm text-muted-foreground">Riverside High School<br />Building A, Floor 2</p>
                <Button variant="outline" size="sm" className="mt-3">
                  <Eye className="w-4 h-4 mr-2" />
                  View Map
                </Button>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <Navigation className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <h4 className="font-semibold mb-1">Nearest Exit</h4>
                <p className="text-sm text-muted-foreground">Main Stairwell<br />50 feet east</p>
                <Button variant="outline" size="sm" className="mt-3">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <Users className="w-8 h-8 mx-auto mb-2 text-warning" />
                <h4 className="font-semibold mb-1">Assembly Point</h4>
                <p className="text-sm text-muted-foreground">Main Parking Lot<br />South of building</p>
                <Button variant="outline" size="sm" className="mt-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  Show Route
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Tips */}
        <Card className="shadow-card gradient-hero text-white">
          <CardContent className="p-8 text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Stay Prepared, Stay Safe</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Remember: In any emergency, stay calm, follow your training, and help others when safe to do so. 
              These tools are here to support you, but your preparation and quick thinking are your best assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Activity className="w-5 h-5 mr-2" />
                Practice Drill
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Radio className="w-5 h-5 mr-2" />
                Emergency Alert Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmergencyTools;