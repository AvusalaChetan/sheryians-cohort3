function regiterUser(username, password) {
  let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  let userExist = users.find((user) => user.username === username);
  if (userExist) {
    return {success: false, message: "user exist with this name"};
  }
  let newUser = {
    id: users.length + 1,
    username,
    password,
    currency:'$'
  };

  users.push(newUser);

  localStorage.setItem("registeredUsers", JSON.stringify(users));

  return {success: true, message: "register successfully"};
}

function loginUser(username, password) {
  let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  let userExist = users.find(
    (user) => user.username === username && user.password === password,
  );
  if (!userExist) {
    return {
      success: false,
      message: "username or password is worng.",
    };
  }

  let user = {
    id: userExist.id,
    username: userExist.username,
    currency:userExist.currency
  };

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("theme", 'light');

  return {success: true, message: "login successfully"};
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem('transactions')
  localStorage.removeItem('theme')
  window.location.replace("index.html");
}

function checkAuth() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || !user.id || !user.username) {
    window.location.replace("index.html");
    return;
  }
  return user;
}
 