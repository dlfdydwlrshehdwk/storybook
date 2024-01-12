import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Profil ({
  // 받아올 프롭값
  src, // 이미지 주소
  nickname, // 닉네임
  age, // 나이
  mbti, // mbti
  addr, // 주소
  job, // 직업
  money, // 보유재산
}) {

  const imgStyle = {
    // 스타일 컴포넌트처럼 받아온 프롭들을 값 셋팅을 해준다.
    width : '270px',
    height : '370px',
    borderRadius : '0px 80px 140px 140px',
    backgroundColor : '#D9D9D9',
    overflow : 'hidden'
  }

  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={'3'}
    >
      {
        src.map((x,i)=>{
          return <SwiperSlide key={i}>
            <div style={imgStyle} className="img-set">
              <img src={src[i]} alt="" />
            </div>
            <div className="tit-set">
              <div className="top">
                <div className="name">{nickname[i]}</div>
                <div className="agembti">
                  <div className="age">{age[i]}</div>
                  <div className="mbti">{mbti[i]}</div>
                </div>
              </div>
              <div className="mid">
                <div className="addr">{addr[i]}</div>
              </div>
              <div className="btm">
                <div className="job">{job[i]}</div>
                <div className="money">{money[i]}</div>
              </div>
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
    </>
  )
}

Profil.propTypes = {
  // prop1 : PropTypes.string // 프롭타입.타입
}