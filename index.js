import { registerRootComponent } from 'expo';
import { AppRegistry, Text, View } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';



const store = configureStore()

const Main = () => (
    <Provider store = {store}>
        <PaperProvider>
            <App/>
        </PaperProvider>
    </Provider>

)

export default registerRootComponent(Main)