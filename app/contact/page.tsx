"use client"; // Indicate that this is a client component

import React from 'react';

// ContactForm Component
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <main className="py-14" style={{ backgroundColor: '#09090B' }}> {/* Set background color */}
      <div className="max-w-lg mx-auto">
        <h3 className="text-white text-3xl font-semibold text-center mb-6">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
            <div>
              <label className="font-medium text-white">First name</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium text-white">Last name</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="font-medium text-white">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium text-white">Phone number</label>
            <div className="relative mt-2">
              <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                <select className="text-sm bg-transparent outline-none rounded-lg h-full text-gray-500">
                  <option>US</option>
                  <option>ES</option>
                  <option>MR</option>
                </select>
              </div>
              <input
                type="tel"
                placeholder="+1 (555) 000-000"
                required
                className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-gray-500"
              />
            </div>
          </div>
          <div>
            <label className="font-medium text-white">Message</label>
            <textarea
              required
              className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-gray-500"
            ></textarea>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

// Main Component
const ContactPage = () => {
  return (
    <ContactForm />
  );
};

export default ContactPage;
