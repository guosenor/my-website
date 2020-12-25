import React from 'react';
import Decimal from 'decimal.js'
import { Form, InputNumber, Button, Row, Col, DatePicker, List } from 'antd';
import zhCN from 'antd/es/date-picker/locale/zh_CN'; 
import moment from 'moment';
class RepaymentCalculator1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            repaymentCount:0,
            totalInterest:0
        };
        this.layout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 16 },
        };
         this.tailLayout = {
            wrapperCol: { offset: 5, span: 10 },
        };
    }
    onFinish = (values)=>{
        const { amount, interestRate, repayment, day } = values;
        const everyMouth = new moment(day)
        const list = [];
        let all = amount;
        while (all > 0) {
            let principal, interest
            if (all > repayment) {
                interest = new Decimal(all).mul(new Decimal(interestRate).div(new Decimal(100))).div(new Decimal(12)).toFixed(2);
                principal = new Decimal(repayment).sub(new Decimal(interest)).toFixed(2);
                if (principal < 0) {
                    break;
                }
                all = new Decimal(all).sub(new Decimal(principal)).toFixed(2)
            } else {
                interest = new Decimal(all).mul(new Decimal(interestRate).div(new Decimal(100))).toFixed(2);
                principal = new Decimal(all).sub(new Decimal(interest)).toFixed(2);
                all = 0
            }
            list.push({
                day: everyMouth.format("YYYY-M"),
                principal,
                interest,
                amount: all
            })
            everyMouth.add(1, 'M')
        }
        let totalInterest = new Decimal(0);
        list.forEach(item=>{
            totalInterest= totalInterest.add(new Decimal(item.interest)) 
        });
        this.setState({list:list})
        this.setState({repaymentCount:list.length})
        this.setState({totalInterest:totalInterest.toFixed(2)})
    };
    render(){
        return (
            <div>
            <Form {...this.layout}  name="control-hooks" onFinish={this.onFinish}>
                <Form.Item name="amount" label="贷款余额" rules={[{ required: true, message: '请输入贷款余额' }]}>
                    <InputNumber min={10000} placeholder='元' />
                </Form.Item>
                <Form.Item name="interestRate" label="利率" rules={[{ required: true, message: '请输入利率' }]}>
                    <InputNumber
                        defaultValue={3.25}
                        min={1}
                        placeholder="利率"
                        formatter={value => `${value}%`}
                        parser={value => value.replace('%', '')}
                    />
                </Form.Item>
                <Form.Item name="repayment" label="月还款额" rules={[{ required: true, message: '请输入月还款额' }]}>
                    <InputNumber min={0} placeholder='元' />
                </Form.Item>
                <Form.Item name='day' label="还款日" rules={[{ required: true, message: '请选择还款日' }]}>
                    <DatePicker locale={zhCN}  />
                </Form.Item>
                <Form.Item {...this.tailLayout} >
                    <Button type="primary" htmlType='submit'>
                        计算
              </Button>
                </Form.Item>
            </Form>
            <div>
            {
              this.state.repaymentCount>0&&
              <b>
                   总期数:{this.state.repaymentCount}
              </b>
            }
            <br/>
            {
              this.state.totalInterest>0&&
              <b>
                   总利息:{this.state.totalInterest}
              </b>
            }
                 
                <List
                    dataSource={this.state.list}
                    renderItem={item => (
                        // <List.Item>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={5} >
                                <span><b>{item.day}</b></span>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} >
                                <span>本金:{item.principal}</span>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} >
                                <span>利息:{item.interest}</span>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={7} >
                                <span>余额:{item.amount}</span>
                            </Col>
                        </Row>
                        // </List.Item>
                    )}
                />
            </div>
        </div>

        )
    }
}
export default RepaymentCalculator1