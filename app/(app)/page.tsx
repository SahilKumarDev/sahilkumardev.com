import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

const Home = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center font-medium">
      <Heading>Sahil Kumar Dev</Heading>
      <span className="mt-4 flex flex-col items-center gap-2">
        <Button>Click to connect.</Button>
        <ThemeToggle />
      </span>
      <Heading variant="h1">Main Title</Heading>
      <Heading variant="h2" weight="extrabold" tracking="tight">
        Hero Heading
      </Heading>
      <Heading variant="h1" as="h2" className="text-primary">
        Styled as
      </Heading>
      <Heading variant="h3" className="text-center lg:text-left">
        Responsive Alignment
      </Heading>
    </div>
  );
};

export default Home;
