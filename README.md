# react-trail-line

> Trail line
>
> ![ezgif com-gif-maker](https://user-images.githubusercontent.com/96820742/164874532-40f91a9a-80a1-4636-8185-d65e1ec73a27.gif)

[![NPM](https://img.shields.io/npm/v/react-trail-line.svg)](https://www.npmjs.com/package/react-trail-line) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<p align="center">
  <a href="https://mehardiknaik.github.io/react-trail-line/">Demo
  </a>
</p>

## Install

```bash
npm i @hardiknaik/react-trail-line
```

## Usage

### Functional Component

```jsx
import React from "react";
import TailLine from "@hardiknaik/react-trail-line";
import "@hardiknaik/react-trail-line/dist/index.css";

const App = () => {
  return (
    <TailLine
      items={[
        {
          status: "complete",
          message: "Order Placed",
          time: "12-jan",
          completed: 100,
          orderId: 243298395,
        },
        {
          status: "inprogress",
          becon: true,
          completed: 50,
          message: "Shipped",
          time: "15-jan",
        },
        {
          status: "todo",
          message: "Item Received",
          time: "17-jan",
        },
      ]} //required
      Content={(x) => (
        <div className="mr-4 mb-4">
          <div className="text-nowrap text">{x?.message}</div>
          {x?.orderId && (
            <div className="text-muted-foreground text-sm text-nowrap">
              Order Id- {x?.orderId}
            </div>
          )}
          <div className="text-gray-400 text-xs">{x?.time}</div>
        </div>
      )} //required
      horizantal //optional to show trail line in horizantal direaction
      duration={1}
    />
  );
};

export default App;
```

## Customization

Change the below css variale to modify the colour and animation speed

```css
:root {
  /* status completed colour */
  --complete: green;
  /* status inprogress colour */
  --inprogress: orange;
  /* status reject colour */
  --reject: red;
  /* status todo colour */
  --todo: rgb(100, 100, 100);
}
```

## Options details

Available options with example values:

```tsx
<TailLine
  items={[
    {
      status: "complete",
      message: "Order Placed",
      time: "12-jan",
      completed: 100,
      orderId: 243298395,
    },
    {
      status: "inprogress",
      becon: true,
      completed: 50,
      message: "Shipped",
      time: "15-jan",
    },
    {
      status: "todo",
      message: "Item Received",
      time: "17-jan",
    },
  ]}
  Content={(x) => (
    <div className="mr-4 mb-4">
      <div>{x?.message}</div>
      {x?.orderId && (
        <div className="text-muted-foreground">Order Id- {x?.orderId}</div>
      )}
      <div className="text-gray-400 text-xs">{x?.time}</div>
    </div>
  )}
  horizantal
  duration={1}
/>
```

## Options

| Parameter    |    Type     | Required | Defaults | Description                                   |
| ------------ | :---------: | :------: | :------: | --------------------------------------------- |
| `items`      |    Array    |   yes    |    -     | Provide the trail line tems.                  |
| `Content`    | JSX Element |   yes    |    -     | Provide the element to render the details.    |
| `horizantal` |   Boolean   |    no    |  false   | Provide the horizantal direction if you want. |
| `duration`   |   Number    |    no    |    1     | Provide the animation duration                |

## Item Types

| Parameter      |  Type   | Required |              Values               | Description                                                                                                                          |
| -------------- | :-----: | :------: | :-------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------ |
| `status`       | String  |   yes    | `complete inprogress todo reject` | Provide Status from this values                                                                                                      |
| `becon`        | Boolean |    no    |               false               | Provide the becon if you want.                                                                                                       |
| `completed`    | Number  |    no    |                 0                 | Provide the number from range of (0-100) to show trail line.                                                                         |
| `Other params` |   Any   |    no    |                 -                 | Provide other params you want to render in `content` ex. (message, time) and render that in your content component provided in props |

## License

MIT © [Hardik Naik](https://github.com/mehardiknaik)
