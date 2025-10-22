// Toggle button functionality has been moved to sispema-toggle.js

// =================== POPUP STYLES ===================
const popupStyles = `
  /* Popup Overlay */
  .popup-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998; /* Lower than popup container */
    justify-content: center;
    align-items: center;
    padding: 20px;
    overflow-y: auto;
  }
  
  /* Blur effect container */
  .popup-overlay::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(8px);
    z-index: 9997;
    pointer-events: none; /* Allow clicks to pass through to the overlay */
  }

  /* Popup Container */
  .popup-container {
    position: relative; /* Ensure it stays above the blur */
    background: white;
    border-radius: 12px;
    width: 100%;
    max-width: 800px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    margin: 20px;
    overflow: hidden;
    transform: translateY(-20px);
    opacity: 0;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    border: 1px solid #e5e7eb;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    z-index: 9999; /* Higher than overlay and blur */
  }

  .popup-overlay.show .popup-container {
    transform: translateY(0);
    opacity: 1;
  }

  /* Popup Header */
  .popup-header {
    background: white;
    color: #111827;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .popup-warning {
    background: #fef3c7;
    color: #92400e;
    padding: 16px 24px;
    font-size: 14px;
    line-height: 1.5;
    border-bottom: 1px solid #fde68a;
    border-left: 4px solid #f59e0b;
  }

  .popup-header h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #111827;
  }

  .close-btn {
    background: #f3f4f6;
    border: none;
    color: #6b7280;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .close-btn:hover {
    background: #e5e7eb;
    color: #374151;
  }

  /* Popup Content */
  .popup-content {
    padding: 24px;
    overflow-y: auto;
    flex-grow: 1;
  }

  /* Popup Footer */
  .popup-footer {
    background: #f9fafb;
    padding: 16px 24px;
    border-top: 1px solid #e5e7eb;
    text-align: center;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .footer-link {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    font-size: 13px;
    transition: all 0.2s ease;
    border: 1px solid #e5e7eb;
    background: white;
  }

  .footer-link.github {
    color: #374151;
  }

  .footer-link.github:hover {
    background: #f3f4f6;
    border-color: #d1d5db;
  }

  .footer-link.instagram {
    color: #e4405f;
  }

  .footer-link.instagram:hover {
    background: #fef2f2;
    border-color: #fecaca;
  }

  .footer-link.facebook {
    color: #1877f2;
  }

  .footer-link.facebook:hover {
    background: #eff6ff;
    border-color: #bfdbfe;
  }

  .copyright {
    color: #6b7280;
    font-size: 12px;
    font-weight: 400;
  }

  /* Summary Section */
  .summary-section {
    margin-bottom: 24px;
    background: white;
    border-radius: 8px;
    padding: 20px;
    border: 1px solid #e5e7eb;
  }

  .summary-section h3 {
    margin-top: 0;
    margin-bottom: 16px;
    color: #111827;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 8px;
    border-bottom: 1px solid #e5e7eb;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #f3f4f6;
    font-size: 14px;
    transition: all 0.2s ease;
  }
  
  .summary-item:hover {
    background: #f9fafb;
    padding-left: 8px;
    border-radius: 4px;
  }

  .summary-item:last-child {
    border-bottom: none;
    font-weight: 600;
    color: #111827;
    padding-top: 12px;
    margin-top: 4px;
    border-top: 1px solid #e5e7eb;
    background: #f9fafb;
  }

  /* Details Section */
  .details-section {
    margin-top: 24px;
  }

  .details-section h4 {
    color: #111827;
    margin: 0 0 12px 0;
    font-size: 15px;
    font-weight: 600;
  }

  .details-item {
    background: white;
    border-radius: 8px;
    padding: 16px 20px;
    margin-bottom: 12px;
    transition: all 0.2s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    border-left: 3px solid #3b82f6;
  }
  
  .details-item:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-color: #d1d5db;
  }

  .details-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .details-header span:first-child {
    flex: 1;
    margin-right: 12px;
    font-weight: 500;
    color: #111827;
  }

  .point-badge {
    background: #eff6ff;
    color: #1d4ed8;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    border: 1px solid #dbeafe;
  }

  .details-subtext {
    font-size: 13px;
    color: #6b7280;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 4px;
  }

  .details-status {
    font-size: 12px;
    color: #6b7280;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px dashed #e5e7eb;
  }

  .status-valid {
    color: #059669;
    font-weight: 500;
  }

  .status-pending {
    color: #dc2626;
    font-weight: 500;
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .fade-in {
    animation: fadeIn 0.3s ease-out forwards;
  }

  /* Loading Spinner */
  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #f3f4f6;
    border-top: 3px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 16px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Initialize popup
function initPopup() {
  // Add styles if not already added
  if (!document.querySelector("style#sispema-styles")) {
    const styleElement = document.createElement("style");
    styleElement.id = "sispema-styles";
    styleElement.textContent = popupStyles;
    document.head.appendChild(styleElement);
  }

  // Create popup HTML
  const popupHTML = `
    <div id="sispema-popup" class="popup-overlay">
      <div class="popup-container">
        <div class="popup-header">
          <h2 style="margin: 0; font-size: 18px; font-weight: 600;">📊 Ringkasan Point KAK</h2>
          <button class="close-btn" style="background: #f3f4f6; border: none; font-size: 18px; cursor: pointer; color: #6b7280;">&times;</button>
        </div>
        <div class="popup-content" id="popup-content">
          <div class="popup-warning" style="margin-bottom: 20px;">
            <div style="margin-bottom: 8px; font-weight: 600;">
              <i class="fas fa-exclamation-triangle" style="margin-right: 6px; color: #f59e0b;"></i>
              <strong>Peringatan:</strong>
            </div>
            <div style="line-height: 1.5; margin-bottom: 12px;">
              Program ini hanya sebagai <strong>simulasi perhitungan point KAK</strong> berdasarkan luaran yang sudah diupload ke SISPEMA oleh mahasiswa dan sudah divalidasi. Hasil perhitungan berdasarkan data point dari SK-KAK yang berlaku.
            </div>
            <div style="font-size: 13px; margin-top: 12px; padding-top: 12px; border-top: 1px dashed rgba(245, 158, 11, 0.3); background: rgba(255, 255, 255, 0.5); padding: 8px; border-radius: 4px;">
              <i class="fas fa-info-circle" style="margin-right: 4px; color: #3b82f6;"></i>
              <strong>Referensi Resmi:</strong> 
              <a href="https://drive.google.com/file/d/13Sc1r6c8CSlmhs7fMpjDfzeWDpXyanzs/view?usp=sharing" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 500;">
                <i class="fas fa-file-pdf" style="margin-right: 4px;"></i>SK-KAK.pdf
              </a> 
              - Dokumen Surat Keputusan KAK yang menjadi acuan perhitungan point
            </div>
            <div style="font-size: 13px; margin-top: 12px; padding-top: 12px; border-top: 1px dashed rgba(245, 158, 11, 0.3); background: rgba(255, 255, 255, 0.5); padding: 8px; border-radius: 4px;">
              <i class="fas fa-info-circle" style="margin-right: 4px; color: #3b82f6;"></i>
              <strong>Hubungi Developer:</strong> Jika terdapat kekeliruan point pada program ini
            </div>
          </div>
          <div style="text-align: center; padding: 30px 20px;">
            <div class="loading-spinner"></div>
            <div style="margin-top: 16px; color: #3b82f6; font-weight: 500; font-size: 14px;">Memuat data SISPEMA...</div>
            <div style="font-size: 13px; color: #6b7280; margin-top: 8px;">Harap tunggu sebentar</div>
          </div>
        </div>
        <div class="popup-footer">
          <div class="footer-links">
            <a href="https://github.com/Lukman754" target="_blank" class="footer-link github">
              <i class="fab fa-github"></i>
              GitHub
            </a>
            <a href="https://instagram.com/_.chopin" target="_blank" class="footer-link instagram">
              <i class="fab fa-instagram"></i>
              Instagram
            </a>
            <a href="https://www.facebook.com/lukman.mauludin.754" target="_blank" class="footer-link facebook">
              <i class="fab fa-facebook"></i>
              Facebook
            </a>
          </div>
          <div class="copyright">
            © 2024 Lukman Muludin. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  `;

  // Add popup to body
  document.body.insertAdjacentHTML("beforeend", popupHTML);

  // Get popup and close button
  const popup = document.getElementById("sispema-popup");
  const closeBtn = popup.querySelector(".close-btn");

  // Hide popup initially
  popup.style.display = "none";

  // Add event listeners for close button and overlay click
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("show");
    setTimeout(() => {
      popup.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
      setTimeout(() => {
        popup.style.display = "none";
        document.body.style.overflow = "";
      }, 300);
    }
  });
}

// Toggle popup visibility
function togglePopup(show = true) {
  const popup = document.getElementById("sispema-popup");
  if (!popup) return;

  if (show) {
    popup.style.display = "flex";
    setTimeout(() => {
      popup.classList.add("show");
      document.body.style.overflow = "hidden";
    }, 10);

    // Load data only on first open
    if (!popup.hasAttribute("data-loaded")) {
      jalankanSemuaData().then(() => {
        popup.setAttribute("data-loaded", "true");
      });
    }
  } else {
    popup.classList.remove("show");
    setTimeout(() => {
      popup.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
  }
}

// Initialize toggle button
function initToggleButton() {
  // Add toggle button if not exists
  let toggleBtn = document.getElementById("sispema-toggle-btn");
  if (!toggleBtn) {
    toggleBtn = document.createElement("button");
    toggleBtn.id = "sispema-toggle-btn";
    toggleBtn.innerHTML = '<i class="fas fa-chart-bar"></i>';
    toggleBtn.title = "Tampilkan Ringkasan Nilai";
    document.body.appendChild(toggleBtn);

    // Add click handler
    toggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const popup = document.getElementById("sispema-popup");
      if (!popup) return;

      const isHidden = popup.style.display === "none" || !popup.style.display;
      togglePopup(isHidden);
    });
  }
}

// Make functions available globally
window.sispema = {
  init: function () {
    console.log("sispema.js: Initializing...");
    initPopup();

    // If there's a toggle button, update its state
    const toggleBtn = document.getElementById("sispema-toggle-btn");
    if (toggleBtn) {
      toggleBtn.disabled = false;
      toggleBtn.innerHTML = '<i class="fas fa-chart-bar"></i>';
      toggleBtn.title = "Tampilkan Ringkasan Nilai";
    }

    // Show popup if there's a hash in the URL
    if (window.location.hash === "#sispema") {
      togglePopup(true);
    }
  },
  run: function () {
    return jalankanSemuaData();
  },
};

// Initialize when the script loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.sispema.init);
} else {
  window.sispema.init();
}

// Fungsi untuk mendapatkan token dari localStorage atau cookie
function getAuthToken() {
  let token = localStorage.getItem("access_token");

  if (!token) {
    const sessionCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("sispema_unpam_session="));
    if (sessionCookie) {
      token = sessionCookie.split("=")[1];
    }
  }

  if (!token) {
    const xsrfToken = getCookie("XSRF-TOKEN");
    if (xsrfToken) {
      token = xsrfToken;
    }
  }

  if (!token) {
    console.error(
      "Token autentikasi tidak ditemukan. Pastikan Anda sudah login di SISPEMA UNPAM."
    );
  }

  return token;
}

// Fungsi untuk mengambil cookie tertentu
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Fungsi untuk fetch data dengan Bearer token dan XSRF
async function fetchWithAuth(url) {
  const fullToken = getAuthToken();
  if (!fullToken) {
    throw new Error("Tidak ada token autentikasi yang valid");
  }

  let token = fullToken;
  const jwtMatch = fullToken.match(/eyJ[^.]*\.[^.]*\.[^.]*/);
  if (jwtMatch) {
    token = jwtMatch[0];
  }

  const xsrfToken = getCookie("XSRF-TOKEN");

  const headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    "X-Requested-With": "XMLHttpRequest",
    "X-XSRF-TOKEN": xsrfToken || "",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  };

  Object.keys(headers).forEach((key) => {
    if (!headers[key]) {
      delete headers[key];
    }
  });

  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// =================== MAPPING PRESTASI ===================
const TINGKAT_WILAYAH = {
  I: "INTERNASIONAL",
  N: "NASIONAL",
  P: "PROVINSI",
  W: "WILAYAH",
};

const JENIS_JUARA = {
  1: "Juara 1",
  2: "Juara 2",
  3: "Juara 3",
  4: "Juara Umum",
  5: "Juara Harapan",
  6: "Partisipasi/Delegasi/Peserta Kejuaraan",
  7: "Penyelenggara Kegiatan Kejuaraan",
  8: "Apresiasi",
};

const KATEGORI_PRESTASI = {
  I: "Individu",
  K: "Kelompok",
};

const JENIS_PRESTASI = {
  A: "Akademik",
  N: "Non Akademik",
};

// =================== MAPPING REKOGNISI ===================
// Mapping kategori ke poin
const mappingKategoriKePoint = {
  KR01: 100,
  KR02: 30,
  KR03: 15,
  KR04: 15,
  KR05: 25,
  KR06: 20,
  KR07: 20,
  KR08: 15,
  KR09: 30,
  KR10: 30,
  KR11: 15,
  KR12: 20,
  KR13: 25,
  KR14: 25,
  KR15: 5,
  KR16: 5,
  KR17: 10,
  KR18: 15,
  KR21: 10,
  KR22: 15,
  KR23: 10,
  KR24: 15,
  KR25: 20,
  KR26: 15,
  KR27: 10,
  KR28: 10,
  KR29: 15,
  KR30: 25,
  KR31: 10,
  KR32: 10,
  KR33: 5,
  KR34: 15,
  KR35: 7,
  KR36: 10,
  KR37: 5,
  KR38: 7,
  KR39: 5,
  KR40: 7,
  KR41: 7,
  KR42: 20,
  KR43: 15,
  KR44: 10,
  KR45: 5,
  KR46: 15,
  KR47: 5,
  KR48: 15,
  KR49: 25,
  KR50: 5,
  KR51: 20,
  KR52: 5,
  KR53: 15,
  KR54: 5,
  KR55: 10,
  KR56: 5,
};

// =================== MAPPING BELA NEGARA ===================
const KATEGORI_BELA_NEGARA = {
  KBN01: "Pelatihan kepemimpinan mahasiswa",
  KBN02: "Pelatihan militer/kewiraan/wawasan nusantara",
  KBN03:
    "Pendidikan norma, etika, pembinaan karakter, dan soft skill mahasiswa",
  KBN04: "Pendidikan atau gerakan anti korupsi",
  KBN05: "Pendidikan atau gerakan anti penyalahgunaan NAPZA",
  KBN06: "Pendidikan atau gerakan anti radikalisma",
  KBN07: "Kampanye pencegahan kekerasan seksual dan Perundungan (bullying)",
  KBN08: "Kampanye kampus sehat dan/atau green campus",
  KBN11: "Pelatihan Instruktur Nasional",
  KBN12: "Upacara Nasional",
  KBN13:
    "Kegiatan Seminar Mental Kebangsaan Dan Kode Etik Mahasiswa Nasional/Internasional",
};

// =================== MAPPING KEGIATAN ILMIAH ===================
const KATEGORI_KEGIATAN = {
  KI01: "Pemakalah Dalam Pertemuan Ilmiah",
  KI02: "Publikasi Ilmiah Dalam Jurnal Ilmiah",
  KI03: "Berperan Aktif Sebagai Peserta Pada Pertemuan Ilmiah/Minat Bakat (workshop/seminar)",
  KI04: "Berperan Aktif Mengikuti Kegiatan Kepedulian Sosial/Pengabdian Masyarakat",
  KI08: "Proyek Riset",
  KI09: "Berperan Aktif Mengusulkan Proposal Dalam Kompetisi Yang Diselenggarakan Oleh Kemdikbudristek",
};

const PENYELENGGARA_KEGIATAN = {
  1: "Universitas",
  2: "Fakultas",
  3: "Program Studi",
  4: "Himpunan Mahasiswa/Unit Kegiatan Mahasiswa",
};

// =================== FUNGSI MAPPING DATA ===================

// Fungsi untuk memetakan data prestasi ke format yang sesuai
function mapPrestasiToKakData(prestasi) {
  const tingkatWilayah =
    TINGKAT_WILAYAH[prestasi.id_jenis_tingkat_wilayah] || "Tidak Diketahui";
  const jenisJuara =
    JENIS_JUARA[prestasi.id_jenis_juara_prestasi] ||
    prestasi.id_jenis_juara_prestasi ||
    "Tidak Diketahui";
  const jenisPrestasi =
    JENIS_PRESTASI[prestasi.id_jenis_prestasi] || "Tidak Diketahui";

  let kategori = "";
  let nilai = 0;

  if (jenisPrestasi === "Akademik" || jenisPrestasi === "Non Akademik") {
    if (
      jenisJuara.includes("1") ||
      jenisJuara.includes("2") ||
      jenisJuara.includes("3")
    ) {
      if (tingkatWilayah === "INTERNASIONAL") {
        kategori = "Prestasi Internasional (Juara I, II, III)";
        nilai = 30;
      } else if (tingkatWilayah === "NASIONAL") {
        kategori = "Prestasi Nasional (Juara I, II, III)";
        nilai = 25;
      } else if (
        tingkatWilayah === "PROVINSI" ||
        tingkatWilayah === "WILAYAH"
      ) {
        kategori = "Prestasi Internal UNPAM (Juara I, II, III)";
        nilai = 5;
      }
    } else if (
      jenisJuara.includes("Peserta") ||
      jenisJuara.includes("Partisipasi")
    ) {
      if (tingkatWilayah === "INTERNASIONAL") {
        kategori = "Peserta Kejuaraan Internasional";
        nilai = 10;
      } else if (tingkatWilayah === "NASIONAL") {
        kategori = "Peserta Kejuaraan Nasional";
        nilai = 5;
      } else if (
        tingkatWilayah === "PROVINSI" ||
        tingkatWilayah === "WILAYAH"
      ) {
        kategori = "Peserta";
        nilai = 1;
      }
    } else if (
      jenisJuara.includes("Umum") ||
      jenisJuara.includes("Harapan") ||
      jenisJuara.includes("Apresiasi")
    ) {
      if (tingkatWilayah === "INTERNASIONAL") {
        kategori = "Prestasi Internasional (Juara I, II, III)";
        nilai = 30;
      } else if (tingkatWilayah === "NASIONAL") {
        kategori = "Prestasi Nasional (Juara I, II, III)";
        nilai = 25;
      } else if (
        tingkatWilayah === "PROVINSI" ||
        tingkatWilayah === "WILAYAH"
      ) {
        kategori = "Prestasi Internal UNPAM (Juara I, II, III)";
        nilai = 5;
      }
    }
  }

  return {
    nama: prestasi.nama_prestasi,
    tingkat: tingkatWilayah,
    juara: jenisJuara,
    kategori: kategori || "Tidak Diketahui",
    nilai: nilai,
    status: prestasi.validasi?.nama_status_validasi || "BELUM DIVALIDASI",
  };
}

// Fungsi untuk memetakan data bela negara ke format yang sesuai
function mapBelaNegaraToKakData(belaNegara) {
  const tingkatWilayah =
    TINGKAT_WILAYAH[belaNegara.id_jenis_tingkat_wilayah] ||
    belaNegara.tingkat_wilayah?.nama_jenis_tingkat_wilayah ||
    "Tidak Diketahui";

  const kategori =
    KATEGORI_BELA_NEGARA[belaNegara.id_kategori_bela_negara] ||
    belaNegara.kategori_bela_negara?.nama_kategori_bela_negara ||
    "Tidak Diketahui";

  let nilai = 0;

  switch (belaNegara.id_kategori_bela_negara) {
    case "KBN01": // Pelatihan kepemimpinan mahasiswa
    case "KBN02": // Pelatihan militer/kewiraan/wawasan nusantara
    case "KBN11": // Pelatihan Instruktur Nasional
      nilai = 10;
      break;

    case "KBN03": // Pendidikan norma, etika, pembinaan karakter
    case "KBN04": // Pendidikan anti korupsi
    case "KBN05": // Pendidikan anti NAPZA
    case "KBN06": // Pendidikan anti radikalisma
    case "KBN07": // Kampanye pencegahan kekerasan seksual
    case "KBN08": // Kampanye kampus sehat/green campus
      nilai = 5;
      break;

    case "KBN12": // Upacara Nasional
      nilai = 15;
      break;

    case "KBN13": // Seminar Mental Kebangsaan
      nilai = tingkatWilayah === "INTERNASIONAL" ? 20 : 15;
      break;

    default:
      nilai = 5;
  }

  return {
    nama: belaNegara.nama_kegiatan,
    kategori,
    tingkat: tingkatWilayah,
    tahun: belaNegara.tahun_kegiatan,
    nilai: nilai,
    status: belaNegara.validasi?.nama_status_validasi || "BELUM DIVALIDASI",
  };
}

// Fungsi untuk memetakan data kegiatan ilmiah ke format yang sesuai
function mapKegiatanIlmiahToKakData(kegiatan) {
  const kategori =
    KATEGORI_KEGIATAN[kegiatan.id_kategori_kegiatan] ||
    kegiatan.kategori_kegiatan_ilmiah?.nama_kategori_kegiatan_ilmiah ||
    "Tidak Diketahui";

  const penyelenggara =
    PENYELENGGARA_KEGIATAN[kegiatan.id_penyelenggara_kegiatan] ||
    kegiatan.penyelenggara_kegiatan_ilmiah?.nama_penyelenggara_kegiatan ||
    kegiatan.penyelenggara ||
    "Tidak Diketahui";

  let nilai = 0;

  switch (kegiatan.id_kategori_kegiatan) {
    case "KI01": // Pemakalah Dalam Pertemuan Ilmiah
      nilai = 25;
      break;

    case "KI02": // Publikasi Ilmiah Dalam Jurnal Ilmiah
      nilai = 20;
      break;

    case "KI03": // Peserta Pertemuan Ilmiah
      nilai = 5;
      break;

    case "KI04": // Pengabdian Masyarakat
      nilai = 10;
      break;

    case "KI08": // Proyek Riset
      nilai = 15;
      break;

    case "KI09": // Usulan Proposal Kompetisi
      nilai = 10;
      break;

    default:
      nilai = 5;
  }

  // Sesuaikan nilai berdasarkan penyelenggara
  if (kegiatan.id_penyelenggara_kegiatan === 1) {
    // Universitas
    nilai += 5;
  } else if (kegiatan.id_penyelenggara_kegiatan === 4) {
    // Himpunan/UKM
    nilai += 2;
  }

  return {
    nama: kegiatan.nama_kegiatan_ilmiah,
    kategori,
    penyelenggara,
    tanggal: kegiatan.tanggal_awal_kegiatan,
    nilai: nilai,
    status: kegiatan.validasi?.nama_status_validasi || "BELUM DIVALIDASI",
  };
}

// =================== FUNGSI UNTUK MENGAMBIL DATA ===================

// Fungsi untuk menampilkan daftar prestasi
async function tampilkanDaftarPrestasi() {
  try {
    const response = await fetchWithAuth(
      "https://sispema.unpam.ac.id/api/prestasi/ajuan"
    );

    if (response.code !== 200) {
      throw new Error(`Gagal mengambil data prestasi: ${response.message}`);
    }

    const prestasiPribadi = response.data.pribadi || [];

    if (prestasiPribadi.length === 0) {
      console.log("Tidak ada data prestasi yang ditemukan.");
      return { totalPrestasi: 0, totalNilai: 0, detailPrestasi: [] };
    }

    console.log(`\n=== DAFTAR PRESTASI (${prestasiPribadi.length} item) ===`);

    let totalNilai = 0;
    let totalValidasi = 0;
    const detailPrestasi = [];

    prestasiPribadi.forEach((prestasi, index) => {
      const mappedPrestasi = mapPrestasiToKakData(prestasi);

      // Hanya hitung nilai jika status validasi dimulai dengan 'TELAH DIVALIDASI'
      if (
        mappedPrestasi.status &&
        mappedPrestasi.status.startsWith("TELAH DIVALIDASI")
      ) {
        totalNilai += mappedPrestasi.nilai || 0;
        totalValidasi++;
      }

      detailPrestasi.push({
        no: index + 1,
        nama: mappedPrestasi.nama,
        tingkat: mappedPrestasi.tingkat,
        juara: mappedPrestasi.juara,
        kategori: mappedPrestasi.kategori,
        nilai: mappedPrestasi.nilai,
        status: mappedPrestasi.status,
      });

      console.log(
        `${index + 1}. ${mappedPrestasi.nama} | ${mappedPrestasi.tingkat} | ${
          mappedPrestasi.juara
        } | ${mappedPrestasi.nilai} poin`
      );
    });

    console.log(`Total Nilai Prestasi: ${totalNilai}`);

    return {
      totalPrestasi: prestasiPribadi.length,
      totalNilai,
      detailPrestasi,
    };
  } catch (error) {
    console.error("Error prestasi:", error);
    return { totalPrestasi: 0, totalNilai: 0, detailPrestasi: [] };
  }
}

// Fungsi untuk menampilkan nilai ajuan rekognisi
async function tampilkanNilaiAjuanRekognisi() {
  try {
    const ajuanData = await fetchWithAuth(
      "https://sispema.unpam.ac.id/api/rekognisi/ajuan"
    );
    const jenisRekognisiData = await fetchWithAuth(
      "https://sispema.unpam.ac.id/api/rekognisi/jenis-rekognisi"
    );

    const kategoriMap = {};
    if (jenisRekognisiData.data) {
      jenisRekognisiData.data.forEach((item) => {
        kategoriMap[item.id_kategori_rekognisi] = item.nama_kategori_rekognisi;
      });
    }

    if (ajuanData.data && ajuanData.data.pribadi) {
      let totalPoin = 0;
      let totalPoinValid = 0;
      let countAjuan = 0;
      let countAjuanValid = 0;
      const detailRekognisi = [];

      console.log(
        `\n=== DAFTAR REKOGNISI (${ajuanData.data.pribadi.length} item) ===`
      );

      ajuanData.data.pribadi.forEach((ajuan, index) => {
        const kategoriId = ajuan.id_kategori_rekognisi;
        const namaKategori =
          kategoriMap[kategoriId] || "Kategori tidak ditemukan";
        const poin = mappingKategoriKePoint[kategoriId] || 0;
        const statusValidasi =
          ajuan.validasi?.nama_status_validasi || "BELUM DIVALIDASI";

        // Hitung semua ajuan
        totalPoin += poin;
        countAjuan++;

        // Hanya hitung yang sudah divalidasi
        if (statusValidasi.startsWith("TELAH DIVALIDASI")) {
          totalPoinValid += poin;
          countAjuanValid++;
        }

        detailRekognisi.push({
          no: index + 1,
          nama: ajuan.nama_kegiatan,
          kategori: namaKategori,
          kategoriId: kategoriId,
          nilai: poin,
          tahun: ajuan.tahun_kegiatan,
          status: ajuan.validasi.nama_status_validasi,
        });

        console.log(
          `${index + 1}. ${
            ajuan.nama_kegiatan
          } | ${namaKategori} (${kategoriId}) | ${poin} poin`
        );
      });

      console.log(
        `Total Nilai Rekognisi: ${totalPoin} (${totalPoinValid} dari yang valid)`
      );
      console.log(
        `Total Ajuan Valid: ${countAjuanValid} dari ${countAjuan} ajuan`
      );

      return {
        totalRekognisi: countAjuanValid, // Hanya hitung yang valid
        totalNilai: totalPoinValid, // Hanya jumlahkan nilai yang valid
        detailRekognisi,
      };
    } else {
      console.log("Tidak ada data ajuan rekognisi yang ditemukan");
      return { totalRekognisi: 0, totalNilai: 0, detailRekognisi: [] };
    }
  } catch (error) {
    console.error("Error rekognisi:", error);
    return { totalRekognisi: 0, totalNilai: 0, detailRekognisi: [] };
  }
}

// Fungsi untuk menampilkan daftar kegiatan bela negara
async function tampilkanDaftarBelaNegara() {
  try {
    const response = await fetchWithAuth(
      "https://sispema.unpam.ac.id/api/bela-negara/ajuan"
    );

    if (response.code !== 200) {
      throw new Error(`Gagal mengambil data bela negara: ${response.message}`);
    }

    const belaNegaraPribadi = response.data.pribadi || [];

    if (belaNegaraPribadi.length === 0) {
      console.log("Tidak ada data bela negara yang ditemukan.");
      return { totalBelaNegara: 0, totalNilai: 0, detailBelaNegara: [] };
    }

    console.log(
      `\n=== DAFTAR BELA NEGARA (${belaNegaraPribadi.length} item) ===`
    );

    let totalNilai = 0;
    let totalValidasi = 0;
    const detailBelaNegara = [];

    belaNegaraPribadi.forEach((kegiatan, index) => {
      const mappedKegiatan = mapBelaNegaraToKakData(kegiatan);

      // Hanya hitung nilai jika status validasi dimulai dengan 'TELAH DIVALIDASI'
      if (
        mappedKegiatan.status &&
        mappedKegiatan.status.startsWith("TELAH DIVALIDASI")
      ) {
        totalNilai += mappedKegiatan.nilai || 0;
        totalValidasi++;
      }

      detailBelaNegara.push({
        no: index + 1,
        nama: mappedKegiatan.nama,
        kategori: mappedKegiatan.kategori,
        tingkat: mappedKegiatan.tingkat,
        tahun: mappedKegiatan.tahun,
        nilai: mappedKegiatan.nilai,
        status: mappedKegiatan.status,
      });

      console.log(
        `${index + 1}. ${mappedKegiatan.nama} | ${mappedKegiatan.kategori} | ${
          mappedKegiatan.nilai
        } poin`
      );
    });

    console.log(
      `Total Nilai Bela Negara: ${totalNilai} (${totalValidasi} item valid)`
    );
    console.log(
      `Total Kegiatan Valid: ${totalValidasi} dari ${belaNegaraPribadi.length} kegiatan`
    );

    return {
      totalBelaNegara: totalValidasi, // Hanya hitung yang valid
      totalNilai,
      detailBelaNegara,
    };
  } catch (error) {
    console.error("Error bela negara:", error);
    return { totalBelaNegara: 0, totalNilai: 0, detailBelaNegara: [] };
  }
}

// Fungsi untuk menampilkan daftar kegiatan ilmiah
async function tampilkanDaftarKegiatanIlmiah() {
  try {
    const response = await fetchWithAuth(
      "https://sispema.unpam.ac.id/api/kegiatan-ilmiah/ajuan"
    );

    if (response.code !== 200) {
      throw new Error(
        `Gagal mengambil data kegiatan ilmiah: ${response.message}`
      );
    }

    const kegiatanIlmiah = response.data.pribadi || [];

    if (kegiatanIlmiah.length === 0) {
      console.log("Tidak ada data kegiatan ilmiah yang ditemukan.");
      return {
        totalKegiatanIlmiah: 0,
        totalNilai: 0,
        detailKegiatanIlmiah: [],
      };
    }

    console.log(
      `\n=== DAFTAR KEGIATAN ILMIAH (${kegiatanIlmiah.length} item) ===`
    );

    let totalNilai = 0;
    let totalValidasi = 0;
    const detailKegiatanIlmiah = [];

    kegiatanIlmiah.forEach((kegiatan, index) => {
      const mappedKegiatan = mapKegiatanIlmiahToKakData(kegiatan);

      // Hanya hitung nilai jika status validasi dimulai dengan 'TELAH DIVALIDASI'
      if (
        mappedKegiatan.status &&
        mappedKegiatan.status.startsWith("TELAH DIVALIDASI")
      ) {
        totalNilai += mappedKegiatan.nilai || 0;
        totalValidasi++;
      }

      detailKegiatanIlmiah.push({
        no: index + 1,
        nama: mappedKegiatan.nama,
        kategori: mappedKegiatan.kategori,
        penyelenggara: mappedKegiatan.penyelenggara,
        tanggal: mappedKegiatan.tanggal
          ? new Date(mappedKegiatan.tanggal).toLocaleDateString()
          : "Tidak Diketahui",
        nilai: mappedKegiatan.nilai,
        status: mappedKegiatan.status,
      });

      console.log(
        `${index + 1}. ${mappedKegiatan.nama} | ${mappedKegiatan.kategori} | ${
          mappedKegiatan.nilai
        } poin`
      );
    });

    console.log(
      `Total Nilai Kegiatan Ilmiah: ${totalNilai} (${totalValidasi} item valid)`
    );
    console.log(
      `Total Kegiatan Valid: ${totalValidasi} dari ${kegiatanIlmiah.length} kegiatan`
    );

    return {
      totalKegiatanIlmiah: totalValidasi, // Hanya hitung yang valid
      totalNilai,
      detailKegiatanIlmiah,
    };
  } catch (error) {
    console.error("Error kegiatan ilmiah:", error);
    return { totalKegiatanIlmiah: 0, totalNilai: 0, detailKegiatanIlmiah: [] };
  }
}

// =================== FUNGSI UTAMA ===================

// Fungsi untuk menampilkan pesan error
function showError(message) {
  const popupContent = document.getElementById("popup-content");
  if (popupContent) {
    popupContent.innerHTML = `
        <div style="color: #d32f2f; padding: 20px; text-align: center;">
          <div style="font-size: 24px; margin-bottom: 10px;">⚠️</div>
          <div>${message}</div>
        </div>
      `;
  } else {
    console.error(message);
  }
}

// Fungsi untuk menampilkan detail item dalam popup (hanya yang TELAH DIVALIDASI)
function createDetailItem(item, index) {
  // Skip jika status tidak TELAH DIVALIDASI
  if (!item.status || !item.status.startsWith("TELAH DIVALIDASI")) {
    return "";
  }

  // Warna berdasarkan kategori
  const categoryColors = {
    Prestasi: "#5B70F3",
    Rekognisi: "#55E0A3",
    "Bela Negara": "#80FFDB",
    "Kegiatan Ilmiah": "#4850B9",
  };

  const itemColor = categoryColors[item.kategori] || "#5B70F3";

  return `
    <div class="details-item" style="border-left-color: ${itemColor};">
      <div class="details-header">
        <span>${index + 1}. ${item.nama || "Tidak ada judul"}</span>
        <span class="point-badge" style="background: ${itemColor}15; color: ${itemColor}; border-color: ${itemColor}30;">
          ${item.nilai || 0} poin
        </span>
      </div>
      <div class="details-subtext">
        ${
          item.kategori
            ? `<span style="color: #333; font-weight: 500;">${item.kategori}</span>`
            : ""
        } 
        ${item.tingkat ? "• " + item.tingkat : ""}
        ${item.juara ? "• " + item.juara : ""}
        ${item.tahun ? "• " + item.tahun : ""}
      </div>
    </div>
  `;
}

// Fungsi untuk menampilkan ringkasan kategori
function createCategorySummary(category, count, points) {
  if (count === 0) return "";

  return `
    <div class="summary-item">
      <span>${category}</span>
      <span>${count} item • ${points} poin</span>
    </div>
  `;
}

// Fungsi untuk memperbarui konten popup
function getPredikat(points) {
  if (points > 200) return { predikat: "Unggul", color: "#4850B9" };
  if (points >= 100) return { predikat: "Sangat Baik", color: "#5B70F3" };
  if (points >= 50) return { predikat: "Baik", color: "#55E0A3" };
  return { predikat: "Kurang", color: "#80FFDB" };
}

function updatePopupContent(results) {
  const popupContent = document.getElementById("popup-content");
  if (!popupContent) return;

  const predikat = getPredikat(results.totalKeseluruhan);

  // Tambahkan peringatan di awal konten
  const warningHTML = `
    <div class="popup-warning" style="margin-bottom: 20px;">
      <div style="margin-bottom: 8px; font-weight: 600;">
        <i class="fas fa-exclamation-triangle" style="margin-right: 6px; color: #f59e0b;"></i>
        <strong>Peringatan:</strong>
      </div>
      <div style="line-height: 1.5; margin-bottom: 12px;">
        Program ini hanya sebagai <strong>simulasi perhitungan point KAK</strong> berdasarkan luaran yang sudah diupload ke SISPEMA oleh mahasiswa dan sudah divalidasi. Hasil perhitungan berdasarkan data point dari SK-KAK yang berlaku.
      </div>
      <div style="font-size: 13px; margin-top: 12px; padding-top: 12px; border-top: 1px dashed rgba(245, 158, 11, 0.3); background: rgba(255, 255, 255, 0.5); padding: 8px; border-radius: 4px;">
        <i class="fas fa-info-circle" style="margin-right: 4px; color: #3b82f6;"></i>
        <strong>Referensi Resmi:</strong> 
        <a href="https://drive.google.com/file/d/13Sc1r6c8CSlmhs7fMpjDfzeWDpXyanzs/view?usp=sharing" target="_blank" style="color: #3b82f6; text-decoration: none; font-weight: 500;">
          <i class="fas fa-file-pdf" style="margin-right: 4px;"></i>SK-KAK.pdf
        </a> 
        - Dokumen Surat Keputusan KAK yang menjadi acuan perhitungan point
      </div>
      <div style="font-size: 13px; margin-top: 12px; padding-top: 12px; border-top: 1px dashed rgba(245, 158, 11, 0.3); background: rgba(255, 255, 255, 0.5); padding: 8px; border-radius: 4px;">
        <i class="fas fa-info-circle" style="margin-right: 4px; color: #3b82f6;"></i>
        <strong>Hubungi Developer:</strong> Jika terdapat kekeliruan point pada program ini
      </div>
    </div>
  `;

  let html =
    warningHTML +
    `
    <div class="summary-section">
      <h3>Ringkasan Point</h3>
      ${createCategorySummary(
        "Prestasi",
        results.prestasi.totalPrestasi,
        results.prestasi.totalNilai || 0
      )}
      ${createCategorySummary(
        "Rekognisi",
        results.rekognisi.totalRekognisi,
        results.rekognisi.totalNilai || 0
      )}
      ${createCategorySummary(
        "Bela Negara",
        results.belaNegara.totalBelaNegara,
        results.belaNegara.totalNilai || 0
      )}
      ${createCategorySummary(
        "Kegiatan Ilmiah",
        results.kegiatanIlmiah.totalKegiatanIlmiah,
        results.kegiatanIlmiah.totalNilai || 0
      )}
      <div class="summary-item" style="margin-top: 15px; border-top: 1px solid #f0f0f0; padding-top: 12px; font-weight: 600;">
        <span>Total Keseluruhan</span>
        <span>${results.totalItem} item • ${
      results.totalKeseluruhan
    } poin</span>
      </div>
      <div class="summary-item" style="margin-top: 8px; padding: 12px; background: ${
        predikat.color
      }10; border-radius: 6px; border-left: 3px solid ${predikat.color};">
        <span>Predikat</span>
        <span style="color: ${predikat.color}; font-weight: 600;">${
      predikat.predikat
    }</span>
      </div>
    </div>
  `;

  // Tambahkan detail untuk setiap kategori
  const addDetailsSection = (title, items) => {
    if (!items || items.length === 0) return "";

    // Filter hanya yang TELAH DIVALIDASI
    const validatedItems = items.filter(
      (item) => item.status && item.status.startsWith("TELAH DIVALIDASI")
    );
    if (validatedItems.length === 0) return "";

    // Hitung total poin
    const totalPoints = validatedItems.reduce(
      (sum, item) => sum + (parseInt(item.nilai) || 0),
      0
    );

    let section = `
      <div class="details-section">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <h4 style="margin: 0;">${title}</h4>
          <div style="font-size: 13px; color: #555;">${validatedItems.length} item • ${totalPoints} poin</div>
        </div>
    `;

    validatedItems.forEach((item, index) => {
      section += createDetailItem(item, index);
    });

    section += `</div>`;
    return section;
  };

  // Tambahkan detail untuk setiap kategori yang memiliki data
  if (
    results.prestasi.detailPrestasi &&
    results.prestasi.detailPrestasi.length > 0
  ) {
    html += addDetailsSection(
      "Detail Prestasi",
      results.prestasi.detailPrestasi
    );
  }

  if (
    results.rekognisi.detailRekognisi &&
    results.rekognisi.detailRekognisi.length > 0
  ) {
    html += addDetailsSection(
      "Detail Rekognisi",
      results.rekognisi.detailRekognisi
    );
  }

  if (
    results.belaNegara.detailBelaNegara &&
    results.belaNegara.detailBelaNegara.length > 0
  ) {
    html += addDetailsSection(
      "Detail Bela Negara",
      results.belaNegara.detailBelaNegara
    );
  }

  if (
    results.kegiatanIlmiah.detailKegiatanIlmiah &&
    results.kegiatanIlmiah.detailKegiatanIlmiah.length > 0
  ) {
    html += addDetailsSection(
      "Detail Kegiatan Ilmiah",
      results.kegiatanIlmiah.detailKegiatanIlmiah
    );
  }

  popupContent.innerHTML = html;
}

// Fungsi utama untuk menjalankan semua data
async function jalankanSemuaData() {
  return new Promise(async (resolve, reject) => {
    const BEARER_TOKEN = getAuthToken();

    if (!BEARER_TOKEN) {
      const error =
        "Token autentikasi tidak ditemukan. Pastikan Anda sudah login di SISPEMA UNPAM.";
      showError(error);
      return reject(new Error(error));
    }

    try {
      // Pastikan popup sudah diinisialisasi
      if (!document.getElementById("sispema-popup")) {
        initPopup();
      }

      // Tampilkan popup dengan loading state
      const popupContent = document.getElementById("popup-content");
      if (popupContent) {
        popupContent.innerHTML = `
          <div style="text-align: center; padding: 30px 20px;">
            <div style="margin-bottom: 15px;">
              <svg width="40" height="40" viewBox="0 0 50 50" style="animation: spin 1s linear infinite;">
                <path d="M25,5A20,20,0,1,0,45,25,20,20,0,0,0,25,5Zm0,38A18,18,0,1,1,43,25,18,18,0,0,1,25,43Z" opacity=".3" fill="#4182eb"/>
                <path d="M25,5A20,20,0,0,0,25,45" fill="none" stroke="#4182eb" stroke-width="6" stroke-linecap="round">
                  <animateTransform 
                    attributeName="transform" 
                    type="rotate" 
                    from="0 25 25" 
                    to="360 25 25" 
                    dur="1s" 
                    repeatCount="indefinite"/>
                </path>
              </svg>
            </div>
            <div style="font-size: 15px; color: #4182eb; font-weight: 500;">Memuat data SISPEMA...</div>
            <div style="font-size: 13px; color: #64748b; margin-top: 8px;">Harap tunggu sebentar</div>
          </div>
        `;
      }

      // Tampilkan popup
      const popup = document.getElementById("sispema-popup");
      if (popup) {
        popup.style.display = "flex";
        setTimeout(() => {
          popup.classList.add("show");
          document.body.style.overflow = "hidden";
        }, 10);
      }

      try {
        const [
          prestasiResult,
          rekognisiResult,
          belaNegaraResult,
          kegiatanIlmiahResult,
        ] = await Promise.all([
          tampilkanDaftarPrestasi(),
          tampilkanNilaiAjuanRekognisi(),
          tampilkanDaftarBelaNegara(),
          tampilkanDaftarKegiatanIlmiah(),
        ]);

        // Hanya hitung total untuk data yang sudah divalidasi
        const totalKeseluruhan =
          (prestasiResult.totalNilai || 0) +
          (rekognisiResult.totalNilai || 0) +
          (belaNegaraResult.totalNilai || 0) +
          (kegiatanIlmiahResult.totalNilai || 0);

        const totalItem =
          (prestasiResult.totalPrestasi || 0) +
          (rekognisiResult.totalRekognisi || 0) +
          (belaNegaraResult.totalBelaNegara || 0) +
          (kegiatanIlmiahResult.totalKegiatanIlmiah || 0);

        const results = {
          prestasi: prestasiResult,
          rekognisi: rekognisiResult,
          belaNegara: belaNegaraResult,
          kegiatanIlmiah: kegiatanIlmiahResult,
          totalKeseluruhan,
          totalItem,
        };

        // Update popup dengan hasil
        updatePopupContent(results);
        resolve(results);
      } catch (error) {
        const errorMsg =
          "Terjadi kesalahan saat mengambil data. Silakan coba lagi.";
        showError(errorMsg);
        console.error("Error dalam menjalankan script:", error);
        reject(new Error(errorMsg));
      }
    } catch (error) {
      console.error("Error in popup initialization:", error);
      reject(error);
    }
  });
}

// Don't run automatically, will be called by toggle button

// Export untuk penggunaan sebagai module
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getAuthToken,
    fetchWithAuth,
    tampilkanDaftarPrestasi,
    tampilkanNilaiAjuanRekognisi,
    tampilkanDaftarBelaNegara,
    tampilkanDaftarKegiatanIlmiah,
    jalankanSemuaData,
  };
}
