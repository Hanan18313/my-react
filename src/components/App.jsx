import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Menu from './common/Menu';
import Table from './common/Table'

const useStyles = makeStyles(theme => ({
    root: {
        
    },
    container: {
        flexGrow: 1,
        backgroundColor:theme.palette.background.paper,
        height:'100vh'
    },
    display: {
        display:'flex',
        flexDirection:'row',
    }
}))

function BaseContainer() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container fixed className={classes.container}>
            <App_Bar></App_Bar>
            <div className={classes.display}>
                <Menu/>
                <Table/>
            </div>
            </Container>
        </React.Fragment>
    )
}

function App_Bar(){

    return (
        <div>
            <AppBar position='static'>
                <Typography variant='h6' color='inherit' style={{paddingLeft:40}}>
                    <p>小程序后台管理</p>
                </Typography>
            </AppBar>
        </div>
    )
}

export default class App extends React.Component {
    render(){
        return (
            <BaseContainer>   
            </BaseContainer>
        )
    }
}
