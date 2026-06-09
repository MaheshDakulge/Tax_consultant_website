import React from 'react';
import ServiceDetail from './ServiceDetail';

export default function NriTaxation() {
  return (
    <ServiceDetail
      title="NRI Taxation & FEMA Advisory"
      subtitle="Specialized guidance for Non-Resident Indians on DTAA benefits, repatriation, FEMA compliance, and India-sourced income tax."
      bgText="NRI"
      breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'NRI Taxation' }]}
      heading="Expert Guidance for the Global Indian"
      paragraphs={[
        "As an NRI or a returning Indian, your tax situation involves multiple jurisdictions, treaty benefits, FEMA regulations, and residency rules that change your tax obligations significantly. Our specialists have deep expertise in NRI taxation across all common countries of residence — UAE, USA, UK, Canada, Australia, and Singapore.",
        "We ensure you are correctly classified as NRI or RNOR, claim all available DTAA benefits, and remain fully compliant with both Indian and home-country requirements."
      ]}
      deliverables={[
        "Residential status determination (NRI / RNOR / Resident)",
        "Income Tax filing for NRI income from India (rent, capital gains, interest)",
        "DTAA benefit analysis and application for lower TDS",
        "Lower TDS certificate (Section 197) applications",
        "FEMA compliance for property purchase/sale, NRE/NRO account management",
        "Repatriation of funds from India — LRS, Form 15CA/CB",
        "Gift and inheritance tax planning for NRIs",
        "Return to India planning — tax optimization for homecoming",
        "TDS refund claims and ITR filing",
        "Investment advisory (NRE/NRO FD, Mutual Funds, Real Estate)"
      ]}
      processSteps={[
        { title: "Status Assessment", desc: "We determine your tax residency status, FEMA status, and applicable treaty benefits based on your travel history." },
        { title: "Income Mapping", desc: "All India-sourced income is identified, classified, and optimized using available exemptions and DTAA provisions." },
        { title: "Filing & Repatriation", desc: "ITR is filed, Form 15CA/CB is prepared, and repatriation documentation is arranged end-to-end." }
      ]}
      benefits={[
        { icon: "fa-globe", title: "Cross-border Expertise", desc: "Deep knowledge of DTAA with 90+ countries to minimize double taxation." },
        { icon: "fa-video", title: "Remote Advisory", desc: "Consultations via video call — no need to be physically present in India." },
        { icon: "fa-lock", title: "FEMA Compliant", desc: "Ensure all transactions comply with RBI and FEMA regulations to avoid penalties." }
      ]}
      faqs={[
        { question: "Do NRIs need to file ITR in India?", answer: "NRIs must file ITR in India if their India-sourced income exceeds the basic exemption limit (₹2.5 lakh), or if they have capital gains, or wish to claim a TDS refund. We advise on filing obligations based on your individual situation." },
        { question: "Can I transfer money from India to abroad?", answer: "Yes, subject to FEMA regulations. NRIs can freely repatriate funds from NRE accounts. For NRO accounts, repatriation up to USD 1 million per financial year is permitted subject to appropriate tax documentation (Form 15CA/CB)." }
      ]}
      advisor={{
        name: "P. R. Shinde",
        role: "NRI & Investment Counsel",
        bio: "Advises non-resident Indians on DTAA benefits, capital gains tax, and India compliance.",
        image: "/images/testimonial_avatar.jpg"
      }}
      relatedServices={[
        { label: "Income Tax Filing", path: "/services/income-tax" },
        { label: "Strategic Tax Planning", path: "/services/tax-planning" },
        { label: "Accounting & Payroll", path: "/services/accounting" },
        { label: "Business Registration", path: "/services/business-reg" }
      ]}
      keyResources={[
        { label: "FEMA Act Summary", path: "/knowledge-bank/acts#fema-act" },
        { label: "Income Tax Slabs", path: "/knowledge-bank/utilities#it-slabs" },
        { label: "FEMA Circulars", path: "/knowledge-bank/bulletins#company-law" }
      ]}
      ctaText="Living abroad? Your India finances still need expert care —"
    />
  );
}
