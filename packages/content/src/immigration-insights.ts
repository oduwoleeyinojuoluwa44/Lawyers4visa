export type ImmigrationInsightCategory =
  | "UK Immigration"
  | "Canada Immigration"
  | "US Immigration";

export type ImmigrationInsightBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type ImmigrationInsightSection = {
  title: string;
  blocks: ImmigrationInsightBlock[];
};

export type ImmigrationInsightArticle = {
  slug: string;
  title: string;
  category: ImmigrationInsightCategory;
  publishedAt: string;
  publishedLabel: string;
  excerpt: string;
  heroImage: string;
  sections: ImmigrationInsightSection[];
};

export const immigrationInsightCategories: ImmigrationInsightCategory[] = [
  "UK Immigration",
  "Canada Immigration",
  "US Immigration"
];

export const immigrationInsightsPage = {
  eyebrow: "Structured legal commentary",
  title: "Immigration News, Insights and Analysis",
  description:
    "Policy updates and structured legal commentary on UK, Canadian, and US immigration developments.",
  primaryCta: {
    label: "Book Consultation",
    href: "/book-consultation/"
  },
  secondaryCta: {
    label: "View Our Services",
    href: "/services/"
  },
  heroImages: {
    primary: "/images/services/corporate-immigration.jpg",
    secondary: "/images/services/visa-application.jpg"
  },
  cta: {
    title: "Discuss Your UK Immigration Matter with a Specialist",
    description:
      "Whether you require advice on a visa application, sponsor licence compliance, refusal response, or tribunal representation, we provide Lagos-based legal expertise from 56 Afolabi Aina Street off Allen Avenue, Ikeja, grounded in immigration law and Home Office practice.",
    href: "/book-consultation/"
  }
};

