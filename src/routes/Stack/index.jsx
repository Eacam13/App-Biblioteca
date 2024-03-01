import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../pages/Home'
import BookAdmin from '../../pages/BookAdmin'
import ListBook from '../../pages/ListBook'
import BookEdit from '../../pages/BookEdit'
import BookLend from '../../pages/BookLend'
import BookDelete from '../../pages/BookDelete'

const  Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{
            headerShown: false,
            headerTitle: 'Voltar'
          }} />
        <Stack.Screen 
          name='BookAdmin' 
          component={BookAdmin} 
          options={{
            headerTitle: 'Voltar',
            headerStyle: {
              backgroundColor: '#b2b2b4', 
            }
          }} 
        />
        <Stack.Screen 
          name='ListBook' 
          component={ListBook} 
          options={{
            headerTitle: 'Voltar',
            headerStyle: {
              backgroundColor: '#b2b2b4', 
            }
          }} 
        />
        <Stack.Screen 
          name='BookEdit' 
          component={BookEdit} 
          options={{
            headerTitle: 'Voltar',
            headerStyle: {
              backgroundColor: '#b2b2b4', 
            }
          }} 
        />
        <Stack.Screen 
          name='BookLend' 
          component={BookLend} 
          options={{
            headerTitle: 'Voltar',
            headerStyle: {
              backgroundColor: '#b2b2b4', 
            }
          }} 
        />
        <Stack.Screen 
          name='BookDelete' 
          component={BookDelete} 
          options={{
            headerTitle: 'Voltar',
            headerStyle: {
              backgroundColor: '#b2b2b4', 
            }
          }} 
        />
    </Stack.Navigator>
  )
}