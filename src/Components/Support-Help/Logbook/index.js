import "./index.css";

import { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";
import { dropDownArrow } from "../../../utils/svg`s";

function Logbook() {
  const [logbookList, setLogbookList] = useState([]);
  const [expandedRows, modifyExpandRow] = useState([]);

  useEffect(() => {
    fetch("https://sweb.ru/export/turbojournal/")
      .then((response) => response.text())
      .then((data) => {
        var xml = new XMLParser().parseFromString(data);
        setLogbookList(
          xml.children[0].children.filter((obj) => obj.name === "item")
        );
      });
  }, [setLogbookList]);

  const expandRow = (id) => {
    if (expandedRows.includes(id)) {
      modifyExpandRow(expandedRows.filter((rowId) => rowId !== id));
    } else {
      modifyExpandRow([...expandedRows, id]);
    }
  };

  const renderLogbook = (logbook, id, isExpanded) => (
    <div
      className={`logbook-list-item ${
        isExpanded ? "logbook-list-item-expanded" : ""
      }`}
      onClick={() => expandRow(id)}
    >
      <div
        className={`dropdown_arrow ${
          isExpanded ? "dropdown_arrow-inverted" : ""
        }`}
      >
        {dropDownArrow()}
      </div>
      {logbook.children[0].value}
      {isExpanded && (
        <div
          className="logbook-list-item-description"
          onClick={(event) => event.stopPropagation()}
          dangerouslySetInnerHTML={{
            __html: logbook.children[4].value.slice(0, -1),
          }}
        />
      )}
    </div>
  );

  const renderLogbookList = (list) =>
    list.map((item, id) => (
      <span key={id}>
        {renderLogbook(item, id, expandedRows.includes(id))}
        <hr className="logbook-list-partition" />
      </span>
    ));

  return (
    <div className="logbook">
      {logbookList.length < 1 ? (
        <h1>Загрузка...</h1>
      ) : (
        <>
          <h3>Бортовой журнал</h3>
          <h1>Бортовой журнал</h1>
        </>
      )}
      {renderLogbookList(logbookList)}
    </div>
  );
}

export default Logbook;
