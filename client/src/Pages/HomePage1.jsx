import { useEffect, useContext } from "react";
import SearchForm from "../Components/Search Form/SearchForm";
import SidePanel from "../Components/Side Panel/SidePanel";
import Header from "../Components/Header/Header";
import HomeMain1 from "../Components/Main/HomeMain1";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Context/AuthContext";

const HomePage1 = () => {
  const { loginWithLinkedin } = useContext(AuthContext);

  const handleLinkedInCallback = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");
    if (code) {
      await loginWithLinkedin(code);
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
