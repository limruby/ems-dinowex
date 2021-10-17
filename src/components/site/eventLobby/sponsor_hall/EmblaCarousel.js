import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import { useRecursiveTimeout } from "./useRecursiveTimeout";
import { useEmblaCarousel } from "embla-carousel/react";
import "./embla.css";
 
const AUTOPLAY_INTERVAL = 3000;
 
const EmblaCarousel = ({ slides, media }) => {
  var mediaByIndex = index => media[index % media.length];
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

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="embla" style={{backgroundColor: "#f7b13e"}}>
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container" >
          {slides.map((index) => (
            <div className="embla__slide" key={index} >
              <div className="embla__slide__inner">             
                <img className="embla__slide__img" height="auto" width="50%" src={mediaByIndex(index)} alt=""/> 
                <br></br><br></br>
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