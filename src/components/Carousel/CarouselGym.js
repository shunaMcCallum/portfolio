import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './Embla.css';
import './Reset.css';


const CarouselGym = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <img className="embla__slide" src={require('../../assets/images/gym_app/homepage.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/members_homepage.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/members_list.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/members_view_member.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/members_update.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/members_inactive.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/members_book.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/workouts_homepage.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/workouts_list.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/workouts_full.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/workouts_create.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/workouts_view_workout.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/workouts_view_bookings.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/workouts_update.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/workouts_inactive.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/workouts_book.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/gym_app/bookings_homepage.png')} alt="project_image" />
            </div>
        </div>
    )

}

export default CarouselGym;