import { useEffect, useState } from "react";
import "./App.css";

const agents = [
  {
    name: "Planner Agent",
    icon: "🧠",
    description: "Breaking your goal into actionable tasks.",
  },
  {
    name: "Research Agent",
    icon: "🔍",
    description: "Analyzing users, market and competitors.",
  },
  {
    name: "Strategy Agent",
    icon: "💡",
    description: "Creating your MVP and business strategy.",
  },
  {
    name: "Creator Agent",
    icon: "🎨",
    description: "Building your brand and launch assets.",
  },
  {
    name: "Reviewer Agent",
    icon: "🧐",
    description: "Checking the work and finding improvements.",
  },
];

function App() {
  const [goal, setGoal] = useState("");
  const [started, setStarted] = useState(false);
  const [activeAgent, setActiveAgent] = useState(0);

  useEffect(() => {
    if (!started || activeAgent >= agents.length) return;

    const timer = setTimeout(() => {
      setActiveAgent((current) => current + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [started, activeAgent]);

  const startRun = () => {
    if (!goal.trim()) {
      alert("Please enter your idea first.");
      return;
    }

    setActiveAgent(0);
    setStarted(true);
  };

  const getStatus = (index) => {
    if (index < activeAgent) return "complete";
    if (index === activeAgent && activeAgent < agents.length) {
      return "working";
    }
    return "waiting";
  };

  const getStatusText = (index) => {
    const status = getStatus(index);

    if (status === "complete") return "✓ Complete";
    if (status === "working") return "● Working";
    return "○ Waiting";
  };

  const progress = Math.min(
    100,
    Math.round((activeAgent / agents.length) * 100)
  );

  if (started) {
    return (
      <div className="workspace">
        <nav className="navbar">
          <div className="logo">
            <span>✦</span> VenturePilot
          </div>

          <div className="run-status">
            ● Autonomous Run
          </div>
        </nav>

        <main className="dashboard">

          <div className="dashboard-header">
            <div>
              <p className="eyebrow">AUTONOMOUS WORKSPACE</p>

              <h1>
                {activeAgent >= agents.length
                  ? "Your venture plan is ready."
                  : "Your AI team is working."}
              </h1>

              <p className="goal-text">
                Goal: {goal}
              </p>
            </div>

            <div className="progress-card">
              <span>Progress</span>
              <strong>{progress}%</strong>
            </div>
          </div>

          {/* AGENTS */}

          <section className="agent-grid">

            {agents.map((agent, index) => {
              const status = getStatus(index);

              return (
                <div
                  className={`agent-card ${status}`}
                  key={agent.name}
                >
                  <div className="agent-icon">
                    {agent.icon}
                  </div>

                  <div>
                    <h3>{agent.name}</h3>
                    <p>{agent.description}</p>
                  </div>

                  <span className="agent-status">
                    {getStatusText(index)}
                  </span>
                </div>
              );
            })}

          </section>

          {/* ACTIVITY */}

          <section className="activity-card">

            <div className="activity-header">
              <h2>AI Activity</h2>
              <span>LIVE</span>
            </div>

            {agents.map((agent, index) => {
              const status = getStatus(index);

              return (
                <div className="activity" key={agent.name}>

                  <span>
                    {status === "complete"
                      ? "✓"
                      : status === "working"
                      ? "●"
                      : "○"}
                  </span>

                  {status === "complete"
                    ? `${agent.name} completed its task`
                    : status === "working"
                    ? `${agent.name} is working...`
                    : `${agent.name} waiting`}

                </div>
              );
            })}

          </section>

          {/* FINAL REPORT */}

          {activeAgent >= agents.length && (
            <section className="venture-report">

              <div className="report-header">
                <div>
                  <p className="eyebrow">AUTONOMOUS RESULT</p>
                  <h2>🚀 Venture Report</h2>
                </div>

                <div className="ready-badge">
                  ✓ READY
                </div>
              </div>

              <div className="report-section">
                <h3>🎯 Problem</h3>

                <p>
                  College students often struggle to discover internships
                  that match their skills, interests and career goals.
                </p>
              </div>

              <div className="report-section">
                <h3>👥 Target Users</h3>

                <div className="tag-container">
                  <span>College Students</span>
                  <span>Fresh Graduates</span>
                  <span>Early Career Seekers</span>
                </div>
              </div>

              <div className="report-section">
                <h3>💡 Proposed Solution</h3>

                <p>
                  An AI-powered platform that understands a student's
                  skills and preferences and recommends relevant internship
                  opportunities.
                </p>
              </div>

              <div className="report-grid">

                <div className="report-box">
                  <h3>⭐ MVP Features</h3>

                  <ul>
                    <li>AI skill analysis</li>
                    <li>Personalized internship matching</li>
                    <li>Application tracker</li>
                    <li>Resume-based recommendations</li>
                  </ul>
                </div>

                <div className="report-box">
                  <h3>🏆 Unique Value</h3>

                  <p>
                    Personalized recommendations instead of showing
                    students hundreds of irrelevant listings.
                  </p>
                </div>

              </div>

              <div className="report-section">
                <h3>📈 Launch Roadmap</h3>

                <div className="roadmap">

                  <div>
                    <strong>01</strong>
                    <span>Validate student needs</span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>Build MVP</span>
                  </div>

                  <div>
                    <strong>03</strong>
                    <span>Test with students</span>
                  </div>

                  <div>
                    <strong>04</strong>
                    <span>Launch publicly</span>
                  </div>

                </div>
              </div>

              <div className="autonomy-message">
                <span>🤖</span>

                <div>
                  <strong>Autonomous decision complete</strong>

                  <p>
                    The AI team planned, analyzed, created and reviewed
                    the venture without requiring step-by-step instructions.
                  </p>
                </div>
              </div>

            </section>
          )}

        </main>
      </div>
    );
  }

  /* LANDING PAGE */

  return (
    <div className="app">

      <nav className="navbar">

        <div className="logo">
          <span>✦</span> VenturePilot
        </div>

        <div className="nav-right">
          <span>Autonomous AI Creator</span>
          <button>AI Powered</button>
        </div>

      </nav>

      <main className="hero">

        <div className="badge">
          ✨ AI that takes ownership of your idea
        </div>

        <h1>
          Turn one idea into
          <span> a launch-ready venture.</span>
        </h1>

        <p className="subtitle">
          Give VenturePilot one goal. Our autonomous AI team researches,
          plans, creates, reviews, and improves it for you.
        </p>

        <div className="goal-card">

          <label>What do you want to build?</label>

          <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Example: Build a platform that helps college students find internships..."
          />

          <button
            className="launch-btn"
            onClick={startRun}
          >
            🚀 Start Autonomous Run
          </button>

        </div>

        <div className="agents">
          <div>🧠 Planner</div>
          <div>🔍 Researcher</div>
          <div>💡 Strategist</div>
          <div>🎨 Creator</div>
          <div>🧐 Reviewer</div>
        </div>

      </main>

    </div>
  );
}

export default App;
