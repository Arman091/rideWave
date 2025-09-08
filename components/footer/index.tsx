
"use client"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Logo + Tagline */}
                <div>
                    <h2 className="secondaryBoldWeight text-3xl text-text-secondary">RideWave</h2>
                    <p className="primaryFontNormal text-sm mt-3 text-text-primary leading-relaxed">
                        The #1 logistics tool for shippers, carriers & owner-operators.
                        Simplify freight, manage fleets, and grow your business.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="primaryFontBold text-lg mb-4 text-text-primary">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-button-primary-bg">Home</a></li>
                        <li><a href="#" className="hover:text-button-primary-bg">About</a></li>
                        <li><a href="#" className="hover:text-button-primary-bg">Features</a></li>
                        <li><a href="#" className="hover:text-button-primary-bg">Contact</a></li>
                    </ul>
                </div>

                {/* Newsletter / Social */}
                <div>
                    <h3 className="primaryFontBold text-lg mb-4 text-text-primary">Stay Connected</h3>
                    <form className="flex mb-4">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 px-3 py-2 rounded-l-md border border-gray-300 text-sm focus:outline-none"
                        />
                        <button className="px-4 py-2 border-white bg-button-primary-bg text-button-primary-text rounded-r-md text-sm font-semibold hover:opacity-90">
                            Subscribe
                        </button>
                    </form>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="social flex items-center justify-center h-10 w-10 rounded-full bg-text-tertiary text-black hover:bg-white"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="#"
                            className="social flex items-center justify-center h-10 w-10 rounded-full bg-text-tertiary text-black hover:bg-white"
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href="#"
                            className="social flex items-center justify-center h-10 w-10 rounded-full bg-text-tertiary text-black hover:bg-white"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="py-4 text-center text-sm text-text-gray border-t border-gray-300 dark:border-gray-700">
                © {new Date().getFullYear()} RideWave. All rights reserved.
            </div>

            <style jsx>{`
            .footer {
            background-color: var(--button-primary-bg);
            color: var(--text-tertiary);
            }
            .footer a {
            color: var(--text-tertiary);
            transition: color 0.3s ease;
            }
            .social{
            border:1px solid white;
            padding:10px;
            border-radius:100%;
            }
            .footer a:hover {
            color: var(--button-primary-bg);
            }
            input {
            background-color: var(--bg-color-primary);
            color: var(--text-primary);
            }
  `}</style>
        </footer>

    )
}
export default Footer