document.addEventListener('DOMContentLoaded', function() {
  const songs = [
      {title: "Suno Na Sangemarmar", src: `songs/suno.mp3`, img: "https://th.bing.com/th?q=Suno+Na+Sangemarmar+Lyrics&w=138&h=138&c=7&o=5&dpr=1.3&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate"},
      {title: "Bekhayali", src: "songs/[YT2mp3.info] - Bekhayali - Kabir Singh - Sachet-Parampara (the perfect slowed down & reverb) (320kbps).mp3", img: "https://th.bing.com/th/id/OIP.khdcOD-9zfajSweZVrGfJwHaEP?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      // Add more songs here...
      {title: "Afghan Jalebi (Ya Baba)", src: "songs/Afghan Jalebi (Ya Baba) FULL VIDEO Song _ Phantom _ Saif Ali Khan, Katrina Kaif _ T-Series.mp3", img: "https://th.bing.com/th/id/OIP.B5FEI85MK8TejsAj9f5QUQAAAA?rs=1&pid=ImgDetMain"},
      {title: "ankhiyon_ke_jharokhon_se", src: "songs/ankhiyon_ke_jharokhon_se_deepshikha_raina_anurag_abhishek_cover_song_3936233264277137799.mp3", img: "https://th.bing.com/th/id/OIP.NyN8Zij4zDNWlYkV7wlxIwHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {title: "Musafir Song", src: "songs/Atif Aslam_ Musafir Song _ Sweetiee Weds NRI _ Himansh Kohli, Zoya Afroz _ Palak  & Palash Muchhal.mp3", img: "https://th.bing.com/th/id/OIP.0WBTZ6wFhWPVjVoYXjkujgHaHa?w=148&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {title: "Woh Lamhe Woh Baatein", src: "songs/Atif Aslam - Woh Lamhe Woh Baatein (slowed & reverb).mp3", img: "https://th.bing.com/th/id/OIP.plMswq7cv4AP8Vr3mI2hpgAAAA?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
      {title: "Song 3", src: "songs/Afghan Jalebi (Ya Baba) FULL VIDEO Song _ Phantom _ Saif Ali Khan, Katrina Kaif _ T-Series.mp3", img: "https://th.bing.com/th/id/OIP.B5FEI85MK8TejsAj9f5QUQAAAA?rs=1&pid=ImgDetMain"},
      {title: "Song 3", src: "songs/Afghan Jalebi (Ya Baba) FULL VIDEO Song _ Phantom _ Saif Ali Khan, Katrina Kaif _ T-Series.mp3", img: "https://th.bing.com/th/id/OIP.B5FEI85MK8TejsAj9f5QUQAAAA?rs=1&pid=ImgDetMain"},
      {title: "Song 3", src: "songs/Afghan Jalebi (Ya Baba) FULL VIDEO Song _ Phantom _ Saif Ali Khan, Katrina Kaif _ T-Series.mp3", img: "https://th.bing.com/th/id/OIP.B5FEI85MK8TejsAj9f5QUQAAAA?rs=1&pid=ImgDetMain"},
      {title: "Song 3", src: "songs/Afghan Jalebi (Ya Baba) FULL VIDEO Song _ Phantom _ Saif Ali Khan, Katrina Kaif _ T-Series.mp3", img: "https://th.bing.com/th/id/OIP.B5FEI85MK8TejsAj9f5QUQAAAA?rs=1&pid=ImgDetMain"},
  ];

  const songList = document.getElementById('songList');
  const audioPlayer = document.getElementById('audioPlayer');

  songs.forEach((song, index) => {
      const songDiv = document.createElement('div');
      const songImage = document.createElement('div');
      songImage.style.backgroundImage = `url(${song.img})`;
      songImage.className = 'song-image';

      songDiv.appendChild(songImage);
      songDiv.appendChild(document.createTextNode(song.title));
      songDiv.addEventListener('click', () => {
          audioPlayer.src = song.src;
          audioPlayer.play();
      });

      songList.appendChild(songDiv);
  });
});
