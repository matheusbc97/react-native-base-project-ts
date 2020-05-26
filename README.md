# react-native-base-project-ts
 A base project with all initial configurations and some util components to make it easier start a new React Native Project
 
 To use it first create a new React Native Project with the typescript template 'npx react-native init MyApp --template react-native-template-typescript' and after is done copy the src folder into your newly created project folder

 To install the dependencies jus run the code below:
 
 yarn add @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack @react-navigation/drawer @react-native-community/hooks @unform/core @unform/mobile axios lodash react-native-paper react-native-vector-icons react-redux @reduxjs/toolkit redux
 
 To finalize the react-native-vector-icons you have to do the instructions bellow:
 in your podfile:
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
 in your android/app/build.gradle file:
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
 
 And install the Dev Dependencies:
 
 yarn add reactotron-react-native @types/lodash @types/react-redux @types/react-redux @types/lodash @types/react-native-vector-icons -D
 
 To finalize make shure that your index.js is exactly like this:
  
  /**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

AppRegistry.registerComponent(appName, () => App);
