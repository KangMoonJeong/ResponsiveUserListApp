const { getUsersFromDB } = require('../models/userModel');

// 모든 사용자 가져오기
const allUsers = (req, res) => {
  try {
    const users = getUsersFromDB(); 
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: '사용자 목록을 불러오는 중 오류가 발생했습니다.' });
  }
};

// 랜덤 사용자 40명 가져오기
const randomUsers = (req, res) => {
  try {
    const users = getUsersFromDB();
    const randomUsers = users.sort(() => 0.5 - Math.random()).slice(0, 80);
    res.json(randomUsers);
  } catch (error) {
    res.status(500).json({ message: '랜덤 사용자 목록을 불러오는 중 오류가 발생했습니다.' });
  }
};

module.exports = { allUsers, randomUsers };
