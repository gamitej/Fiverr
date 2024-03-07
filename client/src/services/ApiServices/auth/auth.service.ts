import { AxiosError } from "axios";
import http from "@/services/httpServices/httpServices";
// type
import { LoginRequest, RegisterRequest } from "@/type/pages/pages.type";

export async function LoginApi(req: LoginRequest) {
  try {
    const { data } = await http.post(`/auth/login`, req);
    return { error: false, data };
  } catch (error: unknown) {
    const res = (error as AxiosError).response?.data;

    return { error: true, data: res };
  }
}

export async function LogoutApi() {
  try {
    const { data } = await http.post(`/auth/logout`);
    return { error: false, data };
  } catch (error: unknown) {
    const res = (error as AxiosError).response?.data;
    return { error: true, data: res };
  }
}

export async function RegisterApi(req: RegisterRequest) {
  try {
    const { data } = await http.post(`/auth/register`, req);
    return { error: false, data };
  } catch (error: unknown) {
    const res = (error as AxiosError).response?.data;
    return { error: true, data: res };
  }
}
