import React from 'react';
import { Form, Row, Col, Button, Icon, Input } from 'antd';
import { wrap } from 'module';

//'姓名','电话','公司名称','地址','状态','竞猜数字','竞猜时间','物流单号'
const Labels = [
    {
        label: "姓名"
    },
    {
        label: "电话"
    },
    {
        label: "公司名称"
    },
    {
        label: "地址"
    },
    {
        label: "状态"
    },
    {
        label: "竞猜数字"
    },
    {
        label: "竞猜时间"
    },
    {
        label: "物流单号"
    },
]

class UserEdit extends React.Component {
    constructor(props){
        super(props)
    }
    handleSubmit() {
        console.log('提交表单')
    }

    render() {
        const { getFieldDecorator } = this.props.form
        console.log(this.props)
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        }
        return (
           <Form onSubmit={this.handleSubmit}>
               {Labels.forEach((item, index) => {
                   console.log(item ,index)
                   return (
                        <Row gutter={24}  labelCol='12'>
                            <Col span={8} style={{display : index < Labels.length ? 'block' : 'none'}}>
                                    <Form.Item label={item.label}>
                                        {getFieldDecorator(item.label, {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请输入内容'
                                                }
                                            ]
                                        })(<Input placeholder='placeholder'/>)}
                                    </Form.Item>
                            </Col>
                        </Row>
                   )
               })}
           </Form>
        )
    }
}

const UserEditForm = Form.create({name:'EditUser'})(UserEdit)
export default UserEditForm