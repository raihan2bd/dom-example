const projectData = [
  {id: 1,title: "Tonic", tags:['html', 'css']},
  {id: 2,title: "Tonic2", tags:['html', 'css']},
  {id: 3,title: "Tonic3", tags:['html', 'css']},
]

const portfolio = document.getElementById('portfolio');

function fetchOneProject(id) {
  const modal = document.createElement('div');
  modal.classList.add('article-modal')
  const modalTitle = document.createElement('h2');
  let project = {};
  for(let i = 0; i<projectData.length; i +=1) {
    if(projectData[i].id == id) {
      project = projectData[i]
    }
  }

  modalTitle.innerText = project.title;
  // project.tags.forEach(tag => {
  //   fkdffk
  // })
  modal.append(modalTitle);
  const modalSection = document.getElementById('modal');
  modalSection.append(modal)
}


projectData.forEach(project => {
  const card = document.createElement('div');
  card.classList.add('card-container')
  const title = document.createElement('h2');
  title.innerText = project.title

  const listGroup = document.createElement('ul')
  project.tags.forEach(tag => {
    const listItem = document.createElement('li')
    listItem.innerText = tag
    listGroup.appendChild(listItem)
  })

  const actionBtn = document.createElement('button')
  actionBtn.innerText = 'See more';
  actionBtn.addEventListener('click', () => {
    fetchOneProject(project.id)
  })

  card.append(title, listGroup, actionBtn)

  portfolio.append(card)
})