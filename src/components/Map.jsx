import React from 'react'; 
import styles from '../style'; 
const Map = () => {  
  return (
    <div>
     <h2 className={`${styles.heading2} Titre2 `}>
       Map <br className="sm:block hidden" /> 
      </h2> 
      <div style={{ height: '400px', width: '100%' , marginTop: '100px' , marginBottom: '100px' , borderRadius:'200px' }}> 
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
