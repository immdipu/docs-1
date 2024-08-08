import platformApiPages from "./reference/platform.json";
import readApiPages from "./reference/read.json";
import writeApiPages from "./reference/write.json";
import fs from "fs";

export interface MintConfig {
  name?: string;
  openapi?: string;
  logo?: {
    light?: string;
    dark?: string;
  };
  favicon?: string;
  colors?: {
    primary?: string;
    light?: string;
    dark?: string;
  };
  topbarLinks?: Array<{
    name?: string;
    url?: string;
  }>;
  tabs?: Array<{
    name?: string;
    url?: string;
  }>;
  topbarCtaButton?: {
    name?: string;
    url?: string;
  };
  anchors?: Array<{
    name?: string;
    icon?: string;
    url?: string;
  }>;

  navigation: NavigationGroup[];
  backgroundImage?: string;
  footerSocials?: {
    github?: string;
    discord?: string;
    twitter?: string;
    linkedin?: string;
  };
  analytics?: {
    posthog?: {
      apiKey?: string;
    };
  };
  [key: string]: unknown;
}

const mintConfig: MintConfig = {
  name: "Ampersand",
  logo: {
    light: "/logos/dark.svg",
    dark: "/logos/light.svg",
    href: "https://withampersand.com"
  },
  favicon: "/logos/favicon.svg",
  colors: {
    primary: "#4F1EB8",
    light: "#A67CFF",
    dark: "#6122E7",
  },
  topbarCtaButton: {
    name: "Start building now",
    url: "https://dashboard.withampersand.com/sign-up",
  },
  topbarLinks: [
    {
      name: "Sign in",
      url: "https://dashboard.withampersand.com/sign-in",
    },
  ],
  tabs: [
    {
      name: "API Reference",
      url: "reference",
    },
  ],

  navigation: [
    {
      group: "",
      pages: [
        "overview",
        "quickstart",
        "concepts",
        {
          group: "Define integrations",
          pages: [
            "define-integrations/overview",
            "define-integrations/read-actions",
            "define-integrations/write-actions",
            "define-integrations/proxy-actions",
          ],
        },
        "embeddable-ui-components",
        {
          group: "CLI",
          pages: [
            "cli/overview"
          ]
        },
        "destinations",
        "glossary",
        {
          group: "Provider guides",
          pages: [
            "provider-guides/overview",
            "provider-guides/aha",
            "provider-guides/gong",
            "provider-guides/hubspot",
            "provider-guides/asana",
            "provider-guides/intercom",
            "provider-guides/attio",
            "provider-guides/jira",
            "provider-guides/aweber",
            "provider-guides/notion",
            "provider-guides/box",
            "provider-guides/outreach",
            "provider-guides/bynder",
            "provider-guides/pinterest",
            "provider-guides/calendly",
            "provider-guides/pipedrive",
            "provider-guides/clickup",
            "provider-guides/provider-guidessalesloft",
            "provider-guides/close-crm",
            "provider-guides/salesforce",
            "provider-guides/copper",
            "provider-guides/smartsheet",
            "provider-guides/discord",
            "provider-guides/survey-monkey",
            "provider-guides/docusign",
            "provider-guides/webflow",
            "provider-guides/drift",
            "provider-guides/zendesk-support",
            "provider-guides/dropbox",
            "provider-guides/zoho-crm",
            "provider-guides/facebook",
            "provider-guides/zoom",
            "provider-guides/figma",
          ],
        },
        "dev-and-prod-environments",
      ],
    },
    // {
    //   group: "READ API",
    //   pages: readApiPages,
    // },
    {
      group: "WRITE API",
      pages: writeApiPages,
    },
    {
      group: "PLATFORM API",
      pages: platformApiPages,
    },
  ],

  footerSocials: {
    linkedin: "https://www.linkedin.com/company/withampersand",
    twitter: "https://twitter.com/withampersand",
  },
};

interface NavigationGroup {
  group: string;
  pages: Array<string | NavigationGroup>;
}

try {
  const outPath = process.argv[2];
  if (outPath) {
    console.log(
      `[${new Date().toISOString()}] Writing mint config to ${outPath}`
    );

    fs.writeFileSync(outPath, JSON.stringify(mintConfig, null, 2));
  } else {
    console.log(JSON.stringify(mintConfig));
  }
} catch (error) {
  console.log("error generate mintlify config", error);
}
