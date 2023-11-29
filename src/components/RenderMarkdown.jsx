import { MathComponent } from "mathjax-react";
import PropTypes from "prop-types";

const LatexRenderer = ({ value }) => {
    const parts  = value.split('$');
    return (
      <div>
        {parts.map((part, index) => {
          if (index % 2 === 0) {
            return <span key={index}>{part}</span>;
          } else {
            return <MathComponent key={index} tex={part} />;
          }
        })}
      </div>
    );
};

LatexRenderer.propTypes = {
  value: PropTypes.string.isRequired,
};

export default LatexRenderer;
