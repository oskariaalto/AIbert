import { TextInput } from "./forms/TextInput";
import { Transition } from "@headlessui/react"
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Home = () => {

  const { showHome } = useContext(DataContext)
  return (
    <div className="w-full bg-site min-h-screen flex justify-center">
      <Transition
      as="div"
      appear={true}
      show={showHome}
      enter="transition-transform duration-500 transform ease-in-out"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform duration-500 transform ease-in-out"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
      className="w-full my-32 "
      >
        <div className='container w-3/4 mx-auto p-4'>
          <div className="flex flex-col items-center text-8xl font-bold my-7  text-secondary drop-shadow-2xl">
            AIbert
          </div>
          <div className="text-2xl text-secondary flex flex-col items-center my-2">
            How can I help you?
          </div>
          <div className='w-full'>
            <TextInput placeholder='Ask AIbert...'/>
          </div>
        </div>
      </Transition>
    </div>

  )
}


export default Home;