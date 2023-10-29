# Task management system

This is a task management system where user can create new task by providing title, description and current status of the task, once it is created it will be shown in the board, then when task is in todo or in progress state user can update the task, once it is moved to completed/done state then user can't edit it but he can delete the task from the board.

## Steps to run the application

1. clone the repo `git clone https://github.com/deekshithmd/task-management-system.git`
2. run `npm install` to install all depandencies
3. run `npm run start` to start the application
4. Application will run at port `3000`

### Techstack used

HTML, CSS, Javascript, ReactJS and Styled Components.

### Steps to use the application

1. User need to signup by providing required details like name,email and password
2. Once user complete signup he will be redirected to login page to login with created credentails
3. Once login completed user lands in the home page
4. User can create new task by clicking on `Add a Task` button, once he clicks on button modal will open asking for task details, once he provide details and click on `Create` button task will get created and updated in the task board.
5. Once task created user will be prvided with 2 options 1.Update 2. Delete
6. If user clicks on Update button modal will be opened with prefilled task details, now user can edit the task details like title,description and status, once he clicks on `Update` button task will be updated and shown in the task board
7. If user clicks on Delete button, modal will open asking whether the user sure to delete the task, if he clicks on `Cancel` modal will be closed, if he clicks on `Delete` then task will get deleted and modal will get closed.
8. Filter provided at the top of the task board, user can filter tasks based on the requirement, like All for showing all tasks and rest of the options to show tasks based on status.
9. Once user clicks on `Logout` button user will be redirected to login page.
