import PropTypes from 'prop-types'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { DataContext } from '../../../context/DataContext';
import { ChooseCourse } from '../../forms/ChooseCourse'
import { useContext } from 'react';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const {setShowHome, setShowChat, setShowHints} = useContext(DataContext)

  return (
    <div className='relative'>
      <Link to="/" className='text-secondary inline-flex justify-end absolute bottom-6 right-3 rounded-full hover:bg-secondary hover:text-primary p-6'>
        <GiPlagueDoctorProfile className='text-6xl'/>
      </Link>
      <div className="inline-flex justify-end absolute top-4 left-3 p-6">
        <button className="text-secondary" onClick={() => {
            setShowChat(false)
            setShowHints(false)
            setShowHome(true)
            setTimeout(() => {
              navigate('/')
            }, 500)
          }
        }>
            <BsArrowReturnLeft className='text-4xl' />
          </button>
      </div>
      <div className='w-full flex'>
        <div className='flex-inline justify-end absolute start-1/4 top-7 p-3'>
          <button
            className={`cursor-pointer text-xl py-1.5 px-3 rounded-lg text-secondary hover:text-primary hover:bg-secondary`}
            onClick={() => {
              if (location.pathname === "/") {
                setShowHome(false)
                setShowHints(true)
                setTimeout(() => {
                  navigate('/hints')
                }, 500)
              } else if (location.pathname === "/chat") {
                setShowChat(false)
                setShowHints(true)
                setTimeout(() => {
                  navigate('/hints')
                }, 500)
              } else if (location.pathname === "/hints") {
                setShowHints(false)
                setShowChat(true)
                setTimeout(() => {
                  navigate('/chat')
                }, 500)
              }
            }}
          >
            {location.pathname === "/hints" ? "Chat" : "Hints"}
          </button>
        </div>
  <div className='flex-inline justify-end absolute start-2/4 top-8 p-3'>
          <ChooseCourse />
          </div>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  setChatView: PropTypes.func,
  setHistoryView: PropTypes.func,
}

export default NavBar;

