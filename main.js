const {
    app,
    BrowserWindow
} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        },
        icon: 'build/icon-512.ico'
    })

    win.loadURL('https://inscribr.org')
}

app.whenReady().then(() => {
    createWindow()
})

