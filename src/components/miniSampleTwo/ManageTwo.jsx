import React from 'react'




export default class ManageTwo extends React.Component {

    handleClick = e => {
        console.log(e)
        console.log(window.location)
    }

    render() {
        return (
            <p>我是miniTwo管理二组件</p>
        )
    }
}