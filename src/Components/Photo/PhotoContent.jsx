import React from 'react'
import styles from './PhotoContent.module.css'

const PhotoContent = ({dat}) => {
  const { photo, comments } = dat;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        {/* <img src={photo.src} alt={photo.title} /> */}
        {console.log(dat)}
      </div>
    </div>
  )
}

export default PhotoContent