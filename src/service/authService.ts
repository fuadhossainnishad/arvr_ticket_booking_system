import { client } from "../lib/client";
import { AxiosError } from "axios";
interface responseMsg {
  message: string;
}

export  const auth = async (
  url: string,
  data: Record<string, string | number>
): Promise<responseMsg> => {
  try {
    const response = await client.post(url, data);

    return { message: response.data.message };
  } catch (error) {
    if (error instanceof AxiosError) {
      return { message: error.response?.data?.message || "An error occurred" };
    }
    return { message: "An unexpected error occurred" };
  }
};
