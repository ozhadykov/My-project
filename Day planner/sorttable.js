function sortTableByTime(table, column, asc) {
  const tBody = table.tBodies[0]
  const rows = Array.from(tBody.querySelectorAll('tr'))
  const dirModifier = asc ? 1 : -1
  
  //Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim()
    const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim()

    return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier)
  })

  //remove everithing
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild)
  }

  //Re-add
  tBody.append(...sortedRows)
}


