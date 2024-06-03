import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import HostessPage from './HostessPage';
import PalaceCheckIn from './PalaceCheckIn';

function PalacePointPage() {
  return (
    <div>
      <Tabs defaultActiveKey='hostess' id='palacepoint-tabs' className='mb-3'>
        <Tab eventKey='hostess' title='Check-in'>
          <HostessPage />
        </Tab>
        <Tab eventKey='palacecheckin' title='Badge Preperation'>
          <PalaceCheckIn />
        </Tab>
      </Tabs>
    </div>
  );
}

export default PalacePointPage;
