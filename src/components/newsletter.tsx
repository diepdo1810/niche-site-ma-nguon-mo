import { type ChangeEvent, type FormEvent, useRef, useState } from "react";

export default function Newsletter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputValue
        }),
      })
      const data = await response.json();
      console.log(data);

      if (data.status >= 400) {
        alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
        return;
      }

      console.log("Data", data);
      alert("Subscribed successfully");
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