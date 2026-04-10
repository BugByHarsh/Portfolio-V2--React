import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from "../context/ThemeContext";

const SPINNER = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']

// ==================== TERMINAL COMPONENTS ====================

function ResumeDownload() {
  const [frame, setFrame] = useState(0)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const spin = setInterval(() => setFrame(f => (f + 1) % SPINNER.length), 80)
    const s1 = setTimeout(() => setStep(1), 1000)
    const s2 = setTimeout(() => setStep(2), 2000)
    const s3 = setTimeout(() => {
      setStep(3)
      clearInterval(spin)
      // Trigger download after all steps complete
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'Harsh_Upadhyay_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 3000)
    return () => { clearInterval(spin); clearTimeout(s1); clearTimeout(s2); clearTimeout(s3) }
  }, [])

  return (
    <div className="space-y-0.5">
      <p className={`${step >= 1 ? 'text-green-500' : 'text-zinc-500'}`}>
        {step >= 1 ? '✓' : SPINNER[frame]} preparing resume...
      </p>
      <p className={`${step >= 2 ? 'text-green-500' : 'text-zinc-500'}`}>
        {step >= 2 ? '✓' : SPINNER[(frame + 3) % SPINNER.length]} optimizing file
      </p>
      <p className={`${step >= 3 ? 'text-green-500' : 'text-zinc-500'}`}>
        {step >= 3 ? '✓' : SPINNER[(frame + 6) % SPINNER.length]} initiating download
      </p>
      {step >= 3 && (
        <p className="text-green-500 font-medium mt-1">Download started! Check your downloads folder</p>
      )}
    </div>
  )
}

// ==================== MODIFY COMMANDS HERE ====================
const RESPONSES = {
  help: () => (
    <div className="space-y-1.5">
      <p className="text-zinc-400 mb-2">available commands:</p>
      {([
        ['whoami', 'who am i?'],
        ['skills', 'tech stack'],
        ['experience', 'work background'],
        ['philosophy', 'my values & approach'],
        ['contact', 'get in touch'],
        ['resume', 'download my cv'],
        ['', ''],
        ['fun', 'fun facts about me'],
        ['rps', 'rock paper scissors game'],
        ['', ''],
        ['clear', 'clear terminal'],
      ]).map(([cmd, desc], idx) => cmd === '' ? (
        <div key={`empty-${idx}`} />
      ) : (
        <div key={cmd} className="flex gap-3">
          <span className="text-purple-400 shrink-0 w-44">{cmd}</span>
          <span className="text-zinc-500">— {desc}</span>
        </div>
      ))}
    </div>
  ),
  whoami: () => (
  <div className="space-y-1">
    <p className="text-zinc-800">Harsh Upadhyay</p>
    <p className="text-zinc-500">Full-Stack Developer · Founder of CSS Arena</p>
    <p className="text-zinc-500">Building scalable web apps & occasionally breaking them</p>
    <p className="text-zinc-500">Turning coffee into code since 2021</p>
    <p className="text-zinc-500">Debugging things I confidently wrote</p>
    <p className="text-zinc-400 mt-1">India-based · Ships fast, fixes faster</p>
  </div>
  ),
  skills: () => (
    <div className="space-y-0.5">
      <p className="text-zinc-400">Frontend: React, JavaScript, Tailwind CSS</p>
      <p className="text-zinc-400">Backend: Node.js, Express, MongoDB, MySQL</p>
      <p className="text-zinc-400">Mobile: Cross-platform development</p>
      <p className="text-zinc-400">DevOps: Git, Docker basics</p>
    </div>
  ),
  philosophy: () => (
    <div className="space-y-1">
      <p className="text-purple-400 font-medium">What I care about:</p>
      <p className="text-zinc-400">→ Clean, scalable architecture</p>
      <p className="text-zinc-400">→ User experience that feels natural</p>
      <p className="text-zinc-400">→ Code that's readable & maintainable</p>
      <p className="text-zinc-400">→ Performance-first development</p>
      <p className="text-zinc-400">→ Mobile-first approach</p>
      <p className="text-zinc-400">→ Fast APIs & optimized backends</p>
    </div>
  ),
  experience: () => (
    <div className="space-y-2">
      <div className="border-l-2 border-purple-400 pl-3">
        <p className="text-zinc-400 text-sm">Full Stack Developer</p>
        <p className="text-purple-400 font-medium">Ezzstar</p>
        <p className="text-zinc-500 text-sm">July 2025 — Present</p>
        <p className="text-zinc-400 text-sm mt-1">Building scalable web platforms & APIs</p>
        <p className="text-zinc-400 text-sm">• React • Node.js • MongoDB • Express</p>
      </div>
      <p className="text-zinc-400 text-xs mt-2">Founder, CSS Arena | 2023 - Present</p>
      <p className="text-zinc-400 text-xs">Interactive learning platform for web development</p>
    </div>
  ),
  contact: () => (
    <div className="space-y-0.5">
      <p className="text-green-500 font-medium">✓ connection established</p>
      <p className="text-zinc-500">Email: your-email@example.com</p>
      <p className="text-zinc-500">GitHub: github.com/yourprofile</p>
      <p className="text-zinc-500">LinkedIn: linkedin.com/in/yourprofile</p>
    </div>
  ),
  resume: () => <ResumeDownload />,
  fun: () => (
    <div className="space-y-0.5">
      <p className="text-zinc-400">→ "It worked yesterday, I swear"</p>
      <p className="text-zinc-400">→ Testing is for atheists, I believe in push and pray</p>
      <p className="text-zinc-400">→ It’s not a bug, it’s a feature</p>
      <p className="text-zinc-400">→ I read error messages… eventually</p>
      <p className="text-zinc-400">→ Works on my machine though</p>
      <p className="text-zinc-400">→ My bugs fear me (I ignore them)</p>
    </div>
  ),
  rps: () => (
    <div className="space-y-1">
      <p className="text-cyan-400 font-medium">Rock Paper Scissors</p>
      <p className="text-zinc-400 text-sm">Commands: rps rock, rps paper, rps scissors</p>
      <p className="text-zinc-400 text-sm mt-1">Example: type 'rps rock' to play</p>
    </div>
  ),
}

