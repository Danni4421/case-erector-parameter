import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type OutfeedConveyor } from "@/types";
import { Info } from "lucide-react";

interface OutfeedConveyorTableProps {
  outfeedConveyors: OutfeedConveyor[];
}

export function OutfeedConveyorsTable({
  outfeedConveyors,
}: OutfeedConveyorTableProps) {
  return (
    <Table>
      <TableCaption>A list of carton.</TableCaption>
      <TableHeader>
        {/* Baris Header Gabungan */}
        <TableRow>
          <TableHead rowSpan={2} className="w-[350px]">
            Description
          </TableHead>
          <TableHead colSpan={3} className="text-center">
            Parameters
          </TableHead>
          <TableHead rowSpan={2} className="text-center">
            Action
          </TableHead>
        </TableRow>
        {/* Sub Header */}
        <TableRow>
          <TableHead className="text-center">Before</TableHead>
          <TableHead className="text-center">After</TableHead>
          <TableHead className="text-center">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {outfeedConveyors.map((outfeedConveyor) => (
          <TableRow key={outfeedConveyor.id}>
            <TableCell className="font-medium">
              {outfeedConveyor.description}
            </TableCell>
            {outfeedConveyor.combined ? (
              <TableCell className="text-center" colSpan={2}>
                {outfeedConveyor.combined} (Hz)
              </TableCell>
            ) : (
              <>
                <TableCell className="text-center">
                  {outfeedConveyor.before} (Hz)
                </TableCell>
                <TableCell className="text-center">
                  {outfeedConveyor.after} (Hz)
                </TableCell>
              </>
            )}
            <TableCell className="text-center">
              {new Date(outfeedConveyor.created_at).toLocaleDateString(
                "en-EN",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }
              )}
            </TableCell>
            <TableCell className="text-center">
              <Button variant="outline">
                <Info />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
