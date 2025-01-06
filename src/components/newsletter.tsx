import { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from "react";
import client from "@mailchimp/mailchimp_marketing";

export default function Newsletter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const mailchimpKey = "9f063448b1ae12e91bd53c742a1ceca8-us9";
  const mailchimpServer = "us9";
  const mailchimpAudience = "b769d497eb";

  client.setConfig({
    apiKey: mailchimpKey,
    server: mailchimpServer,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await client.lists.addListMember(mailchimpAudience, {
        email_address: inputValue,
        status: "subscribed",
      });

      if (response.status === 200) {
        alert("Thank you for subscribing!");
      }
    } catch (e) {
      console.log(e);
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="newsletter mt-auto pl-0">
      <p>Nhận những bài viết mới nhất được gửi ngay đến hộp thư của bạn.</p>
      <form
        onSubmit={handleSubmit}
      >
        <input type="email" name="email" onChange={handleChange} placeholder="địa chỉ email" ref={inputRef} required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}