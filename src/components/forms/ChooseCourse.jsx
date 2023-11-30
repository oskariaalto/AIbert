import { Collapse } from "../ui/Collapse"
import { DropDown } from "../ui/dropdowns/DropDown"
import PropTypes from 'prop-types'
import { useContext, useState } from "react"
import { DataContext } from "../../context/DataContext"

export const ChooseCourse = ({ courses, exercises }) => {

  const { setCourse, setExercise, course, exercise } = useContext(DataContext)
  const chooseTitle = () => {
    if (course === null) {
      return("Courses & Exercises")
    } else if (exercise === null) {
      return(`${course.name}`)
    } else {
      return(`${course.name}: ${exercise.name}`)
    }
  }
  
  return (
    <DropDown id='coursePicker' label={chooseTitle()}>
      <div className="space-y-2"> 
        <div className="collapse-title bg-background text-secondary text-xl peer-checked:bg-secondary peer-checked:text-secondary-content hover:text-secondary">
          <button onClick={() => { setCourse(null); setExercise(null); }}>
            None
          </button>
        </div>
          {courses.map((course, index) => (
            <Collapse key={index} exercises={exercises} course={course}/>
        ))}
      </div> 
    </DropDown>
  )
}

/*
<div className="space-y-2">
          {courses.map((course, index) => (
            <span
              key={index}
              className={`block px-4 py-2 hover:text-background hover:border hover:bg-primary rounded-lg cursor-pointer`}
              onClick={() => {
              }
            } 
          >
            {course.name}
          </span>
        ))}
      </div> 
*/

export const ChooseExercise = ({exercises, handleclick, setExercise}) => {
  return(
    <DropDown id = 'exercisePicker' label="Exercise" exercises={exercises}>
      <div className="space-y-2">
        {exercises.map((exercise, index) => (
          <span
            key={index}
            className={`block px-4 py-2 hover:text-secondary rounded-lg cursor-pointer`}
            onClick={() => {
              setExercise(exercise)
              handleclick()
              }
            }
          >
            {exercise.name}
          </span>
        ))}
      </div> 
    </DropDown>
  )
}

ChooseCourse.propTypes = {
  courses: PropTypes.array,
  handleclick: PropTypes.func,
  setCourse: PropTypes.func,
  chosenCourse: PropTypes.string
}

ChooseExercise.propTypes = {
  exercises: PropTypes.array,
  handleclick: PropTypes.func,
  setExercise: PropTypes.func
}