import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native' ;
import { H1, Container, Button, Thumbnail, Body, Left, Right, Content, List, ListItem, Text } from 'native-base';

class DonationSchedule extends Component {
  render() {
    const { user, donations } = this.props.screenProps
    const filteredDonations = donations.filter(donation => donation['user'] === user['id'])
    console.log(donations['donee'])
    return (
      <Container>
        <Content>
          <View style={styles.titleView}>
            <H1 style={styles.headerText}>{user['company_name']} Donations</H1>
          </View>
          <List dataArray={filteredDonations}
           renderRow={(donation) =>
             <ListItem thumbnail>
               <Left>
                 <Text>{(donation['pickup_starttime']).slice(5,10)}</Text>
               </Left>
               <Body>
                 <Text>{donation['product_type']}: {donation['product_description']}</Text>
                 <Text note numberOfLines={1}>Donee: {donation['donee']}</Text>
               </Body>
               <Right>
                 <Button transparent>
                   <Text>{donation['status']}</Text>
                 </Button>
               </Right>
             </ListItem>
           }>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontFamily: 'Futura',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
  },
  titleView: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#D3D3D3',
    margin: 10,
  }

})

export { DonationSchedule }
