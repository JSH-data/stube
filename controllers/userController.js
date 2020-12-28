export const join = (req, res) => res.render("join"); // 기존 userRouter에 있던 함수를 옮겨줌
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout"); // arrow함수로 인해 암시적으로 return값을 줌 하지만 대괄호 {}사용시에는 이 특성이 사라져 return res.render("Logout")을 작성해야함
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");