import './home.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { SmallCards } from './../small-cards/small-cards';
import { LatestExams } from '../college/college-exams/latest-exams';
import { LatestTasks } from './../tasks/view-tasks/latest-tasks';
import { CardEvent } from './../event-card/events';
export function Home() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='content '>
      <div className='container-fluid'>
        <div className='row align-items-start'>
          <div className='col'>
            <SmallCards />
          </div>
          <div className='col'>
            {' '}
            <SmallCards />
          </div>
          <div className='col'>
            {' '}
            <SmallCards />
          </div>
          <div className='col'>
            {' '}
            <SmallCards />
          </div>
        </div>
        <div className='row align-items-center'>
          <div className='col mt-5 mb-5'>
            <Calendar onChange={onChange} value={value} />
          </div>
          <div className='col'>
            <CardEvent />
          </div>
        </div>
        <div className='row align-items-end mb-3'>
          <div className='col'>
            <LatestExams />
          </div>
          <div className='col'>
            <LatestTasks />
          </div>
        </div>
      </div>
    </div>
  );
}
