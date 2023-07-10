// import React, { useRef } from 'react';
// import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
// import './Popular.css'; 
// import { clients } from '../constants'; 

// const Popular = () => {
//   const scrollWrapperRef = useRef(null); 

//   const scrollImages = (scrollAmount) => {
//     if (scrollWrapperRef.current) {
//       const scrollContainer = scrollWrapperRef.current;
//       scrollContainer.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const cards = clients.map((client) => (
//     <div
//       key={client.id} 
//       image={client.logo} 
//     {/* //   title={card.title}
//     //   rate={card.rate}
//     //   download={card.download} */} 
//     />  
//   ));

//   return (
//    <div className='BigSection'>
//     <div className='SmallSection'>
//         <SectionWrapper >
//         <SectionHeader >
//             <span>
//             Featured <span className="section2">Games</span>
//             </span>
//         </SectionHeader>
//         <div className="scroll-container" ref={scrollWrapperRef}>
//             <div className="scroll-wrapper">{cards}</div>
//         </div>
//         <button onClick={() => scrollImages(-300)}><FaAngleLeft/></button>
//         <button onClick={() => scrollImages(300)}><FaAngleRight/></button>
//         </SectionWrapper>
//     </div>
//     <div className="section3">
//         <TopDownloaded/>
        
//     </div>
//    </div>
//   );
// };

// export default Popular;