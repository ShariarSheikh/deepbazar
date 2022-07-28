export const environment = process.env.NODE_ENV;

export const baseUrl =
  environment === "development"
    ? process.env.NEXT_PUBLIC_BASE_LOCALURL
    : process.env.NEXT_PUBLIC_BASE_ONLINEURL;

export const xApiKey = process.env.NEXT_PUBLIC_API_X_KEY;
