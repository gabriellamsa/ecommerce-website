import { useState } from "react";
import { Title } from "../../components/common/CustomComponents";
import { Layout } from "../../router";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSuccessMessage(
        "Message sent successfully! We will get back to you soon."
      );
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccessMessage(""), 3000);
    }, 1500);
  };

  return (
    <Layout>
      <section className="mt-16 relative">
        <div className="flex justify-center mb-10">
          <Title level={2}>Contact Us</Title>
        </div>

        <div className="container flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="relative overflow-x-auto sm:rounded-lg bg-gray-100 p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Get in Touch
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Have a question or want to work together? Fill out the form
                below and we’ll get back to you as soon as possible.
              </p>

              {successMessage && (
                <div className="mb-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
                  {successMessage}
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Write your message..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-all disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
