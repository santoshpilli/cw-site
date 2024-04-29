// import React from 'react';
// import Image from 'next/image';

// const ManagementCard = (data) => {
//     return (


//         <div className="flex flex-wrap justify-center  ">
//             <div className="max-w-[340px] transition-all duration-300 ease-in-out hover:shadow-md hover:rotate-1   lg:w-[23%] md:w-[30%] sm:w-[45%] mx-[9px] my-5 bg-[#FFF3EA] rounded-[16px]">
//                 <div className="p-5 flex flex-col justify-between h-full ">
//                     <h1 className="xl:text-[26px] text-xl max-w-[280px] font-bold leading-[110%] mt-1 ">
//                         {data.content.title}
//                     </h1>
//                     <div>
//                         <p className="mt-6 xl-text-sm  text-base  text-lightgrey pb-3 md:pb-6  ">
//                             {data.content.subtitle}

//                         </p>
//                         <div className="my-1">
//                             {/* <Image
//                                 className="mx-auto"
//                                 src={"/images/automated scheduling.png"}
//                                 width={152}
//                                 height={110}
//                                 alt={"img"}
//                             /> */}
//                             <Image
//                                 className="mx-auto"
//                                 src={"/images/availability tracking.png"}
//                                 width={152}
//                                 height={110}
//                                 alt={"img"}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="max-w-[340px] transition-all duration-300 ease-in-out hover:shadow-md hover:rotate-1   lg:w-[23%] md:w-[30%] sm:w-[45%] mx-[9px] my-5 bg-[#FFF3EA] rounded-[16px]">
//                 <div className="p-5 flex flex-col justify-between h-full ">
//                     <h1 className="xl:text-[26px] text-xl max-w-[280px] font-bold leading-[110%] mt-1 ">
//                         {card.heading}
//                     </h1>
//                     <div>
//                         <p className="mt-6 xl-text-sm  text-base  text-lightgrey pb-3 md:pb-6  ">
//                             {card.description}

//                         </p>
//                         <div className="my-1">
//                             <Image
//                                 className="mx-auto"
//                                 src={"/images/availability tracking.png"}
//                                 width={152}
//                                 height={110}
//                                 alt={"img"}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="max-w-[340px] transition-all duration-300 ease-in-out hover:shadow-md hover:rotate-1   lg:w-[23%] md:w-[30%] sm:w-[45%] mx-[9px] my-5 bg-[#CBD1E5] rounded-[16px]">
//                 <div className="p-5 flex flex-col justify-between h-full ">
//                     <h1 className="xl:text-[26px] text-xl max-w-[280px] font-bold leading-[110%] mt-1 ">
//                         {card.heading}
//                     </h1>
//                     <div>
//                         <p className="mt-6 xl-text-sm  text-base  text-lightgrey pb-3 md:pb-4 ">
//                             {card.description}

//                         </p>
//                         <div className="my-1">
//                             <Image
//                                 className="mx-auto"
//                                 src={"/images/shift swap.png"}
//                                 width={152}
//                                 height={110}
//                                 alt={"img"}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="max-w-[340px] transition-all duration-300 ease-in-out hover:shadow-md hover:rotate-1   lg:w-[23%] md:w-[30%] sm:w-[45%] mx-[9px] my-5 bg-[#BEE1E6] rounded-[16px]">
//                 <div className="p-5 flex flex-col justify-between h-full ">
//                     <h1 className="xl:text-[26px] text-xl max-w-[280px] font-bold leading-[110%] mt-1 ">
//                         {card.heading}
//                     </h1>
//                     <div>
//                         <p className="mt-6 xl-text-sm  text-base  text-lightgrey pb-3 ">
//                             {card.description}
//                         </p>
//                         <div className="my-1">
//                             <Image
//                                 className="mx-auto"
//                                 src={"/images/time tracking.png"}
//                                 width={122}
//                                 height={80}
//                                 alt={"img"}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>


//     );
// };

// const FourCardSection = () => {
//     return (
//         <div className="max-w-[1280px] mx-auto sm:mt-[70px] mt-[30px] px-4 xl:px-5 px-md-5 ">
//             <div className="px-[9px] management-bg-img">
//                 <h1 className="leading-[115%] xl:text-3xl sm:text-2xl text-xl font-bold text-darkBlack pt-8 mx-2  ">
//                     {card.heading}
//                 </h1>
//                 <p className="my-6 sm:text-[20px] text-sm text-lightgrey leading-[130%] pt-8 mx-2">
//                     {card.description}
//                 </p>
//                 <div className="flex flex-wrap">
//                     <ManagementCard />
//                 </div>
//             </div>
//             <div className="flex flex-wrap justify-center  ">
//                 {/* Other management cards go here */}
//             </div>
//         </div>
//     );
// };

// export default FourCardSection;

import React from 'react';
import Image from 'next/image';

const ManagementCard = ({ card }) => {
    console.log("card==========>", card)
    return (
        <div className="max-w-[340px] h-90 transition-all duration-300 ease-in-out hover:shadow-md hover:rotate-1 lg:w-[23%] md:w-[30%] sm:w-[45%] mx-[9px] my-5 bg-[${card.styles.backgroundColor}] rounded-[16px]" style={{ backgroundColor: card.styles.backgroundColor, backgroundImage: card.styles.backgroundImage }}>
            <div className="p-5 flex flex-col justify-between h-full ">
                <h1 className="xl:text-[26px] text-xl max-w-[280px] font-bold leading-[110%] mt-1 ">
                    {card.heading}
                </h1>
                <div>
                    <p className="mt-6 xl-text-sm  text-base  text-lightgrey pb-3 md:pb-6  ">
                        {card.description}
                    </p>
                    <div className="my-1">
                        <Image
                            className="mx-auto"
                            src={card.url}
                            width={152}
                            height={110}
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const FourCardSection = ({ data }) => {
    const { title, subtitle, cards } = data.content;
    return (
        <div className="max-w-[1280px] mx-auto sm:mt-[70px] mt-[30px] px-4 xl:px-5 px-md-5 " >
            <div className="px-[9px] management-bg-img">


                <h1 className="leading-[115%] xl:text-3xl sm:text-2xl text-xl font-bold text-darkBlack pt-8 mx-2  ">
                    {title}
                </h1>
                <p className="my-6 sm:text-[20px] text-sm text-lightgrey leading-[130%] pt-8 mx-2">
                    {subtitle}
                </p>
                <div className="flex flex-wrap">
                    {cards.map((card, index) => (
                        <ManagementCard key={index} card={card} />
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center  ">
                {/* Other management cards go here */}
            </div>
        </div>
    );
};

export default FourCardSection;



