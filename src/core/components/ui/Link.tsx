import { Link as RouterLink } from "react-router";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, className }) => {
  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
};
