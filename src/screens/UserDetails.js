import React from 'react';
import { Container } from 'native-base';
import {Text, StyleSheet} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

class UserDetails extends React.Component {
  render() {
    return (
      <Container>
          <Grid>
            <Row>
              <Col style={{ backgroundColor: '#FF4500', height: 200,
                margin: 10, marginRight: 7,  borderRadius: 8}}>
                <Text style={styles.containerHeaderText}>Donations Offered Today</Text>
                <Text style={styles.numberText}>5</Text>
              </Col>
              <Col style={{ backgroundColor: 'gold', height: 200,
                margin: 10, marginLeft: 7, borderRadius: 8 }}>
                <Text style={styles.containerHeaderText}>Pickups Scheduled</Text>
                <Text style={styles.numberText}>2</Text>
              </Col>
            </Row>
            <Row style={{marginTop: 10}}>
              <Col style={{ backgroundColor: '#9ACD32', height: 200,
                marginTop: 20, marginLeft: 10, marginRight: 10,  borderRadius: 8  }}>
                <Text style={styles.containerHeaderText}>Total Donations Contributed</Text>
                <Text style={styles.numberText}>57</Text>
              </Col>
            </Row>
            <Row style={{marginTop: 20}}>
              <Col style={{ backgroundColor: 'tomato', height: 200,
                marginTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 8 }}>
                <Text style={styles.containerHeaderText}>Meals Donated Equivalent</Text>
                <Text style={styles.numberText}>103</Text>
              </Col>
            </Row>
          </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  numberText: {
    color: "white",
    fontFamily: "Futura",
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 30,
  },
  containerHeaderText: {
    color: "white",
    fontFamily: "Futura",
    textAlign: 'center',
    paddingTop: 25,
    padding: 10,
  },
})

export {UserDetails};
