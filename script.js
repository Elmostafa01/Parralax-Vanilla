const tiltedSection = document.querySelector('.tilted-section');
const tiltedCard = document.querySelector('.tilted-section__card');

if(window.matchMedia("(pointer:fine)").matches) {
    tiltedSection.addEventListener('mousemove', handleEffect);

    function handleEffect(e) {
        setTimeout(() => {
            const tiltedSectionDimensions = tiltedSection.getBoundingClientRect();

            const mouseXInSection = e.clientX - tiltedSectionDimensions.left,
                mouseYInSection = e.clientY - tiltedSectionDimensions.top;
    
            const elementMiddleX = tiltedSectionDimensions.width / 2,
                elementMiddleY = tiltedSectionDimensions.height / 2;
    
            const maxParallaX = 15,
                maxParallaY = 15;
    
            const tiltAngleY = ((mouseXInSection - elementMiddleX) / elementMiddleX) * maxParallaX;
            const tiltAngleX = ((mouseYInSection - elementMiddleY) / elementMiddleY) * maxParallaY;
    
            tiltedCard.style.transform = `rotateY(${tiltAngleY}deg) rotateX(${-tiltAngleX}deg)`;
    
            console.log(mouseXInSection, mouseYInSection);
        }, 150)
    }

    tiltedSection.addEventListener('mouseout', resetTilt);

    function resetTilt() {
        tiltedCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
    }

}