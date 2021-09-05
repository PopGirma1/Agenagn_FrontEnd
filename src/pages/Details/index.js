import React, {useEffect, useState} from 'react'
import './style.css'
import backEndApi from "../../services/api";
import {CardMedia} from "@material-ui/core";

function renFloor(data) {
    switch (data.floor) {
        case 0:
            return <span>ground</span>;
        case 1 :
            return <span>1<sup>st</sup></span>;
        case 2 :
            return <span>2<sup>nd</sup></span>;
        case 3 :
            return <span>3<sup>rd</sup></span>;
        case 4 :
            return <span>4<sup>th</sup></span>;
        case 5 :
            return <span>5<sup>th</sup></span>;
        default:
            return <span> </span>
    }
}
function Detail(props) {
    const local = 'http://localhost:5000';
    const [data, setData] = useState([]);
    const [files, setFiles] = useState([]);
    useEffect(()=>{
        const  getData =async()=> {
            const {data} =  await backEndApi.get('/detail', {params:{id:props.match.params.id}});
            console.log(data);
            setData(data.docs)
            setFiles(data.files)
        };
        getData();

    },[]);
    return (
        <div className='container'>
            <div className='image-grid'>
                <div className='small-images'>
                    {files.map((file)=>{
                        return(<img src={`${local}/images/products/${data.ownerEmail}/${data._id}/${file}`} alt={`${data.location}`}  className='simg'/>)
                    })}
                </div>
                <div className='one-big-image'>
                    <img src={local + '/images/products/' + data.encodedImageUrl + '.jpg'} />
                    <img src={`${local}/images/products/${data.ownerEmail}/${data._id}/${files[0]}`} alt={`${data.location}`} width='95%' height='95%' />

                </div>
            </div>

            <div className='detail-holder'>
                <div className='att'>
                    <span className='att-title'>Location</span>
                    <span className='att-value'>{data.location}</span>
                </div>
                <div className='att'>
                    <span className='att-title'>Bed Rooms</span>
                    <span className='att-value'>{data.bed_room}</span>
                </div>
                <div className='att'>
                    <span className='att-title'>Monthly Rent</span>
                    <span className='att-value'>{data.monthly_payment} Birr</span>
                </div>
                <div className='att'>
                    <span className='att-title'>Floor</span>
                    <span className='att-value'>{renFloor(data)} Floor</span>
                </div>
                <div className='att'>
                    <span className='att-title'>Phone Number</span>
                    <span className='att-value'>{data.phone_number}</span>
                </div>
            </div>

        </div>
    );
}

export default Detail