import React from "react";

interface Props {
  title: string;
  styles?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onClick?: () => void;
}

const ButtonSolidLight = ({ ...props }: Props) => {
  return (
    <button
      className={`flex ${props.styles} justify-center items-center py-4 px-5 rounded-full text-white bg-pink-800 cursor-pointer hover:bg-pink-900 hover:text-gray-100`}
      onClick={props.onClick}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
    >
      {props.title}
    </button>
  );
};

export default ButtonSolidLight;
