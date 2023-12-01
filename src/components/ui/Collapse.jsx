import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import PropTypes from 'prop-types'



export const Collapse = ({ course }) => {
  const { dispatch} = useContext(DataContext)

  return (
      <div className="collapse bg-base-site"> 
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-background text-primary text-lg peer-checked:bg-primary peer-checked:text-background hover:bg-primary hover:text-secondary"
        onClick={()=> dispatch({type: 'SET_COURSE', payload: course})}>
          {course.name}
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:text-secondary">
            <div>
              {course.assignments.map((exercise, index) => (
                <span
                  key={index}
                  className={`block px-4 py-2 text-background hover:text-secondary hover:bg-background rounded-lg cursor-pointer`}
                  onClick={() => {
                    dispatch({type: 'SET_COURSE', payload: course})
                    dispatch({type: 'SET_EXERCISE', payload: exercise})
                    console.log(exercise) 
                  }
                  }
                >
                  {exercise.name}
                </span>
              ))}
            </div>
        </div>
      </div>
    
  )
}

Collapse.propTypes = {
  course: PropTypes.object,
  exercises: PropTypes.array,
}