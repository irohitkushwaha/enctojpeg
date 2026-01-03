import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us - EncToJPG",
    description: "Learn about Rohit Kushwaha, the Full Stack Developer behind EncToJPG, and the story of the .enc file converter.",
};

export default function AboutUs() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <div className="flex-grow pt-32 pb-12 sm:pt-40 sm:pb-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
                        About Us
                    </h1>

                    <div className="prose prose-lg prose-gray max-w-none text-gray-600 space-y-6 leading-relaxed">
                        <p>
                            Hi, I am <strong>Rohit Kushwaha</strong>, a Full Stack Developer with a passion for solving real-world digital problems.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Story Behind EncToJPG</h2>
                        <p>
                            I discovered a common frustration among users: when downloading a profile picture from WhatsApp Web, it often saves with an <code>.enc</code> extension. These encoded files are not viewable by standard image viewers, leaving many users confused about how to access their images.
                        </p>
                        <p>
                            Leveraging my deep expertise in file handling and conversion algorithms, I decided to create a solution. I built <strong>EncToJPG</strong> as a specialized tool that instantly converts these tricky <code>.enc</code> files into standard <strong>JPG, JPEG, or PNG</strong> formats.
                        </p>
                        <p>
                            The best part? The entire conversion process runs securely in your browser. No files are uploaded to any server, ensuring your privacy is my top priority.
                        </p>

                        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h3>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://github.com/irohitkushwaha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/irohitkushwaha/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 rounded-lg bg-[#0077b5] text-white hover:bg-[#006396] transition-colors"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://www.rohitkushwaha.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    My Portfolio
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
