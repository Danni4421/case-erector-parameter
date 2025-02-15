import { type Transfer } from "@/types";

export const getTransfers = async (): Promise<Transfer[]> => {
  try {
    return [
      {
        id: "1",
        description: "CARTON OPENING CYCLE START (UPPER TRANSPORT)",
        combined_active: 2,
        combined_inactive: 3,
        created_at: Date.now(),
        updated_at: Date.now(),
      },
      {
        id: "2",
        description: "CARTON OPENING CYCLE START (LOWER TRANSPORT)",
        before_active: 2,
        before_inactive: 3,
        after_active: 3,
        after_inactive: 4,
        created_at: Date.now(),
        updated_at: Date.now(),
      },
      {
        id: "3",
        description: "SHORT CARTON FLAPS UP (UPPER TRANSPORT)",
        before: 3,
        after: 4,
        created_at: Date.now(),
        updated_at: Date.now(),
      },
    ];
  } catch (error) {
    return [];
  }
};
