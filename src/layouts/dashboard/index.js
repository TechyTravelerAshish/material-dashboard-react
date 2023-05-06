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
      <MDBox py={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                sname="Vijay"
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
                icon="leaderboard"
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
                icon="leaderboard"
                sname="Iron Contor"
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
                icon="leaderboard"
                sname="Short Strangle"
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
                icon="leaderboard"
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
                icon="person_add"
                title=""
                sname="Booked P&L"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon=""
                title=""
                sname="Un-Booked P&L"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon=""
                title=""
                sname="Active Trades"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
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
                icon="leaderboard"
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
                icon="leaderboard"
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
                icon="leaderboard"
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
                icon="leaderboard"
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
                icon="leaderboard"
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
                icon="person_add"
                title=""
                sname="Booked P&L"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon=""
                title=""
                sname="Un-Booked P&L"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={1.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon=""
                title=""
                sname="Active Trades"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
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
