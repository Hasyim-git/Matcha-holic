import { IngredientDetail, FaqItem, DeliveryArea } from '../types/matcha';

export const INGREDIENTS_DATA: IngredientDetail[] = [
  {
    id: 'matcha',
    name: 'Matcha Murni',
    shortDesc: 'Awal dari semua rasa yang kami suka.',
    fullDesc: 'Dipilih dari bubuk matcha teh hijau pilihan dengan profil umami lembut, warna hijau alami yang pekat, serta aftertaste segar tanpa rasa pahit berlebih.',
    origin: 'Uji Coba Blend (Tencha grade)',
    tasteNote: 'Umami earthy, wangi rumput segar, manis alami.',
    icon: 'leaf',
  },
  {
    id: 'susu',
    name: 'Susu Segar',
    shortDesc: 'Bagian dari racikan matcha latte kami.',
    fullDesc: 'Susu sapi pasteurisasi dingin berkualitas prima yang menghasilkan tekstur velvety dan creamy lembut, membalut karakter tegas matcha.',
    origin: 'Pasteurisasi Segar Lokal',
    tasteNote: 'Creamy, silky, manis alami laktosa.',
    icon: 'milk',
  },
  {
    id: 'gula',
    name: 'Gula Tebu Pilihan',
    shortDesc: 'Gula biasa untuk melengkapi racikan.',
    fullDesc: 'Simpel sirup gula tebu murni secukupnya agar keaslian aroma matcha dan kesegaran susu tetap menjadi bintang utama tanpa rasa manis menyengat.',
    origin: 'Gula Tebu Alami',
    tasteNote: 'Manis bersih, seimbang, menyatu rata.',
    icon: 'sparkles',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'order',
    question: 'Gimana cara pesan matcha-holic?',
    answer: 'Rencananya, pre-order dilakukan langsung lewat WhatsApp resmi kami dengan kuota terbatas di setiap batch racikan. Kamu cukup memilih jumlah botol, level manis, dan mengisi alamat pengiriman.',
  },
  {
    id: 'faq-2',
    category: 'shipping',
    question: 'Bisa dikirim ke mana saja?',
    answer: 'Area layanan yang direncanakan adalah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, dan Bekasi) menggunakan kurir instan atau same day berpendingin agar kesegaran tetap terjaga.',
  },
  {
    id: 'faq-3',
    category: 'shipping',
    question: 'Kapan pesanan dikirim?',
    answer: 'Jadwal pengiriman direncanakan setiap hari pukul 15.00 WIB untuk area Jabodetabek. Pesanan sebelum cut-off jam 12.00 siang akan masuk batch hari yang sama.',
  },
  {
    id: 'faq-4',
    category: 'storage',
    question: 'Gimana cara menyimpannya?',
    answer: 'Simpan di kulkas (chiller pada suhu 2°C – 4°C), tidak perlu dibekukan di freezer. Sebagai saran, sebaiknya segera dihabiskan dalam waktu 3–4 hari setelah botol dibuka.',
  },
  {
    id: 'faq-5',
    category: 'ingredients',
    question: 'Apa saja bahan utamanya?',
    answer: 'Bahan utamanya sangat sederhana dan transparan: matcha murni berkarakter, susu pasteurisasi berkualitas, dan sedikit gula tebu alami. Tanpa bahan pengawet sintetik atau perisa buatan.',
  },
  {
    id: 'faq-6',
    category: 'order',
    question: 'Kapan pre-order batch perdana dibuka?',
    answer: 'Kami sedang merampungkan uji rasa terakhir dan standarisasi kemasan botol kedap udara. Daftarkan nomor WhatsApp kamu di tombol pesan untuk mendapatkan pemberitahuan pertama saat batch perdana siap.',
  },
];

export const JABODETABEK_AREAS: DeliveryArea[] = [
  {
    name: 'Jakarta Selatan & Pusat',
    coverage: 'Kebayoran, Senopati, Tebet, Kuningan, Menteng, Sudirman',
    courier: 'Instant & Same-Day (Gosend / GrabExpress)',
    cutoffTime: '13.00 WIB',
    deliverySchedule: 'Pukul 15.00 WIB (Tiba ~16.30 WIB)',
  },
  {
    name: 'Jakarta Barat, Timur & Utara',
    coverage: 'Puri, Kebon Jeruk, Kelapa Gading, Pluit, Rawamangun, Cipayung',
    courier: 'Instant & Same-Day Dedicated',
    cutoffTime: '12.00 WIB',
    deliverySchedule: 'Pukul 15.00 WIB (Tiba ~17.00 WIB)',
  },
  {
    name: 'Tangerang & Tangsel',
    coverage: 'BSD City, Gading Serpong, Bintaro, Alam Sutera, Karawaci, Ciputat',
    courier: 'Instant & Same-Day Cooler Bag',
    cutoffTime: '12.30 WIB',
    deliverySchedule: 'Pukul 15.00 WIB (Tiba ~16.45 WIB)',
  },
  {
    name: 'Depok & Bogor Kota',
    coverage: 'Margonda, Cinere, Cimanggis, Baranangsiang, Pajajaran',
    courier: 'Same-Day Frozen/Cold Pack Packaged',
    cutoffTime: '11.30 WIB',
    deliverySchedule: 'Pukul 15.00 WIB (Tiba ~17.30 WIB)',
  },
  {
    name: 'Bekasi (Kota & Sekitarnya)',
    coverage: 'Summarecon Bekasi, Harapan Indah, Galaxy, Jatiasih',
    courier: 'Same-Day Cold Box Transit',
    cutoffTime: '11.30 WIB',
    deliverySchedule: 'Pukul 15.00 WIB (Tiba ~17.30 WIB)',
  },
];

export const SENSORY_PROFILE = [
  { label: 'Umami / Earthy', value: 88, desc: 'Karakter rasa teh hijau Jepang murni yang pekat dan dalam' },
  { label: 'Creaminess', value: 92, desc: 'Tekstur susu lembut membalut lidah tanpa terasa berlemak berat' },
  { label: 'Freshness', value: 95, desc: 'Aroma segar dan sejuk saat pertama kali botol dibuka' },
  { label: 'Sweet Balance', value: 45, desc: 'Tingkat manis pas, tidak bikin enek atau menutupi rasa matcha' },
];
