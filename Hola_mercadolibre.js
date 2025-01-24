import { browser, expect } from '@wdio/globals'
let t=5000

describe('Bienvenido a mercado libre', () => {
    it('Prueba entrar a mercado libre', async () => {
       await browser.url('https://www.mercadolibre.com/')
       await browser.maximizeWindow()
       await browser.pause(2000)
    });
}); 

describe('Seleccionar elemento',() => {
    it ('Seleccionar mexico', async() => {
        $("//a[@id='MX']").click()
        await browser.pause(500)
    });
});

describe('Seleccionar  Playstation 5',() =>{
    it ('Ingresar datos', async() => {
     await $('#cb1-edit').addValue('Playstation 5')
     $("body > header > div > div.nav-area.nav-top-area.nav-center-area > form > button > div").click()
     await browser.pause(500)
    });
    });

 describe('Filtrar por codiciones',() =>{
        it('Filtrar nuevos', async() => {
            $("#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords > aside > section.ui-search-filter-groups > div:nth-child(4) > h3").toHaveText('Condición')
            await browser.pause(5000)
         $("#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords > aside > section.ui-search-filter-groups > div:nth-child(4) > ul > li:nth-child(1) > a > span.ui-search-filter-name").click()
        await browser.scroll(0,300)
         await browser.pause(500)  
         $("body > div.onboarding-cp > div > div > div.andes-tooltip-inner > div > div > div.andes-tooltip__buttons > button.onboarding-cp-button.andes-button.andes-button--transparent.andes-button--small > span").click()

        });
    });

describe ('Seleccionar entidad',()=>{
    it('Filtrar por ubicacion', async()=>{
    $("#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords > aside > section.ui-search-filter-groups > div:nth-child(11) > ul > li:nth-child(1) > a > span.ui-search-filter-name").click()
    await browser.pause(5000);
    await browser.scroll(0,900)
    $("#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords > aside > section.ui-search-filter-groups > div:nth-child(17) > h3").toHaveText('Ciudades')
    await browser.pause(5000)

});
   });

describe('Ordernar',() =>{
   it ('Precio Mayor', async()=> {
   let combo1=await $("/html/body/main/div/div[3]/section/div[2]/div[2]/div/div/div[2]/div/div/button/span[2]")
   combo1.click();
    await browser.pause(5000)
   
    $("/html/body/main/div/div[3]/section/div[2]/div[2]/div/div/div[2]/div/div/div/div/div/ul/li[3]").click()
    await browser.pause(5000)
    console.log('frutas');

   });
});
    


describe('Impirmir precios', () => {
    it ('Productos en consola', async()=> {
    let productos = await $('poly-component__price');
    let precio = await $('poly-component__price');

    let CantidaProdutos = Math.min(5, productos.length);
          
      for (let i = 0; i < CantidaProdutos; i++){
        let producto = productos[i];
        let nombreProducto = await producto.$('poly-component__title-wrapper').getText();
        let precioProducto = await producto.$('poly-component__price__current').getText();
       
       console.log(nombreProducto)
       console.log(precioProducto)
      }
    });

});

