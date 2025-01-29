# Build a custom component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-1b937a98-761d-4cfc-9ce7-c5e28a93867d"/>
</head>


Build custom components using the React JavaScript library.

## Overview

Flow custom components consist of:

-   A JavaScript JS \(.js\) component file.

-   An optional Cascading Style Sheet CSS \(.css\) file.


Custom components can be written in JavaScript or Typescript. If written in Typescript, the compiled JS file must be provided as the component file.

## Component states

Flow components use 3 types of state:

-   **Component state**: The regular React component state that can be accessed using `this.state` or `React.useState`.

    Use this when you need to track changes that only affect the user interface, and which do not need to be synchronized to the flow. For example, a dropdown toggle, or when switching between tabs.

-   **Local state**: The flow state that currently exists in your browser session.

    The flow state contains a snapshot of the current state \(values, selections, and so on\) of the flow. You can access it in a component using:

    ```
    var state = manywho.state.getComponent(this.props.id, this.props.flowKey);
    ```

    Use this state when you do want to synchronize changes back to , such as when values are entered into an input.

    Generally, when rendering a component you will want to check if the state has a value to be displayed, fall back to the model to get a value, and then call `manywho.state.setComponent` in the component event handler to insert the updated value into the local state.

-   **Remote state**: This is the same as the local state, however it exists in the cloud. The only important distinction is that the local state may be "out of sync" with the remote state periodically. For example, if a user running a flow enters values into inputs on a page, these values only exist in the local state until the user interface informs to synchronize, such as with an outcome on the page.

    Remote State is taken care of for you, if you want your component to trigger events in the flow. For example, if a combobox should synchronize with the remote state when the value changes, as other components will update based on the selected value in the combobox, then you should call `manywho.component.handleEvent` in the component change handler\(s\).


## Example legacy runtime custom component

This example legacy runtime input component is provided for **illustration** purposes only, to show how you can:

-   Make and register the React component using `manywho.component.register`.

-   Use props to pass the flowkey and ID, and call the `manywho` functions.

-   Get the State and Model using `manywho.state.getComponent` and `manywho.model.getComponent`.

-   Use the React component state `React.useState` to manage the value rendered in the input element to the user.

-   Update the local flow state using `manywho.state.setComponent`.


```

const Test = (props) => {
  const state = manywho.state.getComponent(props.id, props.flowKey);
  const model = manywho.model.getComponent(props.id, props.flowKey);
  const [value, setValue] = React.useState(state.contentValue);
  const onChange = ({ target: { value } }) => {
    manywho.state.setComponent(
      props.id,
      { contentValue: value },
      props.flowKey,
      true
    );
    setValue(value);
  };
  return React.createElement("input", {
    className: "input",
    value,
    onChange,
    disabled: model.isEditable === false,
  });
};
manywho.component.register("test", Test);
```

## Example runtime custom component

This example runtime input component is provided for **illustration** purposes only:

```

const { React } = window.boomi.flow;
const InputText = ({ element, updateElement }) => {
  const onChange = ({ target: { value } }) =>
    updateElement(element.id, {
      contentValue: value,
    });
  return React.createElement("input", {
    className: "input",
    value: element.contentValue,
    onChange,
    disabled: element.isEditable === false,
  });
};
export default InputText;
```

## Useful resources

The following resources can help you get started with building custom components:

-   [Reactjs.org](https://reactjs.org/): Learn how to use the React JavaScript library.

-   [Boomi Flow Custom Components](https://community.boomi.com/s/article/Boomi-Flow-Custom-Components): Boomiverse article on how to develop legacy runtime custom components.

-   [component Github repository](https://github.com/manywho/ui-bootstrap/tree/develop/js/components): Access the standard legacy runtime custom components.

-   [custom component Github Wiki](https://github.com/manywho/ui-html5/wiki/Custom-Components): Developer documentation for legacy runtime custom components.