document.addEventListener('DOMContentLoaded', () => {
    // Bottom Navigation switching logic
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            navItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');
            
            // Log for verification
            console.log(`Switched to tab: ${item.dataset.tab}`);
        });
    });

    // Keyword chip switching logic
    const chips = document.querySelectorAll('.chip');
    
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        });
    });

    // Smooth scroll reveal for carousel
    const carousel = document.querySelector('.carousel-container');
    let isDown = false;
    let startDate;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
    });

    // FAB Interactivity
    const fab = document.querySelector('.fab');
    if (fab) {
        fab.addEventListener('click', () => {
            alert('새 사운드 생성 기능을 시작합니다!');
        });
    }

    // Sound button feedback
    const playBtns = document.querySelectorAll('.btn-play');
    playBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Only alert if there is no onclick attribute handled by HTML
            if (!btn.hasAttribute('onclick')) {
                alert('사운드를 재생합니다.');
            }
        });
    });

    // Editor Album Art Sync
    const urlParams = new URLSearchParams(window.location.search);
    const imgSrc = urlParams.get('img');
    if (imgSrc) {
        const editorArt = document.getElementById('editorAlbumArt');
        if (editorArt) {
            editorArt.style.backgroundImage = `url('${decodeURIComponent(imgSrc)}')`;
        }
    }
});
