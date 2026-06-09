import React from 'react';
import ServiceDetail from './ServiceDetail';

export default function Accounting() {
  return (
    <ServiceDetail
      title="Accounting, Bookkeeping & Payroll"
      subtitle="Systematic financial record-keeping, accurate financial statements, and error-free payroll processing for growing businesses."
      bgText="Books"
      breadcrumbs={[{ label: 'Services', path: '/services' }, { label: 'Accounting & Payroll' }]}
      heading="Financial Clarity for Your Business"
      paragraphs={[
        "Accurate books of accounts are the foundation of every sound business decision. Our accounting team maintains your financial records with precision, produces management reports that give you actionable insights, and processes payroll so your employees are always paid accurately and on time.",
        "We work with popular accounting software including Tally Prime, Zoho Books, QuickBooks, and SAP Business One — adapting to your existing systems for seamless integration."
      ]}
      deliverables={[
        "Monthly bookkeeping and ledger maintenance",
        "Bank reconciliation and accounts payable/receivable management",
        "Preparation of P&L statements and Balance Sheets",
        "Cash flow statements and management accounting reports",
        "Payroll processing, salary computation, and payslip generation",
        "TDS deduction, deposit, and quarterly return filing (24Q, 26Q)",
        "PF, ESI, PT compliance and filings",
        "Fixed asset register management and depreciation calculation",
        "MIS reporting and budget vs. actual analysis",
        "Year-end audit support and finalization of accounts"
      ]}
      processSteps={[
        { title: "Data Collection", desc: "We collect invoices, bank statements, expense records, and payroll data securely each month." },
        { title: "Accounting & Reconciliation", desc: "Transactions are entered, classified, and reconciled with bank statements and GST data." },
        { title: "Reporting & Compliance", desc: "Monthly financial reports and payroll outputs are delivered with statutory filings completed." }
      ]}
      benefits={[
        { icon: "fa-chart-bar", title: "Business Insights", desc: "Real-time financial data to inform your pricing, hiring, and investment decisions." },
        { icon: "fa-check-double", title: "Audit-Ready Records", desc: "Clean books maintained per accounting standards, ready for any audit." },
        { icon: "fa-users", title: "Happy Employees", desc: "Accurate, on-time payroll builds trust and reduces HR headaches." }
      ]}
      faqs={[
        { question: "Do you support remote/cloud-based accounting?", answer: "Yes. We fully support cloud-based accounting via Zoho Books, QuickBooks Online, and other platforms. Our team can access your data remotely and deliver all reports digitally without requiring physical presence." },
        { question: "What software do you use for payroll?", answer: "We use dedicated payroll software as well as Tally and Zoho Payroll, depending on your business size and existing systems. We generate payslips, statutory reports, and handle PF/ESI filings within the same workflow." }
      ]}
      advisor={{
        name: "M. D. Kulkarni",
        role: "Compliance & Accounting Lead",
        bio: "Expert in corporate payroll management, financial ledger accounting, and annual audits.",
        image: "/images/service_5.jpg"
      }}
      relatedServices={[
        { label: "Income Tax Filing", path: "/services/income-tax" },
        { label: "GST Registration & Returns", path: "/services/gst" },
        { label: "Business Registration", path: "/services/business-reg" },
        { label: "Strategic Tax Planning", path: "/services/tax-planning" }
      ]}
      keyResources={[
        { label: "TDS Rates Table", path: "/knowledge-bank/utilities#tds-rates" },
        { label: "ROC Fee Structure", path: "/knowledge-bank/utilities#roc-fees" },
        { label: "Companies Act", path: "/knowledge-bank/acts#companies-act" }
      ]}
      ctaText="Let us manage the books while you focus on growth —"
    />
  );
}
