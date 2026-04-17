import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const API_BASE = 'http://localhost:4000/api';

async function testPhase2() {
  console.log('Fetching a random supplier...');
  const supplier = await prisma.supplier.findFirst();
  
  if (!supplier) {
    console.error('No supplier found!');
    process.exit(1);
  }
  
  console.log(`Testing invite for Supplier ID: ${supplier.id}`);
  
  // 1. Generate Invite
  const inviteRes = await fetch(`${API_BASE}/internal/suppliers/${supplier.id}/invite`, {
    method: 'POST'
  });
  
  if (!inviteRes.ok) {
    const errText = await inviteRes.text();
    console.error('Invite request failed:', inviteRes.status, errText);
    process.exit(1);
  }
  
  const inviteData = await inviteRes.json();
  console.log('Invite Response:', inviteData);
  
  if (!inviteData.tokenHash) {
    console.error('Failed to get token hash!');
    process.exit(1);
  }
  
  // 2. Submit Scope 3 Metrics using the token Hash
  const payload = {
    tokenHash: inviteData.tokenHash,
    metrics: [
      {
        scope3Category: "Upstream Transportation",
        activityValue: 1500,
        activityUnit: "km",
        reportingPeriod: "2026-04",
        notes: "Test automated submission"
      }
    ]
  };
  
  console.log('Submitting external metrics payload...');
  const submitRes = await fetch(`${API_BASE}/supplier/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  
  const submitData = await submitRes.json();
  console.log('Submit Response:', submitData);
}

testPhase2()
  .then(() => {
    console.log('Phase 2 E2E Test completed.');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
