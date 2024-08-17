// List of countries and their hints
const countries = [
    { name: "Ir. Soekarno", hint: "Siapa presiden Republik Indonesia pertama?", options: ["Ir. Soekarno", "Sayuti Melik", "Fatmawati", "W.R. Soepratman"] },
    { name: "Fatmawati", hint: "Siapa penjahit bendera merah putih saat Hari Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945?", options: ["W.R. Soepratman", "Fatmawati", "Sayuti Melik", "Mohammad Hatta"] },
    { name: "Mohammad Hatta", hint: "Siapa wakil presiden yang juga dijuluki sebaga Bapak Koperasi Indonesia?", options: ["Abdul Muis", "Ir. Soekarno", "Mohammad Hatta", "Sayuti Melik"] },
    { name: "W.R. Soepratman", hint: "Siapakah pencipta lagu Indonesia Raya?", options: ["Ibu Soed", "Sudharnoto", "Ismail Marzuki", "W.R. Soepratman"] },
    { name: "21 April", hint: "Pada tanggal berapakah Hari Kartini diperingati?", options: ["21 April", "17 Agustus", "28 Oktober", "21 Mei"] },
    { name: "Sumatera Barat", hint: "Dari manakah asal pahlawan nasional Tuanku Imam Bonjol?", options: ["Sumatera Utara", "Sumatera Barat", "Sumatera Selatan", "Aceh"] },
    { name: "Pasal 1 Ayat 3", hint: "“Negara Indonesia adalah negara hukum.” penggalan tersebut merupakan isi ketentuan dalam UUD 1945 pasal … ayat …?", options: ["Pasal 1 Ayat 1", "Pasal 1 Ayat 2", "Pasal 1 Ayat 3", "Pasal 2 Ayat 1"] },
    { name: "Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia", hint: "Apa kepanjangan dari BPUPKI?", options: ["Badan Pengintai Usaha-usaha Persiapan Kemerdekaan Indonesia", "Panitia Persiapan Kemerdekaan Indonesia", "Badan Panitia Usaha-usaha Persiapan Kemerdekaan Indonesia", "Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia"] },
    { name: "Panitia Persiapan Kemerdekaan Indonesia", hint: "Apa kepanjangan dari PPKI?", options: ["Panitia Persiapan Kemerdekaan Indonesia", "Panitia Penyelidik Kemerdekaan Indonesia", "Panitia Pengintai Kemerdekaan Indonesia", "Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia"] },
    { name: "Laksamana Maeda", hint: "Penyusunan naskah proklamasi dilakukan di rumah?", options: ["Ir. Soekarno", "Laksamana Maeda", "Mohammad Hatta", "Fatmawati"] },
    { name: "1 Oktober", hint: "Kapankah Hari Kesaktian Pancasila diperingati?", options: ["28 Oktober", "5 Oktober", "1 Oktober", "2 Oktober"] },
    { name: "Candi Prambanan", hint: "Candi Hindu terbesar di Indonesia adalah", options: ["Candi Jago", "Candi Kalasan", "Candi Borobudur", "Candi Prambanan"] },
    { name: "Garuda Pancasila", hint: "Lambang negara Indonesia adalah?", options: ["Garuda Pancasila", "Bhinneka Tunggal Ika", "Harimau", "Singa"] },
    { name: "Budi Utomo", hint: "Apa nama organisasi pergerakan yang didirikan oleh Dr. Wahidin Sudirohusodo pada tahun 1908?", options: ["PNI", "Budi Utomo", "PPKI", "BPUPKI"] },
    { name: "Konferensi Meja Bundar (KMB)", hint: "Apa nama perjanjian yang menandai pengakuan kedaulatan Indonesia oleh Belanda pada tahun 1949?", options: ["Perjanjian Linggarjati", "Perjanjian Renville", "Konferensi Meja Bundar (KMB)", "Perjanjian Roem-Royen"] },
    { name: "Teuku Umar", hint: "Apa nama tokoh yang dikenal sebagai pemimpin perjuangan kemerdekaan di Aceh?", options: ["Sultan Hasanuddin", "Pangeran Diponegoro", "Ir. Soekarno", "Teuku Umar"] },
    { name: "Demokrasi Terpimpin", hint: "Apa nama sistem pemerintahan yang diterapkan pada masa pemerintahan Sukarno setelah kemerdekaan?", options: ["Demokrasi Terpimpin", "Demokrasi Liberal", "Sistem Parlementer", "Sistem Presidensial"] },
    { name: "Pattimura", hint: "Siapa yang dikenal sebagai tokoh utama dalam perjuangan kemerdekaan di Maluku?", options: ["Ir. Soekarno", "Pattimura", "Mohammad Hatta", "Sutan Syahrir"] },
    { name: "Agresi Militer Belanda II", hint: "Apa nama peristiwa yang terjadi pada 1 Maret 1949 yang dikenal sebagai (Serangan Umum)?", options: ["Pertempuran Surabaya", "Pertempuran Ambarawa", "Agresi Militer Belanda II", "Pertempuran Bandung Lautan Api"] },
    { name: "Perjanjian Roem-Royen", hint: "Apa nama perjanjian yang menandai pengakuan Indonesia oleh Jepang pada masa pendudukan?", options: ["Perjanjian Jakarta", "Perjanjian KMB", "Perjanjian Konferensi Meja Bundar", "Perjanjian Roem-Royen"] },
    { name: "Ir. Soekarno", hint: "Apa nama tokoh yang dikenal dengan julukan (Singa Podium) dalam perjuangan kemerdekaan Indonesia?", options: ["Ir. Soekarno", "Jenderal Soedirman", "Teuku Umar", "Tan Malaka"] },
    { name: "Sistem Presidensial", hint: "Apa nama sistem pemerintahan yang diterapkan pada masa Orde Baru?", options: ["Demokrasi Terpimpin", "Sistem Presidensial", "Demokrasi Liberal", "Sistem Parlementer"] },
    { name: "Operasi Seroja", hint: "Apa nama peristiwa yang menandai berakhirnya konflik di Timor Timur dan integrasi ke Indonesia pada tahun 1976?", options: ["Peristiwa Santa Cruz", "Integrasi Timor", "Operasi Seroja", "Operasi Timor"] },
    { name: "Raden Wijaya", hint: "Siapa tokoh yang terkenal dengan penaklukan Singhasari dan pendirian Majapahit?", options: ["Airlangga", "Jayabaya", "Ken Arok", "Raden Wijaya"] },
    { name: "Romusha", hint: "kerja paksa pada zaman penjajahan jepang disebut?", options: ["Romusha", "Rodi", "Kerja Bakti", "Kerja Sama"] },
    { name: "Rodi", hint: "kerja paksa pada zaman penjajahan Belanda disebut?", options: ["Romusha", "Rodi", "Kerja Bakti", "Kerja Sama"] },
    { name: "Perjanjian Renville", hint: "perjanjian antara Indonesia dengan Belanda yang terjadi pada tanggal 8 Desember 1947 sampai 17 Januari 1948 di atas geladak kapal perang Amerika Serikat Adalah Perjanjian?", options: ["Perjanjian Jakarta", "Perjanjian Salatiga", "Perjanjian Renville", "Perjanjian Linggarjati"] },
    { name: "Perjanjian Linggarjati", hint: "perjanjian penting yang ditandatangani antara Indonesia dan Belanda pada 25 Maret 1947 Adalah Perjanjian?", options: ["Perjanjian Jakarta", "Perjanjian Salatiga", "Perjanjian Renville", "Perjanjian Linggarjati"] },
    { name: "Perjanjian Jakarta", hint: "perjanjian perdamaian Indonesia dengan Malaysia yang secara resmi ditandatangani oleh Adam Malik dan Tunku Abdul Razak di Jakarta pada tanggal 11 Agustus 1966 Adalah Perjanjian?", options: ["Perjanjian Jakarta", "Perjanjian Salatiga", "Perjanjian Renville", "Perjanjian Linggarjati"] },
    { name: "Konferensi Inter Indonesia", hint: "konferensi yang dilakukan antara Negara Indonesia dan Bijeenkomst voor Federaal Overleg (BFO/Badan Permusyawaratan Federal). BFO merupakan sebuah badan yang merupakan kumpulan negara-negara bagian bentukan Belanda Adalah Konferensi?", options: ["Konferensi Meja Bundar", "Konferensi Inter Indonesia", "Perjanjian Linggarjati", "Perjanjian Renville"] },
    { name: "Republik Indonesia Serikat", hint: "indonesia Sempat Menjadi Negara Serikat (RIS), Yang Terdiri Dari Beberapa Negara Bagian Yaitu: Negara Republik Indonesia, Negara Indonesia Timur, Negara Pasundan, Negara Jawa Timur, Negara Madura, Negara Sumatera Timur, Negara Sumatera Selatan. Apa kepanjangan Dari (RIS)?", options: ["Relawan Indonesia Serikat", "Rakyat Indonesia Serikat", "Republik Indonesia Serikat", "Raja Indonesia Serikat"] },
    { name: "Pertempuran Ambarawa", hint: "pertempuran antara Tentara Nasional Indonesia yang baru saja dibentuk dan Angkatan Darat Inggris yang terjadi antara 20 Oktober hingga 15 Desember 1945 Adalah Pertempuran?", options: ["Pertempuran Bandung Lautan Api", "Pertempuran Surabaya", "Pertempuran Puputan Margarana", "Pertempuran Ambarawa"] },
    { name: "Pertempuran Bandung Lautan Api", hint: "pada 24 Maret 1946 Sekitar 200.000 penduduk Bandung membakar kediaman mereka sendiri dalam peristiwa tersebut, kemudian meninggalkan kota dan menuju pegunungan di daerah selatan Bandung, Peristiwa itu disebut juga dengan Pertempuran (Peristiwa)?", options: ["Pertempuran Bandung Lautan Api", "Pertempuran Surabaya", "Pertempuran Puputan Margarana", "Pertempuran Ambarawa"] },
    { name: "10 November 1945", hint: "Tanggal berapa Pertempuran Surabaya dimulai?", options: ["17 Agustus 1945", "10 November 1945", "25 Maret 1946", "1 Juni 1945"] },
    { name: "Pertempuran Puputan Margarana", hint: "pertempuran habis-habisan antara pasukan Indonesia dan Belanda yang terjadi di desa Marga, Bali pada tanggal 20 November 1946. Dalam pertempuran ini pasukan Indonesia dipimpin oleh Kolonel Infanteri I Gusti Ngurah Rai dengan pasukan yang berjumlah kurang dari 100 orang ini adalah Pertempuran?", options: ["Pertempuran Bandung Lautan Api", "Pertempuran Surabaya", "Pertempuran Puputan Margarana", "Pertempuran Ambarawa"] },
    { name: "Pertempuran Medan Area", hint: "sebuah peristiwa perlawanan rakyat terhadap Sekutu yang terjadi di Sumatra Utara pada tanggal 10 Desember 1945 adalah Pertempuran?", options: ["Pertempuran Bandung Lautan Api", "Pertempuran Surabaya", "Pertempuran Puputan Margarana", "Pertempuran Medan Area"] },
    { name: "Proklamasi Kemerdekaan", hint: "Apa nama peristiwa yang menandai pembentukan negara Indonesia merdeka dan berdiri pada tanggal 17 Agustus 1945?", options: ["Proklamasi Kemerdekaan", "Agresi Militer I", "Operasi Trikora", "Konferensi Meja Bundar"] },
    { name: "Dwi Komando Rakyat", hint: "Apa singkatan dari DWIKORA yang dicanangkan oleh Presiden Sukarno pada tahun 1964?", options: ["Dwi Komitmen Rakyat", "Dwi Komando Rakyat", "Dua Wilayah Konfrontasi", "Dua Pusat Pemerintahan"] },
    { name: "Tri Komando Rakyat", hint: "Apa yang dimaksud dengan istilah (Trikora)?", options: ["Tri Kewajiban Rakyat", "Tri Komitmen Diplomasi", "Tri Komando Rakyat", "Tri Kedaulatan Bangsa"] },
    { name: "Bandung, Indonesia", hint: "Di mana lokasi Konferensi Asia-Afrika dilaksanakan pada tahun 1955?", options: ["Cape Town, Afrika Selatan", "Bangkok, Thailand", "New Delhi, India", "Bandung, Indonesia"] },
    { name: "Abdurrahman Wahid", hint: "Siapa yang dikenal sebagai tokoh reformasi yang memimpin gerakan untuk mengakhiri Orde Baru?", options: ["Abdurrahman Wahid", "Megawati Sukarnoputri", "Jusuf Kalla", "Soeharto"] },
    { name: "Portugis", hint: "Siapa yang pertama kali menjajah Indonesia pada abad ke-16?", options: ["Belanda", "Portugis", "Inggris", "Jepang"] },
    { name: "Cultuurstelsel", hint: "Apa nama sistem tanam paksa yang diterapkan oleh pemerintah kolonial Belanda di Indonesia pada abad ke-19?", options: ["Kulturkampf", "Sistem Rasial", "Cultuurstelsel", "Inlandsche Regel"] },
    { name: "Batavia", hint: "apa nama ibu kota jakarta dulu pada zaman penjajahan belanda?", options: ["Djakarta", "Jakarta", "DKI Jakarta", "Batavia"] },
    { name: "Perang Gerilya", hint: "Apa nama perlawanan yang dipimpin oleh Jenderal Soedirman terhadap penjajahan Belanda setelah Proklamasi Kemerdekaan Indonesia?", options: ["Perang Gerilya", "Perang Kemerdekaan", "Perang Diponegoro", "Perang Rakyat"] },
    { name: "Vereenigde Oostindische Compagnie (VOC)", hint: "Apa nama perusahaan yang didirikan oleh Belanda pada abad ke-17 untuk mengelola perdagangan rempah-rempah di Indonesia?", options: ["British East India Company", "Vereenigde Oostindische Compagnie (VOC)", "Dutch Trading Company", "Dutch-Indonesian Trading Firm"] },
    { name: "Cornelis de Houtman", hint: "Penjelajah asal Belanda yang tiba di pelabuhan Banten pada tahun 1596 dan melakukan kontak dagang dengan kesultanan Banten adalah?", options: ["Christopher Columbus", "Alfonso de Albuquerque", "Cornelis de Houtman", "Vasco da Gama."] },
    { name: "Aceh", hint: "Di mana Cut Nyak Dien mengadakan perlawanan paling intensif terhadap penjajahan Belanda?", options: ["Sumatra Barat", "Jakarta", "Bali", "Aceh"] },
    { name: "Kerajaan Kutai", hint: "Apa nama kerajaan tertua di Indonesia yang berlokasi di Sumatra dan diperkirakan berdiri sekitar abad ke-7 Masehi?", options: ["Kerajaan Kutai", "Kerajaan Majapahit", "Kerajaan Mataram", "Kerajaan Sriwijaya"] },
    { name: "17 Agustus", hint: "Setiap Tanggal berapakah Indonesia merayakan Hari Kemerdekaan?", options: ["1 September", "17 Agustus", "28 Oktober", "20 Mei"] },
];

