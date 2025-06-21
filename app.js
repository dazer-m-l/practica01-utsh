import puppeteer from "puppeteer";

async function abrirPaginaWeb(){
    console.log(':::Inicio::::');
    const navegador = await puppeteer.launch({
        headless: false,
        slowMo: 800
    });
    const pagina = await navegador.newPage();

    await pagina.goto('https://example.com');

    navegador.close();

    console.log(':::Termine::::');
}

//abrirPaginaWeb();

async function capturarScreen(){
    console.log(':::Inicio::::');
    const navegador = await puppeteer.launch({
        headless: false,
        slowMo: 800
    });
    const pagina = await navegador.newPage();
    await pagina.goto('https://utsh.edu.mx/');

    await pagina.screenshot(
        {
            path: `./screenshots/ejemplo-${Date.now()}.png`,
            fullPage: true
        }
    )

    navegador.close();

    console.log(':::Termine::::');
}

//capturarScreen();


async function navegarEntrePaginas(){
    console.log(':::Inicio::::');
    const navegador = await puppeteer.launch({
        headless: false,
        slowMo: 800
    });
    const pagina = await navegador.newPage();
    await pagina.goto('https://example.com/');

    await pagina.click('div>p>a[href="https://www.iana.org/domains/example"]');

    await new Promise ((resolve)=>setTimeout(resolve, 300))

    await pagina.screenshot({
        path: './screenshots/Pagina-visitada-Autom.png',
        fullPage: true,
    })

    navegador.close();

    console.log(':::Termine::::');
}


async function obtenerDatosAngular() {
    
    //1.- Instanciar navegador
    const navegador = await puppeteer.launch({
        headless: false,
        slowMo: 500
    });

    //2.- Crear nueva pestaña en Navegador
    const pagina = await navegador.newPage();

    //3.- Visitar o abrir la pagina
    await pagina.goto('https://example.com/');

    //4.- Obtener Los datos
    const datos = await pagina.evaluate(()=>{
        const arregloResultados = [];
        const titulo = document.querySelector('div>h1')?.innerText;
        const parrafo = document.querySelector('div>p')?.innerText;
        const enlace = document.querySelector('div>p:nth-childa')?.innerText;

        const objetoResultado ={
            titulo: titulo,
            parrafo: parrafo,
            enlace: enlace
        }

        arregloResultados.push(objetoResultado);
        return arregloResultados;
    })
    console.log('::::Datos:::', datos);
    navegador.close()
}

obtenerDatosAngular()


