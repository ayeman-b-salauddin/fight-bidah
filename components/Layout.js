import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <div className="content">{children}</div>
      <Sidebar />
    </div>
  );
};

export default Layout;
