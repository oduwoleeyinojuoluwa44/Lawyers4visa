import type { ConsultationType } from "./consultation";

export type ServicePageSection = {
  title: string;
  description: string[];
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  consultationType: ConsultationType;
};

export const servicesPage = {
  title: "Immigration Legal Services",
  intro:
    "Our legal team provides structured immigration advice and formal representation grounded in regulatory practice and evidential standards. Every case is prepared with precision to present the strongest possible legal position.",
  heroImageSrc: "/images/services/services-hero.jpg",
  heroImageAlt:
    "Immigration law books and a courtroom gavel arranged on a polished wooden desk.",
  sections: [
    {
      title: "Representations and Administrative Review",
      description: [
        "Challenging visa refusals and adverse Home Office decisions through structured legal submissions and formal review procedures.",
        "Where appeal rights are not available, carefully prepared representations may be required to address legal or evidential concerns."
      ],
      bullets: [
        "Administrative review applications",
        "Formal representations to the Home Office",
        "Pre-action correspondence",
        "Reapplication strategy following refusal",
        "Case restructuring and evidential reassessment"
      ],
      imageSrc: "/images/services/representations.jpg",
      imageAlt: "A lawyer meeting two clients across a conference table during a case review.",
      consultationType: "appeal-refusal"
    },
    {
      title: "Corporate Immigration Services",
      description: [
        "Strategic UK immigration advice for employers, sponsor licence holders, and businesses expanding operations into the United Kingdom.",
        "The firm advises corporate clients on immigration planning, regulatory compliance, and workforce mobility matters requiring structured legal oversight."
      ],
      bullets: [
        "Sponsor licence applications and compliance",
        "Skilled Worker and Expansion Worker routes",
        "Employer immigration compliance obligations",
        "Business immigration strategy and planning",
        "Ongoing advisory support for UK-based operations"
      ],
      imageSrc: "/images/services/corporate-immigration.jpg",
      imageAlt: "Corporate hands reviewing legal paperwork and a tablet during a strategy meeting.",
      consultationType: "corporate-immigration"
    },
    {
      title: "Visa Application Services",
      description: [
        "Preparation and submission of UK visa applications across business, family, settlement, and private immigration routes.",
        "Applications are structured to address eligibility requirements, evidential standards, and potential risk factors prior to submission."
      ],
      bullets: [
        "Skilled Worker visa applications",
        "Innovator Founder and Global Talent routes",
        "Spouse, partner, and family visas",
        "Visitor and Student visas",
        "Settlement and Indefinite Leave to Remain applications"
      ],
      imageSrc: "/images/services/visa-application.jpg",
      imageAlt: "A passport, visa forms, and supporting documents prepared for application review.",
      consultationType: "individual-immigration"
    },
    {
      title: "Immigration Appeals",
      description: [
        "Representation before the Immigration and Asylum Chamber and higher courts in refusal and appeal matters.",
        "The firm advises clients whose applications have been refused or where adverse immigration decisions require structured legal challenge."
      ],
      bullets: [
        "First-tier Tribunal appeals",
        "Upper Tribunal appeals",
        "Human rights-based immigration appeals",
        "Complex refusal-sensitive matters",
        "Strategic advice on appeal prospects"
      ],
      imageSrc: "/images/services/immigration-appeals.jpg",
      imageAlt: "Immigration appeal paperwork laid beside travel documents and a pen for case preparation.",
      consultationType: "appeal-refusal"
    }
  ] satisfies ServicePageSection[],
  cta: {
    title: "Discuss Your UK Immigration Matter with a Specialist",
    description:
      "Whether you require advice on a visa application, sponsor licence compliance, refusal response, or tribunal representation, we provide UK-based legal expertise grounded in immigration law and Home Office practice.",
    href: "/book-consultation/"
  }
};

export const coreServiceLines = servicesPage.sections.map((section) => ({
  title: section.title,
  summary: section.description[0]
}));
