import { Rate as AntdRate, ConfigProvider } from "antd";

interface RateProps {
  disabled?: boolean;
  allowHalf?: boolean;
  defaultValue?: number;
}

export const Rate: React.FC<RateProps> = ({
  disabled,
  allowHalf,
  defaultValue,
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Rate: {
            starSize: 16,
          },
        },
      }}
    >
      <AntdRate
        disabled={disabled}
        allowHalf={allowHalf}
        defaultValue={defaultValue}
      />
    </ConfigProvider>
  );
};
