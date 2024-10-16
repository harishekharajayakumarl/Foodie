# Namaste react

# Parcel
- Dev Build
- Local Server
- HMR - Hot module Replacement
- File watching algorithm - wrtten in C++
- Caching - Faster builds
- Image optimization
- Minification
- Building
- Compressing
- Consistent Hashing
- Code splitting
- Differential bundling - supports older browsers
- Diagnostic
- Error handling
- HTTPs
- Tree shaking - remove the unused code
- Different dev and prod bundles


# Common Practices
- Creating an src folder and inside it adding the components folder.
- Separate folders for sepatrate componenets.
- Name the componenet folders with same name of component.
- Export the componenet from src/componnets first and then import it in the App.js file.
- Never keep URLs and other hard coded data (like APIs) in the components folder.
- Instaed of writing URLs and hard coded data in componenets, create a folder named utils(standard one) and inside it we can add files like      constants for CDN links and mockData for some mock APIs or data.
- Default export can only be used once in a file. Therefore, to export multiple data, we can use named export. eg: export const CDN_URL=""; .
- To import a named export, we use curly braces'{}'. eg: import { CDN_URL } from "../utils/constants"; .


# Why react is faster?
- It can do faster and effiecient DOM manipulation

# React Hooks
- Normal JS utility functions
- Most important hooks:
    1. useState() => gives superpowerful state variables
    2. useEffect()
