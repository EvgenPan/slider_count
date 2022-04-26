import React, {useState} from 'react';
import './slider.css';
const Counter = () => {
    let arrSrc = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xrGjha5jxhz1sd5Avxja4jqF_LJR7y2urA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBmAn2dfG9H4ZlSUz9RJbv08DJYflXD7MHw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSrllpO51fJVkyS8iWOSnj_YN3uzg1xzmw-A&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgWEGqXO-f2HlyWavAd2-oJ5nXDWL2G96MQ&usqp=CAU']
    const [count, setCount]= useState(0);
    // function increment(){
    //     setCount(count + 1);
    // }
    // function decrement(){
    //     setCount(count - 1);
    // }
    //

    // function clear(){
    //     setCount(0);
    // }
const nextSlide = () => {
let counts = count;
counts++;
    if(counts === arrSrc.length){
       counts = 0;
    }

    setCount(counts)
}
    const prevSlide = () => {
        let counts = count;
        counts--;
        if(counts < 0){
            counts = arrSrc.length-1;
        }
        setCount(counts)
    }
    return (
        <div>
            <div className="wrapper_img">
                <img src={arrSrc[count]} alt="fff"/>
            </div>
            <div className="button_wrapper">
                <button onClick={prevSlide}>←</button>
                <button onClick={nextSlide}>→</button>

            </div>
            {/*<button onClick={clear}>clear</button>*/}
        </div>


    );
};

export default Counter;