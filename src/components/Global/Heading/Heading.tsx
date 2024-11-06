import { makeStyles } from "@fluentui/react-components";

export interface IHeading {
  heading: string | JSX.Element;
  afterContent?: string | JSX.Element;
  size?: "large" | "medium" | "small" | "extra-small" | undefined | null;
  count?: number | string | JSX.Element;
  rootClassName?: string;
  isPositionAboslute?: boolean;
  rightContentClassName?: string;
  positionClassName?: string;
  contentClass?: string;
}

const RenderTag = ({ size, isPositionAboslute, children, className = null }) => {
  let classN = isPositionAboslute ? "pivotLeft-absolute" : "";
  switch (size) {
    case "large":
      return (
        <h1 data-CPAutomation="heading1" className={className ? className : classN}>
          {children}
        </h1>
      );
    case "medium":
      return (
        <h2 data-CPAutomation="heading2" className={className ? className : classN}>
          {children}
        </h2>
      );
    case "small":
      return <h3 data-CPAutomation="heading3">{children}</h3>;
    case "extra-small":
      return (
        <h4 data-CPAutomation="heading4" className={className ? className : classN}>
          {children}
        </h4>
      );
    default:
      return (
        <p data-CPAutomation="heading5" className={className ? className : classN}>
          {children}
        </p>
      );
  }
};

const useClasses = makeStyles({
  childNoWrap: {
    "& > *": {
      whiteSpace: "nowrap",
    },
  },
});

export const Heading = ({
  heading = null,
  afterContent = null,
  size = null,
  count = null,
  rootClassName = null,
  rightContentClassName = "",
  isPositionAboslute = false,
  positionClassName = null,
  contentClass = null
}: IHeading) => {
  const classes = useClasses();

  return (
    <div
      className={`d-flex align-items-center justify-content-between ${
        rootClassName ? rootClassName : ""
      }`}
    >
      <RenderTag size={size} isPositionAboslute={isPositionAboslute} className={contentClass}>
        {heading && heading}
        {(count || count === 0) && (
          <span className="grayColor300 ps-2" data-CPAutomation="heading_count">
            {count}
          </span>
        )}
      </RenderTag>
      {afterContent && (
        <div
          className={`d-flex ${
            rightContentClassName ? rightContentClassName : classes.childNoWrap
          } align-items-center grayColor900 fw-500 lineHeight-24 ${
            isPositionAboslute
              ? positionClassName
                ? positionClassName
                : "pivotRight-absolute"
              : ""
          }`}
        >
          {afterContent}
        </div>
      )}
    </div>
  );
};
