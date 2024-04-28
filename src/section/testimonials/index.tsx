import { IImage } from '../../types/data-types';
import { Swiper, SwiperSlide } from 'swiper/react'
import {  Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Header, Section, Content } from './styles'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

interface Props {
    testimonials: IImage[];
}

const Testimonials = ({ testimonials }: Props) => {
  return (
    <Section data-aos="fade-right">
        <Header>
           <h2>Veja o que nossos clientes estão falando e o <span>resultado</span> que estão tendo</h2>
        </Header>
        <Content>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    984: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                    }}
                modules={[Pagination, Navigation, Autoplay]}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div style={{background: '#fff', height: '100%', width: '100%'}}>
                            <img src={testimonial.src} alt={testimonial.description} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Content>
    </Section>
  )
}

export default Testimonials