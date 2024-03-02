import Choose from "@/components/Choose";
import Trip from "@/components/ui/Trip";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Choose></Choose>
      <Trip></Trip>
    </main>
  );
}
