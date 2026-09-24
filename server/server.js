require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'Pi Space Shooter Server'
  });
});

app.get('/api/catalog', (req, res) => {
  res.json({
    energy_100: {
      name: '100 Energy',
      amount: 0.1
    },
    weapon_upgrade: {
      name: 'Weapon Upgrade',
      amount: 0.5
    },
    premium_ship: {
      name: 'Premium Ship',
      amount: 1
    }
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Pi Space Shooter server started');
});
