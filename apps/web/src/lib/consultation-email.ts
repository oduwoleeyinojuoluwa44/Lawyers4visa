import {
  consultationOptionsByType,
  siteMetadata,
  type ConsultationRequestRecord
} from "@lawyersForvisas/content";

type EmailShellOptions = {
  preheader: string;
  badge: string;
  title: string;
  intro: string;
  bodyHtml: string;
  actionHref?: string;
  actionLabel?: string;
  footerNote: string;
};

const brand = {
  background: "#fcf6ef",
  border: "#e6dacf",
  card: "#ffffff",
  ink: "#5f2900",
  muted: "#8b807a",
  panel: "#faf6f2",
  panelBorder: "#e6dacf",
  accent: "#8c4a16",
  accentSoft: "#f4dcc8"
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const formatSubmittedAt = (submittedAt: string) =>
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/London"
  }).format(new Date(submittedAt));

const formatMultilineHtml = (value: string) => escapeHtml(value).replaceAll("\n", "<br />");

const renderSummaryRows = (rows: Array<{ label: string; value: string }>) =>
  rows
    .map(
      ({ label, value }, index) => `
        <tr>
          <td style="padding:${index === 0 ? "0 0 14px" : "14px 0"}; border-top:${index === 0 ? "none" : `1px solid ${brand.panelBorder}`}; font-family:'Segoe UI',Arial,sans-serif; font-size:13px; line-height:1.45; color:${brand.muted}; text-transform:uppercase; letter-spacing:0.08em;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:${index === 0 ? "0 0 14px" : "14px 0"}; border-top:${index === 0 ? "none" : `1px solid ${brand.panelBorder}`}; font-family:Georgia,'Times New Roman',serif; font-size:17px; line-height:1.35; color:${brand.ink}; text-align:right;">
            ${escapeHtml(value)}
          </td>
        </tr>
      `
    )
    .join("");

const renderAction = (href?: string, label?: string) => {
  if (!href || !label) {
    return "";
  }

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
      <tr>
        <td style="border-radius:999px; background:${brand.ink};">
          <a
            href="${escapeHtml(href)}"
            style="display:inline-block; padding:14px 22px; font-family:'Segoe UI',Arial,sans-serif; font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#fffaf4; text-decoration:none;"
          >
            ${escapeHtml(label)}
          </a>
        </td>
      </tr>
    </table>
  `;
};

const renderSectionCard = (title: string, bodyHtml: string) => `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; margin-top:22px; border-collapse:collapse;">
    <tr>
      <td style="padding:22px 24px; background:${brand.panel}; border:1px solid ${brand.panelBorder}; border-radius:22px;">
        <p style="margin:0 0 12px; font-family:'Poppins','Segoe UI',Arial,sans-serif; font-size:11px; line-height:1.4; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:${brand.accent};">
          ${escapeHtml(title)}
        </p>
        ${bodyHtml}
      </td>
    </tr>
  </table>
`;

const renderStepRows = (steps: string[]) =>
  steps
    .map(
      (step, index) => `
        <tr>
          <td valign="top" style="padding:${index === 0 ? "0 0 14px" : "14px 0"}; width:36px; border-top:${index === 0 ? "none" : `1px solid ${brand.border}`};">
            <div style="width:26px; height:26px; border-radius:999px; background:${brand.card}; border:1px solid ${brand.border}; color:${brand.ink}; font-family:'Lora',Georgia,serif; font-size:15px; font-weight:700; line-height:26px; text-align:center;">
              ${index + 1}
            </div>
          </td>
          <td style="padding:${index === 0 ? "1px 0 14px" : "15px 0 14px"}; border-top:${index === 0 ? "none" : `1px solid ${brand.border}`}; font-family:'Poppins','Segoe UI',Arial,sans-serif; font-size:14px; line-height:1.7; color:${brand.muted};">
            ${escapeHtml(step)}
          </td>
        </tr>
      `
    )
    .join("");

const renderEmailShell = ({
  preheader,
  badge,
  title,
  intro,
  bodyHtml,
  actionHref,
  actionLabel,
  footerNote
}: EmailShellOptions) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0; padding:0; background:${brand.background}; color:${brand.ink};">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">
      ${escapeHtml(preheader)}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse; background:${brand.background};">
      <tr>
        <td align="center" style="padding:28px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; max-width:640px; border-collapse:collapse;">
            <tr>
              <td style="padding:0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; border-collapse:separate; border-spacing:0;">
                  <tr>
                    <td style="padding:28px 32px; background:${brand.ink}; border-radius:28px 28px 0 0;">
                      <p style="margin:0; font-family:'Poppins','Segoe UI',Arial,sans-serif; font-size:11px; line-height:1.4; letter-spacing:0.16em; text-transform:uppercase; color:${brand.accentSoft};">
                        ${escapeHtml(siteMetadata.eyebrow)}
                      </p>
                      <p style="margin:14px 0 0; font-family:'Cormorant Garamond','Lora',Georgia,serif; font-size:35px; line-height:1.02; font-weight:600; color:#fffaf4;">
                        ${escapeHtml(siteMetadata.title)}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:32px; background:${brand.card}; border:1px solid ${brand.border}; border-top:none; border-radius:0 0 28px 28px;">
                      <div style="display:inline-block; padding:7px 12px; border-radius:999px; background:${brand.panel}; border:1px solid ${brand.panelBorder}; font-family:'Poppins','Segoe UI',Arial,sans-serif; font-size:11px; line-height:1.4; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:${brand.accent};">
                        ${escapeHtml(badge)}
                      </div>
                      <h1 style="margin:18px 0 14px; font-family:'Lora',Georgia,'Times New Roman',serif; font-size:32px; line-height:1.08; font-weight:500; letter-spacing:-0.02em; color:${brand.ink};">
                        ${escapeHtml(title)}
                      </h1>
                      <p style="margin:0; font-family:'Poppins','Segoe UI',Arial,sans-serif; font-size:15px; line-height:1.75; color:${brand.muted};">
                        ${escapeHtml(intro)}
                      </p>
                      ${bodyHtml}
                      ${renderAction(actionHref, actionLabel)}
                      <p style="margin:28px 0 0; padding-top:22px; border-top:1px solid ${brand.panelBorder}; font-family:'Poppins','Segoe UI',Arial,sans-serif; font-size:13px; line-height:1.65; color:${brand.muted};">
                        ${escapeHtml(footerNote)}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export const renderConsultationUserEmail = (
  record: ConsultationRequestRecord,
  confirmationUrl: string
) => {
  const option = consultationOptionsByType[record.consultationType];
  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; margin-top:28px; border-collapse:collapse;">
      <tr>
        <td style="padding:22px 24px; background:${brand.panel}; border:1px solid ${brand.panelBorder}; border-radius:22px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse;">
            ${renderSummaryRows([
              { label: "Matter Reference", value: record.referenceNumber },
              { label: "Consultation Type", value: option.summaryLabel },
              { label: "Date & Time", value: "To be confirmed by email" }
            ])}
          </table>
        </td>
      </tr>
    </table>
    ${renderSectionCard(
      "What Happens Next",
      `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse;">
        ${renderStepRows([
          "Our secretary reviews your request and matter details.",
          "A suitable consultation date and time will be agreed manually by email.",
          "Once the timing is settled, you will receive the final confirmation from the firm."
        ])}
      </table>`
    )}
  `;

  return renderEmailShell({
    preheader: `Your consultation request ${record.referenceNumber} has been received.`,
    badge: "Request Received",
    title: `Hello ${record.fullName}, your consultation request has been received.`,
    intro:
      "We have created a reference for your matter and passed the request into the firm's manual scheduling process.",
    bodyHtml,
    actionHref: confirmationUrl,
    actionLabel: "View Confirmation",
    footerNote:
      "Please keep this email for your records. If you need to contact the firm, include your reference number in your reply."
  });
};

