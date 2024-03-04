import config from "@/services/config";
import http from "@/services/httpServices/httpServices";
// type
import { LoginRequest } from "@/type/pages/pages.type";

const endpoint = config.baseUrl + "/auth";

export async function LoginApi(req: LoginRequest) {
  const { data } = await http.post(`${endpoint}/login`, req, {
    withCredentials: true,
  });
  return data;
}
