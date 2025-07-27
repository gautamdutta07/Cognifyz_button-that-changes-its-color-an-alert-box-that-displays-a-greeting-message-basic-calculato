import { useState } from 'react';
import { Button } from '@/components/ui/button';

const ColorChangeButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="p-6 bg-card rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Color-Changing Button</h3>
      <p className="text-muted-foreground mb-4">Click the button to change its color!</p>
      <Button
        onClick={handleClick}
        className={`transition-all duration-300 ${
          isClicked
            ? 'bg-button-clicked hover:bg-button-clicked/90 text-white'
            : 'bg-button-default hover:bg-button-default/90 text-foreground'
        }`}
      >
        {isClicked ? 'Clicked!' : 'Click Me!'}
      </Button>
    </div>
  );
};

export default ColorChangeButton;