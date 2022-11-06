// class customer{
//   constructor(firstname, lastname, email, cuantity, category){
//     this.firstname = firstname
//     this.lastname = lastname
//     this.email = email
//     this.cuantity = cuantity
//     this.category = category
//     this.totalDue = 0
//   }
// }

let customer = {
  firstname: '',
  lastname: '',
  email: '',
  ticketCuantity: '',
  ticketCategory: '',
  totalDue: 0
}

let fSubmit = document.getElementById('formSubmit')
let ticketCuantity = document.getElementById('inputCuantity')
let ticketCategory = document.getElementById('inputCategory')

ticketCuantity.onchange = () => {
  if(ticketCuantity.value < 1) ticketCuantity.value = 1;
  totalDue_render(ticketCategory.value, ticketCuantity.value)
}
ticketCategory.onchange = () => { totalDue_render(ticketCategory.value, ticketCuantity.value) }

fSubmit.onclick = (e) => {
  e.preventDefault()

  let firstname = document.getElementById('inputFirstname')
  let lastname = document.getElementById('inputLastname')
  let email = document.getElementById('inputEmail')
  let tCuantity = document.getElementById('inputCuantity')
  let tCategory = document.getElementById('inputCategory')

  customer.firstname = firstname.value || 'Nombre'
  customer.lastname =  lastname.value || 'Apellido'
  customer.email = email.value || 'ejemplo@email.com'
  customer.ticketCuantity = tCuantity.value || 0
  customer.ticketCategory =  tCategory.value
  customer.totalDue = totalDue_calc(tCategory.value, tCuantity.value)
  op_render()
}

function totalDue_calc(category, cuantity){
  let discount;
  switch (category) {
    case 'Estudiante':
      discount = 0.80
      break;
    case 'Trainee':
      discount = 0.50
      break;
    case 'Junior':
      discount = 0.15
      break;
    default:
      discount = 0
      break;
  }
  let x = 200 - (200 * discount)
  return x * cuantity
}

function totalDue_render(tCategory, tCuantity){
  let render_total = document.getElementById('totalDueDisplay')
  render_total.innerText = totalDue_calc(tCategory, tCuantity)
}

function op_render(){
  let container = document.getElementById('ticketsMain')
  container.innerHTML = `
                        <div class="container-full-screen">
                          <div class="container">
                            <div class="row justify-content-center">
                              <div class="col-12 col-md-6 col-xl-4">
                                <div class="card text-center border-success">
                                  <h5 class="card-header border-success">Resumen</h5>
                                  <div class="card-body">
                                    <h5 class="card-title">${customer.ticketCuantity} Tickets ${customer.ticketCategory}</h5>
                                    <h5 class="card-title mb-3">Valor $${customer.totalDue}</h5>
                                    <p class="card-text my-0">${customer.firstname} ${customer.lastname}</p>
                                    <p class="card-text my-0">${customer.email}</p>
                                    <a href="./tickets.html" class="btn btn-green-2 mt-4">Aceptar</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        <div>
                        `
}