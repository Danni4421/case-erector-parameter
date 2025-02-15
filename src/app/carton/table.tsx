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
import { type Carton } from "@/types";
import { Info } from "lucide-react";

interface CartonTableProps {
  cartons: Carton[];
}

export function CartonTable({ cartons }: CartonTableProps) {
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
        {cartons.map((carton) => (
          <TableRow key={carton.id}>
            <TableCell className="font-medium">{carton.description}</TableCell>
            <TableCell className="text-center">{carton.before}</TableCell>
            <TableCell className="text-center">{carton.after}</TableCell>
            <TableCell className="text-center">{carton.created_at}</TableCell>
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
