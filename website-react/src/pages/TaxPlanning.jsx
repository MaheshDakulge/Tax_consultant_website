import React from 'react';
import ServiceDetail from './ServiceDetail';

export default function TaxPlanning() {
  return (
    <ServiceDetail
      title="Strategic Tax Planning & Optimization"
      subtitle="Year-round strategies that reduce your tax liability legally — through smart deductions, exemptions, and entity structuring."
      bgText="Plan"
      breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'Tax Planning' }]}
      heading="Pay Only What You Legally Owe"
      paragraphs={[
        "Tax planning is not about evasion — it's about using every legal provision available to minimize your tax liability. Through careful analysis of your income, investments, expenditure, and business structure, our CAs craft a personalized tax strategy that works throughout the year, not just at filing time.",
        "Our approach is always client-first — we take the time to understand your unique situation before crafting solutions that are practical, legally sound, and genuinely value-adding."
      ]}
      deliverables={[
        "Personal tax planning for individuals, HUFs, and professionals",
        "Corporate tax optimization (Pvt Ltd, LLP, Partnership)",
        "Investment advisory aligned with tax savings (80C, 80D, NPS, ELSS)",
        "Salary structuring with allowances and perquisites optimization",
        "Capital gains planning — timing of asset sales, Section 54 exemptions",
        "Business entity selection advice (Sole Proprietorship vs LLP vs Pvt Ltd)",
        "Advance tax planning to avoid interest under Sections 234B & 234C",
        "Depreciation planning and accelerated deductions for businesses",
        "Tax-efficient succession and estate planning"
      ]}
      processSteps={[
        { title: "Financial Review", desc: "We analyze your income sources, investments, assets, and business structure for the full picture." },
        { title: "Strategy Formulation", desc: "A customized tax plan is created covering deductions, exemptions, timing, and structural recommendations." },
        { title: "Implementation & Review", desc: "We help execute the plan and review quarterly to adapt to law changes and financial developments." }
      ]}
      benefits={[
        { icon: "fa-piggy-bank", title: "Significant Savings", desc: "Clients typically save 15–30% on their total tax liability through structured planning." },
        { icon: "fa-calendar-check", title: "Year-Round Strategy", desc: "Ongoing advisory ensures your plan adapts to income changes and regulatory updates." },
        { icon: "fa-scale-balanced", title: "100% Legal Compliance", desc: "All strategies are within the bounds of the Income Tax Act with proper documentation." }
      ]}
      faqs={[
        { question: "When should I start tax planning for the year?", answer: "Ideally at the start of the financial year (April). Early planning allows time to make investments, structure income, and execute strategies before deadlines. However, planning mid-year still yields significant benefits." },
        { question: "Can tax planning help salaried employees?", answer: "Absolutely. Salary restructuring, HRA optimization, meal/transport allowances, Section 80C investments, and NPS contributions can significantly reduce a salaried employee's tax liability." }
      ]}
      advisor={{
        name: "N. M. Rao",
        role: "Project Finance Head",
        bio: "Specialist in corporate debt restructuring, banking liaison, and capital structures for businesses.",
        image: "/images/service_3.jpg"
      }}
      relatedServices={[
        { label: "Income Tax Filing", path: "/services/income-tax" },
        { label: "GST Advisory", path: "/services/gst" },
        { label: "Accounting & Payroll", path: "/services/accounting" },
        { label: "NRI Taxation", path: "/services/nri-taxation" }
      ]}
      keyResources={[
        { label: "Tax Calculator", path: "/knowledge-bank/calculators#tax-calc" },
        { label: "Income Tax Slabs", path: "/knowledge-bank/utilities#it-slabs" },
        { label: "IT Act Bulletins", path: "/knowledge-bank/bulletins#income-tax" }
      ]}
      ctaText="A smart tax plan can save you lakhs every year —"
    />
  );
}
