import logo from './image/logo-montessori.png';
import downarrow from './image/icon-stroke-arrow.svg';
import './css/reset.css';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="header_wrap">
          <img src={logo} alt="한국몬테소리 로고" />
          <div class="heaer_user_info">
            <button>
              몬테소리 님 <img src={downarrow} alt="더보기" />
            </button>
            <ul>
              <li>
                <a href="#!">정보수정</a>
              </li>
              <li>
                <a href="#!">로그아웃</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
