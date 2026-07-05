const API_KEY = "AIzaSyDNIwS_pehGE5B41uwnoVUErxu1wS7VuLs";
const CHANNEL_ID = "UCs1uMiJ4uvpMOCkHwUeGT3A";

const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=12`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("videos");

    data.items.forEach(item => {
      if (item.id.kind === "youtube#video") {
        container.innerHTML += `
          <div class="video-card">
            <iframe
              width="350"
              height="200"
              src="https://www.youtube.com/embed/${item.id.videoId}"
              frameborder="0"
              allowfullscreen>
            </iframe>

            <h3>${item.snippet.title}</h3>
          </div>
        `;
      }
    });
  });
