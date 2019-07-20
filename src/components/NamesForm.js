import React from "react";
import {
  Button,
  Form,
  Input,
  Checkbox,
  Icon,
  Select,
  notification
} from "antd";
import { addName } from "./../utils/utils";

const NamesForm = () => {
  const [value, setValue] = React.useState("");
  const [type, setType] = React.useState("0");
  const [prefixable, setPrefixable] = React.useState(false);
  const [suffixable, setSuffixable] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    addName(
      JSON.stringify({
        value: value,
        type: type,
        prefixable: prefixable,
        suffixable: suffixable
      })
    ).then(() => {
      notification.open({
        message: "Nom ajouté!",
        description:
          "Le nom à été ajouté à la liste. Vous êtes fier de ça? Ça promet..."
      });
    });
  };

  const handleNameChange = e => {
    setValue(e.target.value);
  };

  const handleTypeChange = e => {
    setType(e);
  };

  const handlePrefChange = e => {
    setPrefixable(e.target.checked);
  };

  const handleSuffChange = e => {
    setSuffixable(e.target.checked);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          <Input
            required
            onChange={handleNameChange}
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            value={value}
            placeholder="Nom"
          />
        </Form.Item>
        <Form.Item>
          <Select value={type} onChange={handleTypeChange}>
            <Select.Option value="0">Prénom</Select.Option>
            <Select.Option value="1">Nom de famille</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Checkbox checked={prefixable} onChange={handlePrefChange}>
            Préfixable
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Checkbox checked={suffixable} onChange={handleSuffChange}>
            Suffixable
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Envoyer
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create()(NamesForm);
