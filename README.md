# dapplooker-sdk

Programmatic access to the most reliable &amp; comprehensive blockchain data in Web3.

Integrate your DappLooker SDK and get popular charts data

## Installation

#### 1. Install the SDK:

```bash
npm install @dapplooker/sdk
```

#### 2. Generate API key:

- Create an account on the [DappLooker website](https://dapplooker.com/).
- After Signup, Go to the [API keys](https://dapplooker.com/user/api) page.
- Click "Create API key".
- Give your API key a name and Click "Generate".
- Now Copy your API Key.
  ![Screenshot from 2023-06-26 15-58-37](https://github.com/AK46rocks/dummy-api/assets/95044988/ff873cc5-2528-4444-8925-bf4aa5b93d02)


#### 3. Get Your Chart UUID

- Go to [DappLooker Analytics Website](https://analytics.dapplooker.com/)
- Create a new Chart or Open a Existing Created Chart
  ![chartAPI-1](https://github.com/AK46rocks/dummy-api/assets/95044988/aee8d0bc-caf7-425b-97a3-9d1fbf908994)

- Click "API" Button
- Get the UUID of your chart from the chart API Endpoint
  ![chartAPI-2 (1)](https://github.com/AK46rocks/dummy-api/assets/95044988/d1b2f6ae-24b9-4b8c-9259-3584ae371a16)



#### 4. Import the SDK

Once you have imported the SDK, you can create a DapplookerSDK instance and make API calls using the API key and chart UUID that you obtained in the previous steps.

#Example

```javascript
//Javascript
const DappLookerSDK = require("@dapplooker/sdk");

const getData = async () => {
  let id = "dc9b69d8-7ca1-45d4-8ad0-a17f915f3f0"; // example chart UUID
  let key = "qzusb5p3q246ip246ab6g0p8ppzb7u"; // example API key that you generated

  let response = await DappLookerSDK.chartAPIData(id, key);
  console.log("chart api data:- ", response?.data);
};

getData();
```

Typescript support is also available

```jsx
//Typescript
import { DappLookerSDK } from "@dapplooker/sdk";
```
