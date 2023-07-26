import React from 'react'; 
import styles from '../../style'; 
const Map = () => {  
  return (
    <div>
     <h2 className={`${styles.heading2} Titre2`}>
        Lieu 
      </h2> 
      <div style={{ height: '400px', width: '100%' , marginBottom: '100px' , borderRadius:'200px' }}> 
        <iframe
          title="Clevory Training Map"
          src={`https://maps.google.com/maps?q=Clevory+Training,+Charguia+1&z=15&output=embed`} 
          height="100%"
          width="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe> 
      </div>
    </div> 
  );
}; 
export default Map;
