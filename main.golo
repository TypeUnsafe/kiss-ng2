module main

import kiss
import kiss.request
import kiss.response
import kiss.httpExchange

function main = |args| {

  let server = HttpServer("0.0.0.0", 8080, |app| {
    app: static("/public", "index.html")
  })

  server: start(">>> http://0.0.0.0:8080/")

  server: watch(["/", "/public", "/public/js"], |events| {
    events: each(|event| -> println(event: kind() + " " + event: context()))
    java.lang.System.exit(1)
  })
}