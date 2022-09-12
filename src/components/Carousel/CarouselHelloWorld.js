import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './Embla.css';
import './Reset.css';

const CarouselHello = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <img className="embla__slide" src={require('../../assets/images/hello_world/login_page_welcome.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/login_page_form.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/login_page_username.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/login_page_password.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/homepage.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/flag_page_top.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/flag_page_favourites.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/flag_page_highlight_flag.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/flag_page_highlight_button.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/flag_page_bottom.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/country_detail_intro.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/country_detail_audio.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/country_detail_images.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/quiz_question.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/quiz_result.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/map_1.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/map_2.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/hello_world/singalong.png')} alt="project_image" />
            </div>
        </div>
    )
}

export default CarouselHello;