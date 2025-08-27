import React from "react";
import ContactForm from "../../user-dashboard-pages/support-legal/contact-us/ContactForm";
import { supportData } from "@/data/contactData";
import SupportBanner from "@/components/shared/user-dashboard/support-legal/SupportBanner";

const Support = () => {
  return (
    <div>
      {/* <DirectionTitle icon={<TiContacts className='text-black' />} title='Contact Us ' />  */}

      <SupportBanner
        title="Get In Touch"
        subTitle="Contact Us"
        description="Have questions or need support? We are here to help you succeed in your nursing journey."
      />

      {/* contact us info  */}
      <div className=" border border-[#C5D0D0] mt-6 lg:p-12 p-5 rounded-xl  ">
        <p className="font-medium lg:text-xl text-lg lg:pb-8 pb-4">
          {" "}
          Let's Connect{" "}
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
          {supportData?.map((values, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white rounded-xl  border border-[#C5D0D0]"
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-lg"
                style={{ backgroundColor: values?.bgColor }}
              >
                <img
                  src={values?.icon}
                  alt={`${values?.label} Icon`}
                  className="w-6 h-6"
                />
              </div>

              {/* Content */}
              <div className="ml-4">
                <p className="text-sm text-gray-500">{values?.label}</p>
                <a
                  href={
                    values?.label === "Email Support"
                      ? `mailto:${values?.value}`
                      : "#"
                  }
                  className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {values?.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-[#C5D0D0] rounded-xl mt-6 lg:p-12 p-5">
        <ContactForm />
      </div>
    </div>
  );
};

export default Support;
