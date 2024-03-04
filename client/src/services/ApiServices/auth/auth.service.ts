import http from "@/services/httpServices/httpServices";
// type
import { LoginRequest } from "@/type/pages/pages.type";

export async function LoginApi(req: LoginRequest) {
  const { data } = await http.post(`/auth/login`, req);
  return data;
}
