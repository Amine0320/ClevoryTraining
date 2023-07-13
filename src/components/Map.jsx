import React from 'react'; 
const Map = () => {  
  return (
    <div>
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
