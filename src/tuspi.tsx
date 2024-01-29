import React, { useState } from "react";

const Tuspi = () => {
  const [letDown, setLetDown] = useState(false);
  const handleClick = () => {
    setLetDown(!letDown);
  };
  return (
    <>
      <div>tuspi</div>
      <button onClick={handleClick}>Hide something</button>
      {letDown && <h1>Peep-a-boo!!</h1>}
    </>
  );
};

export default Tuspi;
