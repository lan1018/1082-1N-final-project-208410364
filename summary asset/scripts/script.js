const demoList = document.getElementById('demo-list');
const demo = document.getElementById('demo');

class ClassDemo {
  constructor(id, title, imageUrl, description, handlerCode) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.handlerCode = handlerCode;
  }
}

class ClassDemoItem {
  constructor(classDemo) {
    this.classDemo = classDemo;
  }

  render() {
    const card = document.createElement('div');
    card.innerHTML = `
    <div class="card">
       
    <div class="image">
       <img src="${this.classDemo.imageUrl}">
    </div>
    <div class="title">
     <h1>
       <span style="font-weight:bold;">${this.classDemo.title}</span></h1>
    </div>
    <div class="des">
     <h1>
       <span style="font-weight:bold;">${this.classDemo.description}</span></h1>
       <button><a href="${this.classDemo.handlerCode}"><i class="fas fa-link"></i> GO</a></button>
       <button><i class="fas fa-edit "></i> EDIT</button>
       <button><i class="far fa-trash-alt" onclick="deleteDemo(${this.classDemo.id})"> DELETE</i>
        </div>

    </div>
    `;
    return card;
  }
}

class ClassDemoList {
  demos = [
    new ClassDemo(
      1,
      'Unconventional Calculator',
      './images/calculator.PNG',
      'Using calculator to teach JavaScript basic concepts.<br></br>',
      'Unconventional Calculator.html'
    ),
    new ClassDemo(
      2,
      'Monster Killer',
      './images/monster.PNG',
      'Using Monster Killer to demonstrate how to use JavaScript if end loops.',
      'Monster Killer.html'
    ),
    new ClassDemo(
      3,
      'DOM Movie',
      './images/movie.PNG',
      'Using DOM Movie to show how to interact with DOM objects.',
      'DOM Movie Project.html'
    ),
    new ClassDemo(
      4,
      'Music Player',
      './images/music.PNG',
      'Music Player.<br></br>',
      'Music Player.html'
    ),
    new ClassDemo(
      5,
      'Video Player',
      './images/video.PNG',
      'Video Player.<br></br>',
      'Video Player.html'
    ),
  ];

  constructor() {}

  render() {
    const header = document.createElement('h1');
    header.id = 'mid-heading';
    // header.ClassList = 'visible';
    header.innerHTML = `<span style="color:	white; 
    font-size: 60px;
    ">
    Final Project &nbsp &nbsp &nbsp &nbsp</span>
    `;
    demoList.append(header);
    const cardList = document.createElement('div');
    cardList.id = 'mid-card-list';
    for (const item of this.demos) {
      const demoItem = new ClassDemoItem(item);
      const demoEl = demoItem.render();
      cardList.append(demoEl);
    }
    demoList.append(cardList);
  }
}
const classDemoList = new ClassDemoList();
console.log(ClassDemoList);
classDemoList.render();

const showDemoList = (item) => {
  demoList.classList = 'visible';
  demo.classList = 'invisible';
};

const showDemo = (srcUrl) => {
  demoList.classList = 'invisible';
  demo.classList = 'visible';
  demo.style.marginTop = '100px';
  demo.innerHTML = `
  <iframe src="${srcUrl}" height="900px" width=100%></iframe>
  `;
};

const deleteDemo = (id) => {
  // console.log('delete 1', classDemoList);
  classDemoList.demos.forEach((item, i) => {
    if (item.id == id) classDemoList.demos.splice(i, 1);
  });
  demoList.innerHTML = '';
  classDemoList.render();
};
