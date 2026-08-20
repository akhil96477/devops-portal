import React, { useState } from 'react';

const DeployForm = () => {
  const [template, setTemplate] = useState('');
  const [resourceName, setResourceName] = useState('');

  const handleDeploy = (e) => {
    e.preventDefault();
    if (!template || !resourceName) {
      alert("Please enter a name and select a template first.");
      return;
    }
    alert(`Triggering GitOps workflow to deploy ${template} named ${resourceName}...`);
    // In the real app, this calls API Gateway
  };

  return (
    <div className="content-area" style={{ height: 'calc(100vh - 70px)', paddingBottom: '2rem', display: 'block' }}>
      <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Provision New Resource</h2>
      
      <div className="panel" style={{ padding: '2.5rem', maxWidth: '700px' }}>
        <form onSubmit={handleDeploy} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>Environment Name</label>
            <input 
              type="text" 
              value={resourceName}
              onChange={(e) => setResourceName(e.target.value)}
              placeholder="e.g., prod-api-gateway"
              style={{
                padding: '1rem',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>Select Template (Free Tier)</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              
              <div 
                onClick={() => setTemplate('static-site')}
                style={{
                  padding: '1.5rem',
                  border: `2px solid ${template === 'static-site' ? 'var(--primary-color)' : 'var(--border-color)'}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  background: template === 'static-site' ? '#f0f9ff' : '#ffffff',
                  transition: 'all 0.2s ease',
                  boxShadow: template === 'static-site' ? '0 4px 6px rgba(2, 132, 199, 0.1)' : 'var(--shadow-sm)'
                }}
              >
                <h4 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ fontSize: '1.2rem' }}>🌐</span> Static Website (S3)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Provisions an S3 bucket configured for static web hosting. 100% Free Tier eligible.</p>
              </div>

              <div 
                onClick={() => setTemplate('serverless-api')}
                style={{
                  padding: '1.5rem',
                  border: `2px solid ${template === 'serverless-api' ? 'var(--primary-color)' : 'var(--border-color)'}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  background: template === 'serverless-api' ? '#f0f9ff' : '#ffffff',
                  transition: 'all 0.2s ease',
                  boxShadow: template === 'serverless-api' ? '0 4px 6px rgba(2, 132, 199, 0.1)' : 'var(--shadow-sm)'
                }}
              >
                <h4 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ fontSize: '1.2rem' }}>⚡</span> Serverless API</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Creates a REST API backed by a Node.js Lambda function. Highly scalable, costs $0 when idle.</p>
              </div>

            </div>
          </div>

          <button type="submit" className="btn primary" style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.05rem', fontWeight: '600' }}>
            Initialize Deployment 🚀
          </button>

        </form>
      </div>
    </div>
  );
};

export default DeployForm;
