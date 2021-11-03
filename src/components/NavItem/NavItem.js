import "./NavItem.css";

const NavItem = (props) => {
  const { id, displayName, activeTab, setActiveTab } = props;

  const tabIsActive = activeTab === id;

  const handleTabClick = () => {
    setActiveTab(id);
  };

  return (
    <div className="tab-item-wrapper">
      <div
        className={`tab-item ${tabIsActive ? "active" : ""}`}
        onClick={handleTabClick}
      >
        {displayName}
      </div>
    </div>
  );
};

export default NavItem;
