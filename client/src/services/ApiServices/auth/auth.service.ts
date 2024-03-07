import { AxiosError } from "axios";
import http from "@/services/httpServices/httpServices";
// type
import { LoginRequest } from "@/type/pages/pages.type";

export async function LoginApi(req: LoginRequest) {
  try {
    const { data } = await http.post(`/auth/login`, req);
    return { error: false, data };
  } catch (error: unknown) {
    const res = (error as AxiosError).response?.data;

    return { error: true, data: res };
  }
}
