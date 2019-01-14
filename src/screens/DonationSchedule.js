import React, {Component} from 'react';
import { Container, Button, Thumbnail, Body, Left, Right, Content, List, ListItem, Text } from 'native-base';

class DonationSchedule extends Component {
  render() {
    const { user, donations } = this.props.screenProps
    const filteredDonations = donations.filter(donation => donation['user'] === user['id'])
    console.log(donations['donee'])
    return (
      <Container>
        <Content>
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
export { DonationSchedule }
