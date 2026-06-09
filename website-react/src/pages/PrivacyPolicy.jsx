import React from 'react';
import PageHero from '../components/ui/PageHero';

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Last updated: July 2025"
        bgText="Privacy"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="reveal">
        <div className="section-container" style={{ maxWidth: '800px' }}>
          <div className="legal-prose" style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--color-text)' }}>
            <span className="section-tag">[ ✕ ] Privacy</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', margin: '24px 0 16px', color: 'var(--color-dark)' }}>
              Our Privacy Commitment
            </h2>
            <p>At Jinke & Associates, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard personal information obtained through our website.</p>
            
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', margin: '24px 0 12px', color: 'var(--color-dark)' }}>
              1. Personal Data We Collect
            </h3>
            <p>We may collect personal identification information from you in a variety of ways, including when you visit our site, register on the site, fill out a contact form, or subscribe to our newsletter. Information collected may include:</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Full Name</li>
              <li>Phone Number / Mobile Number</li>
              <li>Email Address</li>
              <li>Service requirements and business concerns</li>
            </ul>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', margin: '24px 0 12px', color: 'var(--color-dark)' }}>
              2. How We Use Collected Information
            </h3>
            <p>Jinke & Associates may collect and use personal information for the following purposes:</p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>To improve client service:</strong> Information you provide helps us respond to your client service requests and support needs more efficiently.</li>
              <li><strong>To personalize user experience:</strong> We may use information in the aggregate to understand how our users as a group use the services and resources provided on our site.</li>
              <li><strong>To send periodic emails:</strong> We may use the email address to respond to inquiries, questions, and/or other requests.</li>
            </ul>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', margin: '24px 0 12px', color: 'var(--color-dark)' }}>
              3. Data Protection and Security
            </h3>
            <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.</p>
            <p>Client data shared during formal tax consultation and filing engagements is governed by strict professional confidentiality rules mandated by the Institute of Chartered Accountants of India (ICAI).</p>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', margin: '24px 0 12px', color: 'var(--color-dark)' }}>
              4. Sharing Your Personal Information
            </h3>
            <p>We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our trusted business partners, trusted affiliates, and advertisers for the purposes outlined above.</p>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', margin: '24px 0 12px', color: 'var(--color-dark)' }}>
              5. Changes to This Privacy Policy
            </h3>
            <p>Jinke & Associates has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.</p>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', margin: '24px 0 12px', color: 'var(--color-dark)' }}>
              6. Contact Us
            </h3>
            <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <a href="mailto:query@jinkeassociates.com" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>query@jinkeassociates.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
