import React from "react";

import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { styled } from "@mui/system";

import formatDate from "@/shared/utils/formatDate";


import { FormattedDate } from "@/shared/types/formatDateType";

const Flex = styled(Box)({
  display: "flex",
});

export const Header = () => {
  const { year, month, day, hour, minutes, dayOfWeek }:FormattedDate = formatDate(
    new Date(),
  );

  return (
    <Flex>
      <Typography>{`日時：${year}/${month}/${day}(${dayOfWeek})${hour}:${minutes}`}</Typography>
      <Stepper>
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 3</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 4</StepLabel>
        </Step>
      </Stepper>
    </Flex>
  );
};
