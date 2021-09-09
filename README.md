># Welcome to Pixel | Task Manager!

<br />
<div align="center">
  <h3 align="center"><b>Task Manager</b></h3>
<a href="https://pixel-task-manager.herokuapp.com/">
    <img src="public/logo.webp" alt="Logo" width="140">
</a>
</div>
<div align="center">
  <a href="https://pixel-task-manager.herokuapp.com/">Go to the site</a>
</div>
<br/>
<div>
  <p>
Hi👋, my name is Itzel!!  <em>Pixel | Task Manager</em> is a web app to manage tasks from different task groups and, the tasks can have dependencies on one another (i.e. if task X depends on task Y, task X cannot be completed until task Y is completed).    
</p> 

<p>
Some things to keep in mind:

* Locked tasks cannot have their completion status toggled
* Tasks remain locked until all of their dependencies have been completed
* This project only used an extra dependency(`history`) to those already included within React.

 It was a great challenge and I had a lot of fun making this proyect. I hope you enjoy it! 🚀
 </p>

 <br />
    <a style="float:left" href="https://github.com/iampixel/pixel-taskmanager/tree/master/components" >Explore proyect</a>
    <a style="float:right" href="https://github.com/iampixel/pixel-taskmanager/issues">Report an issue</a>
  </div>

 <br />

---

## **Content**

[**Notes**](#notes)
  - [UI](#ui)
  - [UI Identity](#ui-identity)
  - [Router](#router)
  - [State Management](#state-management)
  - [Developer Experience](#developer-experience)
  - [Database Schema](#database-schema)
  - [Biggest Challenges](#biggest-challenges)
  
[**Scripts**](#scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)

---

## **Notes :**

<br/>

### **UI**

The UI consists of 2 screens:

* **Overview**: Displays a list of all the groups along with their completion status. Clicking on 
  a group should render the detail screen.

* **Detail**: Displays a list of all the tasks in the selected group and allows the user to toggle 
  the completion status of unlocked tasks.

</br>

### **UI Identity**

Set a simple UI and identity by defining a name for the web app and adding some UI elements, such as, a nav with the brand logo, a favicon and some simple animations, to enchance the experience. 

</br>

### **State Management**

Create the app state management using React Context and history library to manage the browse history

Create custom hooks to create actions that will help us to manipulate the state.

</br>

### **Router**

Create a router using React Context and React Reducer

Create custom hooks and components such as _Link_ to manipulate the browse history.

</br>

### **Developer Experience**

Add a `jsconfig.json` file to make the imports scripts easier to read for the developer.

Eslint disabled two lines of code since I cannot add an external function inside a dependency array otherwise it would generate an infinite loop of re-renders.

</br>

### **Database Schema**

Design a schema in SQL to store the task list data. You can add the SQL code needed to create
the schema to _schema.sql_. The schema should define all tables, columns, and constraints needed
to store the task list data.

</br>

### **Biggest Challenges**

* Design SQL schema since it was my first time playing with SQL.
* Create the dynamic route paths, as these will depend on the name of the task groups.
* Debugg. Find the origin of one bug which caused that the abstract of a group whose tasks depended on the tasks of another group to not update correctly.
  
</br>

</br>

## **Scripts**

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

</br>

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

</br>

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
