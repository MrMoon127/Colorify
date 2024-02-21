function paint(color) {
  const circle = document.getElementById('circleID');
  circle.style = `background-color:${color}`
}

function random() {
  const colors = [
    'yellow',
    'blue',
    'green',
    'red',
    'purple',
    'white',
    'black',
    'orange',
  ];
  const circle = document.getElementById('circleID');

  const color = colors[(Math.floor(Math.random() * colors.length))];
  circle.style = `background-color:${color}`
}