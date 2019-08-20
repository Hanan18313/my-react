import React from 'react';
import BaseTable from '../common/BaseTable';
import UrlList from '../../public/js/Common'
import { Avatar } from 'antd';
import moment from 'moment';

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',

    },
    {
        title: '联系方式',
        dataIndex: 'phone'
    },
    {
        title: '公司名称',
        dataIndex: 'company'
    },
    {
        title: '头像',
        dataIndex: 'portrait',
        render: (text) => {
            return(
                <Avatar src={text}/>
            )
        }
    },
    {
        title: '报名时间',
        dataIndex: 'sign_time',
        render: (text) => {
            if(text) return(<p style={{ width:160 }}>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</p>)
            return(<p style={{ width:160 }}></p>)
        }
    },
    {
        title: '报名状态',
        dataIndex: 'state',
        filter:[{text: '已报名', value: 1},{text: '未报名', value: 0}]
    },
    {
        title: '是否晚餐',
        dataIndex: 'need_dinner'
    },
]

export default class ActionTrainSignTable extends BaseTable {
    // constructor(props) {
    //     super(props)
    //     this.state = {
           
    //     }
        
    // }

    componentDidMount() {
        console.log(this)
        let req_url = UrlList.getSignUpList
        this.obtainTable(req_url)
        let params = {
            table_w: 1000,
            table_h: 600,
            columns: columns,
            data: this.state.data
        }
        this.tableRender(params)
    }

    render() {
        return(
            <p>子类</p>
        )
    }

    
} 