import { useContext, useState } from "react"
import { DataContext } from "../../context/DataContext"



export const Collapse = ({ course, exercises }) => {
  const { setExercise, setCourse} = useContext(DataContext)


  return (
      <div className="collapse bg-base-site"> 
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-background text-primary text-xl peer-checked:bg-primary peer-checked:text-background hover:bg-primary hover:text-secondary">
          {course.name}
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:text-secondary">
            <div>
              <span
              className={`block px-4 py-2 text-background hover:text-secondary hover:bg-background rounded-lg cursor-pointer`}
              onClick={() => { 
                setExercise(null)
                setCourse(course)
              }} 
              >
                None
              </span>
              {exercises.map((exercise, index) => (
                <span
                  key={index}
                  className={`block px-4 py-2 text-background hover:text-secondary hover:bg-background rounded-lg cursor-pointer`}
                  onClick={() => {
                    setExercise(exercise)
                    setCourse(course)
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