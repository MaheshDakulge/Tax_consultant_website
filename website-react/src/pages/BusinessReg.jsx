import React from 'react';
import ServiceDetail from './ServiceDetail';

export default function BusinessReg() {
  return (
    <ServiceDetail
      title="Business Registration & Incorporation"
      subtitle="Seamless company formation — Private Limited, LLP, OPC, Partnership, and Proprietorship with end-to-end compliance support."
      bgText="Reg."
      breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'Business Registration' }]}
      heading="Start Your Business the Right Way"
      paragraphs={[
        "Choosing the right business structure is one of the most important decisions an entrepreneur makes. The entity type affects your tax liability, compliance burden, fundraising ability, and personal liability. Our CAs guide you through the selection process and handle all MCA and Registrar of Companies (ROC) filings for a smooth, error-free incorporation."
      ]}
      deliverables={[
        "Private Limited Company incorporation (MCA-21 SPICe+ form)",
        "Limited Liability Partnership (LLP) registration",
        "One Person Company (OPC) formation",
        "Partnership Firm deed drafting and registration",
        "Sole Proprietorship establishment and registrations",
        "DIN, DSC, and DPIN procurement",
        "PAN, TAN, GST registration for new entities",
        "MOA, AOA, and LLP agreement drafting",
        "Annual ROC filing compliance (AOC-4, MGT-7)",
        "Company name change, object change, and alteration procedures"
      ]}
      processSteps={[
        { title: "Structure Advisory", desc: "We analyze your business goals, investor plans, and team size to recommend the optimal entity structure." },
        { title: "Documentation & Filing", desc: "We prepare all required documents and file with MCA/ROC for incorporation, typically within 5–7 working days." },
        { title: "Post-Incorporation Setup", desc: "Bank account opening, registrations (GST, PAN, TAN), and initial compliance calendar setup." }
      ]}
      benefits={[
        { icon: "fa-shield-halved", title: "Limited Liability", desc: "Protect your personal assets from business debts and legal claims." },
        { icon: "fa-handshake", title: "Credibility", desc: "Registered entities are trusted by banks, clients, and investors." },
        { icon: "fa-chart-line", title: "Investment Ready", desc: "Private Limited companies can raise equity capital and issue shares." }
      ]}
      faqs={[
        { question: "Private Limited vs LLP — which is better?", answer: "A Private Limited Company is better for startups seeking investment, requiring equity sharing, or planning to scale significantly. An LLP is ideal for professional services, partnerships seeking operational flexibility, and lower compliance burden." },
        { question: "How long does company registration take?", answer: "A Private Limited Company can typically be incorporated in 7–10 working days from document submission. LLP registration takes 5–7 days. We handle all MCA filings to ensure the fastest possible turnaround." }
      ]}
      advisor={{
        name: "S. K. Joshi",
        role: "Corporate Law Expert",
        bio: "Experienced professional handling private limited setups, ROC compliance, and LLP registrations.",
        image: "/images/service_4.jpg"
      }}
      relatedServices={[
        { label: "Accounting & Payroll", path: "/services/accounting" },
        { label: "GST Registration & Returns", path: "/services/gst" },
        { label: "Income Tax Filing", path: "/services/income-tax" },
        { label: "Strategic Tax Planning", path: "/services/tax-planning" }
      ]}
      keyResources={[
        { label: "Companies Act 2013", path: "/knowledge-bank/acts#companies-act" },
        { label: "ROC Forms", path: "/knowledge-bank/forms#roc-forms" },
        { label: "MCA Circulars", path: "/knowledge-bank/bulletins#company-law" }
      ]}
      ctaText="Ready to launch your business?"
    />
  );
}
