import React from 'react';
import { Divider  } from 'antd';
import Table from '../common/Table';
import axios from 'axios';
import urlList from '../../public/js/Common'

const columns = [
    {
        title:"姓名",
        key:"name",
        width:150
    },
    {
        title:"地址",
        key:"address",
        width:300,
    },
    {
        title:"发货状态",
        key:"state",
        width:200
    }
]

let expressInfo = []
function ExpressInfoList() {
    axios.get(urlList.getParticipantsList,{
        headers:{
            'Content-Type':'application/json',
            'unionid':'123'
        }
    }).then(value => {
        if(value.status == 200){
            expressInfo = value.data.filter(item => item.state == '待发货' || item.state == '已发货')
           
                
            
        }
    })
}

export default class ManageTwo extends React.Component {

    constructor(props){
        super()
    }

    componentDidMount() {
       // ExpressInfoList()
    }

    render() {
        return (
           <p>111</p>
        )
    }
}