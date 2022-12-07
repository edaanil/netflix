import { Carousel } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { imgUrl } from '../apikeys';
import { fetchupcoming } from '../redux/slice/upcoming';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Upcoming() {
    const popular = useSelector(state => state.upcoming);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchupcoming());
    }, [])
    const { results } = popular.value;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
      };
    return (
        <div>
            <h2>Upcoming</h2>
            <Slider {...settings}>
                {results && results.map(e => (
                    <div>
                        {/* {e.title} */}
                        <img style={{height: "250px"}} src={imgUrl+"w500/"+e.poster_path} alt={e.title}/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
