document.addEventListener('DOMContentLoaded', () => {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = playPauseBtn.querySelector('i');
    const likeBtn = document.getElementById('likeBtn');
    const progressSlider = document.getElementById('progressSlider');
    const progressFill = document.getElementById('progressFill');
    const currentTimeEl = document.getElementById('currentTime');
    
    let isPlaying = false;
    let currentTime = 120; // Starts at 2:00 (120 seconds)
    const totalTime = 160; // 2:40 total (160 seconds)

    // Play/Pause Toggle
    playPauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');
            startTimer();
        } else {
            playPauseIcon.classList.remove('fa-pause');
            playPauseIcon.classList.add('fa-play');
            stopTimer();
        }
    });

    // Like Button Toggle
    likeBtn.addEventListener('click', () => {
        const icon = likeBtn.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    });

    // Progress Bar Handling
    progressSlider.addEventListener('input', (e) => {
        currentTime = parseInt(e.target.value);
        updateUI();
    });

    let timerInterval;

    function startTimer() {
        stopTimer();
        timerInterval = setInterval(() => {
            if (currentTime < totalTime) {
                currentTime++;
                progressSlider.value = currentTime;
                updateUI();
            } else {
                isPlaying = false;
                playPauseIcon.classList.remove('fa-pause');
                playPauseIcon.classList.add('fa-play');
                stopTimer();
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function updateUI() {
        const percent = (currentTime / totalTime) * 100;
        progressFill.style.width = `${percent}%`;
        
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;
        currentTimeEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    // Initial UI Update
    updateUI();

    // Album Art Sync from Query Param
    const urlParams = new URLSearchParams(window.location.search);
    const imgSrc = urlParams.get('img');
    if (imgSrc) {
        const albumArtMain = document.getElementById('albumArtMain');
        albumArtMain.style.backgroundImage = `url('${decodeURIComponent(imgSrc)}')`;
    }
});
