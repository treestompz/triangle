const fs = require('fs')

const start = () => {
  let triangle = getTriangleArray('test.txt')
  let max = findMax(triangle)
  console.log(`Max is: ${max}`)
}

const findMax = (triangle) => {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1])
    }
  }
  return triangle[0][0]
}

const getTriangleArray = (filename) => {
  let lines = fs.readFileSync(filename, 'utf8').split('\n')
  let arr = []

  for (let i = 0; i < lines.length; i++) {
    let nums = []
    lines[i].split(' ').forEach((n) => {
      let num = parseInt(n, 10)
      if (!Number.isNaN(num)) {
        nums.push(num)
      }
    })

    if (nums.length) {
      arr.push(nums)
    }
  }

  return arr
}

start()