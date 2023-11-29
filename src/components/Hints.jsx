import LatexRenderer from "./RenderMarkdown";
import { useState } from "react";

const data  ="1. Start by understanding the problem. We want to maximize the function $f(x, y)=x y^{2}$ and we have a constraint, the circular cross-section of the log. \n\n2. To describe this section, we can use the formula of a circle, $x^{2} + y^{2} = R^{2}$, where x and y are radius of the circle, and R is the diameter.\n\n3. Remember that x is the width of the beam, y is the height of the beam, and R is the radius of the log from which we are making the beam.\n\n4. Observe that this is an optimization problem with constraints. The objective is to maximize f(x, y) and the constraint is the formula of the circle.\n\n5. The first thought might be to use the method of substitution. However, this might lead to a complicated polynomial equation. Instead, consider using the method of Lagrange multipliers.\n\n6. The Lagrange multiplier λ is the ratio of the rate of change of the objective to the rate of change of the constraint.\n\n7. The formula for the Lagrange multiplier is: λ = ∇f / ∇g, where ∇f is the gradient of f (objective function) and ∇g is the gradient of g (constraint).\n\n8. Set up the Lagrange function, which is L(x, y, λ) = f(x, y) - λg(x, y), where g(x, y) = 0 is the constraint: $L(x, y, λ) = x y^{2} - λ(x^{2} + y^{2} - R^{2})$.\n\n9. To find the maximum and minimum, take the derivative of L w.r.t x, y and λ, and set each equal to zero.\n\n10. This will give you a system of three equations. Solve this system to find the values of x, y and λ.\n\n11. Validate the solution by evaluating the second derivative of L w.r.t x, y and λ.\n\n12. Finally compare the solutions, remember the dimensions (x, y) you obtain need to make physical sense, i.e. x, y>=0.\n\n13. Remember to get the value of f(x, y) using these dimensions, as we want to maximize this function.\n\n14. Check that the sizes of the cut out plank (x and y) are not larger than the diameter of the round log.\n"
const Hints = () => {
  const [hintCount, setHintCount] = useState(2)
    return (
      <div className='w-full bg-site min-h-screen flex justify-center shadow-2xl'>
      <div className="w-3/4 my-20 ">
        <div className='container mx-auto p-4 h-full'>
          <div className="card bg-background text-primary p-3">
            <div className="card-title pl-4">
              Hints for Exercise 1.1
            </div>
            <div className="card-body">
              {data.split('\n\n').slice(0,hintCount).map((item, i) => <LatexRenderer key={i} value={item} />)}
            </div>
            <div className="card-actions flex justify-end pr-7">
              <button className="py-2 px-3 rounded-xl font-bold text-secondary hover:text-primary hover:bg-secondary" onClick={()=>setHintCount(hintCount+1)}>Next Hint</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )  
}


export default Hints;