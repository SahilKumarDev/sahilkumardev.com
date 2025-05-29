import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="text-4xl h-screen flex flex-col justify-center items-center font-mono font-medium">
      Sahil Kumar Dev
      <span className="mt-4 flex flex-col items-center gap-2">
        <Button>Click to connect.</Button>
        <ThemeToggle />
      </span>
    </div>
  );
};

export default Home;
