# DenoJS-Crash-Course

> iwr https://deno.land/x/install/install.ps1 -useb | iex

> deno --help

> deno run https://deno.land/std/examples/welcome.ts

> deno run --allow-read --allow-net https://deno.land/std/http/file_server.ts

> deno install --allow-read --allow-net https://deno.land/std/http/file_server.ts

// Installs in <UserPath>\.deno\bin\file_server.cmd

> file_server -- runs the file server .cmd scripts to start the server

> deno run .\hello.ts

> deno run .\datetime.ts

> deno run --allow-write .\createFile.ts 
// Permission --allow-write

>  deno run --allow-read .\readFile.ts 

> deno run --allow-net .\simpleServer.ts 