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

### App.js

```
const heading = React.createElement("h1", {}, "Hello World from React");

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