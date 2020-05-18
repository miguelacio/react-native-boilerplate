/**
 * Screen Generator
 */

const componentExists = require('../utils/componentExists')

module.exports = {
  description: 'Add a screen component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or screen with this name already exists'
            : true
        }

        return 'The name is required'
      },
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want an actions/constants/reducer tupel for this screen?',
    },
    {
      type: 'confirm',
      name: 'wantNavigationRoute',
      default: true,
      message: 'Do you want create a Navigation Route for this screen?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../src/screens/{{properCase name}}/index.js',
        templateFile: './screen/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/screens/{{properCase name}}/styles.js',
        templateFile: './screen/styles.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/screens/{{properCase name}}/selectors.js',
        templateFile: './screen/selectors.js.hbs',
        abortOnFail: true,
      },
    ]

    if (data.wantNavigationRoute) {
      // Import screen
      actions.push({
        type: 'modify',
        path: '../../src/navigation/AppNavigator.js',
        pattern: /(import { StackNavigator } from 'react-navigation')/g,
        template:
          "$1\nimport {{ properCase name }} from 'src/screens/{{ properCase name }}'",
      })
      // Create Route
      actions.push({
        type: 'modify',
        path: '../../src/navigation/AppNavigator.js',
        pattern: /(const routes = {)/g,
        template:
          '$1\n  {{ properCase name }}: { screen: {{ properCase name }} },',
      })
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'modify',
        path: '../../src/store/reducer.js',
        pattern: /(import { combineReducers } from 'redux')/g,
        template:
          "$1\nimport {{camelCase name}} from 'src/screens/{{properCase name}}/reducer'",
      })

      actions.push({
        type: 'modify',
        path: '../../src/store/reducer.js',
        pattern: /(export default combineReducers\({)/g,
        template: '$1\n  {{camelCase name}},',
      })

      actions.push({
        type: 'add',
        path: '../../src/screens/{{properCase name}}/actions.js',
        templateFile: './screen/actions.js.hbs',
        abortOnFail: true,
      })

      // Constants
      actions.push({
        type: 'add',
        path: '../../src/screens/{{properCase name}}/constants.js',
        templateFile: './screen/constants.js.hbs',
        abortOnFail: true,
      })

      // Reducer
      actions.push({
        type: 'add',
        path: '../../src/screens/{{properCase name}}/reducer.js',
        templateFile: './screen/reducer.js.hbs',
        abortOnFail: true,
      })
    }

    return actions
  },
}
