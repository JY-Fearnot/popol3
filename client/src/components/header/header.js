import "./header.css";
import logo from "./../image/로고.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="Main_Div">
      <div className="Logo_section">
        <Link to="/">왔다가</Link>
      </div>
      <div className="Search_area">
        <button type="button" classname="btn_srch_srch_open">
          <input type="text" placeholder="조금 쉬었다 가야겠는걸..."></input>
          검색
        </button>
      </div>
      <nav className="Main_nav">
        <ul classname="Main_menu_ul">
          <li className="Main_menu_li">
            <a href="??">내 주변</a>
          </li>
          <li className="Main_menu_li">
            <Link to="/mypage">예약내역</Link>
          </li>
          <li className="Main_menu_li">
            <a href="??">더 보기</a>
            <ul className="drop_menu" style={{ display: "none" }}>
              <li>
                <a href="??">가</a>
              </li>
              <li>
                <a href="??">나</a>
              </li>
              <li>
                <a href="??">다</a>
              </li>
              <li>
                <a href="??">라</a>
              </li>
            </ul>
          </li>
          <li className="Main_menu_li">
            <Link to="/login">로그인</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
