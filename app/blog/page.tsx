"use client"; // This marks the component as a Client Component

const posts = [
  {
      title: "What is SaaS? Software as a Service Explained",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "Jan 4 2022",
      href: "javascript:void(0)"
  },
  {
      title: "A Quick Guide to dkl Hosting",
      desc: "According to him, 'I'm still surprised that this has happened. But we are surprised because we are so surprised.' More revelations.",
      img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "Jan 4 2022",
      href: "javascript:void(0)"
  },
  {
      title: "7 Promising VS Code Extensions Introduced in 2022",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "Jan 4 2022",
      href: "javascript:void(0)"
  },
  {
      title: "How to Use sd C++ Interpreter Shell to Write C++ Programs",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons — four in total — were finally resolved in 2015 when gravitational.",
      img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "Jan 4 2022",
      href: "javascript:void(0)"
  }
];

const BlogPosts = () => {
  return (
    <section className="py-32 bg-[#09090B]"> {/* Set background color */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-white text-3xl font-extrabold sm:text-4xl">Latest blog posts</h1> {/* Set text color to white */}
          <p className="text-gray-400">Blogs that are loved by the community. Updated every hour.</p> {/* Adjusted text color */}
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
          {posts.map((item, key) => (sdafsafa
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
