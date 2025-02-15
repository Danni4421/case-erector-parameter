import { type Timer } from "@/types";

export const getTimers = async (): Promise<Timer[]> => {
  try {
    return [
      {
        id: "1",
        description: "Carton pick arm forward wait",
        combined: 3,
        created_at: Date.now(),
      },
      {
        id: "2",
        description: "Carton pick arm forward wait",
        combined: 5,
        created_at: Date.now(),
      },
      {
        id: "3",
        description: "Carton pick arm forward wait",
        before: 1,
        after: 4,
        created_at: Date.now(),
      },
    ];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return [];
  }
};
