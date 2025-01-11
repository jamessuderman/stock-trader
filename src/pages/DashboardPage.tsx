import { indexes } from "@/data/bootstrap.ts";
import IndexCard from "@/components/dashboard/indexCard.tsx";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl">Major Indexes</h1>
      {indexes.map((index) => (
        <IndexCard index={index} />
      ))}
    </div>
  );
}
