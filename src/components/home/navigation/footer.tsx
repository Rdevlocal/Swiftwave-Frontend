import Icons from "@/components/global/icons"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">

            <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
            <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            <div className="flex flex-wrap justify-between gap-8 w-full">

                {/* Logo and description */}
                <div className="flex flex-col items-start justify-start md:max-w-[200px] w-full lg:w-auto">
                    <div className="flex items-start">
                        <Icons.logo className="w-7 h-7" />
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm text-start">
                    Scale your workforce instantly, without hiring new employees.
                    </p>
                </div>

                {/* Resources */}
                <div className="flex flex-col w-full lg:w-auto">
                    <h3 className="text-base font-medium text-white">
                        Resources
                    </h3>
                    <ul className="mt-4 text-sm text-muted-foreground">
                        <li className="mt-2">
                            <Link href="/" className="hover:text-foreground transition-all duration-300">
                                Home
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/about" className="hover:text-foreground transition-all duration-300">
                                About Us
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/contact" className="hover:text-foreground transition-all duration-300">
                                Contact
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/products" className="hover:text-foreground transition-all duration-300">
                                Products
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/pricing" className="hover:text-foreground transition-all duration-300">
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Company */}
                <div className="flex flex-col w-full lg:w-auto">
                    <h3 className="text-base font-medium text-white">
                        Company
                    </h3>
                    <ul className="mt-4 text-sm text-muted-foreground">
                        <li className="mt-2">
                            <Link href="/enterprise" className="hover:text-foreground transition-all duration-300">
                                Enterprise
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/login" className="hover:text-foreground transition-all duration-300">
                                Login
                            </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/signup" className="hover:text-foreground transition-all duration-300">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col w-full lg:w-auto">
                    <h3 className="text-base font-medium text-white">
                        Newsletter
                    </h3>
                    <p className="mt-4 text-sm text-muted-foreground">
                        Subscribe to our newsletter to get the latest updates and offers.
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row items-start">
                        <input
                            type="email"
                            className="p-2 text-sm text-muted-foreground bg-transparent border border-border rounded-lg"
                            placeholder="Your email"
                        />
                        <button className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                    &copy; {new Date().getFullYear()} Swiftwave.io . All rights reserved.
                </p>
            </div>

        </footer>
    )
}

export default Footer
