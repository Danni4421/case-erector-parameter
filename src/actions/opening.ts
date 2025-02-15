import { type Opening } from "@/types";

export const getOpenings = async (): Promise<Opening[]> => {
  try {
    return [
      {
        id: "1",
        description: "CARTON OPENING CYCLE START (UPPER TRANSPORT)",
        combined: 3,
        created_at: Date.now(),
      },
      {
        id: "2",
        description: "CARTON OPENING CYCLE START (LOWER TRANSPORT)",
        before: 2,
        after: 3,
        created_at: Date.now(),
      },
      {
        id: "3",
        description: "SHORT CARTON FLAPS UP (UPPER TRANSPORT)",
        before: 3,
        after: 3,
        created_at: Date.now(),
      },
    ];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return [];
  }
};
