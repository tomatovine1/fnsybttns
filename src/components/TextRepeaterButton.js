import { useState } from 'react'; 

function TextRepeaterButton(props){
  const [repetitions, setRepetitions] = useState(1);
  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>{' * '}</span>);
  }
  const handlingIt = () => {
    setRepetitions(repetitions + 1)
  }
  return (
    <button onClick={handlingIt} className="TextRepeaterButton">
      {textArray}
    </button>
  );
}

export default TextRepeaterButton;