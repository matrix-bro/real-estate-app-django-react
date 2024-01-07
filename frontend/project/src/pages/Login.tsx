import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/features/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-semibold text-blue-500">Log In</h1>

        <form
          action=""
          className="w-full md:w-1/2 p-3"
          onSubmit={handleOnSubmit}
        >
          <div className="mt-4">
            <p>Email*</p>
            <p>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                name="email"
                required
                className="w-full py-2 px-2 border"
                value={email}
                onChange={handleOnChange}
              />
            </p>
          </div>
          <div className="mt-4">
            <p>Password*</p>
            <p>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                className="w-full py-2 px-2 border"
                value={password}
                onChange={handleOnChange}
              />
            </p>
          </div>

          <button className="mt-3 py-2 px-4 bg-blue-400 hover:bg-blue-500">
            Log In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
