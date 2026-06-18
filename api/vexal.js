const https = require('https');

module.exports = async (req, res) => {
    const userAgent = req.headers['user-agent'] || '';
    const isRoblox = userAgent.includes('Roblox') || 
                     req.headers['roblox-id'] || 
                     req.headers['origin'] === 'roblox-app://';
    
    const isBrowser = userAgent.includes('Mozilla') && 
                     !userAgent.includes('Roblox') &&
                     !req.headers['roblox-id'];

    if (isBrowser) {
        res.setHeader('Content-Type', 'text/html');
        return res.send(`
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="color-scheme" content="dark">
  <title>VexalBackend</title>
  <meta property="og:title" content="VexalBackend">
  <meta property="og:description" content="file not accessible">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.vexaltragedy.xyz/">
  <meta name="theme-color" content="#000000">
  <link rel="icon" href="https://i.imgur.com/f1fp0Vj.png">
  <style>
    :root {
      --bg-primary: #0a0a0a;
      --bg-secondary: #111111;
      --border: #333333;
      --text-primary: #ffffff;
      --text-secondary: #888888;
      --accent: #ffffff;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .container {
      width: 100%;
      max-width: 500px;
    }
    .card {
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 40px 30px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    .card-header {
      margin-bottom: 25px;
    }
    .logo-container {
      margin-bottom: 20px;
    }
    .logo-container img {
      width: 60px;
      height: 60px;
      border-radius: 8px;
    }
    h1 {
      font-size: 28px;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }
    .message {
      background: var(--bg-primary);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 20px;
      margin: 25px 0;
    }
    .message p {
      color: var(--text-secondary);
      font-size: 16px;
      margin: 0;
    }
    .button-group {
      display: flex;
      gap: 15px;
      margin-top: 30px;
    }
    .btn {
      flex: 1;
      padding: 14px 20px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: var(--bg-primary);
      color: var(--text-primary);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .btn:hover {
      background: var(--border);
    }
    .btn-primary {
      background: var(--accent);
      color: var(--bg-primary);
      border-color: var(--accent);
    }
    .btn-primary:hover {
      background: #e6e6e6;
      border-color: #e6e6e6;
    }
    .btn svg {
      width: 16px;
      height: 16px;
    }
    @media (max-width: 640px) {
      .card {
        padding: 30px 20px;
      }
      h1 {
        font-size: 24px;
      }
      .button-group {
        flex-direction: column;
      }
      .btn {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <div class="logo-container">
          <img src="https://i.imgur.com/f1fp0Vj.png" alt="Vexal">
        </div>
        <h1>VexalBackend</h1>
      </div>
      <div class="message">
        <p>Raw file not found</p>
      </div>
      <div class="button-group">
        <a href="https://www.vexaltragedy.xyz/" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          Back to Site
        </a>
        <button class="btn" id="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clip-rule="evenodd" />
          </svg>
          Go Back
        </button>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const goBackBtn = document.getElementById('goBack');
      goBackBtn.addEventListener('click', function() {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = 'https://www.vexaltragedy.xyz/';
        }
      });
    });
  </script>
</body>
</html>
        `);
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/plain');
    
    return new Promise((resolve) => {
        https.get('https://raw.githubusercontent.com/VexalLeak/Leak/refs/heads/main/backend/vexal/index.html', (response) => {
            let data = '';
            response.on('data', (chunk) => data += chunk);
            response.on('end', () => {
                res.status(200).send(data);
                resolve();
            });
        }).on('error', (error) => {
            res.status(500).send('Error loading script');
            resolve();
        });
    });
};
