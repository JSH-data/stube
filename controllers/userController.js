import routes from "../routes";

export const getJoin = (req, res) => res.render("join", { pageTitle : "Join" }); // 기존 userRouter에 있던 함수를 옮겨줌
export const postJoin = (req, res) => {
    const {body : { name, email, password, password2}} = req;
    if(password != password2) {
        res.status(400); // http가 잘못된 요청이라고 알려주는 방법 Status code
        res.render("join", { pageTitle : "Join" })
    } else {
        // To Do : 유저를 등록합니다
        // To Do : 유저를 로그인합니다.
        res.redirect(routes.home)
    }
};

export const getLogin = (req, res) => res.render("login", { pageTitle : "Log In" });
export const postLogin = (req, res) => {
    res.redirect(routes.home)
};

export const logout = (req, res) => {
    res.redirect(routes.home);
    //res.render("logout", { pageTitle : "Log Out" }) 나중에 로그아웃 확인페이지 한 번 만들어봐
    // To do Process Log out

}; // arrow함수로 인해 암시적으로 return값을 줌 하지만 대괄호 {}사용시에는 이 특성이 사라져 return res.render("Logout")을 작성해야함
export const users = (req, res) => res.render("users", { pageTitle : "Users" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle : "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle : "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle : "Change Password" });