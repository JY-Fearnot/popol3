import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { API_URL } from "../../config/contansts";

function Register() {
  const navigate = useNavigate();
  const NewUser = async (e) => {
    e.preventDefault();
    const Nid = e.target.Nid.value;
    const Npwd = e.target.Npwd.value;
    const CKpwd = e.target.CKpwd.value;
    const Nemail = e.target.Nemail.value;
    const Nname = e.target.Nname.value;
    const Nphone = e.target.Nphone.value;
    if (Nid,Npwd,CKpwd,Nemail,Nname,Nphone != "") {
      if (Npwd === CKpwd) {
        console.log(Nid,Npwd,CKpwd,Nemail,Nname,Nphone);
        const data={id:Nid, pwd:Npwd, name:Nname, email:Nemail, phone:Nphone}
        await axios.post("/user", data)
          .then(() => {
            console.log("회원가입");
            navigate("/");
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        return alert("비밀번호가 다릅니다");
      }
    } else {
      return alert("전부 입력해주세요");
    }
  };
  return (
    <div className="loginBg">
      <div className="registerpage container">
        <form className="registerform" onSubmit={NewUser}>
          <h3>회원가입</h3>
          <div>
            <label>회원 유형</label>
            <select id="userType" className="form-control">
              <option value="customer">고객</option>
              <option value="admin">관리자</option>
            </select>
          </div>
          <div>
            <label>아이디</label>
            <input
              id="Nid"
              type="text"
              className="form-control"
              placeholder="ID"
            />
          </div>

          <div>
            <label>비밀번호</label>
            <input
              id="Npwd"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div>
            <label>비밀번호 확인</label>
            <input
              id="CKpwd"
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>

          <div>
            <label>이름</label>
            <input
              id="Nname"
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>

          <div>
            <label>이메일</label>
            <input
              id="Nemail"
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div>
            <label>연락처</label>
            <input
              id="Nphone"
              type="text"
              className="form-control"
              placeholder="Phone number"
            />
          </div>

          <div className="loginBtn">
            <button type="submit">가입하기</button>
          </div>

          <p>
            계정이 있으신가요? <Link to="/login">로그인</Link>
          </p>

          <a href="/">홈으로 돌아가기</a>
        </form>
      </div>
    </div>
  );
}

export default Register;
