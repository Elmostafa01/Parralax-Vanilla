const tiltedSection = document.querySelector('.tilted-section');
const tiltedCard = document.querySelector('.tilted-section__card');

if(window.matchMedia("(pointer:fine)").matches) {
    tiltedSection.addEventListener('mousemove', handleEffect);

    function handleEffect(e) {
        const tiltedSectionDimensions = tiltedSection.getBoundingClientRect();

        const mouseXInSection = e.clientX - tiltedSectionDimensions.left,
            mouseYInSection = e.clientY - tiltedSectionDimensions.top;

        const elementMiddleX = tiltedSectionDimensions.width / 2,
            elementMiddleY = tiltedSectionDimensions.height / 2;

        const maxParallaX = 30,
            maxParallaY = 30;

        const tiltAngleY = ((mouseXInSection - elementMiddleX) / elementMiddleX) * maxParallaX

        console.log(mouseXInSection, mouseYInSection);
    }

}