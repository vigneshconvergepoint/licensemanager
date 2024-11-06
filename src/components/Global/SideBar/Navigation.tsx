import * as React from "react";
import {
  useMenuResetStyle,
  useNavbarClass,
  useSegmentControlResetStyle,
} from "./NavigationStyle";
import { mergeClasses, Button, Tooltip } from "@fluentui/react-components";
import {
  IconAddFile,
  IconChangeLog,
  IconChevronRight,
  IconDashboard,
  IconEdit,
  IconFolderOpen,
  IconHelpCircle,
  IconHome,
  IconReport,
  IconSetting,
  IconObligations1,
} from "@convergepoint/icons";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
const icons = {
  home: <IconHome />,
  documents: <IconAddFile />,
  manage: <IconEdit />,
  reports: <IconReport />,
  help: <IconHelpCircle />,
  administration: <IconSetting />,
  dashboard: <IconDashboard />,
  "repository home": <IconFolderOpen />,
  "change log": <IconChangeLog />,
  "library documents": <IconFolderOpen />,
  renewals: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.613 22.1149C11.11 22.1149 11.513 21.712 11.513 21.2149C11.513 20.7179 11.11 20.3149 10.613 20.3149V22.1149ZM7.89042 11.8455C7.53895 11.4941 6.9691 11.4941 6.61763 11.8455C6.26616 12.197 6.26616 12.7669 6.61763 13.1183L7.89042 11.8455ZM8.98145 14.2094L8.34506 14.8457C8.69653 15.1972 9.26638 15.1972 9.61785 14.8457L8.98145 14.2094ZM14.2243 10.2393C14.5758 9.88781 14.5758 9.31796 14.2243 8.96649C13.8728 8.61502 13.303 8.61502 12.9515 8.96649L14.2243 10.2393ZM18.3565 8.97145C18.5377 9.43427 19.0599 9.6625 19.5227 9.48121C19.9855 9.29993 20.2138 8.77778 20.0325 8.31496L18.3565 8.97145ZM19.9983 17.9828C19.9983 18.4799 20.4012 18.8828 20.8983 18.8828C21.3953 18.8828 21.7983 18.4799 21.7983 17.9828H19.9983ZM20.8983 13.3307H21.7983C21.7983 12.8337 21.3953 12.4307 20.8983 12.4307V13.3307ZM16.2462 12.4307C15.7491 12.4307 15.3462 12.8337 15.3462 13.3307C15.3462 13.8278 15.7491 14.2307 16.2462 14.2307V12.4307ZM14.2562 18.7C13.9047 19.0515 13.9047 19.6213 14.2562 19.9728C14.6077 20.3243 15.1775 20.3243 15.529 19.9728L14.2562 18.7ZM10.613 20.3149C6.02185 20.3149 2.30002 16.5931 2.30002 12.002H0.500024C0.500024 17.5872 5.02774 22.1149 10.613 22.1149V20.3149ZM2.30002 12.002C2.30002 7.41089 6.02185 3.68906 10.613 3.68906V1.88906C5.02774 1.88906 0.500024 6.41678 0.500024 12.002H2.30002ZM6.61763 13.1183L8.34506 14.8457L9.61785 13.573L7.89042 11.8455L6.61763 13.1183ZM9.61785 14.8457L14.2243 10.2393L12.9515 8.96649L8.34506 13.573L9.61785 14.8457ZM10.613 3.68906C14.1332 3.68906 17.1446 5.87755 18.3565 8.97145L20.0325 8.31496C18.5595 4.55458 14.8986 1.88906 10.613 1.88906V3.68906ZM21.7983 17.9828V13.3307H19.9983V17.9828H21.7983ZM20.8983 12.4307H16.2462V14.2307H20.8983V12.4307ZM20.2619 12.6943L14.2562 18.7L15.529 19.9728L21.5347 13.9671L20.2619 12.6943Z"
        fill="white"
        fill-opacity="0.72"
      />
    </svg>
  ),
  obligations: <IconObligations1 primaryFill="#646B72" />,
  requests: (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8622 2.38728C15.6294 2.14233 15.3077 2 14.9698 2H5.90009C4.57462 2 3.5001 3.07451 3.50009 4.39999L3.5 18.7999C3.49999 20.1254 4.5745 21.1999 5.89999 21.1999L16.7 21.2C17.5212 21.2 18.246 20.7876 18.6787 20.1587M7.16337 17.1333H10.7634M7.16337 13.3333H8.56337M18.3405 13.8841L21.1231 16.6667V13.8841H21.3666C22.5448 13.8841 23.4999 12.9289 23.4999 11.7507V8.13333C23.4999 6.95512 22.5448 6 21.3666 6H14.9666C13.7884 6 12.8333 6.95513 12.8333 8.13333V11.7507C12.8333 12.9289 13.7884 13.8841 14.9666 13.8841H18.3405Z"
        stroke="#646B72"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  contracts: (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.96663 8.92235H14.2275M8.96663 12.9317H11.5666M19.9701 20.4147C19.553 21.1239 18.782 21.5999 17.8997 21.5999L7.0997 21.5998C5.77421 21.5998 4.6997 20.5253 4.69971 19.1998L4.6998 4.79989C4.69981 3.47441 5.77432 2.3999 7.0998 2.3999H16.1695C16.5074 2.3999 16.8291 2.54224 17.0619 2.78718C17.4118 3.15528 17.966 3.72204 18.5001 4.1999C18.77 4.44142 19.1393 4.8067 19.4732 5.14523"
        // stroke="#646B72"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.6182 10.5917C22.5171 10.2996 22.3326 10.0451 22.0883 9.86076C21.844 9.67645 21.5511 9.57081 21.2474 9.55745H19.2165C18.8125 9.55745 18.4251 9.7209 18.1395 10.0118C17.8538 10.3028 17.6934 10.6974 17.6934 11.1088C17.6934 11.5202 17.8538 11.9148 18.1395 12.2058C18.4251 12.4967 18.8125 12.6602 19.2165 12.6602H21.2474C21.6513 12.6602 22.0387 12.8236 22.3244 13.1145C22.61 13.4055 22.7705 13.8001 22.7705 14.2115C22.7705 14.6229 22.61 15.0175 22.3244 15.3085C22.0387 15.5994 21.6513 15.7629 21.2474 15.7629H19.2165C18.9128 15.7495 18.6199 15.6439 18.3756 15.4595C18.1313 15.2752 17.9467 15.0207 17.8457 14.7286M20.2319 8.0061V9.55745M20.2319 15.7629V17.3142"
        // stroke="#646B72"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};

export const Navigation = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useNavbarClass();
  const segmentControlClasses = useSegmentControlResetStyle();
  const menuClasses = useMenuResetStyle();
  const date = new Date();


  React.useEffect(() => {
    if (props.expand !== undefined) {
      setExpanded(props.expand ? true : false);
    }
  }, [props.expand]);

  React.useEffect(() => {
    const tempExpand = localStorage.getItem("navIsExpand");

    if (tempExpand === "collapse") {
      setExpanded(false);
      if (props.onChangeExpand) {
        props.onChangeExpand(false);
      }
    } else if (tempExpand === "expand") {
      setExpanded(true);
      if (props.onChangeExpand) {
        props.onChangeExpand(true);
      }
    }
  }, []);

  React.useEffect(() => {
    if (props.onChange) {
      props.onChange("home");
    }
  }, []);

  const handleClick = () => {
    setExpanded((prev) => !prev);
    if (props.onChangeExpand) {
      props.onChangeExpand(!expanded);
    }
    localStorage.setItem("navIsExpand", `${expanded ? "collapse" : "expand"}`);
  };

  const onNavLinkClick = () => {
    if (props.mode === "CM") {
      try {
        sessionStorage.removeItem("document_grid_applied_filters");
      } catch (error) {
        console.error(error, "onNavLinkClick");
      }
    }
  };

  return (
    <>
      <div
        className={mergeClasses(expanded ? classes.expand : classes.collapse)}
      >
        <nav
          className={mergeClasses(
            expanded ? classes.expand : classes.collapse,
            classes.root
          )}
        >
          <div
            className={mergeClasses(
              `d-flex ${
                expanded ? "justify-content-between" : "justify-content-center"
              } position-relative`,
              classes.logoBlock
            )}
          >
            <img
              src={
                "https://convergepoint.sharepoint.com/sites/CPTQA25/Logo/Convergepoint.png"
              }
              alt="Logo"
              style={{
                minWidth: "48px",
                maxWidth: expanded ? "140px" : "48px",
              }}
              height={48}
              tabIndex={0}
              aria-label="Logo"
            />
            {/* Tooltip added for expand */}
            <Tooltip
              withArrow
              content={{
                children: expanded ? "Collapse" : "Expand",
                className: classes.tooltipDark,
              }}
              relationship="label"
              positioning={"after"}
            >
            <Button
              className={mergeClasses(
                expanded ? "left" : "right",
                classes.btnArrow
              )}
              size="small"
              icon={
                <IconChevronRight
                  width={8}
                  height={12}
                  primaryFill="#ffffffb8"
                />
              }
              onClick={handleClick}
              tabIndex={0}
              aria-label="IconChevronRight"
              data-CPAutomation={`btn_Navigation_IconChevronRight`}
            />
            </Tooltip>
          </div>
          <div className={classes.navbarMain}>
          <div className="mt-4 d-flex flex-column"> 
            {!expanded
              ? props?.MainMenus?.map((result) => (
                  <Tooltip
                    withArrow
                    content={{
                      children: result.menu,
                      className: classes.tooltipDark,
                    }}
                    relationship="label"
                    positioning={"after"}
                  >
                    <NavLink
                      to={result?.pageUrl}
                      className={({ isActive }) =>
                        mergeClasses(
                          menuClasses,
                          !expanded && "isIcon",
                          isActive && "selected"
                        )
                      }
                      onClick={() => {
                        onNavLinkClick();
                      }}
                      tabIndex={0}
                      aria-label={result.menu}
                    >
                      {result?.icon}
                      <p> {result?.menu}</p>
                    </NavLink>
                  </Tooltip>
                ))
              : props?.MainMenus?.map((result) => (
                  <NavLink
                    to={result?.pageUrl}
                    className={({ isActive }) =>
                      mergeClasses(
                        menuClasses,
                        !expanded && "isIcon",
                        isActive && "selected"
                      )
                    }
                    onClick={() => {
                      onNavLinkClick();
                    }}
                    tabIndex={0}
                    aria-label={result.menu}
                  >
                    {result?.icon}
                    <p> {result?.menu}</p>
                  </NavLink>
                ))}
          </div>
          </div>
        </nav>
      </div>
    </>
  );
};
