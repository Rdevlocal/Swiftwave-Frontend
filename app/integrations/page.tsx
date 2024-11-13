const integrations = [ 
  {
      title: "Shopify",
      desc: "Seamlessly connect your online store.",
      icon: <svg className="w-10 h-10" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG content for Shopify logo */}
      </svg>
  }, 
  {
      title: "WooCommerce",
      desc: "Integrate with WordPress and WooCommerce.",
      icon: <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG content for WooCommerce logo */}
      </svg>
  }, 
  {
      title: "BigCommerce",
      desc: "Expand your store's capabilities.",
      icon: <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG content for BigCommerce logo */}
      </svg>
  },
];

export default () => (
  <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-md">
              <h1 className="text-white text-xl font-extrabold sm:text-2xl">Integrations</h1>
              <p className="text-white mt-2">Extend and automate your workflow by using integrations for your favorite webshop builders.</p>
          </div>
          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {
                  integrations.map((item, idx) => (
                      <li className="border rounded-lg">
                          <div className="flex items-start justify-between p-4">
                              <div className="space-y-2">
                                  {item.icon}
                                  <h4 className="text-white font-semibold">{item.title}</h4>
                                  <p className="text-white text-sm">{item.desc}</p>
                              </div>
                              <button className="text-white text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">Connect</button>
                          </div>
                          <div className="py-5 px-4 border-t text-right">
                              <a href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm font-medium">
                                  View integration
                              </a>
                          </div>
                      </li>
                  ))
              }
          </ul>
      </div>
  </section>
)
