import React from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import { Container, Left, Right, Content, ListItem, Text, Separator } from 'native-base';

class Settings extends React.Component {
  render() {
    return (
      <ScrollView>
        <Container>
          <Content>
            <Separator bordered>
              <Text>MY INFO</Text>
            </Separator>
            <ListItem last>
              <Left>
                <Text style={styles.fieldText}>Company Name</Text>
              </Left>
              <Right>
                <Text style={styles.personalText}>Central Coop</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.fieldText}>Point of Contact</Text>
              </Left>
              <Right>
                <Text style={styles.personalText}>Theresa Redmond</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.fieldText}>Email</Text>
              </Left>
              <Right>
                <Text style={styles.personalText}>Theresa@centralcoop.coop</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.fieldText}>User Status</Text>
              </Left>
              <Right>
                <Text style={styles.personalText}>Doner</Text>
              </Right>
            </ListItem>
            <Separator bordered>
              <Text>ADDRESS</Text>
            </Separator>
            <ListItem>
              <Left>
                <Text style={styles.fieldText}>Street Address</Text>
              </Left>
              <Right>
                <Text style={styles.personalText}>1600 E Madison St</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.fieldText}>Street Address2</Text>
              </Left>
              <Right>
                <Text style={styles.personalText}>--</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.fieldText}>City</Text>
              </Left>
              <Right>
                <Text style={styles.personalText}>Seattle</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.fieldText}>State</Text>
              </Left>
              <Right>
                <Text style={styles.personalText}>WA</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.fieldText}>Zip</Text>
              </Left>
              <Right>
                <Text style={styles.personalText}>98122</Text>
              </Right>
            </ListItem>
            <Separator bordered>
                <Text>PASSWORD</Text>
            </Separator>
            <ListItem>
              <Text style={styles.passwordText}>Change Password</Text>
            </ListItem>
            <Separator bordered>
            </Separator>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  fieldText: {
    fontFamily: 'Futura',
    fontSize: 14,
    fontWeight: 'bold',
  },
  personalText: {
    fontFamily: 'Futura'
  },
  passwordText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontFamily: 'Futura',
  }
})

export { Settings };
