import ColorChangeButton from '@/components/ColorChangeButton';
import TimeGreeting from '@/components/TimeGreeting';
import Calculator from '@/components/Calculator';

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            JavaScript Interactive Demos
          </h1>
          <p className="text-xl text-muted-foreground">
            Three interactive JavaScript features built with React
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ColorChangeButton />
            <TimeGreeting />
          </div>
          <div className="max-w-2xl mx-auto">
            <Calculator />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
