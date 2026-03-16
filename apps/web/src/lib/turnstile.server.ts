type TurnstileVerificationResult =
  | {
      success: true;
    }
  | {
      success: false;
      message: string;
    };

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export const verifyTurnstileToken = async (
  token: string,
  remoteIp?: string
): Promise<TurnstileVerificationResult> => {
  if (!token) {
    return {
      success: false,
      message: "Please complete the anti-spam check before submitting."
    };
  }

  const secret = import.meta.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return {
      success: false,
      message:
        "Turnstile is not configured for this environment. Configure TURNSTILE_SECRET_KEY before accepting submissions."
    };
  }

  const payload = new URLSearchParams({
    secret,
    response: token
  });

  if (remoteIp) {
    payload.set("remoteip", remoteIp);
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: payload,
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    });

    if (!response.ok) {
      return {
        success: false,
        message: "The anti-spam verification service could not be reached. Please try again."
      };
    }

    const result = (await response.json()) as TurnstileResponse;

    if (!result.success) {
      return {
        success: false,
        message: "The anti-spam check could not be verified. Please try again."
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      message: "The anti-spam verification service is unavailable. Please try again."
    };
  }
};
