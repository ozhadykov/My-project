class UI {
  addTask(task){
    const list = document.querySelector('.taskcontainer')

    //create element
    const row = document.createElement('tr')

    //inner cols
    row.innerHTML = `
      <td>${task.title}</td>
      <td>${task.comments}</td>
      <td>${task.time}</td>
      <td><a href="#" class="delete">X</td>
    `

    list.appendChild(row)
  }

  showAlert(message, className) {
    //create div
    const div = document.createElement('div')
    //add classes
    div.className = `alert ${className}`

    //add text
    div.appendChild(document.createTextNode(message))
    //get parent
    const container = document.querySelector('.container')
    const head = document.querySelector('.row')
    //insert alert
    container.insertBefore(div, head)

    //timeout after 3 secs
    setTimeout(() => {
      document.querySelector('.alert').remove()
    }, 1000)
  }

  deleteTask(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove()
    }
  }

  clearFields() {
    document.querySelector('.tasktitle').value = ''
    document.querySelector('.comments').value = ''
    document.getElementById('datein').value = "00:00"
  }
}