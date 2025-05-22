import {
  AudioOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { Link } from "./ui/Link";
import Search from "antd/es/input/Search";
import { Button } from "./ui/Button";
import { Dropdown } from "./ui/Dropdown";

const Header: React.FC = () => {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-2xl md:text-3xl font-bold text-primary"
          >
            Sell<span className="text-orange-300">Art</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Dropdown />
            <Link to="/products" className="link-link">
              Productos
            </Link>
          </nav>

          {/* Search */}
          <div className="hidden md:flex max-w-md flex-1 mx-4">
            <Input placeholder="Buscar productos" prefix={<SearchOutlined />} />
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            <Button
              type="text"
              shape="circle"
              icon={<ShoppingCartOutlined />}
              size="large"
            />
            <Button
              type="text"
              shape="circle"
              icon={<UserOutlined />}
              size="large"
            />
            <Link to="/login" className="link-primary">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchOutlined className="h-4 w-4 text-gray-500" />
          </div>
          <Search
            placeholder="Buscar productos"
            suffix={suffix}
            style={{ width: 200 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
