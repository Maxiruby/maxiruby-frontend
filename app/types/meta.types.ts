export type SocialMediaLink = {
  id: number;
  title: string;
  icon: string;
  path: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type Tier = {
  tier: "bronze" | "silver" | "gold" | "platinum" | "ruby" | "blue diamond";
  staking_requirement: string;
  staking_length_required: string;
  whitelist_requirement: string;
  lottery_ticket: string;
};
