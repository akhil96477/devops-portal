import { useState } from 'react'
import Dashboard from './components/Dashboard'
import DeployForm from './components/DeployForm'
import ResourcesList from './components/ResourcesList'
import Settings from './components/Settings'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="brand">
            <span className="highlight">■</span> DevOpsPortal
          </div>
          
          <ul className="nav-links">
            <li className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
              Dashboard
            </li>
            <li className={`nav-item ${activeTab === 'resources' ? 'active' : ''}`} onClick={() => setActiveTab('resources')}>
              Resources
            </li>
            <li className={`nav-item ${activeTab === 'deploy' ? 'active' : ''}`} onClick={() => setActiveTab('deploy')}>
              Deploy
            </li>
            <li className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
              Settings
            </li>
          </ul>
        </div>
        
        {/* Sidebar Footer - Heavy UI block */}
        <div style={{ marginTop: 'auto', background: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Environment Health</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)' }}></div>
            <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-main)' }}>All Systems Normal</span>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Last checked 2 mins ago.</p>
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
            <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '500' }}>View Docs</a>
            <span style={{ color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>v2.4.1</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header" style={{ justifyContent: 'space-between' }}>
          
          {/* Heavy Search Bar Element */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f1f5f9', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color)', width: '350px' }}>
              <span style={{ color: '#94a3b8' }}>🔍</span>
              <input type="text" placeholder="Search resources, logs, or deployments (Press '/')" style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.85rem', width: '100%', color: 'var(--text-main)' }} />
            </div>
            <span style={{ padding: '0.25rem 0.5rem', background: '#f8fafc', borderRadius: '4px', border: '1px solid var(--border-color)', fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>us-east-1</span>
          </div>

          <div className="user-profile">
            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)', lineHeight: '1.2' }}>alex.dev</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Administrator</span>
            </div>
            <div className="avatar">AD</div>
          </div>
        </header>
        
        {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
        {activeTab === 'deploy' && <DeployForm />}
        {activeTab === 'resources' && <ResourcesList />}
        {activeTab === 'settings' && <Settings />}
      </main>
    </div>
  )
}

export default App
