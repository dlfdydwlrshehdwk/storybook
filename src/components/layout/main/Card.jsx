import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Card () {

  let data = [
    {
      name : '쏘쏘',
      age : '31세',
      mbti : 'ISTP',
      addr : '서울특별시 용산구',
      job : '디자이너',
      money : '5천 중반'
    },
    {
      name : 'KK',
      age : '22세',
      mbti : 'INTP',
      addr : '서울특별시 동작구',
      job : '프로그래머',
      money : '3천 초반'
    },
    {
      name : '룰루',
      age : '35세',
      mbti : 'ESFJ',
      addr : '서울특별시 관악구',
      job : '가수',
      money : '2천 중반'
    },
    {
      name : '키아나',
      age : '24세',
      mbti : 'ISFP',
      addr : '서울특별시 청담시',
      job : '화가',
      money : '5억 후반'
    },
    {
      name : '자르반',
      age : '42세',
      mbti : 'ESPJ',
      addr : '서울특별시 대치동',
      job : '백수',
      money : '11억'
    },
  ]

  return (
    <>
      <div className="card">
        <Swiper
          spaceBetween={50}
          slidesPerView={0.9}
        >
          <SwiperSlide>
            <div className="img-set"></div>
            <div className="tit-set">
              <div className="top">
                <div className="name"></div>
                <div className="flexbox">
                <div className="age"></div>
                <div className="mbti"></div>
                </div>
              </div>
              <div className="mid">
                <div className='addr'></div>
                <div className="flexbox">
                  <div className="job"></div>
                  <div className="money"></div>  
                </div>                
              </div>
              <div className="btm">
                <ul>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}