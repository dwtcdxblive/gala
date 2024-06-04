import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Cookies from 'js-cookie';
import HostessPage from './HostessPage';
import PalaceCheckIn from './PalaceCheckIn';

function PalacePointPage() {
  const [defaultTab, setDefaultTab] = useState('hostess');

  useEffect(() => {
    const savedTab = Cookies.get('defaultTab');
    if (savedTab) {
      setDefaultTab(savedTab);
    }
  }, []);

  const handleTabSelect = (tab) => {
    setDefaultTab(tab);
    Cookies.set('defaultTab', tab, { expires: 30 }); // Save the tab selection in cookies for 30 days
  };

  return (
    <div>
      <Tabs
        activeKey={defaultTab}
        onSelect={handleTabSelect}
        id='palacepoint-tabs'
        className='mb-3'
      >
        <Tab eventKey='hostess' title='Check-in'>
          <HostessPage />
        </Tab>
        <Tab eventKey='palacecheckin' title='Badge Preparation'>
          <PalaceCheckIn />
        </Tab>
        <Tab eventKey='thirdtab' title='Third Tab'>
          {/* Add your third tab content here */}
          <div>Third Tab Content</div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default PalacePointPage;
