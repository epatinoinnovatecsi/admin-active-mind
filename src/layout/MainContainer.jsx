import { ActiveMainIcon } from "../Icons/Svgs"


const MainContainer = ({children}) => {
  return (
    <section className="w-full h-screen grid place-items-center bg-secondary">
        <nav className="h-16 w-full bg-primary place-self-start grid items-center pl-4">
          <ActiveMainIcon/>
        </nav>
        {children}
        <footer className="bg-dark w-full h-12 place-self-end grid place-items-center">
          <h1 className="text-white">Todos los derechos reservados</h1>
        </footer>
    </section>
  )
}
export default MainContainer

