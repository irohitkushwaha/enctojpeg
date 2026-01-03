import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Disclaimer for EncToJPG",
    description: "Disclaimer for EncToJPG - Client-side tool usage terms.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function Disclaimer() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <div className="flex-grow pt-32 pb-12 sm:pt-40 sm:pb-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
                        Disclaimer for EncToJPG
                    </h1>
                    <div className="prose prose-gray max-w-none text-gray-600 space-y-4 leading-relaxed">
                        <p>
                            The information and tools provided by <strong>EncToJPG</strong> are for general informational and utility purposes only. All services on this site are provided in good faith, however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any result.
                        </p>
                        <p>
                            <strong>Important:</strong> Our specific tool for converting .enc files operates entirely on your side (client-side). This means we do not have access to your files, and successful conversion depends on the integrity of your specific files and your browser environment.
                        </p>
                        <p>
                            By using our site, you agree that we are not liable for any loss or issue that may arise from using our free tools. Please use them responsibly.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
