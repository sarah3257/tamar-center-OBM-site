import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: import.meta.env.VITE_BASE44_APP_ID, 
  requiresAuth: import.meta.env.VITE_BASE44_REQUIRE_AUTH === 'true'
});
