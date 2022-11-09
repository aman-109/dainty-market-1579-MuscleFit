import {Swiper,SwiperSlide} from "swiper/react"
import {FreeMode} from "swiper"
import 'swiper/css'
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'
export const  UncontrolledExample=()=>{
let arr=["https://www.jefit.com/wp/wp-content/uploads/2021/11/15members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/20members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/7members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/12members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/18members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/8members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/19members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/19members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/5members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/11members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/9members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/3members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/10members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/6members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/1members-150x150.png.webp",
"https://www.jefit.com/wp/wp-content/uploads/2021/11/13members-150x150.png.webp"




]



      

    return <>
    <div className="container py-4 px-4 justify-content-center">
        <Swiper
         freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className='mySwiper'
        slidesPerView={3}
        spaceBetween={30}
        >
            <SwiperSlide>
                <h1>slider 1</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>slider 2</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>slider 3</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>slider 4</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>slider 5</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>slider 6</h1>
            </SwiperSlide>
        </Swiper>

    </div>
    

    </>
}

export default UncontrolledExample;



