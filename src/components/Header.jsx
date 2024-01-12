import { useState } from "react";
import Logo from "./layout/logo/Logo";

export default function Header () {

  let [aside,setAside] = useState('close')


  return (
    <>
      <header className="header">
        <div className="header-wrap">
          <nav className="nav">
            <Logo />
            <ul>
              <li>
                <a href="">필터</a>
              </li>
              <li>
                <a href="#" onClick={(e)=>{
                  e.preventDefault()
                  setAside('open')
                  }}>벨</a>
              </li>
            </ul>
          </nav>
        </div>
        {
          aside === 'open' ? 
          <aside className="aside">
            <div className="aside-top">
            <Logo />
            <button className="btn-close" onClick={()=>{setAside('close')}}>X</button>
            </div>
            <div className="aside-mid">
            <ul>
              {
                [0,0,0,0].map((x,i)=>{
                  return (
                  <li key={i}>
                    <a href="">{i}번메뉴</a>
                  </li>
                  )
                })
              }
            </ul>
            </div>
          </aside> : null

        }
      </header>
    </>
  )
}