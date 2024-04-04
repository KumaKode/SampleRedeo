import { useEffect } from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import HomeMain1 from "../Components/Main/HomeMain1";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
// import { JobContext } from "../Context/JobContext";
const LINKEDIN_CLIENT_SECRET = "XibmVf888hOlvmMP";
const LINKEDIN_CLIENT_ID = "867s6hduy4t8dr";
const LINKEDIN_CALLBACK_URL = "http://localhost:5173";
const HomePage1 = () => {
  // const { linkedinProfile } = useContext(JobContext);
  const loginWithLinkedin = async (code) => {
    try {
      const parameters = {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: LINKEDIN_CALLBACK_URL,
        client_id: LINKEDIN_CLIENT_ID,
        client_secret: LINKEDIN_CLIENT_SECRET,
      };
      const data = await axios.post(
        "https://www.linkedin.com/oauth/v2/accessToken",
        parameters,
        {
          mode: "no-cors",
        }
      );

      console.log(data);

      // Fetch the user's LinkedIn profile
      // const userProfile = await fetch(
      //   "https://api.linkedin.com/v2/me?projection=(id,firstName,lastName)",
      //   {
      //     headers: {
      //       Authorization: `Bearer ${accessToken}`,
      //     },
      //   }
      // ).then((response) => response.json());
      // console.log(userProfile);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleLinkedInCallback = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");
    if (code) {
      loginWithLinkedin(code);
    } else {
      console.log("Else executed");
    }
  };

  useEffect(() => {
    handleLinkedInCallback();
  }, []);
  return (
    <>
      <SearchForm />
      <SidePanel />
      <Header />
      <HomeMain1 />
      <Footer />
    </>
  );
};

export default HomePage1;
