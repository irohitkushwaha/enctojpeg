"use client";

import { useState, useRef } from 'react';

type ConversionStatus = 'idle' | 'ready' | 'converting' | 'completed';

interface ConversionSectionProps {
    targetFormat?: 'jpg' | 'png';
}

export default function ConversionSection({ targetFormat = 'jpg' }: ConversionSectionProps) {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<ConversionStatus>('idle');
    const [resultUrl, setResultUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const displayFormat = targetFormat.toUpperCase();
    const mimeType = targetFormat === 'jpg' ? 'image/jpg' : 'image/png';
    const extension = `.${targetFormat}`

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const validateAndSetFile = (selectedFile: File) => {
        setError(null);
        if (!selectedFile.name.toLowerCase().endsWith('.enc')) {
            setError("Please select a file with .enc extension.");
            setFile(null);
            setStatus('idle');
            return;
        }
        setFile(selectedFile);
        setStatus('ready');
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateAndSetFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            validateAndSetFile(e.target.files[0]);
        }
    };

    const handleConvert = async () => {
        if (!file) return;

        setStatus('converting');

        // Simulate a small delay for better UX (so it feels like "processing")
        await new Promise(resolve => setTimeout(resolve, 800));

        try {
            // The "conversion" - simply renaming and re-blobbing
            const newBlob = new Blob([file], { type: mimeType });
            const url = URL.createObjectURL(newBlob);

            setResultUrl(url);
            setStatus('completed');
        } catch (err) {
            setError("An error occurred during conversion.");
            setStatus('ready');
        }
    };

    const handleReset = () => {
        setFile(null);
        setError(null);
        setStatus('idle');
        setResultUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-12">
            {/* Upload Area or Result View */}
            {status === 'completed' && resultUrl ? (
                <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/50 animate-in fade-in zoom-in duration-500 ring-1 ring-gray-900/5">
                    <div className="p-8 sm:p-12 text-center space-y-8">
                        <div className="mx-auto w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 shadow-green-100 shadow-lg ring-1 ring-emerald-100">
                            <svg className="w-10 h-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Conversion Complete</h3>
                            <p className="text-gray-500 font-medium">Your image is ready to download</p>
                        </div>

                        <div className="aspect-video bg-gray-50/50 rounded-2xl overflow-hidden relative shadow-inner ring-1 ring-black/5 p-4 flex items-center justify-center">
                            {/* Display the image so user knows it worked */}
                            <img src={resultUrl} alt="Converted" className="max-w-full max-h-full object-contain drop-shadow-md" />
                        </div>

                        <p className="text-sm font-medium text-gray-400 font-mono tracking-wide">{file?.name.replace(/\.enc$/i, extension)}</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <a
                                href={resultUrl}
                                download={file?.name.replace(/\.enc$/i, extension)}
                                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-gray-900 hover:bg-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 ring-1 ring-gray-900 ring-offset-2"
                            >
                                <svg className="w-5 h-5 mr-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download {displayFormat}
                            </a>
                            <button
                                onClick={handleReset}
                                className="inline-flex justify-center items-center px-8 py-4 border border-gray-200 text-lg font-semibold rounded-full text-gray-600 bg-white hover:bg-gray-50 hover:text-gray-900 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                Start Over
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-8">
                    {/* Draggable Area */}
                    <div
                        className={`relative border-2 border-dashed rounded-[2rem] p-16 text-center transition-all duration-500 ease-out cursor-pointer group ${status === 'ready'
                                ? 'border-blue-500 bg-blue-50/20 shadow-blue-100 shadow-lg scale-[1.02]'
                                : error
                                    ? 'border-red-300 bg-red-50/20'
                                    : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50/50 hover:shadow-lg hover:scale-[1.01]'
                            }`}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileSelect}
                            className="hidden"
                            accept=".enc"
                        />

                        <div className="space-y-6 pointer-events-none transform transition-all duration-300">
                            <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 shadow-md ${status === 'ready'
                                    ? 'bg-blue-600 text-white shadow-blue-200 rotate-0 scale-110'
                                    : 'bg-white text-gray-400 group-hover:text-gray-600 shadow-gray-100 group-hover:scale-110'
                                }`}>
                                {status === 'ready' ? (
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                ) : (
                                    <svg className="w-10 h-10 transition-transform duration-500 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                )}
                            </div>

                            <div className="space-y-2">
                                {status === 'ready' ? (
                                    <>
                                        <p className="text-2xl font-semibold text-gray-900 tracking-tight">{file?.name}</p>
                                        <p className="text-blue-500 font-medium">Ready to convert</p>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-2xl font-semibold text-gray-900 tracking-tight">
                                            Drop .enc file here to convert into JPG
                                        </p>
                                        <p className="text-base text-gray-400 font-medium">
                                            or click to browse
                                        </p>
                                    </>
                                )}
                            </div>

                            {error && (
                                <div className="absolute inset-x-0 -bottom-16">
                                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100 animate-in slide-in-from-top-2 fade-in">
                                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {error}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-center pt-4">
                        <button
                            onClick={handleConvert}
                            disabled={status !== 'ready' && status !== 'converting'}
                            className={`w-full sm:w-auto px-12 py-5 rounded-full text-xl font-bold shadow-xl transition-all duration-300 transform ring-1 ring-white/50 ${status === 'ready'
                                    ? 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ring-gray-900/10'
                                    : status === 'converting'
                                        ? 'bg-gray-100 text-gray-400 cursor-wait'
                                        : 'bg-gray-50 text-gray-300 cursor-not-allowed border border-gray-100'
                                }`}
                        >
                            {status === 'converting' ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-4 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                `Convert to ${displayFormat}`
                            )}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
