import { type ChangeEvent, type FormEvent, useRef, useState } from "react";

export default function Newsletter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://chatbot-ui-gpt4free.vercel.app/api/newsletter', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputValue
        }),
        mode: 'no-cors'
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
      alert("Đăng ký ký nhận tin thành công.");
    } finally {
      setInputValue("");
      inputRef.current?.blur();
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
        <input type="email" name="email" onChange={handleChange} value={inputValue} placeholder="địa chỉ email" ref={inputRef} required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}