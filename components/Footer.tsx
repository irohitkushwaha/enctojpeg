export default function Footer() {
    return (
        <footer className="bg-white footer-glow mt-auto py-12 border-t border-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <p className="text-gray-400 text-sm font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} EncConverter. All rights reserved.
                    </p>
                    <a
                        href="mailto:support@enctojpeg.online"
                        className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors duration-200 border-b border-transparent hover:border-gray-900"
                    >
                        support@enctojpeg.online
                    </a>
                </div>
            </div>
        </footer>
    );
}
