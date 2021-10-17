import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import { useRecursiveTimeout } from "./useRecursiveTimeout";
import { useEmblaCarousel } from "embla-carousel/react";
import axiosInstance from '../../../../utils/axiosConfig';
import { useLocation } from "react-router-dom";
import "./embla.css";
 
const AUTOPLAY_INTERVAL = 3000;
 
const EmblaCarousel = ({ slides, media }) => {
  var mediaByIndex = index => media[index % media.length];
  // const [data, setData] = useState([]);
  // const location = useLocation();
  // const thePath = location.pathname;
  // const user_id = thePath.substring(thePath.lastIndexOf('/') + 1);
  // const string = '"' + user_id + '"';
 
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
 
  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);
 
  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);
 
  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);
 
  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);
 
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);
 
  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, stop]);
 
  // useEffect(() => {
  //   axiosInstance.get("/api/sponsors/read", { params: { account_id: string } })
  //     .then(function (response) {
  //       setData(response.data.data);
  //     }).catch(function (error) {
  //       console.log(error);
  //     })
  //   }, [string])
  useEffect(() => {
    play();
  }, [play]);

  // function displayPoster() {
  //   var section = [];
  //   if (data.poster && data.poster.length > 0) {
  //     const slides = Array.from(Array(data.poster.length).keys());
  //     for (var i = 0; i < data.poster.length; i++) {
  //       const imageFormat = data.poster[i].name.substring(data.poster[i].name.lastIndexOf('.') + 1);
  //       if (imageFormat === "pdf") {
  //         const imageBuffer = Buffer.from(data.poster[i].source.data);
  //         media.push(imageBuffer);
  //         // section.push(
  //         //   <embed className="display-poster" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} height="300px" width="500px" />
  //         // );
  //       }
  //       else {
  //         const imageBuffer = Buffer.from(data.poster[i].source.data);
  //         media.push(imageBuffer);
  //         // section.push(
  //         //   <img className="embla__slide__img" height="300px" width="500px" src={imageBuffer} alt={data.poster[i].name} />
  //         // );
  //       }
  //     }
  //   }
  //   return section;
  // }
  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">             
                <img className="embla__slide__img" height="auto" width="50%" src={mediaByIndex(index)} alt=""/> 
        {/* <div className="sponsor_title">Poster {index+1} </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};
export default EmblaCarousel;