const totalQuestions = countries.length; // Total number of questions available
const maxQuestionsPerGame = 25; // Maximum number of questions per game

let shuffledCountries = []; // Array to store shuffled countries
let currentQuestionIndex = 0;
let currentQuestionNumber = 0; // Variable to track current question number
let score = 0;
let playerName = "";
let totalAnsweredQuestions = 0; // Variable to track total answered questions

function shuffleArray(array) {
    let shuffled = array.slice(); // Copy the array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
}

function startGame() {
    playerName = document.getElementById("playerName").value.trim();
    
    // Check if player name is entered
    if (playerName === "") {
        alert("Masukkan nama Anda terlebih dahulu!");
        return;
    }
    
    // Shuffle countries if not already shuffled or if all have been used
    if (shuffledCountries.length === 0 || currentQuestionIndex >= shuffledCountries.length) {
        shuffledCountries = shuffleArray(countries);
        currentQuestionIndex = 0;
    }
    
    // Increment current question number
    currentQuestionNumber++;

    // Proceed to next question if within the limit
    if (currentQuestionIndex < maxQuestionsPerGame) {
        const currentCountry = shuffledCountries[currentQuestionIndex];
        
        // Display question number and hint
        const questionElement = document.getElementById("question");
        questionElement.textContent = `Soal ke-${currentQuestionNumber}: ${currentCountry.hint}`;
        
        // Randomize options
        const options = ["optionA", "optionB", "optionC", "optionD"];
        shuffleArray(options);
        
        // Set options text and attributes
        options.forEach((option, index) => {
            const optionElement = document.getElementById(option);
            optionElement.textContent = currentCountry.options[index];
            optionElement.classList.remove('clicked');
            optionElement.setAttribute('onclick', 'checkAnswer(this)');
        });
        
        // Display game container and hide start container
        document.getElementById("gameContainer").style.display = "block";
        document.getElementById("startContainer").style.display = "none";
        document.getElementById("result").textContent = "";
        updateProgress(); // Update progress bar
        
        currentQuestionIndex++;
    } else {
        // Show game over screen if all questions answered or reached maxQuestionsPerGame
        showGameOver();
    }
}

