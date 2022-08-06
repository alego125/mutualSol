const d = document;

export default function abrirCerrarLoti(sorteos, mesesSorteo, salir) {
    //Funcion que se exporta por default y recibe como parametro los div donde estan los elementos del sotero, cada div por separado del sorteo y el elemento salir respectivamente

    //Seleccionamos los elementos
    const $sorteosDiv = d.querySelector(sorteos),
        $mesesSorteo = d.querySelectorAll(mesesSorteo);

    d.addEventListener('click', (e) => {

        //Capturamos el evento clic y luego comparamos cada uno de los id de el elemento al que se le hizo clic parar ver con cual coincide y a apartir de alli realizar la programacion correspondiente para mostrar su mes
        //colocamos el id dentro de una variable para luego analizarlo con un switch case
        let idElementoCapturado = e.target.getAttribute('id');

        switch (idElementoCapturado) {
            case 'enero':
                $sorteosDiv.classList.add('visible');
                $mesesSorteo.forEach(elemento => {
                    if (elemento.id === 'enero') {
                        elemento.classList.add('visible');
                    }
                });
                //Podemos acceder al id del elemento como arriba simplemente colocando con la notacion del punto .id o colocando moco vemos abajo getAttribute('id') las dos maneras funcionan correctamente
                break;
            case 'febrero':
                $sorteosDiv.classList.add('visible');
                $mesesSorteo.forEach(elemento => {
                    if (elemento.getAttribute('id') === 'febrero') {
                        elemento.classList.add('visible');
                    }
                });
                break;
            case 'marzo':
                $sorteosDiv.classList.add('visible');
                $mesesSorteo.forEach(elemento => {
                    if (elemento.getAttribute('id') === 'marzo') {
                        elemento.classList.add('visible');
                    }
                });
                break;
            case 'abril':
                $sorteosDiv.classList.add('visible');
                $mesesSorteo.forEach(elemento => {
                    if (elemento.getAttribute('id') === 'abril') {
                        elemento.classList.add('visible');
                    }
                });
                break;
            case 'mayo':
                $sorteosDiv.classList.add('visible');
                $mesesSorteo.forEach(elemento => {
                    if (elemento.getAttribute('id') === 'mayo') {
                        elemento.classList.add('visible');
                    }
                });
                break;
            case 'junio':
                $sorteosDiv.classList.add('visible');
                $mesesSorteo.forEach(elemento => {
                    if (elemento.getAttribute('id') === 'junio') {
                        elemento.classList.add('visible');
                    }
                });
                break;
            case 'julio':
                $sorteosDiv.classList.add('visible');
                $mesesSorteo.forEach(elemento => {
                    if (elemento.getAttribute('id') === 'julio') {
                        elemento.classList.add('visible');
                    }
                });
                break;
            case 'agosto':
                $sorteosDiv.classList.add('visible');
                $mesesSorteo.forEach(elemento => {
                    if (elemento.getAttribute('id') === 'agosto') {
                        elemento.classList.add('visible');
                    }
                });
                break;
            case 'setiembre':
                $sorteosDiv.classList.add('visible');
                $mesesSorteo.forEach(elemento => {
                    if (elemento.getAttribute('id') === 'setiembre') {
                        elemento.classList.add('visible');
                    }
                });
                break;
            case 'octubre':
                $sorteosDiv.classList.add('visible');
                $mesesSorteo.forEach(elemento => {
                    if (elemento.getAttribute('id') === 'octubre') {
                        elemento.classList.add('visible');
                    }
                });
                break;
            case 'noviembre':
                $sorteosDiv.classList.add('visible');
                $mesesSorteo.forEach(elemento => {
                    if (elemento.getAttribute('id') === 'noviembre') {
                        elemento.classList.add('visible');
                    }
                });
                break;
            case 'diciembre':
                $sorteosDiv.classList.add('visible');
                $mesesSorteo.forEach(elemento => {
                    if (elemento.getAttribute('id') === 'diciembre') {
                        elemento.classList.add('visible');
                    }
                });
                break;
            default:
                break;
        }        

        // });

        if (e.target.matches(salir)) {
            $sorteosDiv.classList.remove('visible');
            $mesesSorteo.forEach(elem => {
                elem.classList.remove('visible');
            });
        }
    });

}