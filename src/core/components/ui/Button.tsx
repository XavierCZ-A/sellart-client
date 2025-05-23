import { Button as AntdButton, ConfigProvider } from "antd";

interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

type ButtonType = "primary" | "default" | "dashed" | "text" | "link";
type ButtonSize = "large" | "small";
type ButtonShape = "default" | "circle" | "round";
type ButtonVariant =
  | "solid"
  | "outlined"
  | "dashed"
  | "filled"
  | "text"
  | "link";

interface ButtonProps extends BaseComponentProps {
  type?: ButtonType;
  shape?: ButtonShape;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  ghost?: boolean;
  variant?: ButtonVariant;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = "primary",
  shape,
  size,
  className,
  children,
  icon,
  ghost,
  variant,
  ...props
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#8b5a2b",
            colorPrimaryHover: "#a47341",
            colorPrimaryActive: "#8b5a2b",
            colorPrimaryText: "#000000",
            colorPrimaryBorder: "#8b5a2b",
            colorPrimaryBg: "#8b5a2b",
          },
        },
      }}
    >
      <AntdButton
        ghost={ghost}
        type={type}
        shape={shape}
        size={size}
        className={className}
        icon={icon}
        variant={variant}
        {...props}
      >
        {children}
      </AntdButton>
    </ConfigProvider>
  );
};