function updateProgress() {
    const progress = (currentQuestionIndex / maxQuestionsPerGame) * 100;
    document.getElementById("progressBar").style.width = `${progress}%`;
    document.getElementById("answeredQuestions").textContent = `Soal ke-${currentQuestionIndex} dari ${maxQuestionsPerGame} telah dikerjakan`;
}

function checkAnswer(option) {
    const userAnswer = option.textContent.trim();
    const correctCountry = shuffledCountries[currentQuestionIndex - 1];

    // Check if answer is correct
    if (userAnswer === correctCountry.name) {
        score++;
        document.getElementById("result").textContent = `Benar! Skor: ${score}`;
    } else {
        document.getElementById("result").textContent = `Salah. Jawaban yang benar adalah: ${correctCountry.name}`;
    }
    
    // Add 'clicked' class to chosen option, disable further clicks
    option.classList.add('clicked');
    option.removeAttribute('onclick');

    // Increment totalAnsweredQuestions only if the answer is correct
    if (userAnswer === correctCountry.name) {
        totalAnsweredQuestions++;
    }

    // Move to the next question or show game over if maxQuestionsPerGame reached
    if (currentQuestionIndex < maxQuestionsPerGame) {
        setTimeout(startGame, 1500); // Delay before moving to next question
    } else {
        showGameOver(); // Show game over screen
    }

    updateProgress(); // Update progress bar and answered questions count
}

