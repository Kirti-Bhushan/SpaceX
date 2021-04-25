import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Service from "../utils/Service";
import Header from "./Header";
import Sidebar from "./Sidebar";

import "./Styles/Home.css";
import Footer from "./Footer";
import SpacexLaunchList from "./spacexLaunchList";

const Home=()=> {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    const fetchLaunches = async () => {
      const res = await Service.getLaunches(location.search);
      setLaunches(res);
      setLoading(false);
    };

    fetchLaunches();
  }, [location.search]);

  const handleUpdateSearchString = (searchString) => {
    setLoading(true);
    history.push(searchString);
  };

  return (
    <div className="custom-container home">
      <div className="custom-row max-width-xl">
        <Header />
      </div>
      <div className="custom-row max-width-xl">
        <div className="sidebar-col">
          <Sidebar updateSearchString={handleUpdateSearchString} />
        </div>
        <div className="main-area-col ">
          <SpacexLaunchList loading={loading} launches={launches} />
        </div>
      </div>
      <div className="custom-row max-width-xl">
        <Footer />
      </div>
    </div>
  );
}
export default Home
