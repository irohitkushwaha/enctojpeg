import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-12">
                    <nav className="flex flex-wrap justify-center gap-8">
                        <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300">
                            Disclaimer
                        </Link>
                        <Link href="/about-us" className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300">
                            About Us
                        </Link>
                        <Link href="/contact-us" className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300">
                            Contact Us
                        </Link>
                    </nav>

                    <div className="flex flex-col items-center space-y-4">
                        <p className="text-gray-500 text-sm tracking-wide">
                            &copy; {new Date().getFullYear()} EncToJPG. All rights reserved.
                        </p>
                        <a
                            href="mailto:support@enctojpg.online"
                            className="text-gray-600 hover:text-gray-400 text-xs font-medium tracking-wide transition-colors duration-200"
                        >
                            support@enctojpg.online
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
