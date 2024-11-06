import { makeStyles, shorthands } from "@fluentui/react-components";
const adminLayoutClass = makeStyles({
  root: {
    ...shorthands.borderRadius("8px"),
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    height: "100%",
    paddingTop: "24px",
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingBottom: "24px",
  },
});

const UILayout = ({ children, style = null }) => {
  const layoutStyle = adminLayoutClass();
  return (
    <div
      className={
        !style
          ? `position-relative bgWhite mt-3 ms-1 ${layoutStyle.root}`
          : style
      }
    >
      {children}
    </div>
  );
};

export default UILayout;
