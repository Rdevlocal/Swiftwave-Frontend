const title = "Swiftwave.io - A Plug-and-Play Automation Company";

export const metadata = {
  metadataBase: new URL("https://swiftwave.io"),
  title,
  openGraph: {
    title,
    url: "https://swiftwave.io",
  },
  twitter: {
    title,
  },
};

export default () => {

    const posts = [
        {
            title: "The Future of Automation in 2024",
            desc: "Explore how automation is revolutionizing industries from manufacturing to customer service and shaping the future of work.",
            img: "https://images.unsplash.com/photo-1581091012184-49d28f1e47a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            authorName: "John Doe",
            date: "Jan 10 2024",
            href: "javascript:void(0)"
        },
        {
            title: "How Automation is Transforming Fintech",
            desc: "An in-depth look at how automation is enhancing financial services by streamlining operations, reducing errors, and improving customer experiences.",
            img: "https://images.unsplash.com/photo-1538707749272-3173a4ef9b96?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
            authorName: "Jane Smith",
            date: "Feb 15 2024",
            href: "javascript:void(0)"
        },
        {
            title: "AI and Automation: The Perfect Partnership",
            desc: "Discover how artificial intelligence and automation are joining forces to revolutionize industries by improving productivity and decision-making.",
            img: "https://images.unsplash.com/photo-1603791452906-8deca34bbd91?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
            authorName: "Mark Johnson",
            date: "Mar 8 2024",
            href: "javascript:void(0)"
        },
        {
            title: "Automation in Data Management",
            desc: "Learn how automation is transforming data management processes, making data more accessible, reliable, and actionable for businesses.",
            img: "https://images.unsplash.com/photo-1538757612019-2c6fae63635f?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
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
                    Automation Blog
                </h1>
                <p className="mt-3 text-gray-500">
                    Stay updated with the latest in automation. Updated regularly.
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
