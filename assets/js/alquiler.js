const propiedades_alquiler = [
   
    {
        nombre: "Casa moderna en el centro",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60",
        descripcion: "Casa moderna y espaciosa con fácil acceso al transporte y comercio.",
        ubicacion: "321 Urban Street, Downtown, CA 54321",
        habitaciones: 5,
        costo: 3000,
        smoke: true,
        pets: false,
    },
    {
        nombre: "Residencia familiar con jardín",
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60",
        descripcion: "Amplia casa familiar con un hermoso jardín para niños y mascotas.",
        ubicacion: "654 Family Drive, Suburbia, CA 98765",
        habitaciones: 4,
        costo: 2500,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Casa histórica remodelada",
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Casa histórica con un toque moderno, perfecta para los amantes de la arquitectura.",
        ubicacion: "456 Heritage Lane, Old Town, CA 67890",
        habitaciones: 3,
        costo: 4000,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Loft urbano con diseño minimalista",
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        descripcion: "Elegante loft en el corazón de la ciudad, ideal para profesionales jóvenes.",
        ubicacion: "789 Central Ave, Metropolis, CA 12345",
        habitaciones: 1,
        costo: 1800,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Villa en la playa con piscina privada",
        src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        descripcion: "Hermosa villa con acceso directo a la playa y piscina privada.",
        ubicacion: "123 Beachside Road, Paradise Island, CA 99999",
        habitaciones: 6,
        costo: 7000,
        smoke: true,
        pets: true,
    },
];

const contenedor = document.getElementById("propiedades-alquiler");

if (contenedor) {
    propiedades_alquiler.forEach((propiedad) => {
        contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="Imagen de la propiedad ${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p>${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
                    <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo.toLocaleString()}</p>
                    <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
                        <i class="${propiedad.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> 
                        ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
                    </p>
                    <p class="${propiedad.pets ? "text-success" : "text-danger"}">
                        <i class="${propiedad.pets ? "fas fa-paw" : "fas fa-ban"}"></i> 
                        ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
                    </p>
                </div>
            </div>
        </div>`;
    });
} else {
    console.error("No se encontró el contenedor con id 'propiedades-alquiler'");
}
