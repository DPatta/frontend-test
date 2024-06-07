import React from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";

import type { DatePickerProps } from "antd";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};
const UserForm: React.FC = () => {
  return (
    <Form className="block-form">
      <Row>
        <Form.Item>
          <Row>
            <p>คำนำหน้า :</p>
            <Select
              defaultValue="คำนำหน้า"
              style={{ width: 80 }}
              options={[
                { value: "Mr.", label: "Mr." },
                { value: "Ms.", label: "Ms." },
                { value: "Mrs.", label: "Mrs." },
              ]}
            />
          </Row>
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Row wrap={false}>
            <p>ชื่อจริง :</p>
            <Input placeholder="Name" />
          </Row>
        </Form.Item>
        <Form.Item
          name="lastname"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Row wrap={false}>
            <p>นามสกุล :</p>
            <Input placeholder="Lastname" />
          </Row>
        </Form.Item>
      </Row>
      <Row>
        <Form.Item>
          <Row>
            <p>วันเกิด :</p>
            <DatePicker onChange={onChange} placeholder="เดือน/วัน/ปี" />
          </Row>
        </Form.Item>
        <Form.Item>
          <Row>
            <p>สัญชาติ :</p>
            <Select
              defaultValue="สัญชาติ"
              style={{ width:   300 }}
              options={[
                { value: "Mr.", label: "Mr." },
                { value: "Ms.", label: "Ms." },
                { value: "Mrs.", label: "Mrs." },
              ]}
            />
          </Row>
        </Form.Item>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