export const immigrationInsightArticles: ImmigrationInsightArticle[] = [
  {
    slug: "the-2025-immigration-white-paper-what-you-need-to-know",
    title: "The 2025 Immigration White Paper: What You Need to Know",
    category: "UK Immigration",
    publishedAt: "2026-01-01",
    publishedLabel: "January 2026",
    excerpt:
      "On 12 May 2025, the UK Government published its landmark policy document, Restoring Control over the Immigration System. This white paper represents the most significant overhaul of the UK's legal migration model in 50 years and signals a fundamental shift in how the Government approaches immigration policy.",
    heroImage: "/images/services/visa-application.jpg",
    sections: [
      {
        title: "Key Proposals",
        blocks: [
          {
            type: "paragraph",
            text:
              "The white paper outlines the Government's intention to reduce net migration through a series of interconnected measures. While a white paper does not, by itself, alter the law or immigration rules, it establishes the policy direction that subsequent rule changes will follow. Many of these proposals are now being implemented through statements of changes to the Immigration Rules."
          }
        ]
      },
      {
        title: "The core proposals include:",
        blocks: [
          {
            type: "list",
            items: [
              "Raising the skills threshold for Skilled Worker visas to degree level (RQF Level 6)",
              "Extending the qualifying period for Indefinite Leave to Remain to 10 years",
              "Increasing English language requirements across all visa routes",
              "Introducing a levy on international student fees",
              "Creating a new Temporary Shortage List with restricted conditions",
              "Closing the overseas care worker visa route to new applicants"
            ]
          }
        ]
      },
      {
        title: "What This Means for Nigerian Applicants",
        blocks: [
          {
            type: "paragraph",
            text:
              "For Nigerian nationals considering UK immigration, these changes underscore the importance of early planning and professional legal advice."
          },
          {
            type: "paragraph",
            text:
              "The window for certain visa categories is narrowing, and the requirements for successful applications are becoming more demanding. Those already in the UK on existing visas should note that transitional arrangements may protect their current status, but future applications will be assessed under the new, stricter criteria."
          }
        ]
      }
    ]
  },
  {
    slug: "skilled-worker-visa-changes-new-requirements-from-july-2025",
    title: "Skilled Worker Visa Changes: New Requirements from July 2025",
    category: "UK Immigration",
    publishedAt: "2025-07-22",
    publishedLabel: "22 July 2025",
    excerpt:
      "The Skilled Worker visa route has undergone the most substantial changes in the 2025 reforms. From 22 July 2025, the rules governing who can be sponsored for skilled work in the UK have changed significantly.",
    heroImage: "/images/services/corporate-immigration.jpg",
    sections: [
      {
        title: "New Skills Threshold",
        blocks: [
          {
            type: "paragraph",
            text:
              "The skills occupation threshold has been raised from RQF Level 3 (A-level equivalent) to RQF Level 6 (degree level)."
          },
          {
            type: "paragraph",
            text:
              "This means approximately 180 occupations that were previously eligible for sponsorship are no longer available to new applicants."
          },
          {
            type: "paragraph",
            text:
              "Only jobs requiring at least an undergraduate degree level of skill will now qualify for Skilled Worker sponsorship."
          }
        ]
      },
      {
        title: "Salary Requirements",
        blocks: [
          {
            type: "paragraph",
            text:
              "The general salary threshold for Skilled Worker visas has increased to GBP 41,700 as of 22 July 2025."
          },
          {
            type: "paragraph",
            text:
              "Employers must also meet occupation-specific going rates, which may be higher depending on the role."
          },
          {
            type: "paragraph",
            text:
              "All salaries are calculated based on a 37.5-hour working week and must be pro-rated correctly for different working patterns."
          }
        ]
      },
      {
        title: "The Temporary Shortage List",
        blocks: [
          {
            type: "paragraph",
            text:
              "A new Temporary Shortage List (TSL) has been introduced for medium-skilled roles (RQF Levels 3-5) that are experiencing critical shortages."
          },
          {
            type: "paragraph",
            text:
              "Currently listing 52 occupations, the route comes with significant restrictions: workers sponsored under this list cannot bring dependants to the UK and do not benefit from salary discounts."
          },
          {
            type: "paragraph",
            text:
              "The list will be reviewed in Spring 2026, with all roles automatically removed unless the Migration Advisory Committee recommends their retention."
          }
        ]
      },
      {
        title: "Care Worker Route Closure",
        blocks: [
          {
            type: "paragraph",
            text:
              "From 22 July 2025, new applications for Health and Care Worker visas in the adult social care sector are no longer accepted from overseas applicants."
          },
          {
            type: "paragraph",
            text:
              "Those already sponsored in England must work for their employer for at least three months before switching to another employer in the sector."
          },
          {
            type: "paragraph",
            text:
              "From 22 July 2028, switching to adult social care sponsorship will be prohibited entirely."
          }
        ]
      },
      {
        title: "Transitional Protections",
        blocks: [
          {
            type: "paragraph",
            text:
              "Importantly, individuals already sponsored under the Skilled Worker route at RQF Levels 3-5 before the changes took effect can maintain their immigration status, extend their visas, and progress to settlement."
          },
          {
            type: "paragraph",
            text:
              "The Home Office has confirmed these transitional arrangements to protect those already in the UK."
          }
        ]
      }
    ]
  },
  {
    slug: "indefinite-leave-to-remain-proposed-10-year-qualifying-period",
    title: "Indefinite Leave to Remain: Proposed 10-Year Qualifying Period",
    category: "UK Immigration",
    publishedAt: "2026-01-01",
    publishedLabel: "January 2026",
    excerpt:
      "One of the most significant proposals in the 2025 Immigration White Paper is the extension of the standard qualifying period for Indefinite Leave to Remain from 5 years to 10 years. This change, if implemented, would substantially alter the settlement pathway for most visa holders.",
    heroImage: "/images/services/immigration-appeals.jpg",
    sections: [
      {
        title: "Current Status",
        blocks: [
          {
            type: "paragraph",
            text:
              "As of January 2026, there have been no changes to ILR qualifying periods."
          },
          {
            type: "paragraph",
            text:
              "The Home Office has begun a public consultation on this proposal, and the Home Affairs Committee is conducting an inquiry. However, no timetable for implementation has been confirmed."
          }
        ]
      },
      {
        title: "Earning Earlier Settlement",
        blocks: [
          {
            type: "paragraph",
            text:
              "The White Paper suggests that some individuals may be able to earn earlier settlement through demonstrable contributions to the UK economy."
          },
          {
            type: "paragraph",
            text:
              "However, the criteria for what would constitute sufficient contribution remain unclear and will require detailed legislation to implement."
          }
        ]
      },
      {
        title: "Family Visa Applicants",
        blocks: [
          {
            type: "paragraph",
            text:
              "Current indications suggest that family visa holders will not see their qualifying period extended to 10 years. However, applicants should monitor developments closely and seek professional advice before making long-term plans based on current rules."
          }
        ]
      }
    ]
  },
  {
    slug: "english-language-requirements-whats-changing",
    title: "English Language Requirements: What's Changing",
    category: "UK Immigration",
    publishedAt: "2026-01-08",
    publishedLabel: "January 2026",
    excerpt:
      "From 8 January 2026, English language requirements are being strengthened across the UK immigration system. These changes affect both principal applicants and their dependants.",
    heroImage: "/images/services/corporate-immigration.jpg",
    sections: [
      {
        title: "Higher Threshold for Work Visas",
        blocks: [
          {
            type: "paragraph",
            text:
              "The minimum English language requirement for Skilled Worker visas, High Potential Individual visas, and Scale-up visas increases from CEFR Level B1 (Intermediate) to Level B2 (Upper Intermediate)."
          },
          {
            type: "paragraph",
            text:
              "Applicants must demonstrate proficiency in speaking, listening, reading and writing through a Secure English Language Test from a Home Office-approved provider."
          }
        ]
      },
      {
        title: "Impact on Dependants",
        blocks: [
          {
            type: "paragraph",
            text:
              "Partners of work visa holders will now need to demonstrate basic English proficiency to join them in the UK."
          },
          {
            type: "paragraph",
            text:
              "When extending visas or applying for ILR, dependants will need to show progressively higher levels of English competency. This represents a significant change from current practice where dependant partners were not subject to language requirements."
          }
        ]
      },
      {
        title: "Transitional Arrangements",
        blocks: [
          {
            type: "paragraph",
            text:
              "Those who have already obtained a visa demonstrating B1 level English will continue to be assessed at B1 level for extensions on the same route."
          },
          {
            type: "paragraph",
            text:
              "The higher B2 requirement applies to new applicants making their first application under affected visa categories."
          }
        ]
      }
    ]
  },
  {
    slug: "family-visas-updated-rules-and-implications",
    title: "Family Visas: Updated Rules and Implications",
    category: "UK Immigration",
    publishedAt: "2025-11-11",
    publishedLabel: "November 2025",
    excerpt:
      "Family immigration remains an important pathway for many Nigerian nationals wishing to join relatives in the UK. While the 2025 reforms focus primarily on work-related immigration, several changes affect family visa applicants.",
    heroImage: "/images/services/immigration-appeals.jpg",
    sections: [
      {
        title: "Stricter Suitability Requirements",
        blocks: [
          {
            type: "paragraph",
            text:
              "From 11 November 2025, new suitability requirements under Part Suitability of the Immigration Rules affect family and private life applications."
          },
          {
            type: "paragraph",
            text:
              "Applicants who have used deception, breached immigration laws, or received criminal convictions face stricter scrutiny than under previous rules."
          },
          {
            type: "paragraph",
            text:
              "This marks a departure from the historically more generous approach to suitability in family cases."
          }
        ]
      },
      {
        title: "Financial Requirements",
        blocks: [
          {
            type: "paragraph",
            text:
              "The minimum income requirement for sponsoring a spouse or partner visa remains subject to ongoing review."
          },
          {
            type: "paragraph",
            text:
              "Applicants should ensure they can demonstrate the required level of income and that supporting documentation is comprehensive and accurate."
          },
          {
            type: "paragraph",
            text:
              "Any discrepancies or gaps in financial evidence can result in refusal."
          }
        ]
      },
      {
        title: "Previous Immigration Breaches",
        blocks: [
          {
            type: "paragraph",
            text:
              "The new rules pay particular attention to previous immigration breaches."
          },
          {
            type: "paragraph",
            text:
              "Applicants who have overstayed in the UK or breached visa conditions may find it more difficult to obtain family visas, even where they would otherwise meet the substantive requirements."
          },
          {
            type: "paragraph",
            text:
              "Professional legal advice is strongly recommended for anyone with a complicated immigration history."
          }
        ]
      }
    ]
  },
  {
    slug: "student-visas-impact-of-new-regulations",
    title: "Student Visas: Impact of New Regulations",
    category: "UK Immigration",
    publishedAt: "2026-01-01",
    publishedLabel: "January 2026",
    excerpt:
      "The UK continues to welcome international students, but the regulatory framework governing student immigration has tightened considerably. These changes reflect the Government's aim to ensure the student route is not used as a backdoor to settlement.",
    heroImage: "/images/services/visa-application.jpg",
    sections: [
      {
        title: "Graduate Route Changes",
        blocks: [
          {
            type: "paragraph",
            text:
              "The White Paper proposes reducing the Graduate visa duration from 2 years to 18 months."
          },
          {
            type: "paragraph",
            text:
              "While this change has not yet been implemented, students should be aware that the post-study work landscape may change during their studies."
          },
          {
            type: "paragraph",
            text:
              "Planning for post-graduation employment should begin well before completing studies."
          }
        ]
      },
      {
        title: "Dependant Restrictions",
        blocks: [
          {
            type: "paragraph",
            text:
              "Since July 2025, rules governing student dependants have been clarified and in some cases tightened."
          },
          {
            type: "paragraph",
            text:
              "Partners of students wishing to accompany them to the UK now need to demonstrate English language proficiency, and the requirements for evidencing genuine relationships have been enhanced."
          }
        ]
      },
      {
        title: "Proposed Higher Education Levy",
        blocks: [
          {
            type: "paragraph",
            text:
              "The Government has proposed a levy on international student fees, which would require primary legislation to implement."
          },
          {
            type: "paragraph",
            text:
              "This would increase the overall cost of UK education for international students. While not yet in force, prospective students should factor potential additional costs into their planning."
          }
        ]
      }
    ]
  },
  {
    slug: "express-entry-in-2025-major-policy-shifts",
    title: "Express Entry in 2025: Major Policy Shifts",
    category: "Canada Immigration",
    publishedAt: "2025-07-22",
    publishedLabel: "22 July 2025",
    excerpt:
      "Canada's Express Entry system underwent significant transformation in 2025, marking a clear shift toward more targeted immigration selection. Immigration, Refugees and Citizenship Canada (IRCC) moved away from broad competition based primarily on Comprehensive Ranking System (CRS) scores and embraced category-based selection tied to labour market priorities.",
    heroImage: "/images/services/corporate-immigration.jpg",
    sections: [
      {
        title: "Removal of Arranged Employment Points",
        blocks: [
          {
            type: "paragraph",
            text:
              "On 25 March 2025, IRCC eliminated additional CRS points for arranged employment."
          },
          {
            type: "paragraph",
            text:
              "Previously, candidates with LMIA-supported job offers could receive an additional 50 or 200 points, significantly improving their chances of receiving an Invitation to Apply (ITA)."
          },
          {
            type: "paragraph",
            text:
              "This change has levelled the playing field but also means many candidates who were previously competitive now face significantly lower scores."
          }
        ]
      },
      {
        title: "Priority Categories for 2025",
        blocks: [
          {
            type: "paragraph",
            text:
              "IRCC updated category-based selection priorities, adding Education as a new priority category while removing Transport."
          },
          {
            type: "paragraph",
            text:
              "The Healthcare category was expanded to become Healthcare and Social Services, reflecting ongoing labour shortages in these sectors."
          },
          {
            type: "paragraph",
            text:
              "French-language proficiency remains a major priority, with substantial draws targeting Francophone candidates outside Quebec."
          }
        ]
      },
      {
        title: "New Physicians Category",
        blocks: [
          {
            type: "paragraph",
            text:
              "In December 2025, IRCC announced a new Express Entry category specifically for physicians with Canadian work experience."
          },
          {
            type: "paragraph",
            text:
              "To qualify, doctors must have at least 12 months of full-time continuous Canadian work experience within the last three years."
          },
          {
            type: "paragraph",
            text:
              "This represents a targeted effort to address healthcare worker shortages."
          }
        ]
      },
      {
        title: "Implications for Nigerian Applicants",
        blocks: [
          {
            type: "paragraph",
            text:
              "Nigerian professionals seeking Canadian permanent residence should carefully assess which Express Entry category best matches their profile."
          },
          {
            type: "paragraph",
            text:
              "French language proficiency offers significant advantages, and Canadian work experience has become more valuable than ever."
          },
          {
            type: "paragraph",
            text:
              "Strategic planning and accurate occupational classification are essential for success."
          }
        ]
      }
    ]
  },
  {
    slug: "provincial-nominee-programs-allocation-changes",
    title: "Provincial Nominee Programs: Allocation Changes",
    category: "Canada Immigration",
    publishedAt: "2025-01-14",
    publishedLabel: "January 2025",
    excerpt:
      "The Provincial Nominee Programs (PNPs) have experienced significant disruption in 2025, with federal allocation changes creating uncertainty for both employers and applicants.",
    heroImage: "/images/services/visa-application.jpg",
    sections: [
      {
        title: "Reduced Allocations",
        blocks: [
          {
            type: "paragraph",
            text:
              "Under the 2025-2027 Immigration Levels Plan, several provinces saw their PNP allocations substantially reduced."
          },
          {
            type: "paragraph",
            text:
              "Nova Scotia's allocation was halved from 3,570 to 1,785, with similar cuts affecting Manitoba, New Brunswick, Newfoundland and Labrador, Saskatchewan, and Alberta."
          },
          {
            type: "paragraph",
            text:
              "These reductions led to immediate backlash from provincial governments and business groups."
          }
        ]
      },
      {
        title: "Partial Reversal",
        blocks: [
          {
            type: "paragraph",
            text:
              "In October 2025, Immigration Minister Lena Metlege Diab announced partial restoration of allocations for several provinces, acknowledging the economic impact of the cuts."
          },
          {
            type: "paragraph",
            text:
              "However, overall immigration levels remain below 2024 targets, with permanent resident admissions set at 395,000 for 2025, declining to 380,000 in 2026 and 365,000 in 2027."
          }
        ]
      },
      {
        title: "Strategic Considerations",
        blocks: [
          {
            type: "paragraph",
            text:
              "For applicants considering PNP pathways, the reduced allocations mean increased competition for available nominations."
          },
          {
            type: "paragraph",
            text:
              "Applicants should research provincial labour market needs carefully and consider provinces with stronger allocations in their target sectors."
          },
          {
            type: "paragraph",
            text:
              "Early application and comprehensive documentation are more important than ever."
          }
        ]
      }
    ]
  },
  {
    slug: "study-permits-and-pgwp-new-restrictions",
    title: "Study Permits and PGWP: New Restrictions",
    category: "Canada Immigration",
    publishedAt: "2025-10-18",
    publishedLabel: "October 2025",
    excerpt:
      "Canada's study permit system has implemented significant changes affecting international students' pathways to work and permanent residence.",
    heroImage: "/images/services/immigration-appeals.jpg",
    sections: [
      {
        title: "Study Permit Caps",
        blocks: [
          {
            type: "paragraph",
            text:
              "The study permit cap system is now in full effect for 2025, with fewer categories of applicants exempt from Provincial Attestation Letter (PAL) requirements."
          },
          {
            type: "paragraph",
            text:
              "Notably, graduate students now require PALs, and Master's and PhD students are no longer automatically exempt."
          },
          {
            type: "paragraph",
            text:
              "Extensions also require PALs unless the student remains at the same institution and level of study."
          }
        ]
      },
      {
        title: "Increased Financial Requirements",
        blocks: [
          {
            type: "paragraph",
            text:
              "From 1 September 2025, minimum financial requirements for study permit applications increased significantly."
          },
          {
            type: "paragraph",
            text:
              "Single applicants must now demonstrate at least CAD $22,895 in available funds in addition to tuition and travel costs. This threshold increases with each family member included in the application."
          }
        ]
      },
      {
        title: "PGWP Field of Study Requirements",
        blocks: [
          {
            type: "paragraph",
            text:
              "Post-Graduation Work Permit (PGWP) eligibility now depends heavily on field of study for non-exempt programmes."
          },
          {
            type: "paragraph",
            text:
              "Students in eligible fields linked to occupations in long-term shortage can access PGWPs, while those in other fields may face restrictions."
          },
          {
            type: "paragraph",
            text:
              "Bachelor's, Master's and doctoral programmes remain exempt from these field-of-study requirements."
          }
        ]
      }
    ]
  },
  {
    slug: "healthcare-worker-immigration-new-pathways",
    title: "Healthcare Worker Immigration: New Pathways",
    category: "Canada Immigration",
    publishedAt: "2025-12-02",
    publishedLabel: "December 2025",
    excerpt:
      "Canada continues to prioritise healthcare worker immigration through dedicated pathways, recognising the critical need for medical professionals across the country.",
    heroImage: "/images/services/corporate-immigration.jpg",
    sections: [
      {
        title: "Express Entry Healthcare Category",
        blocks: [
          {
            type: "paragraph",
            text:
              "The Healthcare and Social Services category remains one of the most active Express Entry streams, with regular draws throughout 2025."
          },
          {
            type: "paragraph",
            text:
              "Eligible occupations include nurses, physicians, pharmacists, medical laboratory technologists, and various social services professionals. Candidates with qualifying experience in these occupations receive targeted invitations."
          }
        ]
      },
      {
        title: "Expedited Processing for Physicians",
        blocks: [
          {
            type: "paragraph",
            text:
              "Doctors nominated by provinces now benefit from expedited work permit processing in just 14 days, allowing them to work while their permanent residence applications are being finalised."
          },
          {
            type: "paragraph",
            text:
              "This dramatically reduces wait times compared to standard work permit processing, which can take several months."
          }
        ]
      },
      {
        title: "Opportunities for Nigerian Healthcare Professionals",
        blocks: [
          {
            type: "paragraph",
            text:
              "Nigerian healthcare professionals are well-positioned to benefit from these pathways."
          },
          {
            type: "paragraph",
            text:
              "Key considerations include ensuring qualifications meet Canadian standards, obtaining necessary credential assessments, and where required, completing licensing examinations. French language proficiency provides additional advantages in Francophone-targeted draws."
          }
        ]
      }
    ]
  },
  {
    slug: "h1b-visa-programme-the-100000-fee-and-what-it-means",
    title: "H-1B Visa Programme: The $100,000 Fee and What It Means",
    category: "US Immigration",
    publishedAt: "2025-09-19",
    publishedLabel: "September 2025",
    excerpt:
      "On 19 September 2025, President Trump signed a Presidential Proclamation titled Restriction on Entry of Certain Nonimmigrant Workers that fundamentally changed the H-1B visa programme. The most significant element is the requirement for a $100,000 payment to accompany new H-1B petitions.",
    heroImage: "/images/services/immigration-appeals.jpg",
    sections: [
      {
        title: "Who Is Affected",
        blocks: [
          {
            type: "paragraph",
            text:
              "The $100,000 requirement applies to new H-1B petitions filed on or after 12:01 a.m. Eastern Daylight Time on 21 September 2025."
          },
          {
            type: "paragraph",
            text:
              "This includes the FY 2026 lottery and all subsequent H-1B petitions."
          },
          {
            type: "paragraph",
            text:
              "The fee is additional to standard USCIS filing fees and represents a substantial cost increase for employers."
          }
        ]
      },
      {
        title: "Who Is Protected",
        blocks: [
          {
            type: "paragraph",
            text:
              "The Proclamation does not affect previously issued H-1B visas or petitions submitted before the effective date."
          },
          {
            type: "paragraph",
            text:
              "Current H-1B visa holders can continue to travel in and out of the United States without additional requirements."
          },
          {
            type: "paragraph",
            text:
              "Extensions and amendments for those already in H-1B status also remain unaffected in most cases."
          }
        ]
      },
      {
        title: "Impact on Corporate Immigration",
        blocks: [
          {
            type: "paragraph",
            text:
              "The substantial fee increase is designed to encourage employers to hire American workers rather than seeking H-1B sponsorship."
          },
          {
            type: "paragraph",
            text:
              "Companies heavily reliant on H-1B workers face significant additional costs, potentially affecting hiring strategies for skilled foreign workers."
          },
          {
            type: "paragraph",
            text:
              "Professional legal advice is essential for navigating these changes."
          }
        ]
      }
    ]
  },
  {
    slug: "weighted-selection-system-moving-away-from-the-lottery",
    title: "Weighted Selection System: Moving Away from the Lottery",
    category: "US Immigration",
    publishedAt: "2025-12-23",
    publishedLabel: "December 2025",
    excerpt:
      "On 23 December 2025, the Department of Homeland Security announced final rules implementing a weighted selection process for H-1B visas, replacing the random lottery that has governed visa allocation for decades.",
    heroImage: "/images/services/visa-application.jpg",
    sections: [
      {
        title: "How the New System Works",
        blocks: [
          {
            type: "paragraph",
            text:
              "The weighted selection process gives greater probability of selection to candidates with higher skills and higher wages."
          },
          {
            type: "paragraph",
            text:
              "While employers at all wage levels can still participate, those offering higher compensation will see their petitions prioritised."
          },
          {
            type: "paragraph",
            text:
              "This is intended to ensure H-1B visas are allocated to the most skilled and valuable workers rather than distributed randomly."
          }
        ]
      },
      {
        title: "Implementation Timeline",
        blocks: [
          {
            type: "paragraph",
            text:
              "The new weighted selection system becomes effective 27 February 2026 and will be in place for the FY 2027 H-1B cap registration season."
          },
          {
            type: "paragraph",
            text:
              "Employers should plan their FY 2027 petitions with the new system in mind, considering how wage levels will affect selection probability."
          }
        ]
      },
      {
        title: "Policy Rationale",
        blocks: [
          {
            type: "paragraph",
            text:
              "According to USCIS, the previous random selection process was exploited and abused by U.S. employers who were primarily seeking to import foreign workers at lower wages than they would pay American workers."
          },
          {
            type: "paragraph",
            text:
              "The new system aims to strengthen America's competitiveness by incentivizing American employers to petition for higher-paid, higher-skilled foreign workers."
          }
        ]
      }
    ]
  },
  {
    slug: "the-trump-gold-card-a-new-investment-pathway",
    title: "The Trump Gold Card: A New Investment Pathway",
    category: "US Immigration",
    publishedAt: "2025-12-01",
    publishedLabel: "December 2025",
    excerpt:
      "In December 2025, President Trump announced the launch of the Trump Gold Card, a new immigration initiative designed to provide a streamlined path to US permanent residency and citizenship for wealthy investors.",
    heroImage: "/images/services/immigration-appeals.jpg",
    sections: [
      {
        title: "Programme Requirements",
        blocks: [
          {
            type: "paragraph",
            text:
              "The Gold Card programme requires a $1 million investment in the United States."
          },
          {
            type: "paragraph",
            text:
              "In exchange, qualifying foreign nationals receive permanent residency and a pathway to US citizenship."
          },
          {
            type: "paragraph",
            text:
              "The programme is designed to attract high-net-worth individuals who will contribute to the American economy."
          }
        ]
      },
      {
        title: "Comparison with EB-5",
        blocks: [
          {
            type: "paragraph",
            text:
              "While details continue to emerge, the Gold Card appears to offer a more direct pathway than the existing EB-5 Immigrant Investor Programme."
          },
          {
            type: "paragraph",
            text:
              "The EB-5 programme requires either a $800,000 investment in a Targeted Employment Area or $1,050,000 elsewhere, plus job creation requirements."
          },
          {
            type: "paragraph",
            text:
              "The Gold Card may simplify some of these requirements."
          }
        ]
      },
      {
        title: "Considerations for Nigerian Investors",
        blocks: [
          {
            type: "paragraph",
            text:
              "High-net-worth Nigerian individuals interested in US residency should carefully evaluate both the Gold Card programme and traditional EB-5 options."
          },
          {
            type: "paragraph",
            text:
              "Professional immigration and financial advice is essential given the substantial investment involved and the evolving nature of these programmes."
          }
        ]
      }
    ]
  },
  {
    slug: "enhanced-vetting-and-social-media-requirements",
    title: "Enhanced Vetting and Social Media Requirements",
    category: "US Immigration",
    publishedAt: "2026-01-01",
    publishedLabel: "January 2026",
    excerpt:
      "The Trump administration has significantly expanded screening and vetting requirements for US visa applicants, reflecting heightened national security concerns.",
    heroImage: "/images/services/corporate-immigration.jpg",
    sections: [
      {
        title: "Social Media Disclosure",
        blocks: [
          {
            type: "paragraph",
            text:
              "US Customs and Border Protection has announced that social media information is now a mandatory data element for Electronic System for Travel Authorization (ESTA) applications."
          },
          {
            type: "paragraph",
            text:
              "Applicants must provide their social media accounts from the last five years."
          },
          {
            type: "paragraph",
            text:
              "This change implements Executive Order 14161, Protecting the United States From Foreign Terrorists and Other National Security and Public Safety Threats."
          }
        ]
      },
      {
        title: "H-1B and H-4 Enhanced Screening",
        blocks: [
          {
            type: "paragraph",
            text:
              "The Department of State has announced expanded screening and vetting for H-1B and dependent H-4 visa applicants."
          },
          {
            type: "paragraph",
            text:
              "Consular officers are conducting more thorough reviews of qualifications, employment history, and background information."
          },
          {
            type: "paragraph",
            text:
              "Processing times may increase as a result of enhanced scrutiny."
          }
        ]
      },
      {
        title: "Preparing for US Visa Applications",
        blocks: [
          {
            type: "paragraph",
            text:
              "Applicants should ensure their social media presence is consistent with their visa applications and does not contain material that could raise concerns."
          },
          {
            type: "paragraph",
            text:
              "Documentation should be comprehensive, accurate, and verifiable."
          },
          {
            type: "paragraph",
            text:
              "Given enhanced scrutiny, professional preparation of visa applications is more important than ever."
          }
        ]
      }
    ]
  }
];

