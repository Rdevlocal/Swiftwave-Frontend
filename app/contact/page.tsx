"use client"; // Mark this component as a Client Component
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm(
      'service_lwt1yof',  // Replace with your service ID from EmailJS
      'template_cjkskvg', // Replace with your template ID from EmailJS
      e.target as HTMLFormElement, // form element
      'user_yourUserID'          // Replace with your user ID from EmailJS
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Thank you for contacting us! We'll get back to you soon.");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong. Please try again later.");
      }
    );
  };

  return (
    <main className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-200 md:px-8"> {/* Set text color to a very light gray */}
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <h3 className="text-indigo-400 font-semibold">Contact</h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">Get in touch</p> {/* Set to white */}
          <p className="text-gray-300">We’d love to hear from you! Please fill out the form below.</p> {/* Slightly off-white for description */}
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="text-white font-medium">First name</label> {/* Set to white */}
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-gray-200 bg-transparent outline-none border border-gray-300 focus:border-indigo-600 shadow-sm rounded-lg" // Set text to light gray
                />
              </div>
              <div>
                <label className="text-white font-medium">Last name</label> {/* Set to white */}
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-gray-200 bg-transparent outline-none border border-gray-300 focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="text-white font-medium">Email</label> {/* Set to white */}
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 text-gray-200 bg-transparent outline-none border border-gray-300 focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="text-white font-medium">Phone number</label> {/* Set to white */}
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                  <select className="text-sm text-gray-200 bg-transparent outline-none rounded-lg h-full"> {/* Set to light gray */}
                    <option>US</option>
                    <option>ES</option>
                    <option>MR</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone"
                  placeholder="+1 (555) 000-000"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-[4.5rem] pr-3 py-2 text-gray-200 appearance-none bg-transparent outline-none border border-gray-300 focus:border-indigo-600 shadow-sm rounded-lg" // Light gray text
                />
              </div>
            </div>
            <div>
              <label className="text-white font-medium">Message</label> {/* Set to white */}
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 h-36 px-3 py-2 text-gray-200 resize-none appearance-none bg-transparent outline-none border border-gray-300 focus:border-indigo-600 shadow-sm rounded-lg" // Light gray text
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
