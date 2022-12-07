import React from 'react'
import Banner from "../components/banner";
import Header from "../components/header";
import Popular from "../components/popular";
import Upcoming from '../components/upcoming';
import Toprated from '../components/toprated';
import Nowplaying from '../components/nowplaying';

export default function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Popular />
            <Upcoming/>
            <Toprated/>
            <Nowplaying/>
        </div>
    )
}
