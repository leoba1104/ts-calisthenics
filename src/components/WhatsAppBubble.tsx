const WA_NUMBER = '5491100000000' // reemplazar con el número real
const WA_MESSAGE = encodeURIComponent('Hola! Quiero saber más sobre las clases de TS Calisthenics 💪')

export default function WhatsAppBubble() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      {/* tooltip */}
      <span className="
        hidden sm:block
        opacity-0 group-hover:opacity-100
        translate-x-2 group-hover:translate-x-0
        transition-all duration-200
        bg-surface2 border border-border
        text-white text-[13px] font-semibold
        px-4 py-2 rounded-full
        whitespace-nowrap shadow-lg
      ">
        Hablemos por WhatsApp
      </span>

      {/* bubble */}
      <div className="
        w-14 h-14 rounded-full
        bg-[#25D366] hover:bg-[#1ebe5d]
        shadow-[0_4px_24px_rgba(37,211,102,0.4)]
        hover:shadow-[0_4px_32px_rgba(37,211,102,0.6)]
        hover:scale-110
        transition-all duration-200
        flex items-center justify-center
      ">
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.666 4.797 1.822 6.797L2 30l7.418-1.797A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.548 11.548 0 01-5.885-1.608l-.422-.252-4.403 1.066 1.1-4.29-.276-.44A11.554 11.554 0 014.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.34-8.64c-.347-.174-2.056-1.014-2.375-1.13-.318-.115-.55-.174-.78.174-.232.347-.895 1.13-1.098 1.362-.202.232-.405.26-.752.087-.347-.174-1.464-.54-2.79-1.72-1.03-.92-1.727-2.055-1.93-2.402-.202-.347-.022-.534.152-.707.156-.156.347-.405.52-.608.174-.202.232-.347.347-.578.116-.232.058-.434-.029-.608-.087-.174-.78-1.882-1.07-2.578-.282-.678-.568-.586-.78-.596l-.665-.012c-.232 0-.608.087-.926.434-.318.347-1.214 1.187-1.214 2.895s1.243 3.358 1.417 3.59c.174.232 2.446 3.733 5.927 5.235.828.357 1.474.571 1.978.73.831.265 1.587.228 2.184.138.666-.1 2.056-.84 2.346-1.652.29-.811.29-1.507.202-1.652-.087-.144-.318-.232-.665-.405z"/>
        </svg>
      </div>
    </a>
  )
}
