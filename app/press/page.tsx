"use client"; // This marks the component as a Client Component

const posts = [
  {
      title: "Understanding AI: What It Is and How It Works",
      desc: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines. Learn how AI algorithms work and their applications in various fields.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxBSXxlbnwwfHx8fDE2OTAxMDMxMjI&ixlib=rb-4.0.3&q=80&w=870",
      date: "Jan 4 2024",
      href: "javascript:void(0)"
  },
  {
      title: "The Future of AI: Trends to Watch",
      desc: "As technology evolves, so does the landscape of AI. This article explores emerging trends in AI, including advancements in machine learning and automation.",
      img: "https://images.unsplash.com/photo-1573497019415-188f0f066c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fEFJfGVufDB8fHx8fDE2OTAxMDMxMjI&ixlib=rb-4.0.3&q=80&w=870",
      date: "Jan 15 2024",
      href: "javascript:void(0)"
  },
  {
      title: "AI in Healthcare: Revolutionizing Patient Care",
      desc: "Explore how AI is transforming healthcare by improving diagnostics, personalizing treatment plans, and enhancing patient care through data analysis.",
      img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxAUIUyMEluJTIwSGVhbHRoY2FyfGVufDB8fHx8fDE2OTAxMDMxMjI&ixlib=rb-4.0.3&q=80&w=870",
      date: "Jan 22 2024",
      href: "javascript:void(0)"
  },
  {
      title: "The Role of AI in Digital Marketing",
      desc: "Discover how businesses are leveraging AI technologies to enhance their digital marketing strategies, from personalized content to predictive analytics.",
      img: "https://images.unsplash.com/photo-1602871679796-67658f3c8b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxBSXxlbnwwfHx8fDE2OTAxMDMxMjI&ixlib=rb-4.0.3&q=80&w=870",
      date: "Feb 1 2024",
      href: "javascript:void(0)"
  },
  {
      title: "Ethics in AI: Navigating Challenges and Responsibilities",
      desc: "As AI technology advances, ethical considerations become increasingly important. This article addresses the ethical challenges and responsibilities of AI developers.",
      img: "https://images.unsplash.com/photo-1585877373788-f02e29883d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fEFJfGVufDB8fHx8fDE2OTAxMDMxMjI&ixlib=rb-4.0.3&q=80&w=870",
      date: "Feb 15 2024",
      href: "javascript:void(0)"
  }
];

const BlogPosts = () => {
  return (
    <section className="py-32 bg-[#09090B]"> {/* Set background color */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-white text-3xl font-extrabold sm:text-4xl">Latest blog posts on AI</h1> {/* Set text color to white */}
          <p className="text-gray-400">Explore our curated collection of blogs that delve into the world of Artificial Intelligence.</p> {/* Adjusted text color */}
          <form onSubmit={(e) => e.preventDefault()} className="items-center justify-center gap-3 sm:flex">
            <div className="relative">
              <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full pl-12 pr-3 py-2 text-gray-300 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs" // Changed text color to light gray
              />
            </div>
            <button className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((item, key) => (
            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
              <a href={item.href}>
                <img src={item.img} loading="lazy" alt={item.title} className="w-full rounded-lg" />
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">{item.date}</span>
                  <h3 className="text-lg text-white duration-150 group-hover:text-indigo-600 font-semibold"> {/* Set title text color to white */}
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm duration-150 group-hover:text-gray-300">{item.desc}</p> {/* Adjusted description text color */}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogPosts;
