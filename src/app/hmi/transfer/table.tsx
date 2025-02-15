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
import { type Transfer } from "@/types";
import { Info } from "lucide-react";

interface TransferTableProps {
  transfers: Transfer[];
}

export function TransfersTable({ transfers }: TransferTableProps) {
  const CellParameter = ({ transfer }: Readonly<{ transfer: Transfer }>) => {
    const isTransferCombinedWithStatus =
      transfer.combined_active && transfer.combined_inactive;

    const isTransferBeforeWithStatus =
      transfer.before_active && transfer.before_inactive;
    const isTransferAfterWithStatus =
      transfer.after_active && transfer.after_inactive;

    if (transfer.combined || isTransferCombinedWithStatus) {
      if (isTransferCombinedWithStatus) {
        return (
          <TableCell className="text-center" colSpan={2}>
            <div className="flex flex-col">
              <span>ON = {transfer.combined_active}</span>
              <span>OFF = {transfer.combined_inactive}</span>
            </div>
          </TableCell>
        );
      }
    }

    return (
      <>
        <TableCell className="text-center">
          {isTransferBeforeWithStatus ? (
            <div className="flex flex-col">
              <span>ON = {transfer.before_active}</span>
              <span>OFF = {transfer.before_inactive}</span>
            </div>
          ) : (
            transfer.before
          )}
        </TableCell>
        <TableCell className="text-center">
          {isTransferAfterWithStatus ? (
            <div className="flex flex-col">
              <span>ON = {transfer.after_active}</span>
              <span>OFF = {transfer.after_inactive}</span>
            </div>
          ) : (
            transfer.after
          )}
        </TableCell>
      </>
    );
  };

  return (
    <Table>
      <TableCaption>A list of transfer.</TableCaption>
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
        {transfers.map((transfer) => (
          <TableRow key={transfer.id}>
            <TableCell className="font-medium">
              {transfer.description}
            </TableCell>
            <CellParameter transfer={transfer} />
            <TableCell className="text-center">
              {new Date(transfer.created_at).toLocaleDateString("en-EN", {
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
