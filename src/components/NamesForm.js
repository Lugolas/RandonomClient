import React, { Component } from "react";
import { Button, Form, Input, Checkbox, Icon, Select, } from "antd";
import { addName } from "./../utils/utils";

class NamesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pouet: 'mdr t con',
      value: '',
      type: '0',
      prefixable: false,
      suffixable: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    addName(JSON.stringify({
      value: this.state.value,
      type: this.state.type,
      prefixable: this.state.prefixable,
      suffixable: this.state.suffixable,
    }))
  }

  handleNameChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleTypeChange = (e) => {
    this.setState({type: e})
  }

  handlePrefChange = (e) => {
    this.setState({prefixable: e.target.checked})
  }

  handleSuffChange = (e) => {
    this.setState({suffixable: e.target.checked})
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            <Input 
              required
              onChange={this.handleNameChange} 
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              value={this.state.value} 
              placeholder="Nom" 
            />
          </Form.Item>
          <Form.Item>
            <Select
              value={this.state.type}
              onChange={this.handleTypeChange}
            >
              <Select.Option value="0">Prénom</Select.Option>
              <Select.Option value="1">Nom de famille</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Checkbox
              checked={this.state.prefixable}
              onChange={this.handlePrefChange}
            >
              Préfixable
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Checkbox
              checked={this.state.suffixable}
              onChange={this.handleSuffChange}
            >
              Suffixable
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Envoyer
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(NamesForm);