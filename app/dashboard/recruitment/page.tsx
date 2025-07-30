"use client";
import React from "react";

export default function RecruitmentPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: 4 }}>Recruitment</h1>
          <p style={{ color: '#666', fontSize: 16, margin: 0 }}>
            Manage job openings, view applicants, and track hiring progress.
          </p>
        </div>
        <button
          style={{
            background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 20px', fontWeight: 600, fontSize: 15, cursor: 'pointer', boxShadow: '0 2px 8px #2563eb22', transition: 'background 0.2s',
          }}
          onClick={() => alert('Add Position functionality coming soon!')}
        >
          + Add New Position
        </button>
      </div>
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px #0001', padding: '2rem', marginTop: 0 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 18 }}>Open Positions</h2>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 15, background: '#fafbfc', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 4px #0001' }}>
          <thead style={{ background: '#f3f4f6' }}>
            <tr>
              <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 700, color: '#222' }}>Position</th>
              <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 700, color: '#222' }}>Department</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Status</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Software Engineer</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Engineering</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Open</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><button>View</button></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>HR Specialist</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Human Resources</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Closed</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><button>View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
