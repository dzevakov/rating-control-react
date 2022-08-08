# react-rating-control

### The RatingControl component allows you to set a rating score or show an already set rating in React applications.

## Example

```js
import { RatingControl } from "react-rating-control";
import { useCallback } from "react";

function App() {
  const onClick = useCallback((rate: number) => {
    console.log("set rating ", rate);
  }, []);
  return (
    <RatingControl
      char="★"
      charsAmount={5}
      enabled={true}
      fontsize="24px"
      onClick={onClick}
    />
  );
}

export default App;
```

## Install

```js
$ npm i react-rating-control
```

## Configuration

You can customize the component by setting the following props.

### Props

| Name            | Type     | Default   | Description                                                                                   |
| --------------- | -------- | --------- | --------------------------------------------------------------------------------------------- |
| char            | string   | "★"       | String element used to form the rating component                                              |
| charStyles      |          |           | Styles for char item (each element of the component). "@emotion/react" library is used.       |
| charsAmount     | number   | 5         | Number of elements in a row                                                                   |
| containerStyles |          |           | Styles for container (whole component). "@emotion/react" library is used.                     |
| enabled         | boolean  | true      | Is enabled for set rating (true) or for display only (false)                                  |
| fontsize        | string   | 24 px     | Font size of component                                                                        |
| onClick         | function |           | Callback for "onClick" event. `(rate: number) => void` Where `rate` value of established rate |
| primaryColor    | string   | "#ffc800" | For not rated or not hovered items of component                                               |
| secondaryColor  | string   | "#9d9d9d" | For rated or hovered items of component                                                       |
| value           | number   | 0         | Used to set the initial value                                                                 |
