// import React from 'react'
// import Image from "next/image";

// const CardMergeSection = (data) => {
//     console.log("data==========>", data)
//     return (
//         <section className="bg-skyblue z-0 py-12 lg:py-20">
//             <div className="container mx-auto px-3">
//                 <div className="flex justify-center">
//                     <h2 className="ff-Inter font-bold leading-[35px] sm:leading-[45px]  3xl:leading-[64px] mx-[5px] sm:mx-0 md:leading-[50px] text-xl sm:text-3xl  3xl:text-[48px] text-darkBlack max-w-[427px] sm:max-w-[725px] text-center">
//                         Tailored Tech for Fashion
//                     </h2>
//                 </div>
//                 <div className="flex justify-center mt-[15px] ">
//                     <p className="ff-inter font-normal text-md  text-lightgrey max-w-[779px] text-center">
//                         Experience solutions designed specifically for the dynamic needs of fashion retail.
//                     </p>
//                 </div>
//                 <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[30px] mt-[25px] sm:mt-[40px] 3xl:mt-[79px] pb-[40px] sm:pb-[40px] 3xl:pb-[98px]">
//                     <div className="bg-[#DBECE5] rounded-[16px] z-0 hover:scale-105  transition-all  ease-in hover:duration-200  relative">
//                         <div className="pt-[25px] sm:pt-7  pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px]">
//                             <svg
//                                 className="hidden lg:block"
//                                 width="83"
//                                 height="83"
//                                 viewBox="0 0 83 83"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M82.9998 41.5001L71.7655 30.2656C71.4509 29.951 71.1248 29.6522 70.7894 29.3676C70.8257 28.9308 70.8449 28.4893 70.8449 28.0433V12.1552H54.9569C54.5091 12.1552 54.0658 12.1748 53.6274 12.2113C53.3444 11.8773 53.0496 11.5497 52.7346 11.2346L41.5001 0L30.2656 11.2345C29.951 11.5491 29.6522 11.8752 29.3674 12.2106C28.9306 12.1745 28.4891 12.1551 28.0431 12.1551H12.1552V28.0431C12.1552 28.4891 12.1747 28.9306 12.2108 29.3674C11.8753 29.652 11.5492 29.9509 11.2346 30.2654L0 41.5001L11.2345 52.7346C11.5491 53.0492 11.8752 53.348 12.2108 53.6328C12.1745 54.0696 12.1552 54.511 12.1552 54.9571V70.8451H28.0433C28.4911 70.8451 28.9343 70.8255 29.3729 70.789C29.6559 71.1232 29.9507 71.4506 30.2658 71.7657L41.5002 83.0002L52.7347 71.7657C53.0498 71.4506 53.3444 71.1232 53.6276 70.789C54.0661 70.8255 54.5093 70.8451 54.9571 70.8451H70.8451V54.9569C70.8451 54.5109 70.8257 54.0694 70.7894 53.6325C71.1248 53.3479 71.4509 53.049 71.7655 52.7344L82.9998 41.5001ZM54.9569 39.069H47.3692L52.7346 33.7036C54.8172 31.6212 57.5859 30.4742 60.5309 30.4742C62.2444 30.4742 63.8971 30.8649 65.3907 31.5998C63.9076 35.9389 59.7923 39.069 54.9569 39.069ZM65.3909 51.4002C63.8973 52.1351 62.2446 52.5258 60.531 52.5258C57.5859 52.5258 54.8172 51.3788 52.7347 49.2964L47.3693 43.931H54.9571C59.7923 43.9312 63.9075 47.0611 65.3909 51.4002ZM51.3952 65.3891C47.0587 63.9044 43.9312 59.7904 43.9312 54.9569V47.369L49.2965 52.7344C52.7141 56.1522 53.4117 61.2728 51.3952 65.3891ZM31.605 65.3891C29.5885 61.2728 30.286 56.1522 33.7036 52.7346L39.069 47.3692V54.9571C39.069 59.7904 35.9415 63.9044 31.605 65.3891ZM28.0431 43.9312H35.631L30.2656 49.2965C28.183 51.379 25.4141 52.526 22.4691 52.526C20.7556 52.526 19.1031 52.1352 17.6094 51.4004C19.0927 47.0611 23.2079 43.9312 28.0431 43.9312ZM17.6093 31.5998C19.1029 30.8649 20.7556 30.4742 22.4691 30.4742C25.4141 30.4742 28.183 31.6212 30.2656 33.7036L35.631 39.069H28.0431C23.2079 39.069 19.0925 35.9389 17.6093 31.5998ZM30.4742 22.4691C30.4742 20.7556 30.8649 19.1031 31.5998 17.6093C35.9389 19.0925 39.0688 23.2077 39.0688 28.0431V35.631L33.7035 30.2656C31.6212 28.183 30.4742 25.4141 30.4742 22.4691ZM51.3952 17.611C53.4117 21.7273 52.7141 26.8478 49.2965 30.2656L43.9312 35.631V28.0431C43.9312 23.2096 47.0587 19.0958 51.3952 17.611ZM65.9828 17.0174V26.5687C64.259 25.9406 62.4203 25.612 60.5309 25.612C59.321 25.612 58.1319 25.7469 56.9804 26.0085C57.6552 23.0343 57.4684 19.9039 56.4186 17.0174H65.9828ZM41.5001 6.87622L48.2612 13.6372C45.4751 14.9375 43.1261 17.0224 41.5001 19.6065C39.8742 17.0222 37.5253 14.9373 34.7391 13.6372L41.5001 6.87622ZM17.0174 17.0174H26.5687C25.9405 18.7412 25.6122 20.5799 25.6122 22.4691C25.6122 23.6738 25.7457 24.8581 26.0051 26.0051C24.8581 25.7456 23.674 25.612 22.4691 25.612C20.5799 25.612 18.7412 25.9404 17.0174 26.5687V17.0174ZM6.87622 41.5001L13.6372 34.7391C14.9375 37.5253 17.0224 39.8742 19.6065 41.5001C17.0222 43.126 14.9373 45.4749 13.6372 48.2611L6.87622 41.5001ZM17.0174 65.9828V56.4314C18.7412 57.0596 20.5799 57.388 22.4691 57.388C23.679 57.388 24.8681 57.2531 26.0198 56.9916C25.3449 59.9657 25.5318 63.0963 26.5817 65.9828H17.0174ZM41.5001 76.1238L34.7391 69.3628C37.5253 68.0625 39.8742 65.9776 41.5001 63.3934C43.126 65.9776 45.4749 68.0625 48.2612 69.3628L41.5001 76.1238ZM65.9828 65.9828H56.4185C57.4682 63.0963 57.6552 59.9659 56.9804 56.9916C58.1319 57.2531 59.321 57.388 60.5309 57.388C62.4203 57.388 64.259 57.0596 65.9828 56.4313V65.9828ZM63.3935 41.5001C65.9778 39.8742 68.0627 37.5253 69.363 34.7391L76.1239 41.5001L69.363 48.2611C68.0627 45.4749 65.9778 43.126 63.3935 41.5001Z"
//                                     fill="white"
//                                 />
//                             </svg>

