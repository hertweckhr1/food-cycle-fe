import React, {Component} from 'react';
import { Container, Button, Thumbnail, Body, Left, Right, Content, List, ListItem, Text } from 'native-base';
class DonationSchedule extends Component {
  render() {
    let items = [
      '50 lb Carrots',
      '2 crates Milk',
      '40 lb Bananas',
      '4 crates Ceral',
      '5 crates Bread'
    ];

    return (
      <Container>
        <Content>
          <List dataArray={items}
           renderRow={(item) =>
             <ListItem thumbnail>
               <Left>
                 <Text>4/12/19</Text>
               </Left>
               <Body>
                 <Text>{item}</Text>
                 <Text note numberOfLines={1}>Donee: Jewish Family Services</Text>
               </Body>
               <Right>
                 <Button transparent>
                   <Text>Picked-Up</Text>
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
