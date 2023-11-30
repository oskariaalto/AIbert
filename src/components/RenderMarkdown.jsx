import { MathJax, MathJaxContext } from 'better-react-mathjax';
import PropTypes from 'prop-types';

const MathJaxComponent = ({ content }) => {
  const config = {
    loader: { load: ['input/asciimath', 'output/svg'] },
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      processEnvironments: true,
    }
  };

  return (
    <MathJaxContext config={config}>
      <MathJax dynamic>
          {content}
      </MathJax>
    </MathJaxContext>
  );
}

MathJaxComponent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MathJaxComponent;
