import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../hooks/Auth';

const CreateAppointment: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View>
      <Text>Olá</Text>
    </View>
  );
};

export default CreateAppointment;
