const N = 4
// const N = 6
const COUNT = 8
const SIZE = 90
// const SIZE = 60

function setup() {
  createCanvas((W = windowHeight - 50), W)
  background('beige')
  noLoop()
  noStroke()

  const w = W / COUNT

  for (let x = 1; x < COUNT; x++) {
    for (let y = 1; y < COUNT; y += 1.2) {
      push()
      drawPolygon(x, y, w)
      pop()
    }
  }
}

function drawPolygon(x, y, w) {
  translate(x * w, y * w)
  rotate(-HALF_PI)
  for (let i = 0; i < N; i++) {
    beginShape()

    let angle = map(i, 0, N, 0, TAU)
    let x = cos(angle) * SIZE
    let y = sin(angle) * SIZE
    vertex(0, 0)
    vertex(x, y)

    angle = map(i + 1, 0, N, 0, TAU)
    x = cos(angle) * SIZE
    y = sin(angle) * SIZE
    vertex(x, y)
    fill(`${random(random(colorPalette).colors)}66`)
    endShape(CLOSE)
  }
}

function keyPressed() {
  if (key === 'c') {
    saveCanvas('mySketch', 'jpeg')
  }
}

const colorPalette = [
  {
    name: 'Benedictus',
    colors: ['#F27EA9', '#366CD9', '#5EADF2', '#636E73', '#F2E6D8'],
  },
  {
    name: 'Cross',
    colors: ['#D962AF', '#58A6A6', '#8AA66F', '#F29F05', '#F26D6D'],
  },
  {
    name: 'Demuth',
    colors: ['#222940', '#D98E04', '#F2A950', '#BF3E21', '#F2F2F2'],
  },
  {
    name: 'Hiroshige',
    colors: ['#1B618C', '#55CCD9', '#F2BC57', '#F2DAAC', '#F24949'],
  },
  {
    name: 'Hokusai',
    colors: ['#074A59', '#F2C166', '#F28241', '#F26B5E', '#F2F2F2'],
  },
  {
    name: 'Hokusai Blue',
    colors: ['#023059', '#459DBF', '#87BF60', '#D9D16A', '#F2F2F2'],
  },
  {
    name: 'Java',
    colors: ['#632973', '#02734A', '#F25C05', '#F29188', '#F2E0DF'],
  },
  {
    name: 'Kandinsky',
    colors: ['#8D95A6', '#0A7360', '#F28705', '#D98825', '#F2F2F2'],
  },
  {
    name: 'Monet',
    colors: ['#4146A6', '#063573', '#5EC8F2', '#8C4E03', '#D98A29'],
  },
  {
    name: 'Nizami',
    colors: ['#034AA6', '#72B6F2', '#73BFB1', '#F2A30F', '#F26F63'],
  },
  {
    name: 'Renoir',
    colors: ['#303E8C', '#F2AE2E', '#F28705', '#D91414', '#F2F2F2'],
  },
  {
    name: 'VanGogh',
    colors: ['#424D8C', '#84A9BF', '#C1D9CE', '#F2B705', '#F25C05'],
  },
  {
    name: 'Mono',
    colors: ['#D9D7D8', '#3B5159', '#5D848C', '#7CA2A6', '#262321'],
  },
  {
    name: 'RiverSide',
    colors: ['#906FA6', '#025951', '#252625', '#D99191', '#F2F2F2'],
  },
]
