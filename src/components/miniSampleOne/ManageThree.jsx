import React from 'react';
import Table from '../common/Table';
import CONFIG from '../../config';
import axios from 'axios';
import urlList from '../../public/js/Common'
import { Divider, Avatar, Tooltip } from 'antd';

const columns = [
    {
        title: '姓名',
        dataIndex: 'user_name',
        width:200,
        render: (text) => {
            return (
                <Tooltip placement='topLeft' title={text} ></Tooltip>
            )
        }
    },
    {
        title: '公司',
        dataIndex: 'company',
        width:200,
    },
    {
        title: '联系方式',
        dataIndex: 'phone',
        width:200,
    },
    {
        title: '住址',
        dataIndex: 'address',
        width:200,
    },
    {
        title: '头像',
        dataIndex: 'portrait',
        width:200,
        render: (text, record) =>{
            return (
                <Avatar src={text}></Avatar>
            )
        }
    },
    {
        title: '竞猜答案',
        dataIndex: 'quiz_answer',
        width:200,
        render: (text) => (
            <Tooltip placement='topLeft' title={text}></Tooltip>
        )
    },
    {
        title: '操作',
        key: 'action',
        width:200,
        render: (text, record) => {
            return (
                <span>
                    <a href='javascript:;'>删除</a>
                    <Divider type='vertical' />
                    <a href='javascript:;'>编辑</a>
                </span>
            )
        }
    },
]
export default class ManageThree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource:[],
            loading:false
        }
    }

    Fetch(){
        axios.get(urlList.getParticipantsList,{
            headers:{
                'Content-Type':'application/json',
                'unionId':'123'
            }
        }).then(res => {
            this.setState({
                dataSource:res.data,
                loading:false
            })
        })
    }
    componentDidMount() {
        this.Fetch()
    }
    render() {
        return (
            <Table columns={columns} dataSource={this.state.dataSource} loading={this.state.loading}/>
        )
    }
}