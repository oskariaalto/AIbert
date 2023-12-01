import { Collapse } from "../ui/Collapse"
import { DropDown } from "../ui/dropdowns/DropDown"
import PropTypes from 'prop-types'
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

export const ChooseCourse = () => {

  const { state } = useContext(DataContext)
  const chooseTitle = () => {
    if (state.course === null) {
      return("Courses & Exercises")
    } else if (state.exercise === null) {
      return(`${state.course.name}`)
    } else {
      return(`${state.course.name}: ${state.exercise.name}`)
    }
  }
  console.log(state)
  return (
    <DropDown id='coursePicker' label={chooseTitle()}>
      <div className="space-y-2"> 
          {state.user.userCourses.map((course, index) => (
            <Collapse key={index} course={course.course}/>
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