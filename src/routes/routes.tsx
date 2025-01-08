import {
  createRootRoute,
  createRoute,
  Navigate,
  Outlet,
  useRouter,
  useMatches,
} from "@tanstack/react-router";
import { LandingPage } from "../screens/LandingPage";
import { Layout } from "../layouts/Layout";
import { About } from "../screens/About";
import { isUserConnected } from "../services/wallet.query";
import { CreateDigitalCertification } from "../screens/CreateDigitalCertification";
import { Home } from "../screens/Home";
import { MyCertifications } from "../screens/MyCertifications";
import { ClaimFaucet } from "../screens/ClaimFaucet";
import Footer from "../layouts/Footer";
import TestnetFooter from "../layouts/TestnetFooter";
import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import CampaignCreation from "../screens/Apartment/ApartmentCreation";
import ApartmentCreation from "../screens/Apartment/ApartmentCreation";
import ApartmentList from "../screens/Apartment/ApartmentList";
import ApartmentDetails from "../screens/Apartment/ApartmentDetails";

function ProtectedRoute({ children }: { children: React.ReactElement }) {
  const address = isUserConnected();

  if (!address) {
    return <Navigate to="/" />;
  }

  return children;
}

const rootRoute = createRootRoute({
  component: () => {
    const matches = useMatches();
    const [marginLeft, setMarginLeft] = useState("60");

    useEffect(() => {
      const currentPath = matches[matches.length - 1]?.pathname;
      if (currentPath === "/" || currentPath === "/about") {
        setMarginLeft("0");
      } else {
        setMarginLeft("60");
      }
    }, [matches]);

    return (
      <div>
        <>
          <Outlet />
          <Box ml={{ base: 0, lg: marginLeft }}>
            <Footer />
          </Box>
        </>
      </div>
    );
  },
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

const campaignRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/creation",
  component: ApartmentCreation,
});

const listRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/list",
  component: ApartmentList,
});

const detailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/apartments/:id",
  component: ApartmentDetails,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: () => {
    const DashboardComponent = Layout(Home);
    return (
      <ProtectedRoute>
        <DashboardComponent />
      </ProtectedRoute>
    );
  },
});

const createDigitalCertificationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/create-digital-certification",
  component: () => {
    const CreateDigitalCertificationComponent = Layout(
      CreateDigitalCertification
    );
    return (
      <ProtectedRoute>
        <CreateDigitalCertificationComponent />
      </ProtectedRoute>
    );
  },
});

const myCertificationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/my-certifications",
  component: () => {
    const MyCertificationsComponent = Layout(MyCertifications);
    return (
      <ProtectedRoute>
        <MyCertificationsComponent />
      </ProtectedRoute>
    );
  },
});

const claimFaucetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/claim-faucet",
  component: () => {
    const ClaimFaucetComponent = Layout(ClaimFaucet);
    return (
      <ProtectedRoute>
        <ClaimFaucetComponent />
      </ProtectedRoute>
    );
  },
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  campaignRoute,
  listRoute,
  detailsRoute,
  aboutRoute,
  dashboardRoute,
  createDigitalCertificationRoute,
  myCertificationsRoute,
  claimFaucetRoute,
]);
