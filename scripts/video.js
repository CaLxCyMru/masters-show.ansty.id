$(document).ready(() => {
    const $compositesModal = $('#composites-media-modal');
    const $studyModal = $('#study-media-modal');

    const close = ($element, title) => () => { 
        $element.modal('toggle');
        resetVideo(title);
    }

    const getVideoPlayer = (title) => videojs(`${title}-video`);

    const resetVideo = (title) => { 
        const player = getVideoPlayer(title);
        player.pause();
        player.currentTime(0);
    }

    const playVideo = ($element, title) => { 
        const player = getVideoPlayer(title);
        player.play();
        player.on('ended', close($element, title))
    }

    const addEvents = ($element, title) => {
        $element.on('show.bs.modal', () => playVideo($element, title));
        $element.on('hide.bs.modal', () => resetVideo(title));
    }
   
    addEvents($compositesModal, 'composites');
    addEvents($studyModal, 'study');
});