import { useDispatch } from "react-redux";
import MainContainer from "../layout/MainContainer";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/admin.slice";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    dispatch(login(data, navigate));
  }

  return (
    <MainContainer>
      <main className="shadow-lg w-1/2 p-8 rounded-3xl bg-white max-w-[410px]">
        <h1 className="text-3xl">Inicia sesión</h1>
        <form
        onSubmit={handleSubmit}
          className="flex flex-col mt-8 gap-4 [&>label]:grid [&>label]:gap-2 [&>label>input]:border-b-[1px] [&>label>input]:border-primary"
          action=""
        >
          <label>
            <span>Email</span>
            <input type="email" name="email" />
          </label>
          <label className="">
            <span>Contraseña</span>
            <input type="password" name="password"/>
          </label>
          <a href="" className="text-alternative-primary">
            Olvide mi contraseña
          </a>
          <button
            className="mt-8 mb-8 bg-alternative-primary p-2 rounded-full text-white"
            type="submit"
          >
            Acceder
          </button>
        </form>
      </main>
    </MainContainer>
  );
};
export default Login;
