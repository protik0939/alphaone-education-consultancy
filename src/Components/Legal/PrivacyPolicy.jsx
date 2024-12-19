import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div>
            <section class="shadow-md rounded-md mx-auto max-w-4xl">
                <div className="py-16" />
                <h1 class="text-3xl font-bold text-[#f9971d] text-center mb-6">Privacy Policy</h1>
                <p class="mb-4">Effective Date: <span className="text-[#f9971d]">1 October 2024</span></p>

                <div class="space-y-4">
                    <h2 class="text-xl font-semibold text-[#f9971d]">1. Introduction</h2>
                    <p>AlphaOne Education (“we,” “our,” or “us”) is committed to protecting your personal information and your right to privacy. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">2. Information We Collect</h2>
                    <ul class="list-disc ml-5">
                        <li><strong>Personal Information</strong>: When you contact us or register for our services, we may collect your name, email address, phone number, and academic details.</li>
                        <li><strong>Usage Data</strong>: We collect information automatically when you visit our website, such as your IP address, browser type, and usage statistics.</li>
                        <li><strong>Cookies</strong>: Our site uses cookies to enhance your browsing experience. (See our <Link  className="link link-warning" to='/cookiepolicy'>Cookie Policy</Link> for more details.)</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-[#f9971d]">3. How We Use Your Information</h2>
                    <ul class="list-disc ml-5">
                        <li>Providing and maintaining our services</li>
                        <li>Processing applications and inquiries</li>
                        <li>Sending you relevant updates and communications</li>
                        <li>Improving our website and user experience</li>
                        <li>Legal compliance and fraud prevention</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-[#f9971d]">4. Sharing Your Information</h2>
                    <p>We do not sell, trade, or transfer your personal information to third parties except in cases of:</p>
                    <ul class="list-disc ml-5">
                        <li>Legal requirements</li>
                        <li>University admissions where necessary to fulfill services</li>
                        <li>Trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-[#f9971d]">5. Data Security</h2>
                    <p>We implement appropriate security measures to protect your personal data from unauthorized access or disclosure. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">6. Your Rights</h2>
                    <p>You have the right to access, correct, or delete your personal information. You can also opt out of receiving communications from us at any time. To exercise your rights, contact us at [email address].</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">7. Changes to This Policy</h2>
                    <p>We reserve the right to update this Privacy Policy as needed. Changes will be posted on this page, and the updated date will be mentioned at the top.</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">8. Contact Us</h2>
                    <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
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

export default PrivacyPolicy;