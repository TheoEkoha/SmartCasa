import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { FiHome, FiBook, FiEdit, FiMenu } from "react-icons/fi";
import { FaEthereum } from "react-icons/fa";
import { IconType } from "react-icons";
import { Connect } from "../components/Connect/ConnectButton.component";
import { useNavigate } from "@tanstack/react-router";
import logo from "../assets/images/logo.webp";
import TestnetFooter from "./TestnetFooter";
import Footer from "./Footer";

interface LinkItemProps {
  name: string;
  icon: IconType;
  to: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  to: string;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", to: "/dashboard", icon: FiHome },
  {
    name: "Create my certificate",
    to: "/create-digital-certification",
    icon: FiEdit,
  },
  { name: "My profile", to: "/my-certifications", icon: FiBook },
  {
    name: "Claim free ETH (Testnet)",
    to: "/claim-faucet",
    icon: FaEthereum,
  },
];

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const navigate = useNavigate();

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", lg: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <HStack>
        <Flex
          h="20"
          alignItems="center"
          mx="8"
          style={{ cursor: "pointer" }}
          onClick={() => navigate({ to: "/" })}
        >
          <img src={logo} alt="" className="size-[50px] md:size-[50px]" />
          <Text fontSize="xl">ProofChain</Text>
        </Flex>
        <CloseButton display={{ base: "flex", lg: "none" }} onClick={onClose} />
      </HStack>
      {LinkItems.map((link) => (
        <NavItem key={link.name} to={link.to} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, to, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href={to}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "blue.300",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, lg: 60 }}
      px={{ base: 4, lg: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", lg: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", lg: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: "0", lg: "6" }}>
        <Flex alignItems={"center"}>
          <HStack>
            <Connect />
          </HStack>
        </Flex>
      </HStack>
    </Flex>
  );
};

export const Layout =
  (Component: React.FC) =>
  ({ ...props }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        {/* Sidebar Content */}
        <SidebarContent
          onClose={onClose}
          display={{ base: "none", lg: "block" }}
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>

        {/* Mobile Navigation */}
        <MobileNav onOpen={onOpen} />

        {/* Main Content Area */}
        <Box ml={{ base: 0, lg: 60 }} p="4">
          <Component {...props} />
        </Box>
      </Box>
    );
  };
