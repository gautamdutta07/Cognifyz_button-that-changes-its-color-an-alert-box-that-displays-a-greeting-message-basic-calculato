import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

const Calculator = () => {
  const [number1, setNumber1] = useState<string>('');
  const [number2, setNumber2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateSum = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 + num2);
    } else {
      setResult(null);
    }
  };

  const clearCalculator = () => {
    setNumber1('');
    setNumber2('');
    setResult(null);
  };

  return (
    <div className="p-6 bg-card rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Simple Calculator</h3>
      <p className="text-muted-foreground mb-4">Add two numbers together!</p>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="number1">First Number</Label>
            <Input
              id="number1"
              type="number"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
              placeholder="Enter first number"
            />
          </div>
          <div>
            <Label htmlFor="number2">Second Number</Label>
            <Input
              id="number2"
              type="number"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
              placeholder="Enter second number"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={calculateSum} className="bg-calculator hover:bg-calculator/90">
            Calculate Sum
          </Button>
          <Button onClick={clearCalculator} variant="outline">
            Clear
          </Button>
        </div>

        {result !== null && (
          <Card className="p-4 bg-success/10 border-success">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Result:</p>
              <p className="text-2xl font-bold text-success">{result}</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Calculator;