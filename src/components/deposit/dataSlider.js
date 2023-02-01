import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import StepOne from "./stepone";
import StepTwo from "./steptwo";
import StepThree from "./stepthree";

const dataSlider = [
    {
        id: "1",
        data: <StepOne />,
    },
    {
        id: "2",
        data: <StepTwo />,

    },
    {
        id: "3",
        data: <StepThree />,

    },

];

export default dataSlider;