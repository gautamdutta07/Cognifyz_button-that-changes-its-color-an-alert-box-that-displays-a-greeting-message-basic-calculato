import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const TimeGreeting = () => {
  const { toast } = useToast();

  const showGreeting = () => {
    const currentHour = new Date().getHours();
    let greeting = '';
    let variant: 'default' | 'destructive' = 'default';

    if (currentHour < 12) {
      greeting = 'Good Morning! ☀️';
    } else if (currentHour < 17) {
      greeting = 'Good Afternoon! 🌤️';
    } else {
      greeting = 'Good Evening! 🌙';
    }

    // Using toast instead of alert for better UX
    toast({
      title: "Time-Based Greeting",
      description: greeting,
      variant,
    });
  };

  return (
    <div className="p-6 bg-card rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Time-Based Greeting</h3>
      <p className="text-muted-foreground mb-4">
        Get a greeting message based on the current time!
      </p>
      <Button onClick={showGreeting} variant="secondary">
        Show Greeting
      </Button>
    </div>
  );
};

export default TimeGreeting;