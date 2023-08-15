const fs = require("fs")

const indexPath = `build/index.html`

fs.readFile(indexPath, "utf8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const result = data.replace(/\/static\//g, "static/")

  fs.writeFile(indexPath, result, "utf8", (err) => {
    if (err) {
      console.error(err)
    }
  })
})
