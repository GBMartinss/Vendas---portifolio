const { app, BrowserWindow } = require('electron');

function criarJanela(){
    const janela = new BrowserWindow({
        width: 1280,
        height: 768
    });
    janela.loadFile("index.html");
}
app.whenReady().then(() => {
    criarJanela()
});
app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
});