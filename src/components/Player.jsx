import { useState } from "react";

export default function Player() {
  const [name, setName] = useState('')
  const [submit, setSubmit] = useState(false)

  function handleOnChange(event){
    setSubmit(false);
    setName(event.target.value);
  }

  function handleOnClick(){
    setSubmit(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submit ? name : 'unknown entity'}</h2>
      <p>
        <input type="text" value={name} onChange={handleOnChange} />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
