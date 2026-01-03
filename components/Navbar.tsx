"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/90 fixed top-0 left-0 z-50 transition-all duration-300">
            <div className="max-w-8xl mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-gray-900 group flex items-center gap-3">
                            <img src="/logo.webp" alt="Logo for EcnToJPG Brand" className="w-20" />
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-gray-700 to-gray-800 transition-all duration-300">
                                EncToJPG
                            </span>
                        </Link>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex space-x-2 items-center">
                            <Link
                                href="/"
                                className="text-gray-500 hover:text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-gray-50"
                            >
                                Enc to JPG
                            </Link>
                            <Link
                                href="/enc-to-png"
                                className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Enc to PNG
                            </Link>
                        </div>
                    </div>
                    <div className="flex sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isOpen && (
                <div className="sm:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-4 rounded-md text-base font-medium text-center"
                        >
                            Enc to JPG
                        </Link>
                        <Link
                            href="/enc-to-png"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-4 rounded-md text-base font-medium text-center"
                        >
                            Enc to PNG
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
