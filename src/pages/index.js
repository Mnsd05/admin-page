import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";
import { OverviewAverageResponse } from "src/sections/overview/overview-average-response-time";
import { OverviewTopQueries } from "src/sections/overview/overview-top-queries";

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>Overview | Devias Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} lg={8}>
            <OverviewSales
              chartSeries={[
                {
                  name: "users",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} lg={4} sx={{ display: { md: "none", lg: "block" } }}>
            <OverviewTraffic
              chartSeries={[85, 15]}
              labels={["Positive", "Negative"]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} lg={8}>
            <OverviewAverageResponse
              chartSeries={[
                {
                  name: "time",
                  data: [18.4, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid md={6} sx={{ display: { xs: "none", md: "block", lg: "none" } }}>
            <OverviewTraffic
              chartSeries={[85, 15]}
              labels={["Positive", "Negative"]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <OverviewTopQueries
              value={["hello", "world", "foo", "bar", "baz"]}
              sx={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
