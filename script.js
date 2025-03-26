const apiKey = "YOUR_API_KEY_HERE";
const searchUrl = "https://api.themoviedb.org/3/search/movie";
const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

$(document).ready(function () {
    $("#searchMovies").click(function () {
        const movieName = $("#movieName").val().trim();

        if (!movieName) {
            Swal.fire({
                icon: "warning",
                title: "Oops!",
                text: "Masukkan nama film yang ingin dicari!",
            });
            return;
        }

        searchMovies(movieName);
    });
});

function searchMovies(movieName) {
    $("#loader").show();
    $("#movieList").empty();

    $.ajax({
        url: searchUrl,
        method: "GET",
        dataType: "json",
        data: {
            api_key: apiKey,
            query: movieName,
            language: "en-US",
            page: 1
        },
        success: function (response) {
            $("#loader").hide();

            if (response.results.length === 0) {
                $("#movieList").html("<p>Tidak ada film yang ditemukan.</p>");
                Swal.fire({
                    icon: "info",
                    title: "Hasil Pencarian",
                    text: "Tidak ada film yang ditemukan dengan nama tersebut.",
                });
                return;
            }

            Swal.fire({
                icon: "success",
                title: "Berhasil!",
                text: `${response.results.length} film ditemukan.`,
            });

            displayMovies(response.results);
        },
        error: function () {
            $("#loader").hide();
            Swal.fire({
                icon: "error",
                title: "Gagal!",
                text: "Gagal mengambil data film! Silakan coba lagi.",
            });
        }
    });
}

function displayMovies(movies) {
    $("#movieList").empty();
    movies.forEach((movie) => {
        const poster = movie.poster_path
            ? `${imageBaseUrl}${movie.poster_path}`
            : "https://placehold.co/200x300?text=No+Image";

        const html = `
            <div class="movie-card">
                <div class="movie-poster">
                    <img src="${poster}" alt="${movie.title}">
                </div>
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>Rilis: ${movie.release_date || "N/A"}</p>
                    <p>Rating: ⭐ ${movie.vote_average || "N/A"}</p>
                </div>
            </div>
        `;
        $("#movieList").append(html);
    });
}
