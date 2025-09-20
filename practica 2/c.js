const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Maria", edad: 28 }
];

// Tu código aquí


const luis = personas.find(persona => persona.nombre === "Luis");
console.log("1. Persona encontrada:", luis);


console.log("\n2. Lista de personas:");
personas.forEach(persona => {
console.log("- Nombre: " + persona.nombre + ", Edad: " + persona.edad);
});


const sumaEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("\n3. Suma total de edades:", sumaEdades);