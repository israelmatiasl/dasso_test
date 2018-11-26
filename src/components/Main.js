import React, { Component } from 'react';
import { Grid, Box } from 'grommet';
import Card from './Card';

class Main extends Component {

    render(){
        return(
            <Grid
                style={{ marginTop: "20px", paddingLeft: "10px", paddingRight: "10px" }} 
                columns={{ count: 4, size: "auto" }}
                gap="small"
                justify="center">
                <Box style={{width: "95%"}}><Card id="card"/></Box>
                <Box style={{width: "95%"}}><Card /></Box>
                <Box style={{width: "95%"}}><Card /></Box>
                <Box style={{width: "95%"}}><Card /></Box>
            </Grid>
            
        )
        
    }

    
}


export default Main;