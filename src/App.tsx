import React, { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Test1 from "./pages/test_1";
import Test2 from "./pages/test_2";
import { Header } from "antd/es/layout/layout";
import { Button, Col, Row, Select, Space } from "antd";
import i18n from "./i18n";
import { t } from "i18next";
// import { useTranslation } from "react-i18next";

function App() {
  const [language, setLanguage] = useState<string>("en");

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    i18n.changeLanguage(value);
    setLanguage(value);
  };

  useEffect(() => {}, [language]);
  return (
    <div className="App">
      <Header>
        <Row justify={"space-between"}>
          <Col>
            <Link to="/test_1">
              <Button style={{ width: 130, margin: "0 10px" }}>
                {t("Test1")}
              </Button>
            </Link>
            <Link to="/test_2">
              <Button style={{ width: 130, margin: "0 10px" }}>
                {t("Test2")}
              </Button>
            </Link>
          </Col>
          <Col>
            <Space wrap>
              <Select
                defaultValue="en"
                style={{ width: 80 }}
                onChange={handleChange}
                options={[
                  { value: "en", label: "En" },
                  { value: "th", label: "Th" },
                ]}
              />
            </Space>
          </Col>
        </Row>
      </Header>

      <Routes>
        <Route path="/test_1" element={<Test1 />} />
        <Route path="/test_2" element={<Test2 />} />
      </Routes>
    </div>
  );
}

export default App;