export const renderConsultationAdminEmail = (
  record: ConsultationRequestRecord,
  confirmationUrl: string
) => {
  const option = consultationOptionsByType[record.consultationType];
  const replyToClientUrl = `mailto:${record.email}?subject=${encodeURIComponent(`Consultation request ${record.referenceNumber}`)}`;
  const caseSummary = record.caseSummary || "No case summary was provided.";
  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; margin-top:28px; border-collapse:collapse;">
      <tr>
        <td style="padding:22px 24px; background:${brand.panel}; border:1px solid ${brand.panelBorder}; border-radius:22px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse;">
            ${renderSummaryRows([
              { label: "Matter Reference", value: record.referenceNumber },
              { label: "Consultation Type", value: option.summaryLabel },
              { label: "Client", value: record.fullName },
              { label: "Email", value: record.email },
              { label: "Phone", value: record.phone },
              { label: "Organisation", value: record.organization || "N/A" },
              { label: "Submitted", value: formatSubmittedAt(record.submittedAt) }
            ])}
          </table>
        </td>
      </tr>
    </table>
    ${renderSectionCard(
      "Required Next Step",
      `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse;">
        ${renderStepRows([
          "Review the matter details and case summary below.",
          "Contact the client directly to agree a suitable consultation time.",
          "Send the final confirmation and include the reference number in the email thread."
        ])}
      </table>`
    )}
    ${renderSectionCard(
      "Case Summary",
      `<p style="margin:0; font-family:'Poppins','Segoe UI',Arial,sans-serif; font-size:14px; line-height:1.75; color:${brand.muted};">
        ${formatMultilineHtml(caseSummary)}
      </p>`
    )}
    <p style="margin:24px 0 0; font-family:'Poppins','Segoe UI',Arial,sans-serif; font-size:14px; line-height:1.7; color:${brand.muted};">
      Confirmation page: <a href="${escapeHtml(confirmationUrl)}" style="color:${brand.accent}; text-decoration:underline;">${escapeHtml(confirmationUrl)}</a>
    </p>
  `;

  return renderEmailShell({
    preheader: `Manual scheduling required for ${record.referenceNumber}.`,
    badge: "Secretary Action Required",
    title: "A new consultation request needs manual scheduling.",
    intro:
      "A client has completed the consultation request form. Review the details below and arrange the consultation time manually.",
    bodyHtml,
    actionHref: replyToClientUrl,
    actionLabel: "Email Client",
    footerNote:
      "This notification was generated automatically from the lawyersForvisas consultation request flow."
  });
};
