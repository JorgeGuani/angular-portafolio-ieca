// AÑADIENDO MIEMBROS A LOS GRUPOS Y MOSTRANDO RESUMEN
// Completa el código del prototipo "Grupo"

/*
    1. Utilizando un constructor de objetos "Grupo"
    2. Completa el constructor "Grupo" con las propiedades:
        nombre   -> Nombre del grupo        -> String "..."
        personas -> Arreglo de Personas     -> Array["...", "...", "..."]
    3. Agrega un prototipo llamado `agregarPersona` que sea una función para agregar una persona
    4. Agrega un prototipo llamado `mostrarResumen` utilizando **interpolación** para mostrar el siguiente mensaje:
        "El grupo <propiedad_grupo> tienen <total_personas> miembros"
*/

// Constructor de Objetos "Grupo"
function Grupo(nombre, personas) {
    this.nombre = nombre;
    this.personas = personas;
}

const magios = new Grupo("Magios", ["Eduardo", "Carla", "Marcos", "Emmanuel", "Samara", "Paulina", "María", "Julio", "Alex", "Pedro", "Guillermo", "Hernán", "Eliot", "Israel", "Lucía"])

Grupo.prototype.mostrarResumen = function() {
    console.log(`El grupo ${this.nombre} tienen ${this.personas.length} miembros`)
    console.log(`${this.personas.join(', ')}`)
}

Grupo.prototype.agregarPersona = function(persona) {
    const index = this.personas.findIndex(p => p.toUpperCase() === persona.toUpperCase());
    if (index === -1) {
        this.personas.push(persona);
    }
}

magios.mostrarResumen()
magios.agregarPersona("Manuel")
magios.agregarPersona("Irma")
magios.agregarPersona("Carlos")
magios.mostrarResumen()