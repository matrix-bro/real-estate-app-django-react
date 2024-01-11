import axios, { AxiosError } from "axios";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { first_name, last_name, email, subject, message } = formData;

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "http://localhost:8000/api/contact/",
        { first_name, last_name, email, subject, message },
        config
      )
      .then((res) => {
        // console.log(res.data);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          subject: "",
          message: "",
        });
        alert("Message Sent.");
      })
      .catch((err: AxiosError) => {
        console.log(err);
        alert("Failed to send the message. Try again later.");
      });
  };

  return (
    <>
      <h1 className="text-4xl bg-sky-200 text-center py-12">Contact Us</h1>
      <form
        className="w-full mx-3 space-y-4 md:mx-auto my-8 md:w-2/4"
        onSubmit={handleOnSubmit}
      >
        <div>
          <p className="text-blue-600">First Name*</p>
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={handleOnChange}
            placeholder="First Name"
            required
            className="w-full py-2 px-3 border-2"
          />
        </div>

        <div>
          <p className="text-blue-600">Last Name*</p>
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={handleOnChange}
            placeholder="Last Name"
            required
            className="w-full py-2 px-3 border-2"
          />
        </div>

        <div>
          <p className="text-blue-500">Email*</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="example@gmail.com"
            required
            className="w-full py-2 px-3 border-2"
          />
        </div>

        <div>
          <p className="text-blue-500">Subject*</p>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={handleOnChange}
            placeholder="Subject"
            required
            className="w-full py-2 px-3 border-2"
          />
        </div>
        <div>
          <p className="text-blue-500">Message*</p>
          <textarea
            name="message"
            rows={5}
            value={message}
            onChange={handleOnChange}
            placeholder="Type Your Message Here"
            required
            className="w-full py-2 px-3 border-2"
          />
        </div>

        <div className="text-center">
          <button className="bg-blue-400 hover:bg-blue-500 w-2/4 py-2 px-4 text-white">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
