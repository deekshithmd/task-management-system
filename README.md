# Task management system

This is a task management system where user can create new task by providing title, description and current status of the task, once it is created it will be shown in the board, then when task is in todo or in progress state user can update the task, once it is moved to completed/done state then user can't edit it but he can delete the task from the board.

## Frontend : [https://github.com/deekshithmd/task-management-system](https://github.com/deekshithmd/task-management-system)
## Backend : [https://github.com/deekshithmd/task-management-system-backend](https://github.com/deekshithmd/task-management-system-backend)

## Steps to run the application

### Backend setup
1. Clone the backend repo ```git clone https://github.com/deekshithmd/task-management-system-backend.git```
2. Open the `task-management-system-backend` project folder in code editor.
3. Now run ```yarn install``` to install all dependencies
4. Then run ```yarn run dev``` to run the app
5. Now backend should run at port ```8000```
6. For sharing purpose kept the .env file in repo.
7. Once the backend is up and running at port ```8000```, proceed with front end setup which uses backend running at port ```8000```
8. To run tests run ```yarn run test``` which will run all tests.
### Frontend setup
1. After backend setup, backend runs at port ```8000``` i.e at ```http://localhost:8000```
2. Now clone the frontend repo ```git clone https://github.com/deekshithmd/task-management-system.git```
3. Open the `task-management-system` project folder in code editor.
4. Run `npm install` to install all dependencies
5. Run `npm run start` to start the application
6. Now application will start running at port ```3000``` using backend service running at port ```8000```
7. Run ```npm run test``` to run frontend tests. 

### Techstack used
<b>Backend:</b> NodeJS, ExpressJS, Mongoose, MongoDB, Jest, SuperTest.<br/>
<b>Frontend:</b> HTML, CSS, Javascript, ReactJS and Styled Components, React Testing Library.

### Steps to use the application

1. User need to signup by providing required details like name,email and password
2. Once user complete signup he will be redirected to login page to login with created credentails
3. Once login completed user lands in the home page
4. User can create new task by clicking on `Add a Task` button, once he clicks on button modal will open asking for task details, once he provide details and click on `Create` button task will get created and updated in the task board.
5. Once task created user will be provided with 2 options 1.Update 2. Delete
6. If user clicks on `Update` button modal will open with pre-filled task details, now user can edit the task details like title,description and status, once he clicks on `Update` button task will be updated and shown in the task board
7. If user clicks on Delete button, modal will open asking whether the user is sure to delete the task, if he clicks on `Cancel` modal will be closed, if he clicks on `Delete` then task will get deleted and modal will get closed.
8. Filter provided at the top of the task board, user can filter tasks based on the requirement, like `All` for showing all tasks and rest of the options to show tasks based on status.
9. Profile icon provided in the header is for Profile section, one user clicks on that icon Profile section opens containing user details and task statistics.
10. Once user clicks on `Logout` button user will be redirected to login page.
