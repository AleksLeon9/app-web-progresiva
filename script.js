if ('serviceWorker in navigator'){
    navigator.serviceWorker.register('./sw.js')
    .then(reg=>console.log('Registro SW exitoso', reg))
    .catch(err=>console.warn('Error al momento de registrar SW',err))
}