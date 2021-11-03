import "./Navbar.css";
import data from "../../util/data.json";
import TabItem from "../NavItem/NavItem.js";

const NavBar = (props) => {
  const { activeTab, setActiveTab } = props;

  const renderTabItems = () => {
    return data.cities.map((element, i) => {
      return (
        <TabItem
          key={i}
          id={element.id}
          displayName={element.display_name}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      );
    });
  };

  return <div className="tab-bar-container">{renderTabItems()}</div>;
};

export default NavBar;
