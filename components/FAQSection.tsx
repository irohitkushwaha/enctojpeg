import React from 'react';

const FAQs = [
    {
        question: "What is an .enc file?",
        answer: "An .enc file is an encrypted or encoded file. In the context of WhatsApp Web, it's often a profile picture or media file that has been saved with a protective extension. Our tool simply helps you restore it to a viewable format."
    },
    {
        question: "Is this Enc to JPG converter safe?",
        answer: "Yes, absolutely. The conversion from .enc to jpg or jpeg or png happens entirely within your browser. You are NOT uploading your files to any server. Your privacy is 100% protected."
    },
    {
        question: "Can I convert multiple .enc files to jpg at once?",
        answer: "Currently, we focus on converting one file at a time to ensure maximum quality and privacy correctness. Bulk conversion features may be added in the future."
    },
    {
        question: "Why does WhatsApp web profile picture save as .enc?",
        answer: "This is often due to how the browser handles cached images or how WhatsApp Web serves media to prevent direct scraping. Changing the extension usually fixes it so exactly we do in our platform"
    }
];

export default function FAQSection() {
    return (
        <section className="bg-gray-50/50 py-16 sm:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <dl className="space-y-8 divide-y divide-gray-200">
                    {FAQs.map((faq, index) => (
                        <div key={index} className="pt-6 md:pt-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <dt className="text-lg leading-6 font-medium text-gray-900">
                                {faq.question}
                            </dt>
                            <dd className="mt-2 text-base text-gray-500 leading-relaxed">
                                {faq.answer}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
