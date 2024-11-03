export default () => {
  const plans = [
      {
          name: "Free Plan",
          desc: "Explore the basics of AI automation with limited access.",
          price: 0,
          isMostPop: false,
          features: [
              "Basic access to AI tools and functionalities",
              "20 Free credits for initial exploration",
              "Limited access to community forums",
              "Monthly updates on new AI trends and features",
          ],
      },
      {
          name: "Basic Plan",
          desc: "Ideal for individuals starting their journey with AI automation.",
          price: 100,
          isMostPop: false,
          features: [
              "Unlimited access to all AI products",
              "Credits available at €1 each",
              "Standard customer support via email",
              "Real-time notifications for new product releases",
              "Access to community resources and events",
          ],
      },
      {
          name: "Startup Plan",
          desc: "Perfect for growing businesses looking to scale AI capabilities.",
          price: 250,
          isMostPop: true,
          features: [
              "Unlimited access to all AI products",
              "Reduced credits at €0.75 each",
              "Priority customer support with faster response times",
              "Monthly webinars featuring industry experts",
              "Exclusive beta testing opportunities for new features",
          ],
      },
      {
          name: "Enterprise Plan",
          desc: "Comprehensive solution for large teams and organizations.",
          price: 500,
          isMostPop: false,
          features: [
              "Unlimited access to all AI products for your organization",
              "Lowest credit cost at €0.50 each",
              "Dedicated account manager for personalized assistance",
              "Tailored training sessions for your team’s needs",
              "Advanced analytics and reporting for performance tracking",
          ],
      },
  ];

  return (
      <section className='py-14 bg-black text-white'>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className='relative max-w-xl mx-auto sm:text-center'>
                  <h3 className='text-3xl font-semibold sm:text-4xl'>
                      Pricing for All Sizes
                  </h3>
                  <div className='mt-3 max-w-xl'>
                      <p>
                          Choose a plan that fits your needs. Unlock unlimited access to new AI products every week with credits.
                      </p>
                  </div>
              </div>
              <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                  {
                      plans.map((item, idx) => (
                          <div key={idx} className={`relative flex flex-col rounded-xl border-2 €{item.isMostPop ? "border-indigo-600" : "border-gray-700"} p-6`}>
                              {
                                  item.isMostPop && (
                                      <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-indigo-600 text-center text-white text-sm font-semibold">Most Popular</span>
                                  )
                              }
                              <span className='text-indigo-400 font-medium text-lg'>
                                  {item.name}
                              </span>
                              <div className='text-3xl font-semibold mt-2'>
                                  €{item.price} <span className="text-xl text-gray-400 font-normal">/mo</span>
                              </div>
                              <p className='mt-2'>
                                  {item.desc}
                              </p>
                              <button className='mt-4 px-3 py-2 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                  Get Started
                              </button>
                              <ul className='mt-4 space-y-3'>
                                  <li className="text-gray-300 font-medium">
                                      <p>Features</p>
                                  </li>
                                  {
                                      item.features.map((featureItem, idx) => (
                                          <li key={idx} className='flex items-center gap-2 text-gray-300'>
                                              <svg
                                                  xmlns='http://www.w3.org/2000/svg'
                                                  className='h-5 w-5 text-indigo-400'
                                                  viewBox='0 0 20 20'
                                                  fill='currentColor'>
                                                  <path
                                                      fillRule='evenodd'
                                                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                      clipRule='evenodd'></path>
                                              </svg>
                                              {featureItem}
                                          </li>
                                      ))
                                  }
                              </ul>
                          </div>
                      ))
                  }
              </div>

              {/* Enhanced Credit Section */}
              <div className='mt-12 text-center'>
                  <h4 className='text-lg font-semibold'>How Credits Work</h4>
                  <p className='text-gray-400 mt-2'>
                      Each plan allows unlimited access to AI products, but you'll need to use credits to unlock them. 
                      The cost of credits decreases with higher-tier plans:
                  </p>
                  <div className="mt-8 p-6 rounded-lg bg-gray-800 border border-gray-700">
                      <h5 className='text-xl font-bold mb-4'>Credit Pricing</h5>
                      <ul className="space-y-2">
                          <li className="flex justify-between">
                              <span><strong>Free Plan:</strong></span>
                              <span>20 Free credits available</span>
                          </li>
                          <li className="flex justify-between">
                              <span><strong>Basic Plan:</strong></span>
                              <span>€1 per credit</span>
                          </li>
                          <li className="flex justify-between">
                              <span><strong>Startup Plan:</strong></span>
                              <span>€0.75 per credit</span>
                          </li>
                          <li className="flex justify-between">
                              <span><strong>Enterprise Plan:</strong></span>
                              <span>€0.50 per credit</span>
                          </li>
                      </ul>
                      <p className="text-gray-400 mt-4">
                          Purchase credits as needed to explore all available AI products!
                      </p>
                  </div>
              </div>
          </div>
      </section>
  );
};
