"use client";

import { useFormStatus } from "react-dom";
import { useActionState, useEffect, useRef, useState } from "react";
import Texts from "../Texts/Texts";
import Swal from "sweetalert2";
import SharedInput from "../SharedInput/SharedInput";
import DropdownInput from "../DropdownInput/DropdownInput";
import { submitContactForm } from "./submitAction";

function SubmitButton({ form_send_message, form_sending }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-[--blue] text-white py-[14px] text-[16px]  mt-[16px] transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? form_sending : form_send_message}
    </button>
  );
}

const ContactForm = ({
  contact_us_text1,
  contact_us_text2,
  params,
  form_send_message,
  exit,
  error_message,
  form_error_message,
  name_fullname,
  phone_number,
  data,
  selectServices,
  form_send_message_btn,
  defaultServiceId,
  colorH2,
  textCenter,
  form_sending,
}) => {
  const initialState = { status: null, message: "" };
  const submitActionWithParams = submitContactForm.bind(null, params);
  const [state, formAction] = useActionState(
    submitActionWithParams,
    initialState
  );
  const formRef = useRef(null);

  const [formValues, setFormValues] = useState({ ad: "", number: "" });

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "number") {
      value = value.replace(/[^0-9]/g, "");
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (state.status === "success") {
      Swal.fire({
        icon: "success",
        title: form_send_message,
        text: "Bagiroff.az",
        confirmButtonText: exit,
        customClass: { confirmButton: "text-black-700" },
      });
      formRef.current?.reset();
      // YENİ: Başarılı gönderim sonrası state'i de temizliyoruz.
      setFormValues({ ad: "", number: "" });
    } else if (state.status === "error") {
      Swal.fire(error_message, "Bagiroff.az" || form_error_message, "error");
    }
  }, [state, form_send_message, exit, error_message, form_error_message]);

  return (
    <>
      <Texts
        text1={contact_us_text1}
        gap="gap-[20px]"
        colorH2={colorH2}
        text2={contact_us_text2}
        textCenter={textCenter}
      />
      <form ref={formRef} action={formAction} className="mt-[20px]">
        <SharedInput
          type={`text`}
          placeholder={name_fullname}
          id={`ad`}
          name={`ad`}
          value={formValues.ad} // State'ten gelen değeri bağlıyoruz
          onChange={handleChange} // onChange fonksiyonumuzu bağlıyoruz
          customStyle="placeholder:text-[--blue] bg-[#f4f6f6] w-full text-[--blue] border border-[#bfc8ca] px-[20px] py-[14px] text-[14px]  mb-[16px] outline-none"
        />
        <SharedInput
          type={`text`} // type="text" kalması en iyisidir, çünkü type="number" kendi can sıkıcı özelliklerini getirebilir (örn: 'e' harfine izin verme)
          placeholder={phone_number}
          id={`number`}
          name={`number`}
          pattern="[0-9]*"
          inputMode="numeric" // Bu hala mobil cihazlar için çok faydalıdır
          value={formValues.number} // State'ten gelen değeri bağlıyoruz
          onChange={handleChange} // onChange fonksiyonumuzu bağlıyoruz
          customStyle="placeholder:text-[--blue] w-full bg-[#f4f6f6] text-[--blue] border border-[#bfc8ca] px-[20px] py-[14px] text-[14px]   outline-none"
        />
        <DropdownInput
          categoriesData={data}
          select_services={selectServices}
          name="service_id"
          defaultServiceId={defaultServiceId}
        />
        <SubmitButton
          form_sending={form_sending}
          form_send_message={form_send_message_btn}
        />
      </form>
    </>
  );
};

export default ContactForm;
