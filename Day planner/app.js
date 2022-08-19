//Event listener for add a task
document.querySelector('.task-form').addEventListener('submit', (e) => {
  //get values 
  const tasktitle = document.querySelector('.tasktitle').value
  const comments = document.querySelector('.comments').value
  const time = document.getElementById('datein').value
  //console.log(tasktitle, ' ', comments, ' ', time)

  //instantiate task
  const task = new Task(tasktitle, comments, time)

  //instantiate UI
  const ui = new UI()

  //validate 
  if (tasktitle === '' || time === '') {
    //Error Alert
    ui.showAlert('Please fill in Task field', 'error')
  } else {
    //Add task to list
    ui.addTask(task)

    //Add to LS

    //Show succes
    ui.showAlert('Task added', 'succes')

    //clear Fields 
    ui.clearFields()
  }


  e.preventDefault()
})

//Delete Task
document.querySelector('.taskcontainer').addEventListener('click', function(e){
 
  //instantiate UI
  const ui = new UI()

  ui.deleteTask(e.target)

  //Show message
  ui.showAlert('Book removed', 'succes')

  e.preventDefault()
})

//Delete all tasks
document.querySelector('.deleteall').addEventListener('click', () => {
  const rows = document.querySelectorAll('.delete')

  rows.forEach((row) => {
    row.parentElement.parentElement.remove()
  })
})