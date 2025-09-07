
function Footer() {
    return (
        <footer className="bg-gray-primary-100 text-text-primary py-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Logo + Tagline */}
                <div>
                    <h2 className="secondaryBoldWeight text-2xl text-text-secondary">RideWave</h2>
                    <p className="primaryFontNormal text-sm mt-2 text-text-primary">
                        The #1 logistics tool for shippers, carriers & owner-operators.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="primaryFontBold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-custom-button-primary-bg">Home</a></li>
                        <li><a href="#" className="hover:text-custom-button-primary-bg">About</a></li>
                        <li><a href="#" className="hover:text-custom-button-primary-bg">Features</a></li>
                        <li><a href="#" className="hover:text-custom-button-primary-bg">Contact</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="primaryFontBold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="h-5 w-5" /></a>
                        <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="h-5 w-5" /></a>
                        <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5" /></a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t mt-10 pt-4 text-center text-sm text-text-tertairy">
                © {new Date().getFullYear()} RideWave. All rights reserved.
            </div>
        </footer>
    )
}
export default Footer