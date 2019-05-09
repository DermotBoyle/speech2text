import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class Voice extends React.Component {
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
          Voice
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Male UK</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Female UK</DropdownItem>
          </DropdownMenu>
      </ButtonDropdown>
    );
  }
}