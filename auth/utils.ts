import {Octokit} from "@octokit/core";
import type {Account} from 'next-auth'

const getOrgs = async (accessToken: string) => {
  const octokit = new Octokit({auth: accessToken});
  const {data} = await octokit.request('GET /user/orgs', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  return data;
}

/**
 * Check if user is in org
 * @param allowedOrgs
 * @param email
 * @param account
 */
export const isUserInOrg = async (allowedOrgs: string[], email: string | null, account: Account | null) => {
  try {
    if (account && account.access_token) {
      const data = await getOrgs(account.access_token);
      if (data) {
        const orgs = data.map((org: any) => org.login);
        if (orgs.some((org) => allowedOrgs.includes(org))) {
          return true;
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
  return false;
}

export type WhiteListedEmail = {
  email: string;
}

/**
 * Check if user is whitelisted
 * @param emails
 * @param email
 */
export const isWhitelisted = async (emails: WhiteListedEmail[], email: string | null) => {
  try {
    if (email && emails.find((w) => w.email === email)) {
      return true;
    }
  } catch (e) {
    console.log(e);
  }
  return false;
}

/**
 * Check if user is allowed to access the page
 * @param allowedOrgs
 * @param emails
 * @param email
 * @param account
 */
export const isUserAllowed = async (allowedOrgs: string[], emails: WhiteListedEmail[], email: string | null, account: Account | null) => {
  const isInOrg = await isUserInOrg(allowedOrgs, email, account);
  const whitelisted = await isWhitelisted(emails, email);

  return isInOrg || whitelisted;
}