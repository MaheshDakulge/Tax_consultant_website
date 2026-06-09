import React from 'react';
import ServiceDetail from './ServiceDetail';

export default function IncomeTax() {
  return (
    <ServiceDetail
      title="Income Tax Filing & Returns"
      subtitle="Accurate, timely, and deduction-maximizing ITR filing for individuals, HUFs, and businesses."
      bgText="ITR"
      breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'Income Tax' }]}
      heading="Expert Income Tax Filing You Can Trust"
      paragraphs={[
        "Filing income tax returns can be complex — from choosing the right ITR form to ensuring all eligible deductions are claimed. Our chartered accountants handle your return filing end-to-end, ensuring 100% accuracy, timely submission, and maximum legally permissible tax savings.",
        "Whether you are a salaried employee, self-employed professional, freelancer, HUF, or corporate entity, we have the expertise to handle your income tax needs with precision and care."
      ]}
      deliverables={[
        "ITR Filing for Individuals (Salaried, Self-employed, Freelancers)",
        "HUF (Hindu Undivided Family) ITR preparation & filing",
        "Business & Partnership Firm returns (ITR-3, ITR-5)",
        "Advance Tax calculation & payment scheduling",
        "TDS/TCS reconciliation with Form 26AS & AIS",
        "Income Tax Notice handling and representation",
        "Capital Gains computation (Equity, Property, Mutual Funds)",
        "Deduction optimization under Section 80C, 80D, 80G, HRA, LTA",
        "Revised & Belated Return filings",
        "Income Tax Refund status tracking & follow-up"
      ]}
      processSteps={[
        { title: "Document Collection", desc: "We gather Form 16, bank statements, investment proofs, and all income documents." },
        { title: "Tax Computation", desc: "Our CA computes your total income, applies eligible deductions, and selects the optimal regime." },
        { title: "Filing & Acknowledgement", desc: "Return is filed on the income tax portal and ITR-V acknowledgement is shared with you." }
      ]}
      benefits={[
        { icon: "fa-shield-halved", title: "Zero Error Guarantee", desc: "Every return is reviewed by a senior CA before submission." },
        { icon: "fa-bolt", title: "Fast Turnaround", desc: "Most returns completed within 48 hours of document receipt." },
        { icon: "fa-indian-rupee-sign", title: "Maximum Savings", desc: "We identify every eligible deduction to minimize your tax legally." }
      ]}
      faqs={[
        { question: "What is the due date for filing ITR?", answer: "For individuals not requiring audit, the due date is July 31st of the assessment year. For audit cases, it is October 31st. We track all deadlines and file well in advance." },
        { question: "Which ITR form should I file?", answer: "The form depends on your income sources. Our CA will determine the correct form (ITR-1 to ITR-7) based on your income type, quantum, and applicable exemptions." },
        { question: "Old vs New Tax Regime — which is better?", answer: "It depends on your income level and eligible deductions. Our tax calculator and expert guidance helps you choose the regime that results in lower tax outgo." }
      ]}
      advisor={{
        name: "J. R. Jinke",
        role: "Lead Advisor — Tax Services",
        bio: "Founder & principal tax consultant with over 12 years of tax compliance and planning experience.",
        image: "/images/service_1.jpg"
      }}
      relatedServices={[
        { label: "GST Registration & Returns", path: "/services/gst" },
        { label: "Strategic Tax Planning", path: "/services/tax-planning" },
        { label: "Accounting & Payroll", path: "/services/accounting" },
        { label: "NRI Taxation", path: "/services/nri-taxation" },
        { label: "Tax Calculators", path: "/knowledge-bank/calculators" }
      ]}
      keyResources={[
        { label: "Income Tax Slab Rates", path: "/knowledge-bank/utilities#it-slabs" },
        { label: "Income Tax Forms", path: "/knowledge-bank/forms#it-forms" },
        { label: "Tax Calculator Tool", path: "/knowledge-bank/calculators#tax-calc" },
        { label: "Income Tax Act", path: "/knowledge-bank/acts#income-tax-act" }
      ]}
      ctaText="File your income tax return the right way —"
    />
  );
}
