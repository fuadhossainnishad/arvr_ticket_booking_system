import { client } from "@/lib/client";
import { AxiosError } from "axios";

export const authentic = async (endpoint: string, data: Record<string,string | number | Date>) => {
  try {
    const response = await client.post(
      `${endpoint}`,
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return { message: error.response?.data?.message || "An error occurred" };
    }
    return { message: "An unexpected error occurred" };
  }
};
