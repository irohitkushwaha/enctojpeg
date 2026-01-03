import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy for EncToJPG",
    description: "Privacy Policy for EncToJPG - Secure, client-side conversion.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacyPolicy() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <div className="flex-grow pt-32 pb-12 sm:pt-40 sm:pb-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
                        Privacy Policy for EncToJPG
                    </h1>
                    <div className="prose prose-gray max-w-none text-gray-600 space-y-4 leading-relaxed">
                        <p>
                            At EncToJPG, your privacy is our absolute priority. We believe in providing a service that is both useful and securely designed. Unlike many online tools, <strong>EncToJPG operates entirely within your browser</strong>.
                        </p>
                        <p>
                            This means when you convert your .enc files to JPG or PNG, your files never leave your device. We do not upload, store, process, or view any of your images on our servers. The conversion happens locally on your computer, ensuring that your personal data remains 100% private and under your control.
                        </p>
                        <p>
                            Since no data is transmitted to us, you don't need to worry about data breaches or misuse of your files. We simply provide the tool to help you access your files safely. Thank you for trusting EncToJPG.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
