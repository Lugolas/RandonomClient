import React from "react";
import { Table, Tag, Spin } from "antd";
import moment from "moment";
import { capitalizeFirstLetter } from "./../utils/utils";
import { fetchNames } from "./../utils/utils";
require("moment/locale/fr");

const columns = [
  {
    title: "Nom",
    dataIndex: "value",
    key: "value"
  },
  {
    title: "Categorie",
    dataIndex: "type",
    key: "type",
    render: categorie => {
      let text;
      if (categorie) {
        text = "Nom de famille";
      } else {
        text = "Prénom";
      }
      return text;
    }
  },
  {
    title: "Préfixable",
    dataIndex: "prefixable",
    key: "prefixable",
    render: prefixable => (
      <span>
        <Tag
          color={prefixable === true ? "green" : "geekblue"}
          key={prefixable + "" + Math.floor(Math.random() * 1000 + 1)}
        >
          {prefixable === true ? "OUI" : "NON"}
        </Tag>
      </span>
    )
  },
  {
    title: "Suffixable",
    dataIndex: "suffixable",
    key: "suffixable",
    render: suffixable => (
      <span>
        <Tag
          color={suffixable === true ? "green" : "geekblue"}
          key={suffixable + "" + Math.floor(Math.random() * 1000 + 1)}
        >
          {suffixable === true ? "OUI" : "NON"}
        </Tag>
      </span>
    )
  },
  {
    title: "A été inventé le",
    dataIndex: "createdAt",
    key: "createdAt",
    render: date => {
      moment.locale();
      return capitalizeFirstLetter(moment(date).fromNow());
    }
  }
];

const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [randonoms, setRandonoms] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    var fetch = fetchNames();
    fetch.then(result => {
      setLoading(false);
      setRandonoms(result);
    });
  }, []);

  const renderLoading = () => {
    return (
      <div className="table_loader">
        <Spin />
      </div>
    );
  };

  const renderLoaded = () => {
    return (
      <div>
        <Table
          style={{ margin: 100 }}
          dataSource={randonoms}
          columns={columns}
          rowKey="uid"
        />
      </div>
    );
  };

  return loading === true ? renderLoading() : renderLoaded();
};

export default Home;
