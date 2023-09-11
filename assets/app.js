// Descrizione:

// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa inserendo il percoso in una propietá dell'oggetto restituito dalla funzione data.

const { createApp } = Vue

createApp({
  data() {
    return {
        
      message: 'Hello Vue',

      photo: 'https://images.unsplash.com/photo-1693735652425-e775076113c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      
      description: 'Colosseum (Rome, Italy)'
      
    }
  }
}).mount('#app') 

