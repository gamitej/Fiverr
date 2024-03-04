import "./Login.scss";
import { useState, FormEvent, ChangeEvent } from "react";
// type
import { LoginRequest } from "@/type/pages/pages.type";
import { LoginApi } from "@/services/ApiServices/auth/auth.service";

const Login = () => {
  const [userForm, setUserForm] = useState<LoginRequest>({
    username: "",
    password: "",
  });

  // const [error, setError] = useState<null | string>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await LoginApi(userForm);
    console.log(res);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          autoComplete="off"
          placeholder="johndoe"
          value={userForm.username}
          onChange={handleInputChange}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          placeholder="johndoe"
          value={userForm.password}
          onChange={handleInputChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
