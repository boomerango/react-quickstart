import { useState } from 'react';

export default function Toggle(props) {
  const [isHidden, setIsHidden] = useState(false);

  const showHide = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <h2>Toggle component</h2>

      <p><i>A simple functional component.</i></p>

      <button onClick={showHide}>Toggle</button>

      <p>{!isHidden && props.text}</p>
    </>
  );
}
