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

# Virtual Doms, Diff Algorithm, RECONCILIATION ALGORITHM
- Reconciliar=tion algorithm is also known as React fiber., It is a new way to find and update, similar to "git diff" command.
- Virtual DOM is a representation of actual DOM, and the end products are React elements (similar to React.createElement).
- Diff Algorithm calculates the differences in virtaul DOMs and updates it in every render cycle.

# 2 types of Routing in web apps
- Clinet side routing
- Server side routing

# App Chunking/Lazy Loading/Code splitting/dynamic bundling/on-demand loading/dynamic importing
- Making application into smaller logical chunks(parts).

# Redux
- Redux working:
  1. First the action is dispatched from the button(state), which calls the reducer function..
  2. The reducer function updates the slice of the redux store.
  3. Then using the selector function it subscribes the state.