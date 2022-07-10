
import styles from './MyCalendar.module.css';
import React from 'react';
import {parseISO} from 'date-fns'
import { DateRange  } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
 
export function MyCalendar(props) {
    const ranges = props.ranges.map(range => {
      return {
        ...range,
        startDate: parseISO(range.startDate),
        endDate: parseISO(range.endDate)
      }
    })
  
    return (
      <DateRange className={styles["my-calendar"]}
        onPreviewChange ={() =>{}}
        ranges={ranges}
      />
    )
}