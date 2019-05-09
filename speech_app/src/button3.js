import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class Quotes extends React.Component {
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
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Quotes
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Quotes 1</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Quotes 2</DropdownItem>
          </DropdownMenu>
      </ButtonDropdown>
    );
  }
}