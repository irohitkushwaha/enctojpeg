import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ConversionSection from "@/components/ConversionSection";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                        <span className="block">Enc to JPEG Converter</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10">
                        Convert any .enc file, including WhatsApp profile pictures, to JPEG format.
                    </p>

                    <ConversionSection />

                </div>
            </div>

            <FAQSection />
            <Footer />
        </main>
    );
}
