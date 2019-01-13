import React, {Component} from 'react';
import { Container, Button, Thumbnail, Body, Left, Right, Content, List, ListItem, Text } from 'native-base';
class DonationSchedule extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Text>4/12/19</Text>
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
export { DonationSchedule }
