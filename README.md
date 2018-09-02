# Stockholm Tourist
This is a tool for adding sites you want to visit to a manageable list that shows their locations on a map. Click the map to add sites to the list.

## Install & run
To install the packages open a terminal that supports Node.js, navigate to the folder and run this command: npm install. When the installer is finished run the command ´yarn start´´
 to start the dev-server.

To create a production build, use ´yarn build´.

For further information about the available scrips, see this article:

https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts

## Issues
As this tool was written in React I knew I would run into problems with the DOM if I tried to implement Google Maps through the conventional javascript way. So i did a quick google search and found a package, react-google-maps, that would help me deal with the interaction between Google Maps and React's virtual DOM.

I also decided to use a react template project as a base because it is more efficient timewise. That way I could focus more on developing the project rather then getting it set up.
