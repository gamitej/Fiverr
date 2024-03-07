import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useState, FormEvent, ChangeEvent } from "react";
// type & data
import { LoginRequest } from "@/type/pages/pages.type";
import { handleSetSessionData } from "@/data/session.data";
// services
import { LoginApi } from "@/services/ApiServices/auth/auth.service";

const Login = () => {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState<LoginRequest>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<null | string>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
    if (error !== null) setError(null);
  };

  // submit form and call login api
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error: isError, data } = await LoginApi(userForm);
    if (isError) {
      setError(data);
    } else {
      navigate("/");
      handleSetSessionData<object>("USER", data.userInfo);
    }
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
        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
