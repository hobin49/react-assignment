import React, { useState, useEffect } from 'react'
import img01 from "../images/배경1.png"
import img02 from "../images/배경2.png"
import img03 from "../images/배경3.png"
import img04 from "../images/배경4.png"
import styles from "../styles/Background.module.css"

function Background() {
  const images = [img01, img02, img03, img04];
  const [index, setIndex] = useState(0);

  useEffect (() => {
    let imgIndex = Math.floor(Math.random() * images.length);
    setIndex(imgIndex);
  }, [])


  console.log(images[index]);
  const divStyle = {
    backgroundImage: `url(${images[index]})`
  };


  return (
    <>
      <div style={divStyle} className={styles.background}></div>
    </>
  )
}

export default Background
