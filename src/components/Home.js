import React, { Component } from 'react';
import { Button, Row, Table, Tag, } from "antd";
import moment from 'moment';

const columns = [{
  title: 'Nom',
  dataIndex: 'NameValue',
  key: 'NameValue',
}, {
  title: 'Categorie',
  dataIndex: 'Category',
  key: 'Category',
  render: cat => {
    let text;
    if (cat === "LastName") {
      text = "Nom de famille"
    } else { 
      text = "Prénom"
    }
    return text;
  },
}, {
  title: 'Préfixable',
  dataIndex: 'IsPrefixable',
  key: 'IsPrefixable',
  render: pref => (
    <span>
      <Tag color={pref === 0 ? 'geekblue' : 'green'} key={pref + '' + Math.floor((Math.random() * 1000) + 1)}>{pref === 0 ? 'NON' : 'OUI'}</Tag>
    </span>
  ),
}, {
  title: 'Suffixable',
  dataIndex: 'IsSuffixable',
  key: 'IsSuffixable',
  render: suff => (
    <span>
      <Tag color={suff === 0 ? 'geekblue' : 'green'} key={suff + '' + Math.floor((Math.random() * 1000) + 1)}>{suff === 0 ? 'NON' : 'OUI'}</Tag>
    </span>
  ),
}, {
  title: 'A été inventé le',
  dataIndex: 'CreatedAt',
  key: 'CreatedAt',
  render: date => 
    moment(date).fromNow()
}];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameHasBegun: false,
      randonoms: [],
    };

  }


  onClickBefore = () => {
    fetch('https://randonom.herokuapp.com/api/names')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          gameHasBegun: true,
          randonoms: data,
        })
      });
  }

  onClickAfter = () => {
    this.setState({
      gameHasBegun: false,
    })
  }

  renderBefore = () => {
    return (
      <div>
        <Row>
          Let the game begin
        </Row>

        <Row>
          <Button type="primary" onClick={this.onClickBefore}>Heyoo Let's gooo</Button>
        </Row>
      </div>
    )
  };



  renderAfter = () => {
    return (
      <div>
        <Row>
          Yes that was so good
        </Row>

        <Row>
          <Button type="primary" onClick={this.onClickAfter}>Calm Down Now</Button>
        </Row>

        <Table style={{margin: 100}} dataSource={this.state.randonoms} columns={columns}/>
      </div>
    )
  };

  render() {
    return (
      <div>
        {
          this.state.gameHasBegun === true ? this.renderAfter() : this.renderBefore() 
        }
      </div>
    );
  }
}

export default Home;
