// Back to top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Sound toggle
const soundToggle = document.getElementById("soundToggle");
let soundEnabled = true;

soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundToggle.classList.toggle("active");
  soundToggle.innerHTML = soundEnabled ? "🔊" : "🔇";
});

// Example cards interaction
function showExample(type) {
  const content = document.getElementById("example-content");
  content.style.animation = "fadeOut 0.3s ease-out";

  setTimeout(() => {
    content.innerHTML = getExampleContent(type);
    content.style.animation = "fadeInUp 0.5s ease-out";
  }, 300);
}

function getExampleContent(type) {
  const examples = {
    hello: `
                    <h3>📝 Program Hello World</h3>
                    <pre><code>       <span class="keyword">IDENTIFICATION DIVISION</span>.
       <span class="keyword">PROGRAM-ID</span>. HELLO.
       <span class="keyword">PROCEDURE DIVISION</span>.
           <span class="keyword">DISPLAY</span> <span class="string">"HELLO, WORLD!"</span>.
           <span class="keyword">DISPLAY</span> <span class="string">"Project: COBOL_project"</span>.
           <span class="keyword">DISPLAY</span> <span class="string">"Code berhasil jalan"</span>.
           <span class="keyword">STOP RUN</span>.</code></pre>
                    <p>Program sederhana untuk menampilkan pesan "Hello, World!" dan konfirmasi bahwa kode berhasil dijalankan.</p>
                `,
    transaksi: `
                    <h3>💰 Program Transaksi</h3>
                    <pre><code>       <span class="keyword">IDENTIFICATION DIVISION</span>.
       <span class="keyword">PROGRAM-ID</span>. TRANSAKSI.
       <span class="keyword">AUTHOR</span>. AMIN.

       <span class="keyword">ENVIRONMENT DIVISION</span>.
       <span class="keyword">CONFIGURATION SECTION</span>.
       <span class="keyword">SPECIAL-NAMES</span>.
           <span class="keyword">DECIMAL-POINT IS COMMA</span>.

       <span class="keyword">DATA DIVISION</span>.
       <span class="keyword">WORKING-STORAGE SECTION</span>.

      <span class="comment">* Input numerik</span>
       <span class="keyword">01</span> WS-NUM1 PIC 9(5)V99.
       <span class="keyword">01</span> WS-NUM2 PIC 9(5)V99.
       <span class="keyword">01</span> WS-HASIL PIC 9(6)V99.
       <span class="keyword">01</span> WS-TAMPIL PIC Z(5)9,99.

       <span class="keyword">PROCEDURE DIVISION</span>.
       MAIN-LOGIC.
           MOVE 12345,67 TO WS-NUM1.
           MOVE 9876,54 TO WS-NUM2.
           COMPUTE WS-HASIL = WS-NUM1 + WS-NUM2.
           MOVE WS-HASIL TO WS-TAMPIL.
           DISPLAY "HASIL PENJUMLAHAN: " WS-TAMPIL.
           STOP RUN.</code></pre>
                    <p>Program untuk melakukan kalkulasi dengan format ribuan Indonesia menggunakan koma sebagai pemisah desimal.</p>
                `,
    biodata: `
                    <h3>👤 Program Biodata</h3>
                    <pre><code>       <span class="keyword">IDENTIFICATION DIVISION</span>.
       <span class="keyword">PROGRAM-ID</span>. BIODATA.
       <span class="keyword">AUTHOR</span>. AMIN.

       <span class="keyword">ENVIRONMENT DIVISION</span>.
       <span class="keyword">INPUT-OUTPUT SECTION</span>.
       <span class="keyword">DATA DIVISION</span>.
       <span class="keyword">WORKING-STORAGE SECTION</span>.
       <span class="keyword">01</span> WS-NAMA PIC X(20).
       <span class="keyword">01</span> WS-TGL-LAHIR.
          <span class="keyword">05</span> WS-HARI PIC 99.
          <span class="keyword">05</span> WS-BULAN PIC 99.
          <span class="keyword">05</span> WS-TAHUN PIC 9999.

       <span class="keyword">PROCEDURE DIVISION</span>.
       MAIN-LOGIC.
           MOVE "AMIN" TO WS-NAMA.
           MOVE 15 TO WS-HARI.
           MOVE 08 TO WS-BULAN.
           MOVE 1990 TO WS-TAHUN.
           DISPLAY "NAMA: " WS-NAMA.
           DISPLAY "TANGGAL LAHIR: " 
                   WS-HARI "-" WS-BULAN "-" WS-TAHUN.
           STOP RUN.</code></pre>
                    <p>Program untuk menampilkan data biodata dengan format tanggal Indonesia (DD-MM-YYYY).</p>
                `,
  };

  return examples[type] || examples.hello;
}

// Save to PDF function with sound effect
function saveToPDF() {
  // Play sound effect if enabled
  if (soundEnabled) {
    playMoneySound();
  }

  // Show loading state
  const button = document.querySelector(".print-btn");
  const originalText = button.innerHTML;
  button.innerHTML = '<span class="loading"></span> Generating PDF...';
  button.disabled = true;

  // Simulate PDF generation (in a real implementation, you would use a library like jsPDF)
  setTimeout(() => {
    alert("PDF berhasil disimpan! (Simulasi)");
    button.innerHTML = originalText;
    button.disabled = false;
  }, 2000);
}

// Sound effects
function playMoneySound() {
  // In a real implementation, you would play an actual sound file
  // This is a simulation using the Web Audio API to create a "money" sound
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.type = "sine";
  oscillator.frequency.value = 523.25; // C5
  gainNode.gain.value = 0.5;

  oscillator.start();

  // Create a "money" sound pattern
  setTimeout(() => {
    oscillator.frequency.value = 659.25; // E5
  }, 100);

  setTimeout(() => {
    oscillator.frequency.value = 783.99; // G5
  }, 200);

  setTimeout(() => {
    oscillator.frequency.value = 1046.5; // C6
  }, 300);

  setTimeout(() => {
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + 0.5
    );
    oscillator.stop(audioContext.currentTime + 0.5);
  }, 400);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
