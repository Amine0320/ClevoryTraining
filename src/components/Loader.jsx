// import React, { useState, useEffect } from "react";

// const Loader = () => {
//   const [load, updateLoad] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       updateLoad(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   return <div>{load ? "Loading..." : "Content Loaded"}</div>;
// };

// export default Loader; 
