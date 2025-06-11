import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2">
      <Button className="bg-yellow-500 text-black hover:bg-yellow-300 cursor-pointer">Welcome to Smart Cook Mony</Button>
    </div>
  );
}
