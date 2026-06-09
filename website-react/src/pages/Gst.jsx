import React from 'react';
import ServiceDetail from './ServiceDetail';

export default function Gst() {
  return (
    <ServiceDetail
      title="GST Registration, Returns & Advisory"
      subtitle="Full-spectrum GST compliance — registration, monthly filings, ITC optimization, and GST audit support."
      bgText="GST"
      breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'GST Advisory' }]}
      heading="Comprehensive GST Advisory Services"
      paragraphs={[
        "Goods & Services Tax compliance requires meticulous record-keeping and timely filings across multiple return forms. Our GST specialists handle everything from initial registration to complex audit responses, ensuring your business remains fully compliant and optimally structured for input tax credit.",
        "We serve traders, manufacturers, service providers, and e-commerce operators across all industry verticals, providing ongoing advisory that adapts to GST council updates and circulars."
      ]}
      deliverables={[
        "GST Registration (Regular, Composition, Casual, Non-Resident)",
        "Monthly / Quarterly GSTR-1, GSTR-3B filing",
        "Annual Return (GSTR-9) and Reconciliation Statement (GSTR-9C)",
        "Input Tax Credit (ITC) optimization and reconciliation",
        "GST audit support and representation before GST authorities",
        "GST notices, demand orders, and SCN response drafting",
        "E-way bill generation and compliance advisory",
        "Refund applications (Export, Inverted Duty, Zero-rated)",
        "GST health check and compliance review audits",
        "Transition advisory for composition to regular taxpayer"
      ]}
      processSteps={[
        { title: "Business Assessment", desc: "We review your turnover, supply types, and registration requirements to determine the right GST structure." },
        { title: "Registration & Setup", desc: "GST registration is completed with accurate HSN/SAC codes, business category, and appropriate filing frequency." },
        { title: "Monthly Compliance", desc: "We handle all return filings, ITC matching, and GST payment scheduling on an ongoing basis." }
      ]}
      benefits={[
        { icon: "fa-clock", title: "On-Time Filing", desc: "Zero late fees with proactive deadline tracking and scheduled submissions." },
        { icon: "fa-magnifying-glass-chart", title: "ITC Maximization", desc: "Our reconciliation process ensures you claim every eligible input tax credit." },
        { icon: "fa-headset", title: "Dedicated Support", desc: "A dedicated GST advisor answers queries within 24 hours." }
      ]}
      faqs={[
        { question: "When is GST registration mandatory?", answer: "GST registration is mandatory when your aggregate turnover exceeds ₹40 lakh (goods) or ₹20 lakh (services) in a financial year. Certain businesses (inter-state supply, e-commerce) must register regardless of turnover." },
        { question: "What is the composition scheme and who can opt?", answer: "The composition scheme allows small taxpayers (turnover up to ₹1.5 crore) to pay GST at a flat rate with simplified compliance. Manufacturers, traders, and select service providers can opt in." },
        { question: "How do we handle GST notices or demands?", answer: "Our specialists analyze the notice, prepare a detailed response with supporting documentation, and represent you before GST authorities to protect your interests." }
      ]}
      advisor={{
        name: "CA Pravin Chavan",
        role: "Partner & Chartered Accountant",
        bio: "Fellow Chartered Accountant (FCA) with 15+ years of auditing and business GST advisory expertise.",
        image: "/images/testimonial_avatar.jpg"
      }}
      relatedServices={[
        { label: "Income Tax Filing", path: "/services/income-tax" },
        { label: "Tax Planning", path: "/services/tax-planning" },
        { label: "Accounting & Payroll", path: "/services/accounting" },
        { label: "Business Registration", path: "/services/business-reg" }
      ]}
      keyResources={[
        { label: "GST Calculator", path: "/knowledge-bank/calculators#gst-calc" },
        { label: "GST Forms", path: "/knowledge-bank/forms#gst-forms" },
        { label: "GST Acts", path: "/knowledge-bank/acts#gst-act" },
        { label: "GST Bulletins", path: "/knowledge-bank/bulletins#gst" }
      ]}
      ctaText="Stay GST compliant without the stress —"
    />
  );
}
