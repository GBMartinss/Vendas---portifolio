const { app, BrowserWindow } = require('electron');
const path = require('path');

function criarJanela(){
    const janela = new BrowserWindow({
        width: 1280,
        height: 768,
        minWidth: 800,
        minHeight: 600,
        backgroundColor: '#1b175c',
        center: true,
        title: "Portifolio - Gabriel Martins",
        icon: path.join(__dirname, '..', 'assets', 'icon.ico'), 
        webPreferences: {
            preload: path.join("src/preload/preload.js"),
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    janela.loadFile("src/renderer/index.html");
    janela.on("closed", () =>{
        console.log("Janela Fechada")
    })
}

app.whenReady().then(() => {
    app.setAppUserModelId('com.desenvolvedor.meuappteste');
    criarJanela();

    app.on("activate")

});

app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
});
