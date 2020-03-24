import React from 'react';
import { Form, Input, Button, Row, Col,DatePicker,List } from 'antd';
function RepaymentCalculator() {
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 5, span: 10 },
    };
    const [form] = Form.useForm();
    const list =[{
        day:'2014-01',
        principal:1000,
        interest:2000,
        amount:1000000
    }];

    const onFinish = values => {
        console.log(list.length);
        list.push({
            day:'2014-01',
            principal:1000,
            interest:2000,
            amount:1000000
        });
        
    };
    return (
        <div>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item name="amount" label="贷款余额"  rules={[{ required: true,message:'请输入贷款余额' }]}>
                    <Input placeholder='元' />
                </Form.Item>
                <Form.Item name="repayment" label="月还款额"  rules={[{ required: true,message:'请输入月还款额' }]}>
                    <Input placeholder='元' />
                </Form.Item>
                <Form.Item name='day' label="还款日" rules={[{ required: true ,message:'请选择还款日'}]}>
                <DatePicker />
                </Form.Item>
                <Form.Item {...tailLayout} >
                    <Button type="primary" htmlType='submit'>
                        计算
              </Button>
                </Form.Item>
            </Form>
            <div>
                <List
                    dataSource={list}
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

    );
}
export default RepaymentCalculator