import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Contact Us - EncToJPG",
    description: "Contact EncToJPG support. We are here to help with your .enc to JPG conversion questions.",
};

export default function ContactUs() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <div className="flex-grow pt-32 pb-12 sm:pt-40 sm:pb-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
                        Contact Us
                    </h1>

                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm mb-12">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-6">
                            Have questions about our Enc to JPG converter? We're here to help!
                            You can reach us directly via email.
                        </p>
                        <div className="flex items-center gap-3 text-gray-800 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <a href="mailto:support@enctojpg.online" className="hover:underline hover:text-blue-600 transition-colors">
                                support@enctojpg.online
                            </a>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Send us a Message</h3>
                            <form className="grid grid-cols-1 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-3 border"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-3 border"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-4 py-3 border"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="button" // Use button type to prevent submission since it's frontend-only
                                        className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-all duration-200"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://github.com/irohitkushwaha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors font-medium text-sm"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/irohitkushwaha/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5]/20 transition-colors font-medium text-sm"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://www.rohitkushwaha.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors font-medium text-sm"
                                >
                                    Portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
