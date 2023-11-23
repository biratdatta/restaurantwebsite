 import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white-100 py-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left">Contact Us</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4"> Reach out to us at</h3>
            <p className="text-lg text-gray-700 mb-3">
              Email: <a href="mailto:info@example.com" className="text-blue-500">sofiacafe@gmail.com</a>
            </p>
            <p className="text-lg text-gray-700 mb-3">
              Phone: <span className="text-blue-500">+916009344713</span>
            </p>
            <p className="text-lg text-gray-700">
              Address: BTM. Tavarekere Road Bangalore, Karnataka
            </p>
          </div>
          {/* Additional contact details or information can be added here */}
        </div>
        <div className="w-full lg:w-1/2">
          {/* Embedded Google Maps iframe */}
          <iframe
            title="Sofia Cafe Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8058938361096!2d77.60812717592194!3d12.920193787390405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae154fa5a563fd%3A0xb8bbc5e68b429883!2sSofia%20Cafe!5e0!3m2!1sen!2sin!4v1700687908856!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: '0', borderRadius: '1rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
