># Hi👋, Welcome to Pixel | Task Manager!  🗓
</br>

My name is Itzel! 🙋🏻‍♀️  Pixel | Task Manager is a web app to manage tasks from different task groups and, the tasks can have dependencies on one another (i.e. if task X depends on task Y, task X cannot be completed until task Y is completed). 

I created this project using only the libraries included within React. It was a great challenge and I had a lot of fun making this proyect. Here are some of my process notes: 

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

> Some things to keep in mind:

* Locked tasks cannot have their completion status toggled
* Tasks remain locked until all of their dependencies have been completed

</br> 

Hope you enjoy it! 🚀


