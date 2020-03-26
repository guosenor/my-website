import React from 'react';
import {Row, Col} from 'antd'
import './App.css';
import RepaymentCalculator from './component/RepaymentCalculator'
import RepaymentCalculator1 from './component/RepaymentCalculator1'

function App() {
  return (
    <Row className='mt10'>
      <Col span={8}>  
      <RepaymentCalculator/>
      </Col>
      <Col span={8}>  
      <RepaymentCalculator1/>
      </Col>
      <Col span={8}>  
      <RepaymentCalculator/>
      </Col>
    </Row>
  );
}

export default App;
