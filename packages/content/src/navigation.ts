export type NavigationLink = {
  label: string;
  href: string;
};

export type OfficeLocation = {
  title: string;
  detail: string;
};

export const primaryNavigation: NavigationLink[] = [
  { label: "About us", href: "/about-us/" },
  { label: "Immigration insights", href: "/#faq" },
  { label: "How we work", href: "/#uk-advice" },
  { label: "Services", href: "/services/" }
];

export const mobileNavigation: NavigationLink[] = [
  ...primaryNavigation,
  { label: "Book consultation", href: "/book-consultation/" }
];

export const consultationNavigationCta: NavigationLink = {
  label: "Book Consultation",
  href: "/book-consultation/"
};

export const footerOffices: OfficeLocation[] = [
  {
    title: "Nigeria Office Address:",
    detail: "Lagos, Nigeria. Meetings arranged by appointment."
  },
  {
    title: "UK Office Address:",
    detail: "United Kingdom. Case strategy and legal work managed from the UK."
  }
];
