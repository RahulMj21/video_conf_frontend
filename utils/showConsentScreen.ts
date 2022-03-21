const showConsentScreen = () => {
  const auth_uri = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URI;

  const options = {
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI as string,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };
  const qs = new URLSearchParams(options);

  return `${auth_uri}?${qs.toString()}`;
};
export default showConsentScreen;