function showGameOver() {
    document.getElementById("gameContainer").style.display = "none";
    document.getElementById("gameOver").style.display = "block";
    
    // Calculate accuracy and display final score
    const accuracy = (score / maxQuestionsPerGame) * 100;
    const accuracyText = `${playerName}, Anda menjawab ${score} dari ${maxQuestionsPerGame} pertanyaan dengan benar (${accuracy.toFixed(2)}%)`;
    
    document.getElementById("finalScore").textContent = accuracyText;

    // Reset totalAnsweredQuestions and currentQuestionNumber
    totalAnsweredQuestions = 0;
    currentQuestionNumber = 0;

    // Clear answered questions count
    document.getElementById("answeredQuestions").textContent = "";
}

function restartGame() {
    // Reset variables
    shuffledCountries = [];
    currentQuestionIndex = 0;
    currentQuestionNumber = 0;
    score = 0;
    totalAnsweredQuestions = 0;

    // Clear player name input
    playerName = "";
    document.getElementById("playerName").value = "";

    // Hide game over screen and show start container
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("startContainer").style.display = "block";

    // Clear final score and answered questions count
    document.getElementById("finalScore").textContent = "";
    document.getElementById("answeredQuestions").textContent = "";
}

// Start the game when the page loads
window.onload = function() {
    document.getElementById("gameContainer").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
};
