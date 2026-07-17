import {Route, Routes} from "react-router";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Details from "../components/Details";
const DeclarativeRouteing = () => {
  return (
    <Routes>
        {/* nested routing start */}
      <Route path="/" element={<Home />}>
        <Route path="details" element={<Details />} />
      </Route>
        {/* nested routing end */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default DeclarativeRouteing;