//                             <h3 className="ff-Inter font-bold text-xl text-darkBlack mt-[15px] leading-[45px] ">
//                                 Fashion-Focused POS
//                             </h3>
//                             <p className="ff-inter font-normal text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] h-[220px]">
//                                 Advanced Point of Sale systems catering to the fast-paced fashion retail environment.
//                             </p>
//                             {/* <img
//                                 className="w-full absolute left-0 px-5 -bottom-8 rounded-[20px] object-cover"
//                                 src={data.cards[0].img}
//                                 alt="  Seamless Integration"
//                             /> */}

//                             <Image
//                                 className="w-full absolute left-0 px-5 -bottom-8 rounded-[20px] object-cover"
//                                 src="/images/fashion focused.png"
//                                 width={162}
//                                 height={162}
//                                 alt="management img"
//                             />
//                         </div>
//                     </div>
//                     <div className="bg-[#D1ECFD] rounded-[16px] z-0 hover:scale-105 transition-all  ease-in hover:duration-200  relative">
//                         <div className="pt-[25px] sm:pt-7  pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px]">
//                             <svg
//                                 className="hidden lg:block"
//                                 width="83"
//                                 height="83"
//                                 viewBox="0 0 83 83"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <g clipPath="url(#clip0_1_812)">
//                                     <path
//                                         d="M60.7547 6.69755C59.2917 6.24737 54.9802 4.92067 42.2387 0.999891L41.5 0.772613L22.2454 6.69771C20.7824 6.24753 16.4711 4.92099 3.7293 1.00005L0.479004 0V83L22.2451 77.3147L41.5 82.3439L60.7547 77.3147L82.521 83V0L60.7547 6.69755ZM77.498 76.4967L63.2663 72.7793V68.9972H58.2433V72.7793L44.0115 76.4967V55.1428H38.9886V76.4967L24.7568 72.7793V54.8474H19.7339V72.7793L5.50213 76.4967V6.80097C9.60042 8.06202 16.5006 10.1853 19.7339 11.1804V12.408H24.7568V11.1804L38.9886 6.80114V42.159H44.0115V6.80114C48.1098 8.06219 55.0099 10.1853 58.2433 11.1804V27.2589H63.2663V11.1804L77.498 6.80097V76.4967Z"
//                                         fill="white"
//                                     />
//                                     <path
//                                         d="M22.3408 14.1128C17.9983 14.1128 14.4656 17.6249 14.4656 21.9415C14.4656 25.3854 16.7152 28.3149 19.8295 29.3598V37.2732H24.8524V29.3598C27.9669 28.315 30.2164 25.3856 30.2164 21.9415C30.2163 17.6247 26.6834 14.1128 22.3408 14.1128ZM22.3408 24.7473C20.7681 24.7473 19.4885 23.4885 19.4885 21.9415C19.4885 20.3945 20.7681 19.1357 22.3408 19.1357C23.9138 19.1357 25.1933 20.3945 25.1933 21.9415C25.1933 23.4885 23.9138 24.7473 22.3408 24.7473Z"
//                                         fill="white"
//                                     />
//                                     <path
//                                         d="M60.7548 29.2635C55.6722 29.2635 51.5371 33.3724 51.5371 38.4227C51.5371 42.6079 54.3777 46.1438 58.2432 47.2334V57.5901H63.2662V47.2334C67.1315 46.1438 69.9723 42.6079 69.9723 38.4227C69.9725 33.3724 65.8376 29.2635 60.7548 29.2635ZM60.7548 42.559C58.4417 42.559 56.5601 40.7034 56.5601 38.4229C56.5601 36.1422 58.4417 34.2867 60.7548 34.2867C63.0678 34.2867 64.9496 36.1422 64.9496 38.4229C64.9496 40.7034 63.068 42.559 60.7548 42.559Z"
//                                         fill="white"
//                                     />
//                                     <path
//                                         d="M24.7566 40.9473H19.7336V43.4588H24.7566V40.9473Z"
//                                         fill="white"
//                                     />
//                                     <path
//                                         d="M24.7566 47.2258H19.7336V52.2488H24.7566V47.2258Z"
//                                         fill="white"
//                                     />
//                                     <path
//                                         d="M46.0074 47.2258H40.6946V52.2488H46.0074V47.2258Z"
//                                         fill="white"
//                                     />
//                                     <path
//                                         d="M38.9249 47.2258H33.6121V52.2488H38.9249V47.2258Z"
//                                         fill="white"
//                                     />
//                                     <path
//                                         d="M31.8409 47.2258H26.5281V52.2488H31.8409V47.2258Z"
//                                         fill="white"
//                                     />
//                                     <path
//                                         d="M52.8015 47.2258H47.7786V52.2488H52.8015V47.2258Z"
//                                         fill="white"
//                                     />
//                                     <path
//                                         d="M52.8015 53.9064H47.7786V58.8799H52.8015V53.9064Z"
//                                         fill="white"
//                                     />
//                                     <path
//                                         d="M52.8015 60.5369H47.7786V65.5598H52.8015V60.5369Z"
//                                         fill="white"
//                                     />
//                                     <path
//                                         d="M57.1548 60.5369H53.8899V65.5598H57.1548V60.5369Z"
//                                         fill="white"
//                                     />
//                                     <path
//                                         d="M60.7545 60.5369H58.2429V65.5598H60.7545V60.5369Z"
//                                         fill="white"
//                                     />
//                                 </g>
//                                 <defs>
//                                     <clipPath id="clip0_1_812">
//                                         <rect width="83" height="83" fill="white" />
//                                     </clipPath>
//                                 </defs>
//                             </svg>
//                             <h3 className="ff-Inter font-bold text-xl text-darkBlack mt-[15px] leading-[45px] ">
//                                 Customer Insights
//                             </h3>
//                             <p className="ff-inter font-norma text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] h-[220px]">
//                                 Utilize our Customer Data Platform to gain insights into fashion trends and customer preferences.
//                             </p>{" "}
//                             {/* <img
//                                 className="w-full absolute left-0 px-5 -bottom-8 rounded-[20px] object-cover"
//                                 src={data.cards[0].img}
//                                 alt="  Seamless Integration"
//                             /> */}
//                             <Image
//                                 className="w-full absolute left-0 px-5 -bottom-8 rounded-[20px] object-cover"
//                                 src="/images/fashion2.png"
//                                 width={162}
//                                 height={162}
//                                 alt="management img"
//                             />
//                         </div>
//                     </div>
//                     <div className="bg-[#FFF3EA] rounded-[16px] z-0 hover:scale-105 transition-all  ease-in hover:duration-200  flex justify-center xl:justify-start relative">
//                         <div className="pt-[25px] sm:pt-7  pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px]">
//                             <svg
//                                 className="hidden lg:block"
//                                 width="83"
//                                 height="83"
//                                 viewBox="0 0 101 101"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <g clipPath="url(#clip0_1_860)">
//                                     <path
//                                         d="M66.8261 4.40408L23.2217 4.36047C18.4252 4.36047 14.5444 8.28487 14.5444 13.0814V91.5693C14.5444 96.3658 18.4252 100.29 23.2217 100.29H66.8261C71.6226 100.29 75.547 96.3658 75.547 91.5693V13.0814C75.547 8.28487 71.6226 4.40408 66.8261 4.40408ZM66.8261 82.8484H23.2217V21.8022H66.8261V82.8484Z"
//                                         fill="white"
//                                     />
//                                     <rect x="56" y="28" width="26" height="52" fill="#FFF3EA" />
//                                     <g clipPath="url(#clip1_1_860)">
//                                         <path
//                                             d="M50.6901 46.0448H52.1732C53.9807 43.5158 56.2516 41.3871 58.8655 39.7955H52.1732V36.6709H69.9699H87.7666V39.7955H81.0743C83.6882 41.3871 85.9684 43.5158 87.7666 46.0448H89.2496C91.7059 46.0448 93.6988 43.9454 93.6988 41.3578V35.1086C93.6988 32.521 91.7059 30.4216 89.2496 30.4216H50.6901C48.2338 30.4216 46.241 32.521 46.241 35.1086V41.3578C46.241 43.9454 48.2338 46.0448 50.6901 46.0448Z"
//                                             fill="white"
//                                         />
//                                     </g>
//                                     <g clipPath="url(#clip2_1_860)">
//                                         <path
//                                             d="M74.7613 66.015C74.7613 65.1721 75.3208 64.4939 76.0162 64.4939C76.7116 64.4939 77.2711 65.1721 77.2711 66.015V69.0572C77.2711 69.9001 76.7116 70.5783 76.0162 70.5783C75.3208 70.5783 74.7613 69.9001 74.7613 69.0572V66.015ZM74.7613 53.8463C74.7613 53.0034 75.3208 52.3252 76.0162 52.3252C76.7116 52.3252 77.2711 53.0034 77.2711 53.8463V60.9447C77.2711 61.7877 76.7116 62.4658 76.0162 62.4658C75.3208 62.4658 74.7613 61.7877 74.7613 60.9447V53.8463ZM58.866 44.2128C58.866 41.9755 60.364 40.1566 62.2124 40.1566H78.9443C80.79 40.1566 82.2907 41.9755 82.2907 44.2128V72.6064C82.2907 74.8468 80.79 76.6626 78.9443 76.6626H62.2124C60.364 76.6626 58.866 74.8468 58.866 72.6064V44.2128ZM61.3758 44.2128V72.6064C61.3758 73.1666 61.7501 73.6204 62.2124 73.6204H63.8855V43.1987H62.2124C61.7501 43.1987 61.3758 43.6551 61.3758 44.2128ZM68.9051 43.1987V73.6204H78.9443C79.4044 73.6204 79.7809 73.1666 79.7809 72.6064V44.2128C79.7809 43.6551 79.4044 43.1987 78.9443 43.1987H68.9051Z"
//                                             fill="white"
//                                         />
//                                     </g>
//                                 </g>
//                                 <defs>
//                                     <clipPath id="clip0_1_860">
//                                         <rect width="101" height="101" fill="white" />
//                                     </clipPath>
//                                     <clipPath id="clip1_1_860">
//                                         <rect
//                                             width="47.4578"
//                                             height="66.9277"
//                                             fill="white"
//                                             transform="matrix(1 0 0 -1 46.241 97.3494)"
//                                         />
//                                     </clipPath>
//                                     <clipPath id="clip2_1_860">
//                                         <rect
//                                             width="36.506"
//                                             height="26.7711"
//                                             fill="white"
//                                             transform="matrix(0 -1 1 0 57.1929 76.6626)"
//                                         />
//                                     </clipPath>
//                                 </defs>
//                             </svg>
//                             <h3 className="ff-Inter font-bold text-xl text-darkBlack mt-[15px] leading-[45px] ">
//                                 RFID for Inventory
//                             </h3>
//                             <p className="ff-inter font-normal text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] h-[220px] ">
//                                 Implement RFID solutions for accurate and real-time inventory management.


