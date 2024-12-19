import { Link } from "react-router-dom";

const TermsOfUse = () => {
    return (
        <div>

            <section class="shadow-md rounded-md mx-auto max-w-4xl">
                <div className="py-16" />
                <h1 class="text-3xl font-bold text-[#f9971d] text-center">Terms & Conditions</h1>
                <p class="mb-4">Effective Date: <span className="text-[#f9971d]">1 October 2024</span></p>

                <div class="space-y-4">
                    <h2 class="text-xl font-semibold text-[#f9971d]">1. Introduction</h2>
                    <p>Welcome to the AlphaOne Education website (“Site”). By accessing or using our Site and services, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please refrain from using our Site.</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">2. Use of Services</h2>
                    <ul class="list-disc ml-5">
                        <li>You must be at least 18 years old to use our services.</li>
                        <li>You agree not to use the Site for any unlawful purposes or activities.</li>
                        <li>You are responsible for ensuring the accuracy of all information provided to us.</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-[#f9971d]">3. Intellectual Property</h2>
                    <p>All content on this Site, including text, images, logos, and design, is the property of AlphaOne Education or our content providers. Unauthorized use, copying, or distribution of this content is prohibited.</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">4. Limitation of Liability</h2>
                    <p>We strive to provide accurate and up-to-date information, but AlphaOne Education makes no warranties regarding the completeness or accuracy of the content provided on the Site. We will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Site or services.</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">5. Links to Third-Party Websites</h2>
                    <p>Our Site may contain links to third-party websites. We do not control or endorse these websites and are not responsible for their content, policies, or practices. Accessing third-party websites is at your own risk.</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">6. User Accounts</h2>
                    <ul class="list-disc ml-5">
                        <li>You agree to provide accurate, current, and complete information when registering for an account.</li>
                        <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                        <li>We reserve the right to terminate your account if any of these Terms are violated.</li>
                    </ul>

                    <h2 class="text-xl font-semibold text-[#f9971d]">7. Termination</h2>
                    <p>We reserve the right to terminate or suspend access to our Site and services at any time, without notice, for any reason, including breach of these Terms.</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">8. Governing Law</h2>
                    <p>These Terms & Conditions are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from these Terms will be resolved in the courts of [Your Country/State].</p>

                    <h2 class="text-xl font-semibold text-[#f9971d]">9. Contact Us</h2>
                    <p>If you have any questions regarding these Terms & Conditions, please contact us at:</p>
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

export default TermsOfUse;