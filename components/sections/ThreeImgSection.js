import React from 'react'
import Image from 'next/image';

// const ThreeImgSection = () => {


//     const data = {
//         title: "Aligning People and Performance",
//         subtitle: "Comprehensive tools for optimizing every aspect of your workforce management"
//     };

//     return (
//         <section className="">
//             <div className="container mx-auto z-0 px-3  bg-skyblue rounded-[58px] relative mt-10">
//                 <div className="absolute top-0 left-[-43px] z-[-1]">
//                     <Image
//                         src="/images/management-2.png"
//                         width={162}
//                         height={162}
//                         alt="management img"
//                     />
//                 </div>
//                 <h2 className="font-bold leading-[30px] sm:leading-[39px] md:leading-[64px] z-50 mx-4 pt-[20px] sm:pt-[40px] md:pt-[50] 3xl:pt-[91px] ff-Inter sm:text-3xl text-xl md:text-[48px] text-darkBlack text-center">
//                     {data.title}
//                 </h2>
//                 <div className="flex z-50 justify-center mt-[12px] sm:mt-[15px] 3xl:mt-[23px] mx-4">
//                     <p className="font-normal ff-inter text-sm sm:text-md text-lightgrey max-w-[880px] text-center">
//                         {data.subtitle}
//                     </p>
//                 </div>
//                 <div className="flex z-50 justify-center mt-[10px] px-4 pb-[20px] sm-pb-[40px] 3xl:pb-[43px]">
//                     <div className="grid sm:grid-cols-2 items-center md:grid-cols-3 gap-[20px] sm:gap-[20px] xl:gap-[59px] mx-[10px] max-w-[1150px]">
//                         {/* Item 1 */}
//                         <div className=" z-50 w-[100%] hover:scale-[1.03] transition-all duration-200 ease-in  xl:w-[344px]">
//                             <div className="max-w-[300px] mx-auto">
//                                 <Image
//                                     src="/images/peoplefirst align1.png"
//                                     width={344}
//                                     height={422}
//                                     alt="align1 img"
//                                 />
//                             </div>
//                             <h5 className="mx-auto  ff-Inter text-center mt-[12px] sm:mt-3 font-bold text-[20px]  lg:text-[22px] text-darkBlack">
//                                 Performance Management
//                             </h5>
//                             <div className="flex justify-center mt-[5px] sm:mt-2]">
//                                 <p className="ff-inter  font-normal text-base text-lightgrey text-center leading-[22px] sm:leading-[28px] max-w-[234px]">
//                                     Implement goal-setting and performance tracking to align individual achievements with business objectives.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Item 2 */}
//                         <div className=" z-50 w-[100%] hover:scale-[1.03] transition-all duration-200 ease-in  xl:w-[344px]">
//                             <div className="max-w-[300px] mx-auto">
//                                 <Image
//                                     src="/images/peoplefirst align2.png"
//                                     width={344}
//                                     height={422}
//                                     alt="align2 img"
//                                 />
//                             </div>
//                             <h5 className="mx-auto  ff-Inter text-center mt-[12px] sm:mt-3 font-bold text-[20px]  lg:text-[22px] text-darkBlack">
//                                 Employee Records
//                             </h5>
//                             <div className="flex justify-center mt-[5px] sm:mt-2]">
//                                 <p className="ff-inter  font-normal text-base text-lightgrey text-center leading-[22px] sm:leading-[28px] max-w-[234px]">
//                                     Maintain and access employee records securely and conveniently.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Item 3 */}
//                         <div className=" z-50 w-[100%] hover:scale-[1.03] transition-all duration-200 ease-in  xl:w-[344px]">
//                             <div className="max-w-[300px] mx-auto">
//                                 <Image
//                                     src="/images/peoplefirst align3.png"
//                                     width={344}
//                                     height={422}
//                                     alt="align3 img"
//                                 />
//                             </div>
//                             <h5 className="mx-auto  ff-Inter text-center mt-[12px] sm:mt-3 font-bold text-[20px]  lg:text-[22px] text-darkBlack">
//                                 Feedback and Recognition
//                             </h5>
//                             <div className="flex justify-center mt-[5px] sm:mt-2]">
//                                 <p className="ff-inter  font-normal text-base text-lightgrey text-center leading-[22px] sm:leading-[28px] max-w-[234px]">
//                                     Cultivate a culture of appreciation with regular feedback mechanisms and recognition programs.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ThreeImgSection;




const ThreeImgSection = (data) => {


    return (
        <div>
            <section className="lg:mt-[120px]">
                <div className="container mx-auto z-0 px-3 bg-skyblue rounded-[58px] relative">
                    <div className="absolute top-0 left-[-43px] z-[-1]">
                        <Image
                            src="/images/management-2.png"
                            width={162}
                            height={162}
                            alt="management img"
                        />
                    </div>
                    <h2 className="font-bold leading-[30px] sm:leading-[39px] md:leading-[64px] z-50 mx-4 pt-[20px] sm:pt-[40px] md:pt-[50] 3xl:pt-[91px] ff-Inter sm:text-3xl text-xl md:text-[39px] text-darkBlack text-center">
                        {data?.data?.content?.title}
                    </h2>
                    <div className="border-t-2 mt-[15px] ml-[200px] border-dashed xl:max-w-[702px] border-#006D77"></div>
                    <div className="flex z-50 justify-center mt-[12px] sm:mt-[15px] 3xl:mt-[23px] mx-4">
                        <p className="font-normal ff-inter text-sm sm:text-md text-lightgrey max-w-[1080px] text-center">
                            {data?.data?.content?.subtitle}
                        </p>
                    </div>
                    <div className="flex z-50 justify-center mt-[10px] px-4 pb-[20px] sm-pb-[40px] 3xl:pb-[43px]">
                        <div className="grid sm:grid-cols-2 items-center md:grid-cols-3 gap-[20px] sm:gap-[20px] xl:gap-[59px] mx-[10px] max-w-[1150px]">
                            {data?.data?.content?.images.map((dat, index) => (
                                <div key={index} className="z-50 w-[100%] h-[100%] hover:scale-[1.03] transition-all duration-200 ease-in xl:w-[344px]">
                                    <div className="max-w-[100%] mx-auto">
                                        <img
                                            src={dat.url}
                                            style={{ height: "300px", width: "250px" }}
                                            alt="clientelling img"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <h5 className="ml-2 ff-Inter text-center mt-[12px] sm:mt-3 font-bold text-[20px] lg:text-[22px] text-darkBlack">
                                            {dat.heading}
                                        </h5>
                                    </div>
                                    <div className="flex justify-start mt-[5px] sm:mt-2]">
                                        <p className="ff-inter  font-normal text-base text-lightgrey text-center leading-[22px] sm:leading-[28px] max-w-[284px]">
                                            {dat.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ThreeImgSection;
