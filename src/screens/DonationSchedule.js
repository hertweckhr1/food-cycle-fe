import React, {Component} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native' ;
import { H1, Container, Button, Thumbnail, Body, Left, Right, Content, List, ListItem, Text } from 'native-base';

class DonationSchedule extends Component {
  render() {
    const { user, donations, users } = this.props.screenProps
    const filteredDonations = donations.filter(donation => donation['user'] === user['id'])

    const thisUser = (id) => {
      if (id == null) {
        return ""
      } else {
        const rightUser = users.find(user => user['id'] == id)['company_name'];
        return rightUser
      }
    }


    console.log(donations['donee'])
    return (
      <ScrollView>
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
                   <Text note numberOfLines={1}>Donee: {thisUser(donation['donee'])}</Text>
                   <Text>{donation['pickup_starttime']}</Text>
                   <Text>{new Date().toString()}</Text>
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
      </ScrollView>
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
