# 💾 Load Initial State For Initialization Client App

this small library helps to load initial state for creating client app
Initial state includes:
    -All available cities
    -All district of each city
    -Categories hierarchy and setting for each category filtering search result

## Example

```javascript
const {getInitialState} = require('divar-init')
async function init() {
    const state = await getInitialState()
}
init()
```
