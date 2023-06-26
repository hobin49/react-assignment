import React, { useState } from 'react';
import styles from "../styles/InputName.module.css";


const InputName = () => {
  const [name, setName] = useState('');
  const [isEntered, setIsEntered] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsEntered(true);
    }
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }
  return (
    <div>
    {!isEntered && <input id="name" value={name} onChange={handleChange} onKeyPress={handleKeyPress} className={styles.input}/>}
    {isEntered && <div id="content" className={styles.name}>Hello {name}</div>}
  </div>
  )
}

export default InputName
