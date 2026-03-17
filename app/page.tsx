'use client'; // Wajib ada ini di paling atas karena kita pakai state (interaksi)

import { useState } from 'react';

export default function LoveLetterPage() {
  // === BAGIAN LOGIKA (STATES) ===
  const [stage, setStage] = useState<'closed' | 'password' | 'open'>('closed');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  // GANTI PASSWORD-NYA DI SINI
  const CORRECT_PASSWORD = 'teamo'; 

  // Fungsi untuk cek password
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === CORRECT_PASSWORD) {
      setLoginError(false);
      setStage('open'); // Password bener, buka suratnya!
    } else {
      setLoginError(true); // Password salah
      setPasswordInput(''); // Reset input
    }
  };

  // === BAGIAN TAMPILAN (UI) ===
  return (
    <main className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4 font-sans text-gray-800">
      
      {/* 1. HEADER (Mirip foto kamu) */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-rose-600 tracking-tight">
          Sweet Letter
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          made with sincere heart 
        </p>
      </div>

      {/* 2. AREA AMPLOP / KOTAK DIALOG */}
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-rose-100 w-full max-w-lg transition-all duration-500 ease-in-out transform hover:scale-105">
        
        {/* === TAHAP 1: AMPLOP BELUM DIBUKA === */}
        {stage === 'closed' && (
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-semibold text-gray-700">You have a new message!</h2>
            {/* Ikon Amplop Besar */}
            <div className="text-9xl animate-pulse cursor-pointer hover:rotate-6 transition-transform">
              ✉️
            </div>
            <p className="text-gray-500">Click the envelope to unlock it.</p>
            <button 
              onClick={() => setStage('password')} // Klik untuk masuk ke tahap password
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md transition"
            >
              Open Message
            </button>
          </div>
        )}

        {/* === TAHAP 2: KONFIRMASI PASSWORD === */}
        {stage === 'password' && (
          <form onSubmit={handleUnlock} className="text-center space-y-6">
            <div className="text-6xl">🔒</div>
            <h2 className="text-2xl font-semibold text-gray-700">Authentication Required</h2>
            <p className="text-gray-600">Please enter the password to see the letter.</p>
            
           <input
          type="password"
          onChange={(e) => setPasswordInput(e.target.value)}
          placeholder="Enter password..."
          // Perhatikan penggunaan kurung kurawal di bawah ini
          className={`w-full p-4 border rounded-xl text-center text-lg focus:outline-none focus:ring-2 ${
          loginError 
        ?    'border-red-500 focus:ring-red-200' 
          : 'border-gray-300 focus:ring-rose-200'
          }`}
          required
          />
            
            {loginError && <p className="text-red-500 text-sm font-medium">❌ Incorrect password. Try again.</p>}
            
            <div className="flex space-x-3">
                <button 
                  type="button"
                  onClick={() => setStage('closed')} // Tombol Batal
                  className="w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition"
                >
                  Cancel
                </button>
                <button 
                  type="submit" // Tombol Unlock
                  className="w-1/2 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-xl shadow-md transition"
                >
                  Unlock
                </button>
            </div>
          </form>
        )}
        {/* === TAHAP 3: SURAT SUDAH TERBUKA === */}
        {stage === 'open' && (
          <div className="space-y-10 animate-fade-in">
            {/* Header Surat */}
            <div className="border-b-2 border-dashed border-rose-200 pb-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800">My Heartfelt Message</h2>
                <p className="text-rose-400 font-medium">To My Dearest Friend, Tea.</p>
            </div>

            {/* Isu Surat */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p className="indent-8">
                  Hi tea, idunno I just suddenly thought of making this, cz u are the biggest and sweetest person I've ever met! Hehe.. you know I'm right here if you want to say anything like "today i was.." or "damn it, today was.." lolol, i can be your listener all damn day. 
                </p>
                <p>
                  And I just want to say I'm really really enchanted to meet you. Maybe that's all, Thank you for being my friend in sky
                </p>
                <p className="font-semibold text-rose-500 text-center"> With Sincere Heart, Ola.</p>
            </div>

            {/* FOTO POLAROID */}
            <div className="border-t border-rose-100 pt-8 flex justify-center">
                {/* Frame Polaroid */}
                <div className="bg-white p-4 shadow-lg rotate-[-5deg] transform border-2 border-gray-100 inline-block">
                    {/* Kotak Gambarnya (Hanya placeholder warna pink) */}
                    <div className="w-60 h-60 bg-rose-100 flex items-center justify-center rounded border border-rose-200 mb-4">
                        <img src="/tea.jpeg" alt="Polaroid Memory" className="w-full h-full object-cover rounded" />
                        {/* Kalau ada foto beneran, hapus span di atas terus pakai <img src="/foto-kamu.jpg" /> */}
                    </div>
                    {/* Tulisan di bawah foto */}
                    <div className="font-mono text-center text-gray-500">
                        Tea.
                    </div>
                </div>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}