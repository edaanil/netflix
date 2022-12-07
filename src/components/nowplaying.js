import { Carousel } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { imgUrl } from '../apikeys';
import Slider from "react-slick";
import { fetchnowplaying } from '../redux/slice/nowplayingSlice';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Nowplaying() {
    const popular = useSelector(state => state.nowplaying);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchnowplaying());
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
            <h2>Now Playing</h2>
            <Slider {...settings}>
                {results && results.map(e => (
                    <div>
                       {/* <p>{e.title}</p>  */}
                        <img style={{height: "250px"}} src={imgUrl+"w500/"+e.poster_path} alt={e.title}/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
