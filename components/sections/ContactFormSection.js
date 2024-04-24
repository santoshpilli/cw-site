import Image from "next/image";
import React, { useEffect, useCallback, useState } from "react";
import { LeftArrow } from "../common/Icons";
import Thankyou from "../common/Thankyou";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const TalkUs = (data) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    email: "",
    howcanwehelp: "",
  });
  const [notification, setNotification] = useState("");
  const [submitData, setSubmitData] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {}, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSumitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        setSubmitData(formData);
        submitEnquiryForm(gReCaptchaToken);
      });
    },
    [executeRecaptcha, formData]
  );

  const submitEnquiryForm = (gReCaptchaToken) => {
    fetch("/api/recaptcha", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: formData,
        gRecaptchaToken: gReCaptchaToken,
        secreteKey: '',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === "success") {
          setNotification(res?.message);
          setVisible(true);
          setFormData({
            email: "",
            howcanwehelp: "",
            pageName: currentPage,
          });
        } else {
          setNotification(res?.message);
        }
      });
  };

  const createLead = (data) => {
    fetch("/api/createLead", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "Lead has been generated successfully.") {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
  };

  return (
    <>
      {!visible && (
        <div className="bg-greyshade1 py-16 sm:py-24">
          <div className="container flex flex-col lg:flex-row justify-between items-center px-3 mx-auto">
            <div className="w-full lg:w-[60%] ">
              <div className="flex justify-center flex-col">
                <h2 className="font-bold ff-Inter sm:text-3xl text-2xl md:text-[48px] text-center lg:text-start text-darkBlack">
                  {data?.data?.content.title}
                </h2>
                <p className="font-normal mt-[12px] sm:mt-5 text-center lg:text-start  text-sm sm:text-md  text-lightgrey ff-inter max-w-[702px]">
                 {data?.data?.content.subtitle}
                </p>
                <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
                  <div className="lg:hidden flex justify-center">
                    <Image
                      src="/images/talk-us-1.png"
                      width={526}
                      height={610}
                      alt="talk us img"
                    />
                  </div>
                </div>
                {/* <form onSubmit={handleSumitForm} method="POST" className="mt-8">
                  <input
                    className="w-full h-[45px] sm:h-[60px] px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
                    required
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    id="email"
                    name="email"
                    onChange={handleChange}
                  />
                  <textarea
                    className="mt-5 w-full px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
                    required
                    cols="30"
                    rows="6"
                    placeholder="Your message"
                    id="howcanwehelp"
                    name="howcanwehelp"
                    value={formData.howcanwehelp}
                    onChange={handleChange}
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-5 bg-blue px-6 xl:px-10 py-3 xl:py-4 rounded-full  text-white text-sm flex items-center free-trial-btn-hover  transition-all duration-200 ease-in hover:shadow-lg"
                  >
                    Send Message
                    <LeftArrow />
                  </button>
                  <p className="font-normal text-center lg:text-start mt-6 ff-inter text-1xs text-blueshade1">
                    By clicking on 'Send Message' button, you agree to our{" "}
                    <a
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      href="/info#terms"
                    >
                      Terms & Policy
                    </a>
                  </p>
                </form> */}
                <form action={data?.data?.content.formAction}  method={data?.data?.content.method} className="mt-8">
                {data?.data?.content?.components.map((component, index) => {
                    switch (component.componentType) {
                    case 'TextField':
                        return (
                        <input
                            key={index}
                            className="w-full h-[45px] sm:h-[60px] px-4 py-2 mt-5 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
                            required
                            type={component.props.type}
                            placeholder={component.props.placeholder}
                            value={formData[component.props.name]}
                            id={component.props.name}
                            name={component.props.name}
                            onChange={handleChange}
                        />
                        );
                    case 'TextArea':
                        return (
                        <textarea
                            key={index}
                            className="mt-5 w-full px-4 py-2 text-[#98A2B3] placeholder:text-[#98A2B3] text-xs ff-inter font-normal outline-none"
                            required
                            cols="30"
                            rows="6"
                            placeholder={component.props.placeholder}
                            id={component.props.name}
                            name={component.props.name}
                            value={formData[component.props.name]}
                            onChange={handleChange}
                        ></textarea>
                        );
                    case 'Button':
                        return (
                        <button
                            key={index}
                            type={component.props.type}
                            className="mt-5 bg-blue px-6 xl:px-10 py-3 xl:py-4 rounded-full  text-white text-sm flex items-center free-trial-btn-hover  transition-all duration-200 ease-in hover:shadow-lg"
                        >
                            {component.props.label}
                            <LeftArrow />
                        </button>
                        );
                    default:
                        return null;
                    }
                })}
                <p className="font-normal text-center lg:text-start mt-6 ff-inter text-1xs text-blueshade1">
                    By clicking on 'Send Message' button, you agree to our{" "}
                    <a
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    href="/info#terms"
                    >
                    Terms & Policy
                    </a>
                </p>
                </form>

              </div>
            </div>
            <div className="w-full lg:w-[35%]">
              <div className="hidden lg:block mt-[15px] lg:mt-0 flex justify-center lg:justify-start">
                <Image
                  src="/images/talk-us-1.png"
                  width={526}
                  height={610}
                  alt="talk us img"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {visible && <Thankyou />}
    </>
  );
};

export default TalkUs;
