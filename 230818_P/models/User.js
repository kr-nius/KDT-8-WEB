import mysql from "mysql2/promise";

const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

export const post_signup = async (data) => {
  try {
    const query = `INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)`;
    const rows = await conn.query(query, [data.userid, data.pw, data.name]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const post_signin = async (data) => {
  try {
    const query = "SELECT * FROM user WHERE userid = ? AND pw = ?";
    const [rows] = await conn.query(query, [data.userid, data.pw]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const post_profile = async (data) => {
  try {
    const query = "SELECT * FROM user WHERE userid = ?";
    const [rows] = await conn.query(query, [data.profile]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const edit_profile = async (data) => {
  try {
    const query = "UPDATE user SET userid= ?, pw = ?, name = ? WHERE id = ?";
    const [rows] = await conn.query(query, [
      data.userid,
      data.pw,
      data.name,
      data.id,
    ]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const delete_profile = async (id) => {
  try {
    const query = "DELETE FROM user WHERE id = ?";
    const [rows] = await conn.query(query, [id]);
  } catch (error) {
    console.log(error);
  }
};
