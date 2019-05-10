import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


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
    prop2 = this.props.prop2; // "hola"
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Language
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => this.props.changeLang("en-gb")}>English</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => this.props.changeLang("fr-fr")}>French</DropdownItem>
          </DropdownMenu>
      </ButtonDropdown>
    );
  }
}