# Stockholm Tourist
This is a tool for adding sites you want to visit to a manageable list that shows their locations on a map. Click the map to add sites to the list by adding a name for the place and a the day you want to visit. When you click the "Add"-button a marker is added to the map and an item is added to the list below the map. At the top of the list is a searchfiled where you can filter the list by entering the name (or parts of it) you gave the place. Each item in the list is equipped with a delete button in case you want to remove a place from the list.

Clicking a marker on the map will show you the name you gave the marker and which day you wanted to go there.

## Install & run
Download or clone the repo by writing the following in yur terminal:

`git clone https://github.com/Endorel/sthlm_tourist.git`

To install the packages open a terminal that supports Node.js, navigate to the folder and run this command: npm install. When the installer is finished run the command `yarn start` to start the dev-server.

To create a production build, use `yarn build`.

For further information about the available scrips, see this article:

https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts

## Developing the project
As I wanted to write this tool in React I knew I would run into problems with the DOM if I tried to implement Google Maps through the conventional javascript way. So i did a quick google search and found a package, react-google-maps, that would help me deal with the interaction between Google Maps and React's virtual DOM. Here is the documentation:

https://github.com/tomchentw/react-google-maps

The documentation wasn't really that easy to understand though and I recommend checking out the issues registered in the repo if you get stuck. Google helped a lot too.

There is another popular package for using Goolge Maps with React.js called google-maps-react. I chose react-google-maps partly because I found that one first and partly because I didn't feel like google-maps-react was necessarily better. Here is the documentation for google-maps-react:

https://github.com/fullstackreact/google-maps-react

I also decided to use a react template project as a base because it is more efficient timewise. That way I could focus more on developing the project rather then getting it set up.

I ran into some issues when building the panTo-function. While I could pan to the location when the item in the list was clicked, I couldn't get it to zoom. I finally found a solution online that both worked and explained why I had been having issues. It turns out that the package I'm using, react-google-maps, doesn't expose the setZoom method of the Google Api. In stead you have to manually access it in the code. See line 10 in App.js for how this was done.

https://github.com/tomchentw/react-google-maps/issues/161#issuecomment-310553564

## Conclusion
This was a fun project to work on. I would have liked to have done a few things differently, bypassing the store in some cases for instance. I wanted to keep the store as clean as possible, but I also wanted to deliver the project this decade, so I surrendered to the inevitable.

