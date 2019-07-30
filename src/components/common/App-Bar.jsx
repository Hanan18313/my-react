import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

export default function App_Bar(){
    return (
        <div>
            <AppBar position='static'>
                <Typography variant='h6' color='inherit' style={{paddingLeft:40}}>
                    {/* <p>小程序后台管理</p> */}
                </Typography>
            </AppBar>
        </div>
    )
}

