import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from "@azure/msal-react";
import { PortalCompatProvider } from "@fluentui/react-portal-compat";
// local import:
import { UiWrapper } from "./components/Global/Theme/UiWrapper.js";
import { getContext} from "./msconfig/mscontext.js"
import LicensePortal from "./LicensePortal.js";
import Authenticate from "./Authenticate/Authenticate.js";
import "./commonStyle/style.css";
import "./commonStyle/globals.css";
function App() {
  return (
    <>
     <UiWrapper>
     <MsalProvider instance={getContext()}>
     {/* <AuthenticatedTemplate> */}
     <PortalCompatProvider>
       <LicensePortal/>
     </PortalCompatProvider>
     {/* </AuthenticatedTemplate>  */}
     {/* <UnauthenticatedTemplate> */}
      <Authenticate/>
     {/* </UnauthenticatedTemplate> */}
     </MsalProvider>
     </UiWrapper>
    </>
  )
}

export default App
