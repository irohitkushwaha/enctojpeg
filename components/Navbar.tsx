import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/90 fixed top-0 left-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-gray-900 group flex items-center gap-2">
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-gray-700 to-gray-800 transition-all duration-300">
                                EncConverter
                            </span>
                        </Link>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex space-x-2 items-center">
                            <Link
                                href="/"
                                className="text-gray-500 hover:text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-gray-50"
                            >
                                Enc to JPEG
                            </Link>
                            <Link
                                href="/enc-to-png"
                                className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Enc to PNG
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