// ==================== END MODIFICATION SECTION ====================

const KONAMI_KEYS = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

function TerminalCard({ isCosmos }) {
  const [history, setHistory] = useState([
    {
      id: 0, type: 'info', content: (
        <div className="space-y-0.5">
          <p className={`font-medium ${isCosmos ? "text-purple-400" : "text-zinc-600"}`}>harsh@portfolio ~ v1.0.0</p>
          <p className={isCosmos ? "text-zinc-400" : "text-zinc-400"}>
            type <span className={isCosmos ? "text-purple-400" : "text-purple-600"}>help</span> to see available commands.
          </p>
        </div>
      )
    },
  ])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [cmdHistIdx, setCmdHistIdx] = useState(-1)
  const [cursorPos, setCursorPos] = useState(0)
  const [focused, setFocused] = useState(false)

  const scrollRef = useRef(null)
  const terminalRef = useRef(null)
  const konamiIdx = useRef(0)
  const focusedRef = useRef(false)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [history, input])

  const triggerKonami = () => {
    if (terminalRef.current) terminalRef.current.focus()
    setHistory(h => [...h,
    { id: Date.now(), type: 'cmd', content: '↑↑↓↓←→←→BA' },
    {
      id: Date.now() + 1, type: 'output', content: (
        <div className="space-y-0.5">
          <p className="text-yellow-500 font-medium">★ CHEAT CODE ACCEPTED ★</p>
          <p className="text-zinc-500">You found the secret! 🎉</p>
          <p className="text-zinc-400">achievement unlocked: "Easter egg hunter"</p>
        </div>
      )
    },
    ])
  }
  const triggerKonamiRef = useRef(triggerKonami)
  triggerKonamiRef.current = triggerKonami

  function advanceKonami(key) {
    if (key === KONAMI_KEYS[konamiIdx.current]) {
      konamiIdx.current++
      if (konamiIdx.current === KONAMI_KEYS.length) {
        konamiIdx.current = 0
        return true
      }
    } else {
      konamiIdx.current = key === KONAMI_KEYS[0] ? 1 : 0
    }
    return false
  }

  useEffect(() => {
    function onGlobalKey(e) {
      if (focusedRef.current) return
      if (advanceKonami(e.key)) triggerKonamiRef.current()
    }
    window.addEventListener('keydown', onGlobalKey)
    return () => window.removeEventListener('keydown', onGlobalKey)
  }, [])

  function submit(cmd) {
    const trimmed = cmd.trim().toLowerCase()
    if (!trimmed) return

    if (trimmed === 'clear') {
      setHistory([])
      setCmdHistory(h => [trimmed, ...h])
      setCmdHistIdx(-1)
      setInput('')
      setCursorPos(0)
      return
    }

    const scrollToBottom = () => { const el = scrollRef.current; if (el) el.scrollTop = el.scrollHeight }
    const clearTerminal = () => {
      setHistory([{
        id: Date.now(), type: 'info', content: (
          <div className="space-y-0.5">
            <p className="text-zinc-600">Terminal ready for next command</p>
          </div>
        )
      }])
      setInput('')
      setCursorPos(0)
    }

    // Handle RPS game with arguments
    const parts = trimmed.split(' ')
    const baseCommand = parts[0]
    const argument = parts[1]

    let responseFn

    if (baseCommand === 'rps' && argument) {
      const choices = ['rock', 'paper', 'scissors']
      if (!choices.includes(argument)) {
        setHistory(h => [
          ...h,
          { id: Date.now(), type: 'cmd', content: trimmed },
          { id: Date.now() + 1, type: 'error', content: 'invalid choice. use: rock, paper, or scissors' },
        ])
        setCmdHistory(h => [trimmed, ...h])
        setCmdHistIdx(-1)
        setInput('')
        setCursorPos(0)
        return
      }

      const computerChoice = choices[Math.floor(Math.random() * choices.length)]
      let result
      if (argument === computerChoice) {
        result = "it's a tie! 🤝"
      } else if (
        (argument === 'rock' && computerChoice === 'scissors') ||
        (argument === 'paper' && computerChoice === 'rock') ||
        (argument === 'scissors' && computerChoice === 'paper')
      ) {
        result = 'you win! 🎉'
      } else {
        result = 'i win! 🤖'
      }

      responseFn = () => (
        <div className="space-y-0.5">
          <p className="text-zinc-400">you played: <span className="text-cyan-400 font-medium">{argument}</span></p>
          <p className="text-zinc-400">i played: <span className="text-purple-400 font-medium">{computerChoice}</span></p>
          <p className={`font-medium mt-1 ${result.includes('win') && !result.includes('tie') ? 'text-green-500' : result.includes('tie') ? 'text-yellow-400' : 'text-red-400'}`}>{result}</p>
          <p className="text-zinc-400 text-sm mt-1">try again: rps rock/paper/scissors</p>
        </div>
      )
    } else if (baseCommand === 'rps') {
      responseFn = RESPONSES['rps']
    } else {
      responseFn = RESPONSES[trimmed]
    }

    setHistory(h => [
      ...h,
      { id: Date.now(), type: 'cmd', content: trimmed },
      responseFn
        ? { id: Date.now() + 1, type: 'output', content: responseFn({ clear: clearTerminal, scroll: scrollToBottom }) }
        : { id: Date.now() + 1, type: 'error', content: `command not found: ${trimmed}. try 'help'` },
    ])
    setCmdHistory(h => [trimmed, ...h])
    setCmdHistIdx(-1)
    setInput('')
    setCursorPos(0)
  }

  function handleKeyDown(e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return
    e.preventDefault()
    e.stopPropagation()
    if (advanceKonami(e.key)) { triggerKonamiRef.current(); return }

    if (e.key === 'Enter') {
      submit(input)
    } else if (e.key === 'Backspace') {
      if (cursorPos === 0) return
      setInput(i => i.slice(0, cursorPos - 1) + i.slice(cursorPos))
      setCursorPos(p => p - 1)
    } else if (e.key === 'ArrowLeft') {
      setCursorPos(p => Math.max(0, p - 1))
    } else if (e.key === 'ArrowRight') {
      setCursorPos(p => Math.min(input.length, p + 1))
    } else if (e.key === 'ArrowUp') {
      const next = Math.min(cmdHistIdx + 1, cmdHistory.length - 1)
      setCmdHistIdx(next)
      const val = cmdHistory[next] ?? ''
      setInput(val)
      setCursorPos(val.length)
    } else if (e.key === 'ArrowDown') {
      const next = Math.max(cmdHistIdx - 1, -1)
      setCmdHistIdx(next)
      const val = next === -1 ? '' : cmdHistory[next]
      setInput(val)
      setCursorPos(val.length)
    } else if (e.key.length === 1) {
      setInput(i => i.slice(0, cursorPos) + e.key + i.slice(cursorPos))
      setCursorPos(p => p + 1)
    }
  }

  return (
    <div
      ref={terminalRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onFocus={() => { setFocused(true); focusedRef.current = true }}
      onBlur={() => { setFocused(false); focusedRef.current = false }}
      onClick={() => { if (terminalRef.current) terminalRef.current.focus() }}
      className={`rounded-2xl mx-10 overflow-hidden border shadow-sm cursor-text outline-none ${isCosmos ? "border-purple-500/30 bg-black/50" : "border-zinc-200 bg-white"}`}
    >
      {/* Chrome */}
      <div className={`flex items-center gap-1.5 px-5 py-3.5 border-b select-none ${isCosmos ? "bg-black/30 border-purple-500/20" : "bg-zinc-50 border-zinc-200"}`}>
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className={`ml-auto font-mono text-[10px] ${isCosmos ? "text-purple-400/50" : "text-zinc-400"}`}>harsh@portfolio: ~</span>
      </div>

      {/* History */}
      <div ref={scrollRef} className={`p-6 font-mono text-[13px] h-80 overflow-y-auto space-y-3 select-none ${isCosmos ? "bg-black/40" : "bg-white"}`}>
        {history.map(entry => (
          <div key={entry.id}>
            {entry.type === 'cmd' && (
              <div className="flex gap-2">
                <span className={isCosmos ? "text-purple-400" : "text-purple-600"}>~$</span>
                <span className={isCosmos ? "text-white/70" : "text-zinc-800"}>{entry.content}</span>
              </div>
            )}
            {entry.type === 'output' && (
              <div className={`pl-4 ${isCosmos ? "text-white/50" : "text-zinc-500"}`}>{entry.content}</div>
            )}
            {entry.type === 'error' && (
              <div className="pl-4 text-red-400">{entry.content}</div>
            )}
            {entry.type === 'info' && (
              <div className={isCosmos ? "text-white/40" : "text-zinc-400"}>{entry.content}</div>
            )}
          </div>
        ))}

        {/* Active prompt */}
        <div className="flex items-start gap-2">
          <span className={isCosmos ? "text-purple-400" : "text-purple-600"}>~$</span>
          <span className={`break-all ${isCosmos ? "text-white/70" : "text-zinc-800"}`}>
            {focused ? (
              <>
                {input.slice(0, cursorPos)}
                <span className={`${isCosmos ? "bg-purple-500 text-white" : "bg-purple-600 text-white"}`}>{input[cursorPos] ?? '\u00A0'}</span>
                {input.slice(cursorPos + 1)}
              </>
            ) : (
              <>{input}<span className={`inline-block w-[7px] h-[13px] align-middle ml-px ${isCosmos ? "bg-white/30" : "bg-zinc-300"}`} /></>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

const About = () => {
  const { theme } = useTheme();
  const isCosmos = theme === "cosmos";

  return (
    <section
      id="about"
      className={`w-full py-16 scroll-mt-18 md:px-10 px-4 transition-colors duration-500 ${isCosmos ? "bg-black/70 text-white" : "bg-white text-gray-900"
        }`}
    >
      {/* Title */}
      <div className="flex items-end justify-between mb-10">
        <h1 className={`text-lg font-semibold ${isCosmos ? "text-purple-400" : "text-black"}`}>
                     // About
        </h1>
        <p className={`text-xs hidden sm:block ${isCosmos ? "text-white/30" : "text-gray-400"}`}>
          Interactive Terminal
        </p>
      </div>

      {/* Full-width Terminal */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <TerminalCard isCosmos={isCosmos} />
          <p className={`text-[10px] text-center mt-3 ${isCosmos ? "text-white/40" : "text-gray-400"}`}>click to interact • type 'help' to get started</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;