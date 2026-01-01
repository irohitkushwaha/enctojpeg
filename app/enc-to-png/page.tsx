import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConversionSection from "@/components/ConversionSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enc to PNG Converter | Convert WhatsApp Images",
    description: "Securely convert .enc files from WhatsApp Web to PNG images directly in your browser. Simple, free, and private.",
    keywords: ["enc to png", "enc converter", "whatsapp enc to png", "convert enc file"],
};

export default function EncToPngPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 font-display">
                        <span className="block">Enc to PNG Converter</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10 leading-relaxed font-light">
                        Convert any .enc file, including WhatsApp profile pictures, to PNG format.
                    </p>

                    <ConversionSection targetFormat="png" />

                </div>
            </div>

            <Footer />
        </main>
    );
}
