import * as React from "react";
import { makeResetStyles } from "@fluentui/react-components";
// import { IconMenu } from "@convergepoint/icons";
import { Heading } from "../Heading/Heading.tsx";
import Button from "../Button/Button.tsx";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../msconfig/msauthConfig.js";

const useTopNabarStyle = makeResetStyles({
  backgroundColor: "var(--white)",
  height: "72px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // padding: "0 24px",
  borderBottom: "1px solid var(--grayColor200)",
  width: "100%",
  position: "sticky",
  top: 0,
  zIndex: 99,
});

const useHamburgerMenuStyle = makeResetStyles({
  marginRight: "12px",
  display: "none",
  "@media screen and (max-width: 768px)": {
    display: "block",
    height: "16px",
  },
});

const TopNavBar = ({ setExpanded }) => {
  const hamBurgerClass = useHamburgerMenuStyle();
  const topNavbarClass = useTopNabarStyle();
  const [userPhoto, setUserPhoto] = React.useState("");
  const { instance, inProgress } = useMsal();
  const [activeAccount, setActiveAccount] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (instance) {
          // Ensure MSAL is initialized before proceeding
          if (!instance.getActiveAccount()) {
            // Initialize MSAL
            await instance.handleRedirectPromise();
            await instance.loginPopup({
              scopes: ["user.read"],
            });
          }

          // Get the active account
          const account = instance.getActiveAccount();
          setActiveAccount(account);

          // Fetch user photo with the active account
          if (account) {
            await fetchUserPhoto(account);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [instance]);

  const fetchUserPhoto = async (activeAccount) => {
    try {
      const response = await instance.acquireTokenSilent({
        account: activeAccount,
        scopes: ["user.read"],
      });

      // Use the obtained token to call Microsoft Graph API for photo
      const photoResponse = await fetch(
        "https://graph.microsoft.com/v1.0/me/photo/$value",
        {
          headers: {
            Authorization: `Bearer ${response.accessToken}`,
          },
        }
      );

      if (photoResponse.ok) {
        // Photo available, set the URL in state
        const photoBlob = await photoResponse.blob();
        const photoUrl = URL.createObjectURL(photoBlob);
        setUserPhoto(photoUrl);
      } else {
        // No photo available or error occurred
        console.error("Unable to fetch user photo");
      }
    } catch (error) {
      console.error("Error fetching user photo:", error);
    }
  };

  const handleLoginPopup = () => {
    instance
      .loginPopup({
        ...loginRequest,
        redirectUri: "/",
      })
      .catch((error) => console.log(error));
  };

  const handleLogoutPopup = () => {
    instance.logoutPopup({
      mainWindowRedirectUri: "/", // redirects the top level app after logout
    });
  };

  return (
    <>
      <div className={topNavbarClass}>
        <div className="w-100">
          <div
            className={hamBurgerClass}
            onClick={() => {
              setExpanded((prev) => !prev);
            }}
          >
          </div>
          <Heading
            heading={"Home"}
            rootClassName="mx-3"
            size="medium"
            afterContent={
              <Button
                key="logout"
                appearance="primary"
                onClick={handleLogoutPopup}
              >
                Log Out
              </Button>
            }
          />
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
