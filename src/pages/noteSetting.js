import { useState } from 'react';
import React  from "react";
import { Div, Text, Label, Checkbox } from "atomize";

function NoteSetting() {

  /// States for recieving notifications 

  // states for Auto save
  const [dontAutoSave, AutoSave] = useState(true);
  //States for Goals
  const [dontGoal, Goal] = useState(true);
  //states for updates
  const [dontUpdate, Update] = useState(true);

  return (
    <>

      <Div>
        <Text textSize="heading" m={{ t: "1rem" }}
          textWeight="500">
          Notification Settings
        </Text>
        <Text textColor={`#808080`} textWeight="500" m={{ l: "0.7rem", }}>
          Choose all kinds of notifications you want to receive.
        </Text>
     

      <Div m={{ t: "2rem" }}>
        <Label textSize="subheader"
         textAlign="left"
          textWeight="600"
          >
          <Checkbox
            onChange={e =>
              AutoSave(e.target.checked)
            }
            checked={dontAutoSave}
            inactiveColor="success400"
            activeColor="#ff9b00"
            size="25px"
          />
          Auto save
        </Label>
        <Text textColor={`#808080`} textWeight="500" >
            make deposits automatic
          </Text>
      </Div>

      <Div m={{ t: "1rem" }}>
        <Label textSize="subheader"
         textAlign="left"
          textWeight="600"
          m={{ b: "0.5rem" }}>
          <Checkbox
            onChange={e =>
              Goal(e.target.checked)
            }
            checked={dontGoal}
            inactiveColor="success400"
            activeColor="#ff9b00"
            size="25px"
          />
          Goals
          
        </Label>
        <Text textColor={`#808080`} textWeight="500" >
            Be reminded to invest for your goals
          </Text>
      </Div>

      <Div m={{ t: "1rem" }}>
        <Label textSize="subheader"
          textAlign="center"
          textWeight="600"
          m={{ b: "0.5rem" }}>
          <Checkbox
            onChange={e =>
              Update(e.target.checked)
            }
            checked={dontUpdate}
            inactiveColor="success400"
            activeColor="#ff9b00"
            size="25px"
          />
          Updates
         
        </Label>
        <Text textColor={`#808080`} textWeight="500" >
            Get product updates and and investment newsletters.
          </Text>
      </Div>
</Div>
    </>
  );
}

export default NoteSetting;
