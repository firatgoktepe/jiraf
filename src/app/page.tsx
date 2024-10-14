import { Button } from "@/components/ui/button";
import { TestComponent } from "@/features/test";

export default function Home() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <p className="text-red-500 font-semibold">Firat</p>
      <TestComponent />
    </div>
  );
}
