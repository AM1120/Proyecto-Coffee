export default function Inicio(){


    const perfil={
        id:1,
        name:"",
        auth:false
    }


    if(perfil.auth){
        return(
            <main style={{minHeight:'70vh'}}>
                <div>
                    <h1 style={{margin:0}}>AUTHENTICADO</h1>
                </div>
            </main>
        )
    }

    return(
        <main style={{ minHeight: '50vh' }}>

      {/* Hero Section */}
      <section id="home" className="bg-[url('https://i.pinimg.com/474x/e8/5c/33/e85c33e43a04777c973e72e2a1dd03ee.jpg')] bg-cover bg-center h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-7xl font-bold">Coffee</h2>
          <p className="mt-4">La mejor experiencia del sabor en cada taza</p>
          <button className="mt-6 bg-yellow-500 px-6 py-3 rounded-full">Ordena Ahora</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold">Descubre con Nosotros el Mejor Café</h3>
          <p className="mt-4">Disfruta de la calidad superior en cada taza. Nuestro café es seleccionado de las mejores cosechas.</p>
          <button className="mt-6 bg-yellow-500 px-6 py-3 rounded-full">Leer Más</button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold">Disfruta de Diferentes Estilos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              { name: 'Capuccino', price: '$4.50', image: 'https://i.pinimg.com/474x/64/57/3b/64573b32f8ec76e81973bedf5c3357fa.jpg' },
              { name: 'Chai Latte', price: '$5.00', image: 'https://i.pinimg.com/474x/48/e5/e7/48e5e7b409c5133ae3aa26fc2e847754.jpg' },
              { name: 'Macchiato', price: '$4.80', image: '/macchiato.jpg' },
              { name: 'Espresso', price: '$3.50', image: '/espresso.jpg' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                <h4 className="text-xl font-bold mt-4">{item.name}</h4>
                <p className="text-gray-600">{item.price}</p>
                <button className="mt-4 bg-yellow-500 px-4 py-2 rounded-full">Ordenar Ahora</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    )
}