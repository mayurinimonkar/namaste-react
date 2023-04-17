# Namaste React 🚀

## Creating react project using cdn links

```
<script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <script src="./App.js"></script>
```

### App.js

```
const heading = React.createElement("h1", {}, "Hello World from React");

const root = document.getElementById("root");

// Remove this if you're going to use createRoot()
ReactDOM.render(heading, root);

```

createElement has 3 arguments: the tag, its attributes and children
If you want to send many children then pass them into an array.
