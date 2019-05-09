import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ButtonGroup } from 'mdbreact';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
    <ButtonGroup>
        <Button>Quotes</Button>
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Language
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>English</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>French</DropdownItem>
          </DropdownMenu>
      </ButtonDropdown>
      </ButtonGroup>
    );
  }
}