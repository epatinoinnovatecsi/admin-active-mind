import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../store/slices/modal.slice";
import axiosApiBam from "../utils/axiosConfig";

const AMCard = ({ user }) => {
  const [isBlock, setIsBlock] = useState(user?.isBlock);
  const dispatch = useDispatch()

  const deadline = new Date(user?.timeAllowed)
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const handleToggleEnable = () => {
    const currentState = isBlock;
    const data = {
      isBlock: !currentState,
    };
    axiosApiBam
      .put(`/users/${user.id}`, data)
      .then(({ data }) => {
        setIsBlock(data.isBlock);
      })
      .catch((err) => console.log(err));
  };

  const handleOpenModal = () => {
    dispatch(openModal(user))
  }

  return (
    <section className="w-10/12 flex p-4 bg-secondary shadow-lg rounded-lg justify-between [&>div>h2]:text-center [&>div>h2]:font-bold">
      <div className="self-center">
        <h2>Usuario</h2>
        <span>{`${user?.firstName} ${user?.lastName}`}</span>
      </div>
      <div className="self-center">
        <h2>Correo</h2>
        <span>{user?.email}</span>
      </div>
      <div className="grid [&>span]:text-center">
        <h2>Fecha limite</h2>
        <span>{deadline.toLocaleDateString('es-ES', options)}</span>
        <span>{deadline.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
        <button onClick={handleOpenModal} className="bg-alternative-primary text-white rounded-full px-4 py-1">
          Cambiar
        </button>
      </div>
      <button
        type="button"
        onClick={handleToggleEnable}
        className={`${
          isBlock ? "bg-green-500" : "bg-red-500"
        } text-white px-5 py-0 h-10 rounded-full self-center`}
      >
        {isBlock ? "Activar" : "Desactivar"}
      </button>
    </section>
  );
};
export default AMCard;
