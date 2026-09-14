import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
// @ts-ignore
import TrendProperties from "@/libs/components/homepage/TrendProperties";
// @ts-ignore
import PopularProperties from "@/libs/components/homepage/PopularProperties";
// @ts-ignore
import Advertisement from "@/libs/components/homepage/Advertisement";
// @ts-ignore
import TopProperties from "@/libs/components/homepage/TopProperties";
// @ts-ignore
import TopAgents from "@/libs/components/homepage/TopAgents";

const Home: NextPage = () => {
  return (
    <Stack className={"home-page"}>
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />
    </Stack>
  );
};
export default withLayoutMain(Home);
