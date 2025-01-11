import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Index } from "@/data/types.ts";
import { Separator } from "@/components/ui/separator.tsx";

export default function IndexCard({ index }: { index: Index }) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between px-4 py-2">
        <CardTitle className="text-3xl">{index.name}</CardTitle>
        <CardDescription className="text-2xl">{index.value}</CardDescription>
      </CardHeader>
      <Separator orientation="horizontal" className="mb-4" />
      <CardContent className="grid grid-cols-3">
        <div>
          Open : <span>{index.open}</span>
        </div>
        <div>
          High : <span>{index.open}</span>
        </div>
        <div>
          Volume : <span>{index.open}</span>
        </div>
        <div>
          Weighted Returns : <span>{index.open}%</span>
        </div>
        <div>
          Yearly Returns : <span>{index.open}%</span>
        </div>
        <div>
          Positive Days : <span>{index.open}%</span>
        </div>
        <div>
          Days Up/Down : <span>{index.daysUpDown}</span>
        </div>
      </CardContent>
    </Card>
  );
}
