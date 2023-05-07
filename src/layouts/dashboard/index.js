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

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={0}>
        <Grid container spacing={1.2}>
          <Grid item xs={12} md={6} lg={1.2}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                bgColor="info"
                font="h6"
                sname=""
                percentage={{
                  color: "info",
                  amount: "Vijay",
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
          <Grid item xs={12} md={6} lg={1.45}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                sname="Iron Contor"
                percentage={{
                  color: "error",
                  amount: "Success",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.75}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                sname="Short Strangle"
                percentage={{
                  color: "success",
                  amount: "Success",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                sname="Cal Spread"
                percentage={{
                  color: "success",
                  amount: "Success",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                sname="Booked P&L"
                percentage={{
                  color: "success",
                  amount: "100",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.8}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                sname="Un-Booked P&L"
                percentage={{
                  color: "success",
                  amount: "200",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.7}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                sname="Active Trades"
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



      
      <MDBox py={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                font="h6"
                sname="Ashish"
                percentage={{
                  color: "",
                  amount: "",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.5}>
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
          <Grid item xs={12} md={6} lg={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                sname="Iron Contor"
                percentage={{
                  color: "error",
                  amount: "Failed",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                sname="Short Strangle"
                percentage={{
                  color: "warning",
                  amount: "Warning",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                sname="Cal Spread"
                percentage={{
                  color: "success",
                  amount: "Success",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                sname="Booked P&L"
                percentage={{
                  color: "success",
                  amount: "Success",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                sname="Un-Booked P&L"
                percentage={{
                  color: "success",
                  amount: "Success",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                sname="Active Trades"
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
