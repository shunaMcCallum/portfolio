import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './Embla.css';
import './Reset.css';

const CarouselMusic = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <img className="embla__slide" src={require('../../assets/images/music_elephant/icon.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/loading_page.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/login_page.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/profile_page.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/timeline_little_progress.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/timeline_boss_locked.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/timeline_boss_unlocked.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/timeline_advanced_section.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/timeline_intermediate_unlocked.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/lesson_landing_page.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/lesson_landing_page_updated.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/lesson_slides_1.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/lesson_slides_2.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/lesson_slides_end.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/quiz_select_question.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/quiz_arrange.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/quiz_answers_selected.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/quiz_answer_correct.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/quiz_answer_wrong.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/quiz_end.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/quiz_result.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/boss_quiz.png')} alt="project_image" />
                <img className="embla__slide" src={require('../../assets/images/music_elephant/boss_quiz_result.png')} alt="project_image" />
            </div>
        </div>
    )
}

export default CarouselMusic;