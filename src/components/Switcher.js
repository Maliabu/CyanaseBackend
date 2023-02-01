// Basic Switches
import { Switch, Label } from "atomize";
import React, { useState } from 'react';

class Switcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSwitchValue1: false,
      selectedSwitchValue2: false
    };
  }

  render() {
    const { selectedSwitchValue1, selectedSwitchValue2 } = this.state;
    return (
      <Label
        onClick={() =>
          this.setState({ selectedSwitchValue1: !selectedSwitchValue1 })
        }
       
        >
          <Switch
            checked={selectedSwitchValue1}
          />
         
      </Label>
    );
  }
}
export default Switcher;