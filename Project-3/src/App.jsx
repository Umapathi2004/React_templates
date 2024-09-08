import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
const imgs = ["img1.jpg","img2.jpeg","img3.jpg","img10.jpg","img11.jpeg","img12.jpeg","img13.jpeg","img14.webp","img15.jpg","img16.jpg"];
const App = () => {
  return (         
      <Swiper
      grabCursor
      centeredSlides
      slidesPerView="auto"
      effect='coverflow'
      loop
      coverflowEffect={{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true,}}
      modules={[EffectCoverflow]}
      >
      <div className="swiper-wrapper">
      {imgs.map((img)=>(
          <SwiperSlide key={img} style={{backgroundImage:`url(${img})`}}></SwiperSlide>
))}
      </div>
      </Swiper>
  )
}

export default App