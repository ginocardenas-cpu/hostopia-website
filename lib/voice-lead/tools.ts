/**
 * ElevenLabs ElevenAgents — client tools (configure in the agent dashboard with these exact names).
 *
 * hostopia_submit_lead
 *   Call after you have collected name, work email, company, and enough context to decide fit.
 *   Parameters (JSON): fullName, email, company, phone (optional), role (optional),
 *   estimatedSMBs (optional), timeline (optional), qualified (boolean), qualificationSummary (optional).
 *
 * hostopia_open_qualified_booking
 *   Call only when the prospect is qualified and wants to speak with sales. Opens the scheduling URL.
 *   No parameters.
 *
 * Suggested agent goals: confirm partner/reseller or telco context, rough SMB volume, timeline,
 * then either thank and exit (not qualified) or submit_lead + open_qualified_booking (qualified).
 */
export const HOSTOPIA_SUBMIT_LEAD_TOOL = "hostopia_submit_lead";
export const HOSTOPIA_OPEN_BOOKING_TOOL = "hostopia_open_qualified_booking";

/** Shape to configure on the ElevenLabs agent for `hostopia_submit_lead`. */
export type SubmitPartnerLeadParams = {
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  role?: string;
  estimatedSMBs?: string;
  timeline?: string;
  qualified: boolean;
  qualificationSummary?: string;
};
