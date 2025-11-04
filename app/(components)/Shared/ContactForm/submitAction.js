// submitAction.js

"use server";

// 1. Funksiyanın siqnaturasını yeniləyirik. `params` artıq ilk arqumentdir.
export async function submitContactForm(params, prevState, formData) {
    // formData'dan verileri alalım.
    const form = {
        service_id: formData.get("service_id"),
        ad: formData.get("ad"),
        number: formData.get("number"),
    };

    if (!form.ad || !form.number || !form.service_id) {
        return {
            status: "error",
            message: "Lütfen tüm alanları doldurun.",
        };
    }

    try {
        // 2. `params`-dan istifadə edərək URL-i dinamik şəkildə qururuq.
        // Məsələn, `params.lang` və ya `params.locale` ola bilər.


        const response = await fetch(`${process.env.NEXT_PUBLIC_MAIN_URL}/${params}/contact-form`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        const result = await response.json();

        if (!response.ok || !result.message) {
            throw new Error(result.message || "Bir hata oluştu.");
        }

        return {
            status: "success",
            message: result.message,
        };
    } catch (error) {
        return {
            status: "error",
            message: error.message || "Form gönderilirken bir hata oluştu.",
        };
    }
}