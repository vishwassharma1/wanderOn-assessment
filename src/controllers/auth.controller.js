const {authService, userService} = require('../services');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcryptjs');



const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            config.secret_key,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.cookie('token', token, { httpOnly: true });
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const det = {
            $or: [
              { username:username },
              { email:email}
            ]
          };
        let user = await userService.getUserByEmail(det);
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = await authService.createUser({
            username,
            email,
            password
        });
        console.log(JSON.stringify(user))
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            config.secret_key,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.cookie('token', token, { httpOnly: true });
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
  loginUser,
  registerUser,
};
