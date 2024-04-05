const LINKEDIN_CALLBACK_URL = "http://localhost:5173/signup";
const CONSTANTS = {
  linkedinOAuthURL: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
    import.meta.env.VITE_LINKEDIN_CLIENT_ID
  }&redirect_uri=${encodeURIComponent(
    LINKEDIN_CALLBACK_URL
  )}&scope=profile%20email%20openid`,
};

export default CONSTANTS;
