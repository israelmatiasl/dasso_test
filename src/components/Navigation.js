import React, { Component } from 'react';
import { Menu } from 'grommet-icons';
import { Box, Button, Heading, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import Sidebar from './Sidebar';
import Main from './Main';

class Navigation extends Component {

    state = {
        open: true
    }

    render(){
        const { open } = this.state;
        return (
            <Grommet full theme={grommet}>
                <Box fill>
                    <Box
                        tag="header"
                        direction="row"
                        align="center"
                        pad={{ vertical: "small", horizontal: "medium" }}
                        justify="start"
                        background="white"
                        elevation="large"
                        style={{ zIndex: "1000" }}
                    >
                        <Button
                            onClick={() =>
                                this.setState({ open: !open })
                            }
                            icon={<Menu color="black" />}
                        />
                        <Heading level={3} margin="none" color="black">
                            <strong>
                                UTEC
                            </strong>
                        </Heading>
                    </Box>
                    <Box flex direction="row">
                        <Sidebar open={open}/>
                        <Box flex >
                            <Main/>
                        </Box>
                    </Box>
                </Box>
          </Grommet>
        )
    }
}

export default Navigation;