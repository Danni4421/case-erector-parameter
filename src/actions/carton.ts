import { Carton } from "@/types";

export const getCartons = async (): Promise<Carton[]> => {
  try {
    return [
      {
        id: "1",
        description: "CARTON OPENING CYCLE START (UPPER TRANSPORT)",
        before: 1,
        after: 2,
        combined: 3,
        created_at: Date.now(),
        updated_at: Date.now(),
      },
      {
        id: "2",
        description: "CARTON OPENING CYCLE START (LOWER TRANSPORT)",
        before: 2,
        after: 3,
        combined: 5,
        created_at: Date.now(),
        updated_at: Date.now(),
      },
      {
        id: "3",
        description: "SHORT CARTON FLAPS UP (UPPER TRANSPORT)",
        before: 3,
        after: 4,
        combined: 7,
        created_at: Date.now(),
        updated_at: Date.now(),
      },
    ];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return [];
  }
};
