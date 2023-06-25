/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// Testing 25-Jun-2023
import { useEffect, useState } from "react";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const development_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/dev/";
  const testing_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/test/";
  const dev_url = development_url;

  const fetch_dev_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/dev/fetchstatus";
  const fetch_test_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/test/fetchstatus";
  const fetch_url = fetch_dev_url;

  const page_refresh_seconds = 2;
  const page_refresh_interval = page_refresh_seconds * 1000;

  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    // const interval = setInterval(() => {
    fetch(fetch_url)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.json);
        setPosts(res);
        console.log("CP1 Response From Fetch API: ", JSON.parse(JSON.stringify(res)));
        // console.log("CP2 Response From Fetch API: ", posts[0].planA_status);
      });
    // }; ,60000);
    // return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(fetch_url)
        .then((res) => res.json())
        .then((res) => {
          // console.log(res.json);

          setPosts(res);
          console.log(
            `Response Refresh From Fetch API after ${page_refresh_seconds} Seconds: `,
            res
          );
        });
        displayApiRespone(fetch_url);
    }, page_refresh_interval);
    return () => clearInterval(interval);
  }, []);

  const displayApiRespone = (url) => {
    fetch(url)
      .then((response) => response.json())      
      .then((data) => {
        // console.log("Response From displayApiRespone - ", data.json);
        const { planE_status, description } = data;
        console.log("title - ",planE_status);
        renderApiRespone(planE_status, description);
      });
  };


  
  const renderApiRespone = (title, description) => (
    // console.log("title - ",title);
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={0}>
        <Grid container spacing={1.2}>
          <Grid item xs={12} md={6} lg={1.2}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                sname="User"
                percentage={{
                  color: "info",
                  amount: "Test1",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.2}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                sname="Iron Fly"
                percentage={{
                  color: "success",
                  amount: "Success",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.75}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                sname="Long Straddle"
                percentage={{
                  color: "success",
                  amount: "Success",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      
    </DashboardLayout>
  );

}
export default Dashboard;
