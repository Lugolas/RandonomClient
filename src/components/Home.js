import React, { Component } from "react";
import { Table, Tag } from "antd";
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
          color={prefixable ? "geekblue" : "green"}
          key={prefixable + "" + Math.floor(Math.random() * 1000 + 1)}
        >
          {prefixable ? "NON" : "OUI"}
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
          color={suffixable ? "geekblue" : "green"}
          key={suffixable + "" + Math.floor(Math.random() * 1000 + 1)}
        >
          {suffixable ? "NON" : "OUI"}
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameHasBegun: false,
      randonoms: []
    };
  }

  componentWillMount = () => {
    var fetch = fetchNames();

    fetch.then(result => {
      this.setState({
        gameHasBegun: true,
        randonoms: result
      });
    });
  };

  render() {
    console.log("render", this.props, this.state);
    return (
      <div>
        <Table
          style={{ margin: 100 }}
          dataSource={this.state.randonoms}
          columns={columns}
        />
      </div>
    );
  }
}

export default Home;
