const title = "Swiftwave.io a plug and play fintech company";

export const metadata = {
  metadataBase: new URL("https://swiftwave.io"),
  title,
  openGraph: {
    title,
    url: "https://swiftwave.io",
  },
  twitter: {
    ,
  },
};

export default () => {

    const posts = [
        {
            title: "The Future of Digital Payments in 2024",
            desc: "Explore the latest trends in digital payments and how innovations like blockchain and AI are reshaping the financial landscape.",
            img: "https://images.unsplash.com/photo-1567428485548-0c579f25484c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            authorName: "John Doe",
            date: "Jan 10 2024",
            href: "javascript:void(0)"
        },
        {
            title: "How Fintech is Disrupting Traditional Banking",
            desc: "An in-depth look at how fintech startups are challenging established banks, offering more agile and user-friendly financial solutions.",
            img: "https://images.unsplash.com/photo-1567428485548-0c579f25484c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
            authorName: "Jane Smith",
            date: "Feb 15 2024",
            href: "javascript:void(0)"
        },
        {
            title: "The Rise of Decentralized Finance (DeFi)",
            desc: "Learn how DeFi is creating new opportunities for users by removing intermediaries and providing decentralized financial services.",
            img: "https://images.unsplash.com/photo-1573164713347-df1d6ae5294e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
            authorName: "Mark Johnson",
            date: "Mar 8 2024",
            href: "javascript:void(0)"
        },
        {
            title: "AI and Machine Learning in Fintech",
            desc: "Discover how AI and machine learning are being leveraged to enhance fraud detection, credit scoring, and personalized financial services.",
            img: "https://images.unsplash.com/photo-1573164574399-4bc17d1d6df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
            authorName: "Sarah Wilson",
            date: "Apr 12 2024",
            href: "javascript:void(0)"
        }
    ];
    
    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Fintech Blog
                </h1>
                <p className="mt-3 text-gray-500">
                    Stay updated with the latest in fintech. Updated regularly.
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title} className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{items.authorName}</span>
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    );
};
