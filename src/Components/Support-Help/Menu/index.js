import "./index.css";
import {
  svgAccount,
  svgDomains,
  svgLogbook,
  svgLogo,
  svgVPS,
} from "../../../utils/svg`s";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TABS_LIST } from "../../../utils/tabsCONSTS";

function Menu(props) {
  let defaultTab = props.activeTab;
  if (!TABS_LIST.includes(props.activeTab)) {
    defaultTab = "logbook";
  }
  const [activeTab, setActiveTab] = useState(defaultTab);
  const history = useHistory();

  useEffect(() => {
    if (activeTab !== defaultTab) {
      setActiveTab(activeTab);
      history.push(`/${activeTab}`);
    }
  }, [activeTab]);

  return (
    <div className="menu">
      {svgLogo()}
      <div className="menu-list">
        <div
          className={`menu-list-item ${
            activeTab === "account" ? "menu-list-item-active" : ""
          }`}
          onClick={() => setActiveTab("account")}
        >
          {svgAccount()} Аккаунт
        </div>
        <div
          className={`menu-list-item ${
            activeTab === "vps" ? "menu-list-item-active" : ""
          }`}
          onClick={() => setActiveTab("vps")}
        >
          {svgVPS()} VPS
        </div>
        <div
          className={`menu-list-item ${
            activeTab === "domains" ? "menu-list-item-active" : ""
          }`}
          onClick={() => setActiveTab("domains")}
        >
          {svgDomains()} Домены
        </div>
        <div
          className={`menu-list-item ${
            activeTab === "logbook" ? "menu-list-item-active" : ""
          }`}
          onClick={() => setActiveTab("logbook")}
        >
          {svgLogbook()} Бортовой журнал
        </div>
      </div>
    </div>
  );
}

export default Menu;
