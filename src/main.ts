import './style.scss'
import Flickity from 'flickity';

const $carousels = new Array();

// Modals

const rootEl = document.documentElement;
const $modals = getAll('.modal');
const $modalTriggers = getAll('.modal-trigger');
const $modalCloses = getAll('.modal-card-head .deconste, .modal-card-foot .button');

if ($modalTriggers.length > 0) {
    $modalTriggers.forEach(function ($el) {
        $el.addEventListener('click', function () {
            const target = $el.dataset.target;
            openModal(target);
        });
    });
}

if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
            closeModals();
        });
    });
}

function openModal(target: string) {
    const $target = document.getElementById(target);
    rootEl.classList.add('is-clipped');
    $target?.classList.add('is-active');
    const carouselId = target + '-carousel';

    if (document.querySelector('#' + carouselId)) {
        // Initialize each carousel one time only
        if ($carousels.length === 0) {
            $carousels.push(initCarousel(carouselId));
        }
        else {
            const index = $carousels.findIndex(c => c.element.id == carouselId);
            if (index === -1) {
                $carousels.push(initCarousel(carouselId));
            }
        }
    }
}

function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
        $el.classList.remove('is-active');
    });
}

// Functions

function initCarousel(id: string) {
    return new Flickity('#' + id, {
        imagesLoaded: true,
        adaptiveHeight: true // https://github.com/metafizzy/flickity/issues/11
    });
}

function getAll(selector: any) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}
