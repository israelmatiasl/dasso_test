import React, { Component } from 'react';
import {  } from 'grommet-icons';
import { Box, Button, Text, Anchor, Layer, Heading, Image } from 'grommet';

class Card extends Component {

    state = {}

    onOpen = () => this.setState({ open: true });
    onClose = () => this.setState({ open: undefined });

    render(){
        const { open } = this.state;
        return(
            <div id={this.props.id}>
              <div className="front">
            <Box>
                <Box 
                    pad="large"
                    align="center"
                    background={{color: "light-2", opacity: "strong"}}
                    round="5px"
                    gap="small"
                    elevation="large"
                    >
                    
                    <Box height="small" width="small">
                        <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="cover" />
                    </Box>
                    <Text>Party</Text>
                    <Anchor href="" label="Link"/>
                    <Button label="Eliminar" onClick={this.onOpen}/>
                </Box>
                {open && (
                    <Layer
                        position="center"
                        modal
                        onClickOutside={this.onClose}
                        onEsc={this.onClose}
                    >
                    <Box pad="medium" gap="small" width="medium">
                      <Heading level={3} margin="none">
                        ¿Eliminar?
                      </Heading>
                      <Text>Está seguro de realizar esta acción?</Text>
                      <Box
                        tag="footer"
                        gap="small"
                        direction="row"
                        align="center"
                        justify="end"
                        pad={{ top: "medium", bottom: "small" }}
                      >
                        <Button
                          label={
                            <Text color="white">
                              <strong>Sí, Eliminar</strong>
                            </Text>
                          }
                          onClick={this.onClose}
                          primary
                          color="status-critical"
                        />
                      </Box>
                    </Box>
                  </Layer>
                )}
            </Box>
            </div>
            <div className="back">
              ATRÁS
            </div>
            
            </div>
        )
    }
}

export default Card;