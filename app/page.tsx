'use client';

import { useState } from 'react';

export default function LoveLetterPage() {
  // === 1. LOGIKA (STATES) ===
  const [stage, setStage] = useState<'closed' | 'password' | 'open'>('closed');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  // KONFIGURASI DATA
  const CORRECT_PASSWORD = 'teamo'; 
  
  const photos = [
    { src: '/us3.jpeg', caption: 'Me, You, Atmosphere' },
    { src: '/tea.jpeg', caption: 'Tea.' },
    { src: '/us1.jpeg', caption: 'Duo' },
    { src: '/us2.png', caption: 'Grandma Core' },
    
  ];

  // === 2. FUNGSI ===
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === CORRECT_PASSWORD) {
      setLoginError(false);
      setStage('open');
    } else {
      setLoginError(true);
      setPasswordInput('');
    }
  };

  const nextPhoto = () => setCurrentPhoto((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#fff0f3] relative overflow-hidden font-sans">
      
      {/* BACKGROUND VIDEO DENGAN EFEK SCREEN (CERAH) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ mixBlendMode: "screen", opacity: 0.8 }}
      >
        <source src="/petals.mp4" type="video/mp4" />
      </video>

      {/* 3. AREA KONTEN UTAMA */}
      <div className="relative z-20 w-full max-w-sm md:max-w-md">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-[#ff4d6d] tracking-tight drop-shadow-sm">
            Letters 
          </h1>
          <p className="text-[#ff758f] mt-2 text-lg font-medium opacity-90">
            chào, hola, halo, hi, bonjour, 你好, Привет
          </p>
        </div>

        {/* BOX PUTIH / CARD (GLASSMORPHISM) */}
        <div className="bg-white/40 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/50 transition-all duration-500">
          
          {/* TAHAP 1: AMPLOP BELUM DIBUKA */}
          {stage === 'closed' && (
            <div className="text-center space-y-8 py-4">
              <h2 className="text-2xl font-semibold text-gray-700">You have a new message!</h2>
              <div className="text-9xl animate-pulse cursor-pointer hover:rotate-6 transition-transform">
                ✉️
              </div>
              <p className="text-gray-500">Click the button to unlock it.</p>
              <button 
                onClick={() => setStage('password')}
                className="w-full bg-[#ff4d6d] hover:bg-[#ff758f] text-white font-bold py-4 rounded-2xl shadow-lg transition active:scale-95"
              >
                Open Message
              </button>
            </div>
          )}

          {/* TAHAP 2: KONFIRMASI PASSWORD */}
          {stage === 'password' && (
            <form onSubmit={handleUnlock} autoComplete="off" className="text-center space-y-6">
              <div className="text-6xl">🔒</div>
              <h2 className="text-2xl font-semibold text-gray-700">Security Check</h2>
              <p className="text-gray-600 text-sm">Please enter the password to see the letter.</p>
              
              <input 
                type="password"
                name="not-a-password"
                autoComplete="new-password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                className={`w-full p-4 bg-white/60 border-2 rounded-2xl text-center text-lg focus:outline-none transition text-[#c9184a] placeholder-pink-200 font-bold ${
                  loginError ? 'border-red-400 focus:ring-red-100' : 'border-pink-100 focus:ring-rose-100'
                }`}
                required
              />
              
              {loginError && <p className="text-red-500 text-sm font-medium">❌ Incorrect password. Try again.</p>}
              
              <div className="flex space-x-3">
                  <button 
                    type="button"
                    onClick={() => setStage('closed')}
                    className="w-1/2 bg-gray-100 text-gray-500 font-semibold py-3 rounded-xl hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="w-1/2 bg-[#ff4d6d] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-[#ff758f] transition"
                  >
                    Unlock
                  </button>
              </div>
            </form>
          )}

          {/* TAHAP 3: SURAT SUDAH TERBUKA */}
          {stage === 'open' && (
            <div className="space-y-8 animate-in fade-in zoom-in duration-700">
              <div className="border-b-2 border-dashed border-rose-200 pb-4 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 tracking-tight">My Heartfelt Message</h2>
                  <p className="text-rose-400 font-medium">To My Dearest Friend, Tea.</p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-lg italic">
                  <p className="indent-8">
                  Hi tea, idunno I just suddenly thought of making this, cz you are probably the biggest and sweetest soul I’ve ever met. 
                  I know lately things have been feeling heavy with all those exams— I see how hard you’re working, and I’m already so proud of you.
                  </p>
                  <p>
                    Please don't push yourself too hard, okay? Your brain needs a break too! If you ever feel like the world is a bit too much, or if those exams are driving you crazy, I’m right here. Whether you want to tell me 'today I was...' or just a frustrated 'damn it, today was...', 
                    I’ll be your listener all day long. No judgment, istg.
                  </p>
                  <p>
                    Actually, I also want to be honest with you— I’m far from perfect and I’m definitely not that good at many things, so please don't have too high expectations of me.. 
                    I really hope our friendship can last for a very long time, through the busy we do, and all the damn time we spend together in Sky. I’d love to keep growing and learning alongside a soul as kind as yours.
                  </p>
                  <p>
                    I’m truly, deeply enchanted to meet you. Thank you for being such a light in my life and for being my favorite person.
                  </p>
                  <p>
                    Until then, eat well, get some proper sleep, and just breathe. You’re doing amazing.
                  </p>
                  <p>
                    Cố lên nhé, myscoobydobbydoosweetdarl supercalifragilisticexpialidocious 😼⭐️‼️
                  </p>
                  <p className="font-bold text-rose-500 text-center not-italic"> With Sincere Heart, Ola.</p>
              </div>

              {/* SLIDER POLAROID */}
              <div className="relative pt-6 flex justify-center">
                <div className="group relative">
                  <div className="bg-white p-4 shadow-xl rotate-[-3deg] transform border-2 border-gray-50 inline-block w-64 md:w-72 transition-transform duration-500">
                    <div className="w-full h-64 bg-rose-50 rounded overflow-hidden mb-4 relative">
                      <img 
                        src={photos[currentPhoto].src} 
                        alt="Memory" 
                        className="w-full h-full object-cover transition-opacity duration-500" 
                      />
                    </div>
                    <div className="font-mono text-center text-gray-500 text-sm">
                      {photos[currentPhoto].caption}
                    </div>
                  </div>

                  {/* TOMBOL NAVIGASI */}
                  <button 
                    onClick={prevPhoto} 
                    className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center border border-rose-100 hover:bg-rose-50 z-30"
                  >
                    ⬅️
                  </button>
                  <button 
                    onClick={nextPhoto} 
                    className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center border border-rose-100 hover:bg-rose-50 z-30"
                  >
                    ➡️
                  </button>
                </div>
              </div>
              <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest mt-2">Tap arrows to see more photos</p>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}