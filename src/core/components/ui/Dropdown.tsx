import { DownOutlined } from "@ant-design/icons";
import { Dropdown as AntdDropdown, Space, type MenuProps } from "antd";
import { Link } from "./Link";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to="/products">1st menu item</Link>,
  },
  {
    key: "2",
    label: <Link to="/products">1st menu item</Link>,
  },
  {
    key: "3",
    label: <Link to="/products">1st menu item</Link>,
  },
];

export const Dropdown: React.FC = () => {
  return (
    <AntdDropdown
      menu={{ items }}
      className="hover:bg-gray-100 rounded-md p-2 hover:text-primary-light"
    >
      <Space>
        Categorias
        <DownOutlined style={{ fontSize: 12 }} />
      </Space>
    </AntdDropdown>
  );
};
