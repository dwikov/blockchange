import styles from './Petition.module.css'
import Link from 'next/link'

interface Props{
  id:string,
  image:string,
  info:string,
  name:string,
}

const petition= ({ id, image, info, name}:Props) => {

  const PartInfo = info.substring(0, 200);

    return (  
      <>
        <article className={styles.singlePetition}>

        <div className={styles.imgParent}>

        <img src={image} alt={name} className={styles.singlePetitionImg}  />
        </div>

        <footer>
          <div className={styles.PetitionName}>
            <h4>{name}</h4>  
          </div>

          <p className={styles.singlePetitionInfo}>
          {`${PartInfo}...`}
       
          </p>
          <button className={styles.interestBtn} >
         
         <Link href={{
         pathname: `/petitionPage/${id}`,
         query: { id, image, info, name}, 
        }} >
         Read More
        </Link>

         </button>
        </footer>
       </article>
      </>
    
    );
}
 
export default petition;