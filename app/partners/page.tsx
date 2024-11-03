"use client"; // Mark this component as a client component

import { useRef, useState } from "react";

const FaqsCard = ({ faqsList, idx }) => {
    const answerElRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [answerHeight, setAnswerHeight] = useState('0px');

    const handleOpenAnswer = () => {
        const answerElHeight = answerElRef.current.childNodes[0].offsetHeight;
        setIsOpen(!isOpen);
        setAnswerHeight(isOpen ? '0px' : `${answerElHeight + 20}px`);
    };

    return (
        <div className="space-y-3 mt-5 overflow-hidden border-b" key={idx} onClick={handleOpenAnswer}>
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium">
                {faqsList.q}
                {
                    isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div ref={answerElRef} className="duration-300" style={{ height: answerHeight }}>
                <div>
                    <p className="text-gray-300">{faqsList.a}</p>
                </div>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const faqsList = [
        {
            q: "What are some random questions to ask?",
            a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
        },
        {
            q: "Do you include common questions?",
            a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
        },
        {
            q: "Can I use this for 21 questions?",
            a: "Yes! There are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
        },
        {
            q: "Are these questions for girls or for boys?",
            a: "The questions in this generator are gender neutral and can be used to ask either male or females (or any other gender the person identifies with)."
        },
        {
            q: "What do you wish you had more talent doing?",
            a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
        }
    ];

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-white font-semibold">Frequently Asked Questions</h1>
                <p className="text-gray-300 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {faqsList.map((item, idx) => (
                    <FaqsCard key={idx} idx={idx} faqsList={item} />
                ))}
            </div>
        </section>
    );
};

const PartnershipSections = () => {
    return (
        <>
            {/* Section 1 - Our Partners */}
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                className="md:max-w-lg sm:rounded-lg"
                                alt="Partnership Opportunities"
                            />
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <p className="text-3xl font-semibold sm:text-4xl">Our Partners</p>
                            <p className="mt-3">
                                We collaborate with a diverse range of partners, including affiliates, marketplaces, and agencies. Together, we create innovative solutions that empower businesses to leverage the power of AI. Our partnerships are built on shared goals and a commitment to excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 - Why Partner With Us */}
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <p className="text-3xl font-semibold sm:text-4xl">Why Partner With Us</p>
                            <p className="mt-3">
                                By partnering with us, you gain access to cutting-edge AI solutions tailored to your needs. Our expertise in data analysis, automation, and operational efficiency allows us to help you drive growth and achieve your goals effectively. Let's collaborate to transform the future.
                            </p>
                            <a
                                href="javascript:void(0)"
                                className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
                            >
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex-1 sm:hidden lg:block">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                className="md:max-w-lg sm:rounded-lg"
                                alt="Collaborative Partnerships"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Our Offerings */}
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-white text-3xl font-semibold sm:text-4xl">Empower Your Business</h3>
                        <p className="mt-3 text-white">
                            Partnering with us means access to advanced AI automation solutions. Accelerate your product offerings with precision and efficiency.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-indigo-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    ),
                                    title: "Data Solutions",
                                    description: "Enhance your data management and analysis capabilities."
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-indigo-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8" />
                                        </svg>
                                    ),
                                    title: "Automated Workflows",
                                    description: "Streamline your processes with tailored automation."
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-indigo-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15l-3.5 3.5M12 15l3.5 3.5M12 15v-6" />
                                        </svg>
                                    ),
                                    title: "Consultation Services",
                                    description: "Receive expert guidance to navigate your business challenges."
                                }
                            ].map((offering, index) => (
                                <li key={index} className="relative flex flex-col justify-between p-5 border border-gray-700 rounded-lg bg-gray-900 hover:bg-gray-800 transition duration-300 ease-in-out">
                                    <div>
                                        {offering.icon}
                                        <h3 className="mt-4 text-lg font-semibold text-white">{offering.title}</h3>
                                        <p className="mt-1 text-gray-300">{offering.description}</p>
                                    </div>
                                    <a
                                        href="javascript:void(0)"
                                        className="mt-4 inline-flex items-center gap-x-1 text-indigo-600 hover:text-indigo-400"
                                    >
                                        Read more
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

const App = () => {
    return (
        <div className="App">
            <PartnershipSections />
            <FAQSection />
        </div>
    );
};

export default App;
