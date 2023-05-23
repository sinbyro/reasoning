import logo from './logo.svg';
import './App.css';
import bg from './resource/bg.webp'
import imgKakao from './resource/icKakao.svg'
import imgLink from './resource/icLink.svg'
import imgFacebook from './resource/icFacebook.svg'
import imgTwitter from './resource/icTwitter.svg'

function App() {
  return (
    <div className="App">
      <div className='reasoningLayout'>
        <div className='main'>

          <div className='mainShare'/>
          <div className='mainTitle'>
            당신의 많은것을<br/>
            추리 해 보겠습니다
          </div>

          <div className='startButton'>
            시작하기
          </div>
          <div className='mainShare'>
            <img src={imgKakao} alt=''/>
            <img src={imgLink} alt=''/>
          </div>
        </div>
        <img src={bg} alt='' className='bg'/>
      </div>
    </div>
  );
}

export default App;
