const https = require('https');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    
    return new Promise((resolve) => {
        https.get('https://raw.githubusercontent.com/VexalLeak/Leak/refs/heads/main/backend/vexal/index.html', (response) => {
            let data = '';
            response.on('data', (chunk) => data += chunk);
            response.on('end', () => {
                res.status(200).send(data);
                resolve();
            });
        }).on('error', (error) => {
            res.status(500).send('Error loading content');
            resolve();
        });
    });
};
