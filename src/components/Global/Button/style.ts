import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useBtnClasses = makeStyles({
  outline: {
    height: "var(--btnMediumHeight)",
    color: "var(--brandColor600)",
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      "var(--brandColor600)"
    ),
    fontWeight: 700,
    boxShadow: "var(--smallShadow)",
    ":hover:enabled": {
      backgroundColor: "var(--brandColor50)",
      color: "var(--brandColor600)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor600)"
      ),
      boxShadow: "none",
    },
    ":hover:active:enabled": {
      backgroundColor: "#FFFFFF",
      color: "var(--brandColor500)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor500)"
      ),
      boxShadow: "none",
    },
    ":hover:disabled": {
      backgroundColor: "#FFFFFF",
      color: "var(--brandColor400)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor400)"
      ),
      boxShadow: "none",
    },
    ":hover:active:disabled": {
      backgroundColor: "#FFFFFF",
      color: "var(--brandColor400)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor400)"
      ),
      boxShadow: "none",
    },
    ":disabled": {
      backgroundColor: "#FFFFFF",
      color: "var(--brandColor400)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor400)"
      ),
      boxShadow: "none",
    },
  },
  secondary: {
    height: "var(--btnMediumHeight)",
    color: "var(--grayColor600)",
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      "var(--grayColor200)"
    ),
    fontWeight: 700,
    boxShadow: "var(--smallShadow)",
    ":hover:enabled": {
      backgroundColor: "var(--grayColor100)",
      color: "var(--grayColor900)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--grayColor200)"
      ),
      boxShadow: "none",
    },
    ":hover:active:enabled": {
      backgroundColor: "var(--grayColor200)",
      color: "var(--grayColor900)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--grayColor200)"
      ),
      boxShadow: "none",
    },
    ":hover:disabled": {
      backgroundColor: "var(--white)",
      color: "var(--grayColor300)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor200)"
      ),
      boxShadow: "none",
    },
    ":hover:active:disabled": {
      backgroundColor: "var(--white)",
      color: "var(--grayColor300)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor200)"
      ),
      boxShadow: "none",
    },
    ":disabled": {
      backgroundColor: "var(--white)",
      color: "var(--grayColor300)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor200)"
      ),
      boxShadow: "none",
    },
  },
  primary: {
    backgroundColor: "var(--brandColor600)",
    height: "var(--btnMediumHeight)",
    color: "var(--white)",
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      "var(--brandColor600)"
    ),
    fontWeight: 700,
    boxShadow: "var(--smallShadow)",
    ":hover": {
      backgroundColor: "var(--brandColor500)",
      color: "var(--white)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor500)"
      ),
      boxShadow: "none",
    },
    ":hover:enabled": {
      backgroundColor: "var(--brandColor500)",
      color: "var(--white)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor500)"
      ),
      boxShadow: "none",
    },
    ":hover:active:enabled": {
      backgroundColor: "var(--brandColor500)",
      color: "var(--white700)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor500)"
      ),
      boxShadow: "none",
    },
    ":hover:disabled": {
      backgroundColor: "var(--brandColor400)",
      color: "var(--white)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor400)"
      ),
      boxShadow: "none",
    },
    ":hover:active:disabled": {
      backgroundColor: "var(--brandColor400)",
      color: "var(--white)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor400)"
      ),
      boxShadow: "none",
    },
    ":disabled": {
      backgroundColor: "var(--brandColor400)",
      color: "var(--white)",
      ...shorthands.border(
        tokens.strokeWidthThin,
        "solid",
        "var(--brandColor400)"
      ),
      boxShadow: "none",
    },
  },
  button: {
    minWidth: "auto",
    lineHeight: "24px",
  },
});
