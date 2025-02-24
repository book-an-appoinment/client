import React, { useState } from "react";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import SelectField from "./SelectField";
import TimePicker from "./TimePicker";
import TextAreaField from "./TextAreaField";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const dateObj = new Date(data.date);
    dateObj.setUTCMonth(2); // Months are 0-based, so 2 = March
    dateObj.setUTCDate(15);
    dateObj.setUTCHours(9, 0, 0, 0); // Set time to 09:00:00 UTC

    // Convert to ISO format
    const formattedDate = dateObj.toISOString();
    const payload = {
      ...data,
      phoneNumber: Number(data.phoneNumber),
      date: formattedDate,
    };

    setIsLoading(true);
    const loadId = toast.loading("Creating........", {
      position: "top-right",
    });
    try {
      const response = await axios.post(
        "https://server-hpxb.onrender.com/api/v1/appointments/create-appointment",
        payload
      );
      toast.dismiss(loadId);
      toast.success("Created Successfully", { position: "top-right" });
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { position: "top-right" });
    } finally {
      toast.dismiss(loadId);
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full max-w-[1479px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[75px] -mt-[150px] lg:-mt-[380px] my-12">
      {/* Form Section */}
      <div className="w-full border border-[#EDF3F2] shadow-[-1.35px_18.89px_180.83px_0px_#0A303D1A] bg-white rounded-lg p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16">
        <form
          className="grid grid-cols-1 md:gap-[10px] md:grid-cols-2 2xl:gap-[30px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Full Name & Email */}
          <InputField
            label="Full Name"
            name="fullName"
            register={register}
            placeholder="Enter your full name"
            errors={errors}
            rules={{ required: "Name is required" }}
          />
          <InputField
            label="Your Email"
            name="email"
            register={register}
            placeholder="Enter your email"
            errors={errors}
            rules={{ required: "Email is required" }}
          />

          {/* Select Service & Phone Number */}
          <SelectField
            label="Select Service"
            name="service"
            register={register}
            options={[
              { value: "Financial Service", label: "Financial Service" },
              { value: "Task Control'", label: "Task Control" },
              { value: "Financial Growth", label: "Financial Growth" },
              { value: "Capital Investments", label: "Capital Investments" },
              { value: "Task Control'", label: "Task Control'" },
            ]}
            errors={errors}
            rules={{ required: "Service is required" }}
          />
          <InputField
            label="Your Phone"
            name="phoneNumber"
            register={register}
            placeholder="Enter your phone number"
            errors={errors}
            rules={{ required: "Phone is required" }}
          />

          {/* Subject - Takes Full Width */}
          <div className="col-span-1 md:col-span-2">
            <InputField
              label="Subject"
              name="subject"
              register={register}
              placeholder="How can we help?"
              errors={errors}
              rules={{ required: "This field is required" }}
            />
          </div>

          {/* Date & Time */}
          <InputField
            label="Select Date"
            name="date"
            register={register}
            type="date"
            errors={errors}
            rules={{ required: "Date is required" }}
          />
          <TimePicker
            label="Select Time"
            name="time"
            register={register}
            errors={errors}
            rules={{ required: "Time is required" }}
          />

          {/* Message - Full Width */}
          <div className="col-span-1 md:col-span-2">
            <TextAreaField
              label="Message"
              name="message"
              register={register}
              placeholder="Enter your message here..."
              errors={errors}
              rules={{ required: "Message is required" }}
            />
          </div>

          {/* Submit Button - Full Width */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#A7EB94] lg:h-[80px] text-[#004D3F] lg:text-[26px] py-3 rounded-md hover:bg-green-600 hover:text-white transition-all cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default AppointmentForm;
