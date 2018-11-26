import React, { Component } from 'react';
import { Music, Multimedia } from 'grommet-icons';
import { Box, Button, Collapsible, Text } from 'grommet';

const MenuButton = ({ label, icon }) => {
    const Icon = icon;
    return (
      <Button hoverIndicator>
        <Box
          margin={ { left: "small" } }
          direction="row"
          align="center"
          pad="medium"
        >
          <Icon color="white" />
          <Text style={{ marginLeft: "20px" }} size="medium">{label}</Text>
        </Box>
      </Button>
    );
  };

class Sidebar extends Component {

    render(){
        return (
            <Collapsible direction="horizontal" open={this.props.open}>
                <Box
                    flex
                    gridArea="sidebar"
                    width="medium"
                    background="#28373c"
                    elevation="small"
                >
                    <Box pad={{ horizontal: "medium", vertical: "medium" }}>
                        <Text textAlign="center">BIENVENIDO</Text>
                    </Box>
                    {[{name: "Conciertos", icon: Music }, { name: "Multimedia", icon: Multimedia }].map(object => (
                        <MenuButton key={object.name} label={object.name} icon={object.icon} />
                    ))}
                </Box>
            </Collapsible>
        )
    }
}

export default Sidebar;