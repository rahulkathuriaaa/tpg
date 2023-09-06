import React,{useEffect,useState} from 'react'
// import Confetti from './Confetti';

import ReactConfetti from 'react-confetti';

// const Confetti = () => {
//   const [windowDimension,setDimension] = useState({width : window.innerWidth,height : window.innerHeight});

//   const [Btn,setBtn] = useState(false);


//   const detectSize = () => {
//       setDimension({width : window.innerWidth,height : window.innerHeight});
//   }
//   useEffect(() => {
//       window.addEventListner('resize',detectSize);
//       return () => {
//           window.removeEventListener('resize',detectSize);
//       }
//   },[windowDimension]);
//   return(
//       <>
//         {Btn && <ReactConfetti width =   {windowDimension.width}
//             height = {windowDimension.height} tweenDuration = {500} 
//         />}

//       </> 
//   )
// }

const NFT = () => {
  const [windowDimension,setDimension] = useState({width : window.innerWidth,height : window.innerHeight});

  const [Btn,setBtn] = useState(false);
  const detectSize = () => {
    setDimension({width : window.innerWidth,height : window.innerHeight});
  }
  useEffect(() => {
      window.addEventListener('resize',detectSize);
      return () => {
          window.removeEventListener('resize',detectSize);
      }
  },[windowDimension]);
  return (
    // <>
    //   <div>
    //     <h1 className="feature-h1">Congratulations 🥳</h1>
    //   </div>
    //   <div className='container w-50' >
    //     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white " >
    //       <img src="/nft.png" alt="" />
    //       <div className="px-24 py-4">
    //         <a href="#" className='px-[50px] py-2 bg-[#8A42D8] text-white rounded-xl no-underline font-semibold'>Claim Now</a>
    //       </div>
    //     </div>
    //   </div>
          
    // </>
  

    <div className='out'>
    {/* <div className='bg-[#00040f]'> */}
      

       <div>
          <h1 className="feature-h1 py-8">Congratulations 🥳</h1>
        </div>
        {/* <div className='absolute z-[0] w-[40%] h-[35%] top-[20] pink__gradient'/> */}
        {/* <div className='bg-white'/> */}

        <div className='container '>
          <div className='card'>
            {/* <div className='bg-white'/> */}
            {/* <div className='blue-glassmorphism z-0'/> */}
            <div className='content'>
              <img src="/nft2.png" alt="" />
              {/* <div className='bg-white'/> */}
              {/* <div className='pink__gradient z-0'/> */}
            </div>


          </div>

        </div>
      <div className='flex items-center justify-center py-11'>
       <a href="#" className='px-11 py-4 bg-[#9966CC] text-white rounded-xl no-underline font-semibold' onClick={() => setBtn(!Btn)}>Claim Now</a>

      </div>
      {Btn && <ReactConfetti width =   {windowDimension.width}
          height = {windowDimension.height} tweenDuration = {500} 
      />}

    </div>
  )
}

export default NFT
