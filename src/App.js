import React, {useState} from 'react';
import './styles/App.scss';
import './styles/Header.scss';
import './styles/Description.scss';
import './styles/Inputs.scss';
import './styles/Thanks.scss';

function App() {

  const [isDark, setDark] = useState(false);
  const [isMain, setMain] = useState(false);
  const [data, setData] = useState({email: '', name:''});

  const change = () =>{
    setDark(!isDark);
  };

  const greeting = event => {
    event.preventDefault();

    if(event.target[1].value !== "" && event.target[0].value !== ""){

      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(String(event.target[1].value).toLowerCase())) {
        setData({email: event.target[1].value, name: event.target[0].value });
        setMain(!isMain);
      } else {
        alert("Give a valid Email, please")
      }


    } else {
      alert("fill the fields");
    }

  }

  return (
      <div className={isDark ? "App" : ""}>
        {isMain ?  <Thanks /> : <Main />}
      </div>
  );

  function Thanks(){
    return <div className={isDark ? "thanksDark" : "thanks"}>Thanks <strong>{data.name}</strong>, we sent you an email to <strong>{data.email}</strong></div>
  }

  function Main() {

    return <div>

            <div className="headerDark">

                <div className={isDark ? "titleDark" : "title"}>Dark Mode Switch</div>
                <div className="logoContainer"><img onClick={change} className="logo" src={isDark ? require('./images/sun.png') : require('./images/moon.png')} alt="" /></div>

            </div>

            <div className={isDark ? "containerMainDark" : "containerMain"}>

                <div className="containerLeft">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

                <div className="containerRight">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

              </div>

              <div className="inputForm">

                <form onSubmit={greeting}>

                  <label>

                    <input className={isDark ? "insertNameDark" : "insertName"} type="text" name="name"  placeholder="Name" autoComplete="off" />
                  </label>
                  <label>
                    <input className={isDark ? "insertEmailDark" : "insertEmail"} type="email" name="email"  placeholder="Email" autoComplete="off"  />

                  </label>

                  <input className={isDark ? "buttonDark" : "button"} type="submit" value="Submit" />

                </form>

              </div>
           </div>

  }

}


export default App;
