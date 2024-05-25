import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const CalendarComponent = () => {

  return (
    <Calendar
      onDayPress={day => {
        console.log(day);
      }}
    />
  );
};

export default CalendarComponent;