import React from 'react'




export default class ManageOne extends React.Component {

    handleClick = e => {
        console.log(e)
        console.log(window.location)
    }

    render() {
        return (
            <p>我是miniTwo管理一组件</p>
        )
    }
}