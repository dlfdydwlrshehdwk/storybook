import { useState } from "react";

export default function Footer ({}) {

  let tit = ['매칭','마음','약속','프로필']
  let [action,setAction] = useState([0,0,0,0]) 

  return (
    <footer className="footer">
      <div className="footer-wrap">
        <ul>
          {
            tit.map((x,i)=>{
              return (
                // li에 className action-클릭된것
                <li className={action[i] == 1 ? 'action' : null} key={i} onClick={()=>{
                }}>
                  <a onClick={()=>{
                    let copy = [...action] // state값 변경을 위해 복사본 생성
                    copy = [0,0,0,0] // 초기화
                    copy[i] = 1 // 초기화 후 선택한 곳에 클래스주기위해 복사본값 변경
                    setAction(copy) // state값 변경
                  }}>{x}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </footer>
  );
}