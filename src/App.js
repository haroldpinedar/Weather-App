import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForeCastExtended from './components/ForeCastExtended';
import './App.css';

const cities = [
  "Santa Marta,Co",
  "Cali,CO",
  "Manizales,CO",
  "Ciudad de Mexico,MX",
 ]

class App extends Component  {

  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectedLocation = city => {
      this.setState({ city });
      console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    const { city } = this.state

    return (
      <Grid>
        <Row>
            <AppBar position='sticky'>
              <Toolbar >
                  <Typography variant="h6" color="inherit">
                      Weather App
                  </Typography>
              </Toolbar>
            </AppBar>
        </Row>          
        <Row>
          <Col xs={12} md={6}>
             <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
          <Col xs={12} md={6}>
              <Paper elevation={4}>
                  <div className="details">
                      {
                        city ?                        //OPERADOR TERNARIO
                        <ForeCastExtended city={city} />:
                        null
                      }                      
                  </div>
              </Paper>              
          </Col>
        </Row>        
      </Grid>
    );
  }
}

export default App;
