// import { IconChangeLog, IconDashboard, IconEdit, IconFolderOpen, IconHelpCircle, IconHome } from "@convergepoint/icons";
// local import:
import { Navigation } from "./Navigation.tsx";

interface Navbar {
  setExpanded: (isBoolean: boolean) => void;
}

const MainMenus: any = [
  { menu: "Home",
    //  icon: <IconHome />, 
    icon: "",
    key: "Home",
    pageUrl: "/" },
  {
    menu: "Log View",
    key: "LogView",
    // icon: <IconChangeLog />,
    icon: "",
    pageUrl: "/LogView",
  },
  {
    menu: "Configure Expiration Email",
    key: "ExpirationEmail",
    // icon: <IconDashboard />,
    icon: "",
    pageUrl: "/ExpirationEmail",
  },
  {
    menu: "Expiration Report",
    key: "ExpirationReport",
    // icon: <IconHelpCircle />,
    icon: "",
    pageUrl: "/ExpirationReport",
  },
  {
    menu: "Add User",
    key: "AddUser",
    // icon: <IconEdit />,
    icon: "",
    pageUrl: "/AddUser",
  },
  {
    menu: "OCR Log View",
    key: "OCRLogView",
    // icon: <IconFolderOpen />,
    icon: "",
    pageUrl:"/OCRLogView",
  },
  {
    menu: "Usage Analytics",
    key: "UsageAnalytics",
    // icon: <IconChangeLog />,
    icon: "",
    pageUrl: "/UsageAnalytics",
  },
  {
    menu: "Logic App",
    key: "LogicApp",
    // icon: <IconHome />,
    icon: "",
    pageUrl: "/LogicApp",
  },
];


const Navbar = (props: Navbar) => {
  return (
    <>
      <Navigation
        onChange={(value) => console.log(value, "selected menu")}
        onChangeExpand={props.setExpanded}
        MainMenus={MainMenus}
      />
    </>
  );
};

export default Navbar;
