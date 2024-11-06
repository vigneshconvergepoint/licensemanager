import {
  makeResetStyles,
  shorthands,
  tokens,
  makeStyles,
} from "@fluentui/react-components";

export const useNavbarClass = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: "var(--navBackgroundColor)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "24px",
    ...shorthands.transition("width", "0.3s"),
  },
  navbarMain: {
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
  },
  expand: {
    width: "220px",
    minWidth: "220px",
    "@media screen and (min-width: 1024px) and (max-width: 1200px)": {
      width: "200px",
      minWidth: "200px",
    },
    "@media screen and (min-width: 768px) and (max-width: 1024px)": {
      width: "180px",
      minWidth: "180px",
    },
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  },
  expandCOI: {
    width: "250px",
    minWidth: "250px",
    "@media screen and (min-width: 1024px) and (max-width: 1200px)": {
      width: "230px",
      minWidth: "230px",
    },
    "@media screen and (min-width: 768px) and (max-width: 1024px)": {
      width: "210px",
      minWidth: "210px",
    },
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  },
  collapse: {
    width: "100px",
    minWidth: "100px",
    "@media screen and (max-width: 768px)": {
      display: "none !important",
    },
  },
  btnArrow: {
    height: "24px",
    width: "24px",
    position: "absolute",
    top: 0,
    bottom: 0,
    ...shorthands.transition("right", "0.3s"),
    ...shorthands.margin("auto"),
    "&.right": {
      backgroundColor: "var(--navBackgroundColor)",
      right: "-12px",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--navBackgroundColor)"
      ),
      ":hover:enabled": {
        backgroundColor: "var(--navBackgroundColor)",
        ...shorthands.border(
          tokens.strokeWidthThin,
          "solid",
          "var(--navBackgroundColor)"
        ),
      },
      ":hover:active:enabled": {
        backgroundColor: "var(--navBackgroundColor)",
        ...shorthands.border(
          tokens.strokeWidthThin,
          "solid",
          "var(--navBackgroundColor)"
        ),
      },
    },
    "&.left": {
      backgroundColor: "#ffffff29",
      right: "12px",
      ...shorthands.border(tokens.strokeWidthThin, "solid", "#ffffff29"),
      transform: "scaleX(-1)",
      ":hover:enabled": {
        backgroundColor: "#ffffff29",
        ...shorthands.border(tokens.strokeWidthThin, "solid", "#ffffff29"),
      },
      ":hover:active:enabled": {
        backgroundColor: "#ffffff29",
        ...shorthands.border(tokens.strokeWidthThin, "solid", "#ffffff29"),
      },
    },
  },
  logoBlock: {
    height: "auto",
    ...shorthands.padding("12px"),
  },
  tooltipDark: {
    backgroundColor: "var(--navBackgroundColor)",
    color: "var(--white)",
    textAlign: "center",
  },
  tooltipOtherLinks: {
    backgroundColor: "var(--navBackgroundColor)",
    color: "var(--white)",
    ...shorthands.padding(0),
    "& p": {
      color: "rgb(255 255 255 / 72%)",
      paddingLeft: "12px",
      paddingBottom: "4px",
    },
    "& .otherLinks": {
      textAlign: "initial",
      height: "auto",
      display: "flex",
      alignItems: "center",
      textDecorationLine: "none",
      fontSize: tokens.fontSizeBase300,
      fontWeight: 500,
      color: "var(--white)",
      ...shorthands.padding("12px"),
      "& svg": {
        paddingRight: "12px",
        width: "24px",
        height: "24px",
        minWidth: "24px",
        color: "rgb(255 255 255 / 72%)",
      },
      ":hover": {
        color: "var(--white)",
        backgroundColor: "#ffffff29",
        ...shorthands.transition("background-color", "0.3s"),
      },
    },
  },
  convergepointLink: {
    color: "var(--grayColor450) !important",
    textDecorationLine: "none",
    ":hover": {
      textDecorationLine: "underline",
    },
  },
});

export const useSegmentControlResetStyle = makeResetStyles({
  backgroundColor: "#ffffff29",
  width: "auto",
  display: "flex",
  ...shorthands.margin("12px"),
  ...shorthands.padding("2px"),
  ...shorthands.borderRadius("10px"),
  "& a": {
    color: "var(--white700)",
    width: "50%",
    border: "1px solid transparent",
    backgroundColor: "transparent",
    cursor: "pointer",
    borderRadius: tokens.borderRadiusXLarge,
    minWidth: "50%",
    ...shorthands.transition("width", "0.3s"),
    ":hover": {
      backgroundColor: "transparent",
      border: "1px solid transparent",
      color: "var(--white700)",
      ":active": {
        backgroundColor: "transparent",
        border: "1px solid transparent",
        color: "var(--white700)",
      },
    },
    "&.active": {
      color: "var(--navBackgroundColor)",
      border: "1px solid var(--white)",
      backgroundColor: "var(--white)",
      ":hover": {
        color: "var(--navBackgroundColor)",
        backgroundColor: "var(--white)",
        border: "1px solid var(--white",
        ":active": {
          color: "var(--navBackgroundColor)",
          backgroundColor: "var(--white)",
          border: "1px solid var(--white",
        },
      },
    },
  },
});

export const useMenuResetStyle = makeResetStyles({
  paddingLeft: "22px",
  minHeight: "50px",
  // height: "50px",
  display: "flex",
  alignItems: "center",
  fontSize: tokens.fontSizeBase300,
  color: "var(--white)",
  textDecoration: "none",
  borderLeft: "4px solid transparent",
  wordBreak: "break-all",
  "& p": {
    marginLeft: "12px",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflowX: "hidden",
    overflowY: "hidden",
    marginRight: "2px",
  },
  "& svg": {
    flexShrink: 0,
    "& path": {
      stroke: "#fff",
    },
  },
  "&.isIcon": {
    justifyContent: "center",
    paddingLeft: 0,
    "& p": {
      display: "none",
    },
  },
  ":hover": {
    color: "var(--white)",
    backgroundColor: "#ffffff29",
    borderLeft: "4px solid var(--white)",
    ...shorthands.transition("background-color", "0.3s"),
  },
  "&.selected": {
    backgroundColor: "var(--brandColor600)",
    borderLeft: "4px solid var(--white)",
    cursor: "default",
    ...shorthands.transition("background-color", "0.3s"),
  },
  "&.active": {
    backgroundColor: "var(--brandColor600)",
    borderLeft: "4px solid var(--white)",
    cursor: "default",
    ...shorthands.transition("background-color", "0.3s"),
  },
});
