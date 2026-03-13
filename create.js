document.addEventListener('DOMContentLoaded', () => {
    // Generate Waveform
    const waveformContainer = document.getElementById('waveform');
    const barHeights = [20,38,60,80,55,72,90,58,42,68,85,50,32,65,78,46,28,62,75,52,38,70,58,42,30,55,74,60,38,26,50,68,80,54,34];

    barHeights.forEach((h, i) => {
        const bar = document.createElement('div');
        bar.className = 'rw';
        if (i < 18) bar.classList.add('active');
        bar.style.height = `${h}%`;
        waveformContainer.appendChild(bar);
    });

    // Tag Selection Logic
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('on');
        });
    });

    // Tool Interaction Logic
    document.querySelectorAll('.ltool').forEach(tool => {
        tool.addEventListener('click', () => {
            tool.style.transform = 'scale(0.95)';
            setTimeout(() => tool.style.transform = 'scale(1)', 100);
        });
    });
});
