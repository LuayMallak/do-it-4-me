const bcrypt = require('bcrypt');

exports.encrypt = async payload => {
    if (!payload) return null;
    const saltRounds = 12;
    const hash = await bcrypt.hash(payload, saltRounds);
    return hash;
}

exports.check = async (clear, hash) => {
    return await bcrypt.compare(clear, hash);
}