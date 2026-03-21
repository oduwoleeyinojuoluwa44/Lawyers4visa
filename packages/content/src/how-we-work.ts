export type HowWeWorkStep = {
  title: string;
  description: string;
};

export const howWeWorkPage = {
  eyebrow: 'How We Work',
  title: 'Our Professional Approach',
  intro: 'Our practice is structured to ensure thorough legal analysis and strategic case management at every stage.',
  steps: [
    {
      title: 'Initial Assessment',
      description: 'We conduct a detailed review of your immigration circumstances, eligibility under UK immigration rules, and any previous refusal history or compliance issues.',
    },
    {
      title: 'Legal Strategy Development',
      description: 'Based on our assessment, we develop a tailored legal strategy, identifying the most appropriate immigration route and advising on documentary requirements and potential obstacles.',
    },
    {
      title: 'Application Preparation',
      description: 'We prepare comprehensive applications, ensuring compliance with Immigration Rules, Appendices, and Home Office guidance. All supporting documents are reviewed for legal sufficiency.',
    },
    {
      title: 'Submission and Case Management',
      description: 'We manage the submission process, liaise with the Home Office or Entry Clearance Officer, and monitor case progress. Where necessary, we respond to requests for further information.',
    },
    {
      title: 'Post-Decision Advice',
      description: 'In the event of refusal, we provide detailed analysis of refusal reasons and advise on appeal rights, administrative review options, or fresh application strategies.',
    },
  ] satisfies HowWeWorkStep[],
  cta: {
    title: 'Discuss Your UK Immigration Matter with a Specialist',
    description: 'Whether you require advice on a visa application, sponsor licence compliance, refusal response, or tribunal representation, we provide UK-based legal expertise grounded in immigration law and Home Office practice.',
    href: '/book-consultation/'
  },
};
