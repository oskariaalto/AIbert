import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { ChooseCourse } from '../../forms/ChooseCourse'

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Link to="/" className='text-secondary inline-flex justify-end absolute bottom-6 right-3 rounded-full hover:bg-secondary hover:text-primary p-6'>
        <GiPlagueDoctorProfile className='text-6xl'/>
      </Link>
        <div className="inline-flex justify-end absolute top-4 left-3 p-6">
          <button className="text-secondary" onClick={() => navigate(-1)}>
            <BsArrowReturnLeft className='text-4xl' />
          </button>
        </div>
      <div className='inline-flex justify-end absolute end-1/4 top-8 p-3'>
        <ChooseCourse  courses={[{name: "Linis"}]}/>
      </div>
    </>
  )
}

NavBar.propTypes = {
  setChatView: PropTypes.func,
  setHistoryView: PropTypes.func,
}

export default NavBar;

