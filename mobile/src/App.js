import React, { useState, useEffect } from 'react';

import { useAuth } from '~/hooks/auth';

import Routes from './navigation';

export default function App() {
  const [initialRouteName, setInitialRouteName] = useState('loading');

  const auth = useAuth();

  useEffect(() => {
    setInitialRouteName(auth.user);
  }, [auth.user]);

  return <Routes initialRouteName={initialRouteName} />;
}
