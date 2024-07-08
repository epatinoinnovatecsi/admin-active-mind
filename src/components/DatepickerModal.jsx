import { CloseIcon } from "../Icons/Svgs";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/slices/modal.slice";
import { axiosApiBam } from "../utils/axiosConfig";

const DatepickerModal = ({ usersData, setUsersData}) => {
    const isModalShow = useSelector((store) => store.modal.isShow)
    const userInfo = useSelector((store) => store.modal.user)
    const localDatetime = useSelector((store) => store.modal.localDatetime) 
    const dispatch = useDispatch()

    const handleCloseModal =  () => {
        dispatch(closeModal())
    }

    const handleUpdateDeadline = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        axiosApiBam
        .put(`/users/${userInfo.id}`, data )
        .then(() => {
            dispatch(closeModal())
            alert(`Fecha limite actualizada para ${userInfo.firstName} ${userInfo.lastName}`)
            const userIdx = usersData.findIndex((user) => user.id == userInfo.id)
            const newUsersData = [...usersData]
            newUsersData[userIdx] = {...userInfo, timeAllowed: data.timeAllowed}
            setUsersData(newUsersData)
        })
        .catch((err) => {console.log(err)})
    }
    
  return (
    <div className={`absolute ${isModalShow? "": "hidden"}`}>
      <div className="fixed bg-black opacity-70 z-10 top-0 left-0 w-screen h-screen"></div>
      <div className="flex flex-col relative bg-white z-20 rounded-lg p-4 pt-6 ">
        <button onClick={handleCloseModal} className="absolute right-2 top-2">
            <CloseIcon fill={"#20749B"} />
        </button>
        <h1 className="font-bold text-lg">Selecciona una fecha</h1>
        <span className="text-sm">
          Esta fecha actualizara la fecha limite de uso del producto Active Mind para 
        </span>
        <span className="font-semibold text-sm">
          {userInfo.firstName} {userInfo.lastName}
        </span>
        <form onSubmit={handleUpdateDeadline} className="flex flex-col my-4 gap-4">
          <input type="datetime-local" defaultValue={localDatetime?.substring(0, 16)} name="timeAllowed"/>
          <button className="bg-alternative-primary text-white rounded-full px-4 py-2 w-32 mx-auto">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};
export default DatepickerModal;
