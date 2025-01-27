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

Cdn link is not preferred way of injecting react to our app, because it is costly operation due to api calss to unpkg.com

### CDN

CDN stands for Content Delivery Network, which is a system of servers that deliver web content to users based on their geographic location. CDN script files are files that are hosted on a CDN server and can be accessed by adding a script tag to your HTML file. By using CDN script files, you can use React without downloading or installing anything on your local machine.

### crossorigin attribute:

provides support for CORS(Cross-Origin Resource Sharing ), defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data.
this attribute has 2 possible values :

1. crossorigin="anonymous"(only crossorigin also means anonymous)
   Use the crossorigin attribute (defaulting to anonymous) when you're loading scripts from an external source that doesn't require user authentication but supports CORS.
   If the external server doesn't explicitly allow cross-origin requests, the script might fail to load properly.
   The script will be loaded without sending any user credentials, such as cookies, authentication tokens, or HTTP headers.
2. crossorigin="use-credentials"
   The script is being loaded from that url, which might require authentication (e.g., login credentials, cookies, or tokens).
   This is useful if the script requires user-specific data or permissions.

### React vs ReactDOM:

React:
The core library for creating components, including state, props, and the code that makes up React.
ReactDOM:
The package that renders React components in a web browser using the DOM. It's the glue that connects React to the DOM.

### App.js

```
const heading = React.createElement("h1", {}, "Hello World from React");

//this heading is beasically a react element. React.createElement returns  a plain JavaScript object, also known as a React element, that describes the intended DOM structure.

const root = document.getElementById("root");

// Remove this if you're going to use createRoot()
ReactDOM.render(heading, root);

```

createElement has 3 arguments: the tag, its attributes and children
If you want to send many children then pass them into an array.

# NPM - It is NOT node package manager

## package.json

json configuration for our package manager, keeps approx version of dependency.

1. ^2.8.3 : ^ in it means when there is minor upgrade, parcel will automatically update its version
2. ~2.8.3 : ~ in it means if there is a major upgrade, parcel will automatically update to that version

## package-lock.json

Locks the version.
Keeps a record of exact version of that package/dependency

1. version : The version of the package that should be installed
2. integrity : An integrity hash used to provide assurance that the package hasn’t been tampered with
3. resolved : The resolved registry location indicating from where this package was retrieved and from where it should be retrieved for future installs

## Parcel

Created a server, gave it a port and hosted our app on the server.
What does it do?

- Dev Build
- Local server
- HMR = Hot Module Replacement (Keeping track of which file is changing and updating it and building it as soon as we hit save)
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

## npm vs npx

1. npx : executing a package
2. npm : installing a package

# Episode 3

## React.createElement

React.createElement Creates an "object".

when we render this element onto the dom, it becomes an html element

## JSX

1. To save the hassle to create elements using React.createElement and avoid nesting,
   facebook developers created JSX
2. JSX is NOT part of React and they is different
3. JSX is NOT HTML, it is HTML like syntax
4. This code is transpiled before it reaches javascript engine.
5. Transpiling is done by PARCEL, But parcel doesn't do it itself, it is done by BABEL.
6. JSX cis converted into React.createElement by BABEL and then it converts to react elemnt and then it becomes HTML

## BABEL

1. It's a open source javascript compiler.
