document.addEventListener('DOMContentLoaded', () => {
                    const slider = document.getElementById('cases-slider');
                    const btnPrev = document.getElementById('btn-prev');
                    const btnNext = document.getElementById('btn-next');
                    const dots = document.querySelectorAll('.dot-nav');
                    
                    const updateDots = () => {
                        const scrollRatio = slider.scrollLeft / (slider.scrollWidth - slider.clientWidth);
                        const index = Math.round(scrollRatio * (dots.length - 1)) || 0;
                        dots.forEach((dot, i) => {
                            dot.className = i === index ? 'w-2.5 h-2.5 rounded-full bg-primary cursor-pointer dot-nav' : 'w-2.5 h-2.5 rounded-full bg-white/20 cursor-pointer dot-nav';
                        });
                    };

                    btnPrev.addEventListener('click', () => {
                        slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
                    });
                    btnNext.addEventListener('click', () => {
                        slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
                    });
                    slider.addEventListener('scroll', updateDots);
                    
                    dots.forEach((dot, i) => {
                        dot.addEventListener('click', () => {
                            const scrollPos = (slider.scrollWidth / dots.length) * i;
                            slider.scrollTo({ left: scrollPos, behavior: 'smooth' });
                        });
                    });
                });