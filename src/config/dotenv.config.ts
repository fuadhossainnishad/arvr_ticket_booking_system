export const config = {
  apiBaseUrl:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_BASE_URL_DEPLOY!
      : process.env.NEXT_PUBLIC_API_BASE_URL!,
  withCredintials: true,
};
