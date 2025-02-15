import { type OutfeedConveyor } from "@/types";

export const getOutfeedConveyors = async (): Promise<OutfeedConveyor[]> => {
  try {
    return [
      {
        id: "1",
        description: "OUTFEED CONVEYOR SPEED",
        combined: 2,
        created_at: Date.now(),
        updated_at: Date.now(),
      },
      {
        id: "2",
        description: "OUTFEED CONVEYOR SPEED",
        before: 2,
        after: 3,
        created_at: Date.now(),
        updated_at: Date.now(),
      },
    ];
  } catch (error) {
    return [];
  }
};
