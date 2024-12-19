import { Link } from "react-router-dom";

const CookiePolicy = () => {
    return (
        <div>

            <section class="shadow-md rounded-md mx-auto max-w-4xl">
                <div className="py-16" />
                <h1 class="text-3xl font-bold text-[#f9971d] text-center">Cookie Policy</h1>
                <p class="mb-4">Effective Date: <span className="text-[#f9971d]">1 October 2024</span></p>

                <div class="space-y-4">
                    <h2 class="text-xl font-semibold text-[#f9971d]">1. What Are Cookies?</h2>
                    <p>Cookies are small text files stored on your device when you visit a website. They allow us to recognize your device and store preferences, enhancing your browsing experience on our website.</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">2. How We Use Cookies</h2>
                    <ul class="list-disc ml-5">
                        <li><strong>Essential Cookies</strong>: These are necessary for the website to function properly.</li>
                        <li><strong>Performance and Analytics Cookies</strong>: We use these to collect data on how visitors use our website, which helps us improve the site’s functionality.</li>
                        <li><strong>Advertising Cookies</strong>: We may use these cookies to display ads that are relevant to your interests.</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-[#f9971d]">3. Managing Cookies</h2>
                    <p>You can manage and control cookies through your browser settings. Most browsers allow you to refuse cookies or delete cookies that have been set. However, disabling cookies may affect the functionality of our website.</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">4. Third-Party Cookies</h2>
                    <p>Our website may also include third-party services that use cookies. These include analytics and advertising services like Google Analytics. We do not control third-party cookies, and you should refer to their respective privacy policies for more information.</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">5. Contact Us</h2>
                    <p>If you have any questions about our use of cookies, please contact us at:</p>
                    <ul class="list-disc ml-5">
                        <li>Email: <Link className="link link-warning" to='mailto:contact@alphaoneedu.com'>contact@alphaoneedu.com</Link></li>
                        <li>Phone: <Link className="link link-warning" to='tel:+821071120197'>+821071120197</Link></li>
                    </ul>
                </div>

                <div className="py-16" />
            </section>
        </div>
    );
};

export default CookiePolicy;