import React from "react";

interface CustomStyle {
  color?: string;
  backgroundcolor?: string;
}

interface Props {
  text: string;
  icon?: string;
  onclickaction?: () => void;
  customStyle?: CustomStyle;
  title?:string
}

const CustomButton: React.FC<Props> = ({
  text,
  icon,
  customStyle,
  onclickaction,
  title
}) => {
  let style: CustomStyle = {};
  if (customStyle !== undefined) {
    style["color"] = customStyle.color;
  }

  return (
    <div>
      <button
        style={style}
        className="custom-button"
        onClick={onclickaction}
        title={title}
      >
        {text} <i className={icon} />
      </button>
    </div>
  );
};

export default CustomButton;
