import { NavLink } from "react-router-dom";
const SidebarOption = ({ Icon, title, path }) => {
  const activeClassName = "text-white";
  return (
    <NavLink
      to={`${path}`}
      className={({ isActive }) =>
        isActive ? activeClassName : "text-gray-400"
      }
    >
      <div className="flex flex-row gap-4 items-center hover:text-white hover:cursor-pointer visited:text-white">
        <Icon sx={{ fontSize: 30 }} />
        <p className="font-medium">{title}</p>
      </div>
    </NavLink>
  );
};

export default SidebarOption;
