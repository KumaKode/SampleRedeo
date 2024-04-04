import { useContext } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage1 from "./Pages/HomePage1";
import JobPage from "./Pages/JobPage";
import CandidatePage from "./Pages/CandidatePage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import BlogListPage from "./Pages/BlogListPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import ServicePage from "./Pages/ServicePage";
import ServiceDetailsPage from "./Pages/ServiceDetailsPage";
import ErrorPage from "./Pages/ErrorPage";
import ContactPage from "./Pages/ContactPage";
import CandidateListPage from "./Pages/CandidateListPage";
import CandidateDetailsPage from "./Pages/CandidateDetailsPage";
import HomePage2 from "./Pages/HomePage2";
import JobListPage from "./Pages/JobListPage";
import JobDetailsPage from "./Pages/JobDetailsPage";
import JobCategoryPage from "./Pages/JobCategoryPage";
import EmployerListPage from "./Pages/EmployerListPage";
import EmployerGridPage from "./Pages/EmployerGridPage";
import CompanyDetailsPage from "./Pages/CompanyDetailsPage";
import PostJobPage from "./Pages/PostJobPage";
import AddResumePage from "./Pages/AddResumePage";
import SignUp from "./Pages/SignUp";
import { useEffect } from "react";
import { AuthContext } from "./Context/AuthContext";
function App() {
  const { token } = useContext(AuthContext);
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage1 />} />
        <Route
          path="/signup"
          element={token ? <Navigate to="/" replace={true} /> : <SignUp />}
        />
        <Route path="/homePage2" element={<HomePage2 />} />
        <Route path="/jobPage" element={<JobPage />} />
        <Route path="/jobListPage" element={<JobListPage />} />
        <Route path="/jobDetailsPage" element={<JobDetailsPage />} />
        <Route path="/jobCategoryPage" element={<JobCategoryPage />} />
        <Route path="/employerListPage" element={<EmployerListPage />} />
        <Route path="/employerGridPage" element={<EmployerGridPage />} />
        <Route path="/companyDetailsPage" element={<CompanyDetailsPage />} />
        <Route path="/postJobPage" element={<PostJobPage />} />
        <Route path="/addResumePage" element={<AddResumePage />} />
        <Route path="/candidatePage" element={<CandidatePage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/blogListPage" element={<BlogListPage />} />
        <Route path="/blogDetailsPage" element={<BlogDetailsPage />} />
        <Route path="/servicePage" element={<ServicePage />} />
        <Route path="/serviceDetailsPage" element={<ServiceDetailsPage />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/candidateListPage" element={<CandidateListPage />} />
        <Route
          path="/candidateDetailsPage"
          element={
            token ? (
              <CandidateDetailsPage />
            ) : (
              <Navigate to="/signup" replace={true} />
            )
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
