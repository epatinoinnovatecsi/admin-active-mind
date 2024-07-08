import { useDispatch, useSelector } from "react-redux"
import { ActiveMainIcon, LogoutIcon } from "../Icons/Svgs"
import { useState } from "react"
import { logout } from "../store/slices/admin.slice"


const MainContainer = ({children}) => {
  const dispatch = useDispatch()
  const admin = useSelector((store) => store.admin)
  const [isLogged, setIsLogged] = useState(admin.token === ""? false: true)

  const handleLogout = () => {
    setIsLogged(false)
    dispatch(logout())
  }

  return (
    <section className="w-full h-screen grid place-items-center bg-secondary">
        <nav className="h-16 w-full bg-primary place-self-start flex justify-between items-center pl-4">
          <ActiveMainIcon/>
          {isLogged? 
          <button onClick={handleLogout} className="bg-white text-alternative-primary rounded-full p-2 mx-4 font-semibold">
            <LogoutIcon/>
          </button>
          : ""}
        </nav>
        {children}
        <footer className="bg-dark w-full h-12 place-self-end grid place-items-center">
          <h1 className="text-white">Todos los derechos reservados</h1>
        </footer>
    </section>
  )
}
export default MainContainer

