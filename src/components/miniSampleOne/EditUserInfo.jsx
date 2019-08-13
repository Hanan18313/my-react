import React from 'react';
import { Form, Row, Col, Button, Icon, Input } from 'antd';
import axios from 'axios'
import urlList from '../../public/js/Common'

//'姓名','电话','公司名称','地址','状态','竞猜数字','竞猜时间','物流单号'
const Labels = [
    {
        label: "姓名",
        field: "user_name"
    },
    {
        label: "电话",
        field: "phone"
    },
    {
        label: "公司名称",
        field: "company"
    },
    {
        label: "地址",
        field: "address"
    },
    {
        label: "状态",
        field: 'state'
    },
    {
        label: "竞猜数字",
        field: "quiz_answer"
    },
    {
        label: "竞猜时间",
        field: "quiz_time"
    },
    {
        label: "物流单号",
        field: "express_no"
    },
]

class UserEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // labelProperty:{
            //     userName: {lable:"姓名",inputAttr: {disabled:"disabled"}},
            //     phone: {label: "电话", inputAttr: {disabled: "disabled"}},
            //     company: {label: "公司", inputAttr: {disabled: "disabled"}},
            //     address: {label: "地址", inputAttr: {disabled: "disabled"}},
            //     state: {label: "状态", inputAttr: {disabled: "disabled"}},
            //     quizAnswer: {label: "竞猜答案", inputAttr: {disabled: "disabled"}},
            //     quizTime: {label: "竞猜时间", inputAttr: {disabled: "disabled"}},
            //     expressNo: {label: "物流单号", rules:[{required: true, message: "不能为空"}]}
            // },
            dataSource:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.goBack = this.goBack.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.form.validateFields((err, value) => {
            
        })
    }

    goBack(e) {
        this.props.history.push('/firstAppletMan3')
    }
    Fetch(params) {
        let token = 'eyJkYXRhIjp7InVzZXJJZCI6IjE4MDIiLCJwYXNzV29yZCI6ImUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNlIn0sImNyZWF0ZWQiOjE1NjU1NzAwODczNjIsImV4cCI6MzYwMDAwMH0=.wPlTMyuS2DW3z69n8q55fvt+lKPoETXm3CAFf8Y7Dkg='
        axios.get(urlList.getUserOne,{
            headers:{
                'Content-Type':'application/json',
                'token': token
            },
            params: params
        }).then(res => {
            this.setState({
                dataSource:res.data
            })
            console.log(res)
        })
    }

    componentDidMount() {
        let data = this.props.location.state
        console.log(data)
        let location = this.props.location.search.indexOf("=")
        if(location !== -1){
            let id = this.props.location.search.slice(location+1)
            let params = {
                id:id
            }
            this.Fetch(params)
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form
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
           <Form {...formItemLayout} onSubmit={this.handleSubmit} layout='horizontal' labelAlign='right'>
               <Row>
                    {Labels.map(label => {
                        return (
                            <Col span={12} key={Labels.indexOf(label)} style={{display: Labels.indexOf(label) < Labels.length ? 'block' : 'none',textAlign:'right'}}>
                                <Form.Item label={label.label} labelAlign='right'>
                                    {getFieldDecorator(label.field, {
                                        rules: [
                                            {
                                                required: true,
                                                message: '不能为空'
                                            }
                                        ]
                                    })(<Input placeholder='placeholder' />)}
                                </Form.Item>
                            </Col>
                        )
                    })}
               </Row>
               <Row>
                   <Col span={24} style={{textAlign:'center',padding:40}}>
                       <Button type='primary' style={{marginRight:40}} htmlType='submit'>确定</Button>
                       <Button type='default' style={{marginLeft:40}} onClick={this.goBack}>返回</Button>
                   </Col>
               </Row>
           </Form>
        )
    }
}

const UserEditForm = Form.create({name:'EditUser'})(UserEdit)
export default UserEditForm