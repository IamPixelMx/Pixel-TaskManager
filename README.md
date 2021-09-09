># Hi👋, Welcome to Pixel | Task Manager!  🗓
</br>

My name is Itzel! 🙋🏻‍♀️  **Pixel | Task Manager** is a web app to manage tasks from different task groups and, the tasks can have dependencies on one another (i.e. if task X depends on task Y, task X cannot be completed until task Y is completed). 

</br> 

> Some things to keep in mind:

* Locked tasks cannot have their completion status toggled
* Tasks remain locked until all of their dependencies have been completed
* This project only use modules and tools already included within React.

 It was a great challenge and I had a lot of fun making this proyect.Hope you enjoy it! 🚀

</br>

### **Build React-based UI**

The UI consists of 2 screens:

* **Overview**: Displays a list of all the groups along with their completion status. Clicking on 
  a group should render the detail screen.

* **Detail**: Displays a list of all the tasks in the selected group and allows the user to toggle 
  the completion status of unlocked tasks.

</br>

### **Build simple UI identity**

Set a simple UI and identity by defining a name for the web app and adding some UI elements, such as, a nav with the brand logo, a favicon and some simple animations, to enchance the experience. 

</br>

### **Use modules and tools already included within React**

Create the app state management using React Context and React Reducer

Create custom hooks to create actions that will help us to manipulate the state.

</br>

### **Improve developer experience**

Add a `jsconfig.json` file to make the imports scripts easier to read for the developer.

Eslint disabled two lines of code since I cannot add an external function inside a dependency array otherwise it would generate an infinite loop of re-renders.

</br>

### **Design Database Schema**

Design a schema in SQL to store the task list data. You can add the SQL code needed to create
the schema to _schema.sql_. The schema should define all tables, columns, and constraints needed
to store the task list data.

</br>


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
