const encoder = new TextEncoder()

const greetText = encoder.encode('Hello World\n My name is Vedant Bhoj')

await Deno.writeFile("greet.txt", greetText);