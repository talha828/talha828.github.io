
const main_video = document.querySelector('iframe');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'E01 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1xED4NiSY2LAIjt3Ja9yEWg-8OiLKBZGB/preview',
        'duration': '23:56',
    },
    {
        'id': 'a2',
        'title': 'E02 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1ER0sKJ1Q1uVnT3S-nA370jj5ihoQ16tW/preview',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'title': 'E03 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1-GijAH4ZJV2lLnRC_PcSWKWTNgXZiMfM/preview',
        'duration': '24:49',
    },

    {
        'id': 'a4',
        'title': 'E04 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1OpUz_61vGmNGUuduc9Zpk9VGdWZkuueY/preview',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'title': 'E05 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/103mTn41cqsiMuYHVg5HQY17Ye-HaJ_a3/preview',
        'duration': '4:25',
    },
    {
        'id': 'a6',
        'title': 'E06 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1WdkLlcu_tNup_VePCOeR05HhOgESnVgh/preview',
        'duration': '5:33',
    },
    {
        'id': 'a7',
        'title': 'E07 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1HAgiKZQgVxmuoW-RGKIlh0zXRaFdHuiI/preview',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'title': 'E08 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1XL_rCwtqxyd2YDOmQbxSVJ-AjIXzRIoD/preview',
        'duration': '1:12',
    },
    {
        'id': 'a9',
        'title': 'E09 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/129HwpzaNFyl5whfl_QNLzQkyb24JNUKC/preview',
        'duration': '3:38',
    },
    {
        'id': 'a10',
        'title': 'E10 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1cvWnNFstQx-M-2uhpVxn-gLDZB7JpQfp/preview',
        'duration': '3:38',
    },
    {
        'id': 'a11',
        'title': 'E11 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1xPawUKkIkU9EMYbmFDli0Wi_oDYtmIzM/preview',
        'duration': '3:38',
    },
    {
        'id': 'a12',
        'title': 'E12 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1j5383QytDp2gAP6JZQlqSDQbggM-Bt6w/preview',
        'duration': '3:38',
    },
    {
        'id': 'a13',
        'title': 'E013 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1ukqs12I1_IBYfERyzMn_YHa_W0vZtyWg/preview',
        'duration': '3:38',
    },
    {
        'id': 'a14',
        'title': 'E014 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1rkUcx1KMGKWXx87Q5u8s8y2xP8hCPldg/preview',
        'duration': '3:38',
    },
    {
        'id': 'a15',
        'title': 'E015 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1-qPRmsI6SqJLj-cZSWP0NquKPnV0fnns/preview',
        'duration': '3:38',
    },
    {
        'id': 'a16',
        'title': 'E016 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1_UQWW7QThedXuGz6_-siuiMUcKV2_85A/preview',
        'duration': '3:38',
    },
    {
        'id': 'a17',
        'title': 'E017 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1W8GZGSqiCq-hWtToyBcN6Qqu9FieAdXk/preview',
        'duration': '3:38',
    },
    {
        'id': 'a18',
        'title': 'E018 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/11KrmpjaDshjykfPtCur63Ztuv7pZ4EVY/preview',
        'duration': '3:38',
    },
    {
        'id': 'a19',
        'title': 'E019 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1oufguLw_0uGqXr2lgjH8PKNTO-Qlz04W/preview',
        'duration': '3:38',
    },
    {
        'id': 'a20',
        'title': 'E020 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1rg-dvB4bboUnd0GrAzJkWaiUBvvWwmWW/preview',
        'duration': '3:38',
    },
    {
        'id': 'a21',
        'title': 'E021 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1Yd89_8BHDN0AOg1ZMJzKPlSl1_AXkwNd/preview',
        'duration': '3:38',
    },
    {
        'id': 'a22',
        'title': 'E022 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1k_um8mV64CW5WvuBra2yaoEu0drH8HYu/preview',
        'duration': '3:38',
    },
    {
        'id': 'a23',
        'title': 'E023 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1QzdDpYjts5IU_GNN6-q2xLQAjA-KZEe6/preview',
        'duration': '3:38',
    },
    {
        'id': 'a24',
        'title': 'E024 - Jujutsu Kaisen Season 1 720p',
        'name': 'https://drive.google.com/file/d/1t2-ntJHmae7CbbyYJ9jWNAVo2D2dxVpi/preview',
        'duration': '3:38',
    },
    {
        'id': 'a25',
        'title': 'E01 - Jujutsu Kaisen Season 2 720p',
        'name': 'https://drive.google.com/file/d/1KfHCo7QfxJegWJ0tNdyS850OD1pBjV-y/preview',
        'duration': '3:38',
    },
    {
        'id': 'a26',
        'title': 'E02 - Jujutsu Kaisen Season 2 720p',
        'name': 'https://drive.google.com/file/d/1AxP2fV067aYL7spN60YZwS9Hu6obKXmt/preview',
        'duration': '3:38',
    },
    {
        'id': 'a27',
        'title': 'E03 - Jujutsu Kaisen Season 2 720p',
        'name': 'https://drive.google.com/file/d/1-QRFcNsDAf-63Jr3RVFw4Q9fodHaamRK/preview',
        'duration': '3:38',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 27 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
