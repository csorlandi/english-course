import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function persistUser() {
      console.log('persisUser');
      const stringifyUser = JSON.stringify(user);
      await AsyncStorage.setItem('@EnglishCourse:user', stringifyUser);
    }

    async function clearUser() {
      console.log('clearUser');
      await AsyncStorage.removeItem('@EnglishCourse:user');
    }

    if (!loading) {
      if (user) persistUser();
      else clearUser();
    }

    console.log(user);
  }, [user]);

  useEffect(() => {
    async function getPersistedUser() {
      console.log('getPersistedUser');
      const persistedUser = await AsyncStorage.getItem('@EnglishCourse:user');

      if (persistedUser) {
        const parsedUser = JSON.parse(persistedUser);
        setUser(parsedUser);
      }
      setLoading(false);
    }

    getPersistedUser();
  }, []);

  async function signIn(email, password) {
    const { data } = await api.post('sessions', { email, password });

    setUser(data);
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { AuthProvider, useAuth };
