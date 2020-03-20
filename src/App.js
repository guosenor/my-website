import React from 'react';
import { Row, Col, Form, Input, DatePicker, Button } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN';
import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <h1>还款计算器</h1>
        </Col>
      </Row>
      <Row>
        <Col span={3} offset={1}>
          <Row>
            <Col>
              <Form>
                <Form.Item label="贷款余额">
                  <Input placeholder="元"></Input>
                </Form.Item>
                <Form.Item label="月还款额">
                  <Input placeholder="元"></Input>
                </Form.Item>
                <Form.Item label="下个还款">
                  <DatePicker locale={locale} placeholder="日期" />
                </Form.Item>
                <Form>
                  <Button type="primary">
                    计算
               </Button>
                </Form>
              </Form>
              <Row className="list">
                <Col>
                  <Row>
                    <Col>
                      2019年12月12日
               </Col>
                  </Row>
                  <Row>
                    <Col>
                      本金:3000
               </Col>
                  </Row>
                  <Row>
                    <Col>
                      利息:2000
               </Col>
                  </Row>
                  <Row>
                    <Col>
                      余额:1000000
               </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
