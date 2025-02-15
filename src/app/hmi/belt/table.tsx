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
import { type Belt } from "@/types";
import { Info } from "lucide-react";

interface BeltTableProps {
  belts: Belt[];
}

export function BeltTable({ belts }: BeltTableProps) {
  return (
    <Table>
      <TableCaption>A list of belts.</TableCaption>
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
        {belts.map((belt) => (
          <TableRow key={belt.id}>
            <TableCell className="font-medium">{belt.description}</TableCell>
            {belt.combined ? (
              <TableCell className="text-center" colSpan={2}>
                {belt.combined} (Hz)
              </TableCell>
            ) : (
              <>
                <TableCell className="text-center">
                  {belt.before} (Hz)
                </TableCell>
                <TableCell className="text-center">{belt.after} (Hz)</TableCell>
              </>
            )}
            <TableCell className="text-center">
              {" "}
              {new Date(belt.created_at).toLocaleDateString("en-EN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
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
