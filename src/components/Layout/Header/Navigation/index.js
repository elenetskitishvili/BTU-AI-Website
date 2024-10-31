import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/aboutus">ჩვენ შესახებ</Link>
          <Link to="/bachelorinai">AI ბაკალავრის პროგრამა</Link>
          <Link to="/studentsuccessstories">წარმატების ისტორიები</Link>
          <Link to="/contactus">კონტაქტი</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/blog">ბლოგი</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
