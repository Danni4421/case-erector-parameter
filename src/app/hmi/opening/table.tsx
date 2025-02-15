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
import { type Opening } from "@/types";
import { Info } from "lucide-react";

interface OpeningTableProps {
  openings: Opening[];
}

export function OpeningTable({ openings }: OpeningTableProps) {
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
        {openings.map((opening) => (
          <TableRow key={opening.id}>
            <TableCell className="font-medium">{opening.description}</TableCell>
            {opening.combined ? (
              <TableCell className="text-center" colSpan={2}>
                {opening.combined}
              </TableCell>
            ) : (
              <>
                <TableCell className="text-center">{opening.before}</TableCell>
                <TableCell className="text-center">{opening.after}</TableCell>
              </>
            )}
            <TableCell className="text-center">
              {new Date(opening.created_at).toLocaleDateString("en-EN", {
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
