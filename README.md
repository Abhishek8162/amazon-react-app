# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)











For My Reference :

This front end UI is itself capable of most of the things .
While we can make it fully operational if we :
1. Connect it to firebase or Azure/Aws      // For Authentication
2. Connect to our own database ie mongo db     // Complete MERN stack


Remember Later :
1. exact in the Router helps to switch to the specific Link to callbacks
2. If we dont write exact then it will switch to any matching(Not Hardcore)
3. in Link to , we can pass string concat also, ie Link to ={"/cars/"+cars}
4. const location = useLocation(); Helps to track name of the current Route
5. useState helps to initilate and change a variable .
6. Person.map((item)=>{return(<Car/>)})  // its loop in js
7. To search with different keyword , we will later implement an object
   with matching keywords to choose from 
8. The biggest issue I'm facing is that I am unable to pass the data
   from one component to another and the worst is the passing of data 
   from one Route to another .
9. use Link and a differently
10. Whenever you want to declare/change variables , do those in the 
    function part , never in the return part as it will be rendered and 
    displayed in the html file
11.  margin-left: auto; margin-right: auto; display: block; // to center
12. max-height:500px; max-width:500px; height:auto; width:auto; //vvimp
    To resize the image responsively
13. onChange={(e) => { setisChecked(e.target.value)} } //to change any i/p
14. form action =""  // The action also behaves like Link 
15.  



Structure of this specific Project

1. App.js is the main js which Routes the different pages 
2. It also routes searches , errors and links 
3. In the Header , when we search , then it goes to App ,which then calls
   Results that is a single page but according to the search in the Header,
   it displays specific items from the databse (JSon)
4. Now , if you click on that product then another page ie <Description/>
   is opened by the App.js  which is again a single page but loads data from the JSon
5. We also have sigin page to signin , buts is ineffective because it is
   not connected to any authentication ie Firebase or Mongodb atleast.
   So for now , it cannot take any User log .
6. For other links, we have just redirected to Actual sites .
7. we will make another cadd to cart/buy now page as well as buying the 
   product ie cod and all page .



THings left to do in this poroject
1. Add firebase database for each customer .
2. Searchs could be of more varieties .
3. More Items to search .
4. Add messaging system as well . 

