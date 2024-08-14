// src/app/contact/page.tsx
const ContactPage = () => {
  return (
    <div className="p-4 bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-900">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-700">
        If you have any questions, feel free to reach out to us through the
        contact form below.
      </p>
      <form className="mt-4 space-y-4">
        <label className="block">
          Name:
          <input
            type="text"
            className="block w-full mt-1 p-2 border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </label>
        <label className="block">
          Email:
          <input
            type="email"
            className="block w-full mt-1 p-2 border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </label>
        <label className="block">
          Message:
          <textarea
            className="block w-full mt-1 p-2 border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
          ></textarea>
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
