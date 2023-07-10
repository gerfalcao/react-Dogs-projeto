import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error'
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({photo, setModalPhoto}) => {
  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    
    async function fetchPhoto() {
     
      const {url, options} = PHOTO_GET(photo.id)
      const { response, json } = await request(url, options)
      console.log(response)
      console.log(json)
       }
     fetchPhoto();
    console.log(photo)
   
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent dat={data}/>}
      
    </div>
  )
}

export default FeedModal