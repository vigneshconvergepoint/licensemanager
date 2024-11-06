import { UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import * as React from "react";
import { loginRequest, b2cPolicies } from "../msconfig/msauthConfig.js";
import { InteractionStatus } from "@azure/msal-browser";
import Button from "../components/Global/Button/Button.js";

const Authenticate = () => {
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
          console.log('account',account);
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

  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  const handleLogoutRedirect = () => {
    instance.logoutRedirect();
  };

  const handleLogoutPopup = () => {
    instance.logoutPopup({
      mainWindowRedirectUri: "/", // redirects the top level app after logout
    });
  };

  const handleProfileEdit = () => {
    if (inProgress === InteractionStatus.None) {
      instance.acquireTokenRedirect(b2cPolicies.authorities.editProfile);
    }
  };

  return (
    <div className="align-items-center d-flex h-100vh justify-content-center">
      <UnauthenticatedTemplate>
        <Button color="warning" appearance="primary" onClick={handleLoginPopup}>
          Sign Up
        </Button>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default Authenticate;
