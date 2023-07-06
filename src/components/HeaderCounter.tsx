import React from 'react';

import { useStore } from 'effector-react';

import { eventEmitter } from '../EventEmitter';
import {
  statisticsCounterStore,
  totalChange,
  totalCounter,
} from '../stores/statisticsCounterStore';

function HeaderCounter() {
  const statistics = useStore(statisticsCounterStore);

  React.useEffect(() => {
    const handleCounterCount = (length: number) => {
      totalCounter(length);
    };

    eventEmitter.on('counterCount', handleCounterCount);
    eventEmitter.on('counterChange', totalChange);

    return () => {
      eventEmitter.off('counterCount', handleCounterCount);
      eventEmitter.off('counterChange', totalChange);
    };
  }, []);

  return (
    <div>
      <h2>Total Counters: {statistics.totalCounterCount}</h2>
      <h2>Total Changes: {statistics.totalChangeCount}</h2>
    </div>
  );
}

export default HeaderCounter;
