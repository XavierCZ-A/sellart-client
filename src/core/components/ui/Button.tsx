import { Button as AntdButton } from "antd";

interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

type ButtonVariant = "primary" | "default" | "dashed" | "text";
type ButtonSize = "large" | "small";
type ButtonShape = "default" | "circle" | "round";

interface ButtonProps extends BaseComponentProps {
  type?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = "primary",
  shape,
  size,
  className,
  children,
  icon,
  ...props
}) => {
  return (
    <AntdButton
      type={type}
      shape={shape}
      size={size}
      className={className}
      icon={icon}
      {...props}
    >
      {children}
    </AntdButton>
  );
};
