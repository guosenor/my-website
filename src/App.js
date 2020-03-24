import React from 'react';
import {Row, Col} from 'antd'
import './App.css';
import RepaymentCalculator from './component/RepaymentCalculator'

function App() {
  return (
    <Row className='mt10'>
      <Col span={6}>  
      <RepaymentCalculator/>
      </Col>
      <Col span={6}>  
      <RepaymentCalculator/>
      </Col>
      <Col span={6}>  
      <RepaymentCalculator/>
      </Col>
      <Col span={6}>  
      <RepaymentCalculator/>
      </Col>
    </Row>
  );
}

export default App;