//                             </p>{" "}
//                             {/* <img
//                                 className="w-full absolute left-0 px-5 -bottom-8 rounded-[20px] object-cover"
//                                 src={data.cards[1].img}
//                                 alt="  Seamless Integration"
//                             /> */}
//                             <Image
//                                 className="w-full absolute left-0 px-5 -bottom-8 rounded-[20px] object-cover"
//                                 src="/images/fashion3.png"
//                                 width={162}
//                                 height={162}
//                                 alt="management img"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default CardMergeSection;

import Image from 'next/image';

function FashionSection({ data }) {
    return (
        // <section className="bg-skyblue z-0 py-12 lg:py-20">
        //     <div className="container mx-auto px-3">
        //         <div className="flex justify-center">
        //             <h2 className="ff-Inter font-bold leading-[35px] sm:leading-[45px]  3xl:leading-[64px] mx-[5px] sm:mx-0 md:leading-[50px] text-xl sm:text-3xl  3xl:text-[48px] text-darkBlack max-w-[427px] sm:max-w-[725px] text-center">
        //                 {data.content.title}
        //             </h2>
        //         </div>
        //         <div className="flex justify-center mt-[15px] ">
        //             <p className="ff-inter font-normal text-md  text-lightgrey max-w-[779px] text-center">
        //                 {data.content.subtitle}
        //             </p>
        //         </div>
        //         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[30px] mt-[25px] sm:mt-[40px] 3xl:mt-[79px] pb-[40px] sm:pb-[40px] 3xl:pb-[98px]">
        //             {data.content.cards.map((card, index) => (
        //                 <div
        //                     key={index}
        //                     className={`bg-${card.styles.backgroundColor} rounded-[16px] z-0 hover:scale-105 transition-all ease-in hover:duration-200 relative`}
        //                     style={{
        //                         maxWidth: card.styles.maxWidth,
        //                         marginTop: card.styles.marginTop,
        //                         padding: card.styles.padding,
        //                     }}
        //                 >
        //                     <div className="pt-[25px] sm:pt-7 pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px]">
        //                         <h3 className="ff-Inter font-bold text-xl text-darkBlack mt-[15px] leading-[45px]">
        //                             {card.heading}
        //                         </h3>
        //                         <p className="ff-inter font-normal text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] h-[220px]">
        //                             {card.description}
        //                         </p>
        //                         <Image
        //                             className="w-full absolute left-0 px-5 -bottom-8 rounded-[20px] object-cover"
        //                             src={card.url}
        //                             width={162}
        //                             height={162}
        //                             alt="management img"
        //                         />
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </section>
        <section className="bg-skyblue z-0 py-12 lg:py-20">
            <div className="container mx-auto px-3">
                <div className="flex justify-center">
                    <h2 className="ff-Inter font-bold leading-[35px] sm:leading-[45px] 3xl:leading-[64px] mx-[5px] sm:mx-0 md:leading-[50px] text-xl sm:text-3xl 3xl:text-[48px] text-darkBlack max-w-[427px] sm:max-w-[725px] text-center">
                        {data.content.title}
                    </h2>
                </div>
                <div className="flex justify-center mt-[15px]">
                    <p className="ff-inter font-normal text-md text-lightgrey max-w-[779px] text-center">
                        {data.content.subtitle}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[30px] mt-[25px] sm:mt-[40px] 3xl:mt-[79px] pb-[40px] sm:pb-[40px] 3xl:pb-[98px]">
                    {data.content.cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-${card.styles.backgroundColor} rounded-[16px] z-0 hover:scale-105 transition-all ease-in hover:duration-200 relative`}
                            style={{
                                maxWidth: card.styles.maxWidth,
                                marginTop: card.styles.marginTop,
                                padding: card.styles.padding,
                                backgroundColor: card.styles.backgroundColor
                            }}
                        >
                            <div className="pt-[25px] sm:pt-7 pb-[25px] sm:pb-[35px] 3xl:pb-[55px] px-[20px]">
                                {card.iconUrl && (
                                    <Image
                                        // className="w-full absolute left-0 px-5 -bottom-8 rounded-[20px] object-cover"
                                        src={card.iconUrl}
                                        width={80}
                                        height={80}
                                        alt="management img"
                                    />
                                )}
                                <h3 className="ff-Inter font-bold text-xl text-darkBlack mt-[15px] leading-[30px]">
                                    {card.heading}
                                </h3>
                                <p className="ff-inter font-normal text-base text-lightgrey md:max-w-[300px] 2xl:max-w-[349px] mt-[15px] ">
                                    {card.description}
                                </p>
                                {card.url && (
                                    <Image
                                        className="w-full absolute left-0 px-5 -bottom-8 rounded-[20px] object-cover"
                                        src={card.url}
                                        width={162}
                                        height={162}
                                        alt="management img"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    );
}

export default FashionSection;



