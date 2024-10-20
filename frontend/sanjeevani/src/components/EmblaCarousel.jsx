import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { useGlobal } from '@/context/GlobalContext';


const EmblaCarousel = (props) => {
  const { imageUpload } = useGlobal();
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const handleUploadClick = () => {
    imageUploadRef.current.click();
  };
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number"><img src={src} onClick={async (e) => {
                const response = await fetch(src);
                // here image is url/location of image
                const blob = await response.blob();
                const file = new File([blob], 'image.jpg', { type: blob.type });
                imageUpload(file)
              }} /></div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
