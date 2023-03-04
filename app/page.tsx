import { Popover } from "@/components/Popover";

export default function Home() {
  return (
    <main>
      <h1 className="text-6xl font-bold p-5">Radix UI</h1>
      <Popover label="More info" content="Some information..." />
    </main>
  );
}
