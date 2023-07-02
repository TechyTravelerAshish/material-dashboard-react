/* eslint-disable jsx-a11y/no-static-element-interactions */
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
  const [data, setData] = useState(null);

  const refreshPage = ()=>{
    window.location.reload();
    }

  const development_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/dev/";
  const testing_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/test/";
  const dev_url = development_url;

  const fetch_dev_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/dev/fetchstatus";
  const fetch_test_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/test/fetchstatus";
  const fetch_url = fetch_dev_url;

  const page_refresh_seconds = 30;
  const page_refresh_interval = page_refresh_seconds * 1000;

  const [usersForRender, setUsersForRender] = useState([]);
 

  useEffect(() => {
    fetch('https://n7gp4t7ewpjigjtty6nfa4z53i0hxosx.lambda-url.us-east-2.on.aws')
      .then((response) => response.json())
      // eslint-disable-next-line no-shadow
      .then((data) => { 
        // console.log(data.json);
        setData(data)
      });

  }, []);


  return (
    <div>
      {data ? (
        <DashboardLayout>
          <DashboardNavbar />
          <MDBox py={0}>
          <Grid container spacing={1.2}>   
          {data.map((item) => (
          
          <><Grid item xs={12} md={6} lg={1.2}>             
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  sname="User"
                  percentage={{
                    color: "info",
                    amount: item.USER_NAME,
                    label: "",
                  }} />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={1.2}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    sname="Iron Fly"
                    percentage={{
                      color: "success",
                      amount: item.IRON_FLY,
                      label: "",
                    }} />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={1.3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    sname="Long Straddle"
                    percentage={{
                      color: "success",
                      amount: item.LONG_STRADDLE,
                      label: "",
                    }} />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={1.6}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    sname="Available Margin"
                    percentage={{
                      color: "success",
                      amount: item.AVL_MARGIN,
                      label: "",
                    }} />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={1.8}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    sname="Positions Count"
                    percentage={{
                      color: "success",
                      amount: item.POS_COUNT,
                      label: "",
                    }} />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={1.2}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    sname="P & L"
                    percentage={{
                      color: "success",
                      amount: item.PNL,
                      label: "",
                    }} />
                </MDBox>
              </Grid>           
              </>
          ))}
  

        </Grid>
        </MDBox>
        </DashboardLayout>
      ) : (
        <p style={{
        }} />
      )}
    </div>
  );
};
export default Dashboard;