export const getImmigrationInsightArticle = (slug: string) =>
  immigrationInsightArticles.find((article) => article.slug === slug);

export const getImmigrationInsightRelatedArticles = (
  slug: string,
  limit = 5
) => {
  const currentArticle = getImmigrationInsightArticle(slug);

  if (!currentArticle) {
    return immigrationInsightArticles
      .filter((article) => article.slug !== slug)
      .slice(0, limit);
  }

  const sameCategory = immigrationInsightArticles.filter(
    (article) =>
      article.slug !== slug && article.category === currentArticle.category
  );

  const otherCategories = immigrationInsightArticles.filter(
    (article) =>
      article.slug !== slug && article.category !== currentArticle.category
  );

  return [...sameCategory, ...otherCategories].slice(0, limit);
};

export const getImmigrationInsightAdjacentArticles = (slug: string) => {
  const currentIndex = immigrationInsightArticles.findIndex(
    (article) => article.slug === slug
  );

  if (currentIndex === -1) {
    return {
      previous: undefined,
      next: undefined
    };
  }

  return {
    previous:
      currentIndex > 0
        ? immigrationInsightArticles[currentIndex - 1]
        : undefined,
    next:
      currentIndex < immigrationInsightArticles.length - 1
        ? immigrationInsightArticles[currentIndex + 1]
        : undefined
  };
};
