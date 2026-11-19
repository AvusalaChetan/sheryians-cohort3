 

export function generateShortCode() {
    const mainString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortCode = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * mainString.length);
        shortCode += mainString[randomIndex];
    }
    return shortCode;
 }

 